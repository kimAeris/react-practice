"use client";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { User } from "@/types";
// import useFavorite from "@/hooks/useFavorite";

interface HeartButtonProps {
  productId: string;
  currentUser?: User | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  productId,
  currentUser,
}) => {
  return (
    <div className="relative transition cursor-pointer hover:opacity-80">
      <AiOutlineHeart
        size={28}
        className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
      />
      <AiFillHeart size={24} className={"fill-rose-500"} />
    </div>
  );
};

export default HeartButton;
