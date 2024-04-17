"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const ProductData = () => {
  const pathname = usePathname();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const lastSlashIndex = pathname.lastIndexOf("/");
    const id = pathname.substring(lastSlashIndex + 1);

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [pathname]);
  return (
    <>
      {productData ? (
        <div className="flex flex-col items-center justify-center mx-auto  rounded-lg p-4 m-2 cursor-pointer max-w-[300px]">
          <Image
            src={productData.thumbnail}
            alt="Plant Logo"
            width={300}
            height={300}
            className=" rounded-lg "
          />
          <div className="flex flex-col items-start mt-4 ">
            <h3 className="text-xl font-semibold">{productData.title}</h3>
            <div className="flex items-center justify-between my-2">
              <p className="px-4 text-[#f4edf2] bg-[#b08ead] rounded-full border-none m-0 mr-2">
                {productData.brand}
              </p>
              <p className="px-4 text-[#f4edf2] bg-[#b08ead] rounded-full border-none m-0">
                {productData.category}
              </p>
            </div>
            <p className="text-sm">{productData.description}</p>
            <p>
              <b>Price:</b> ${productData.price}
            </p>
            <button className="p-2 leading-none rounded font-medium mt-3 bg-[#b08ead] text-xs uppercase text-[#F4EDF2]">
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductData;
