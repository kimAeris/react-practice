import getProducts, { ProductsParams } from "../actions/getProducts";

interface HomeProps {
  searchParams: ProductsParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);

  console.log("products", products);

  return <div>Home</div>;
}
