import React from "react";
import Image from "next/image";
import { Product } from "./ProductsGrid";
// interface CardProps {
//   id: number;
//   image: string;
//   name: string;
//   price: string;
//   description: string;
//   btnText: string;
//   handleClick: (productId: number) => void;
// }

interface CardProps {
  handleClick: (product: Product) => void;
  product: Product;
}

const Card: React.FC<CardProps> = ({ handleClick, product }) => {
  return (
    <div className="flex flex-col bg-[#f4edf2] rounded-lg p-4 m-2 cursor-pointer">
      <Image
        src={product.thumbnail}
        alt="Plant Logo"
        width={140}
        height={140}
        className="object-cover rounded-lg w-full"
      />
      <div className="flex flex-col items-start mt-4">
        <h3 className="text-xl font-semibold">{product.title}</h3>
        <p className="text-sm">{product.description}</p>
        <p>
          <b>Price:</b> ${product.price}
        </p>
        <button
          onClick={() => {
            handleClick(product);
          }}
          className="p-2 leading-none rounded font-medium mt-3 bg-[#b08ead] text-xs uppercase text-[#F4EDF2]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
