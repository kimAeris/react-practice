"use client";

import Button from "@/components/Button";
import { categories } from "@/components/categories/Categories";
import Container from "@/components/Container";
import ProductHead from "@/components/products/ProductHead";
import ProductInfo from "@/components/products/ProductInfo";
import { Product, User } from "@prisma/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

interface ProductClientProps {
  product: Product & {
    user: User;
  };
  currentUser?: User | null;
}

const ProductClient: React.FC<ProductClientProps> = ({
  product,
  currentUser,
}) => {
  const router = useRouter();

  const category = categories.find((item) => item.path === product.category);

  const KakaoMap = dynamic(() => import("../../../components/KakaoMap"), {
    ssr: false,
  });

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-4">
          <ProductHead
            title={product.title}
            imageSrc={"https://picsum.photos/200"}
            id={product.id}
            currentUser={currentUser}
          />
        </div>

        <div className="grid grid-cols-1 mt-6 md:grid-cols-7 md:gap-10">
          <ProductInfo
            user={product.user}
            category={category}
            createdAt={product.createdAt}
            description={product.description}
          />
          <div className="md:col-span-3">
            <KakaoMap
              detailPage
              latitude={product.latitude}
              longitude={product.longitude}
            />
          </div>
        </div>

        {currentUser?.id === product.user.id && (
          <div className="pt-6">
            <Button
              onClick={() => {
                router.push(
                  `/chat?ids=${product.user.id}&name=${product.user.name}&image=${product.user.image}`
                );
              }}
              label="문의 채팅 시작하기"
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default ProductClient;
