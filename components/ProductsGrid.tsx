import React, { useEffect, useState } from "react";
import Card from "./Card";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface Product {
  id: number;
  title: string;
  price: string;
  thumbnail: string;
  description: string;
}

interface Props {
  products: Product[];
}

const ProductsGrid = ({ products }: Props) => {
  const { t } = useTranslation();

  const [search, setSearch] = useState<string>("");
  const [sorted, setSorted] = useState<boolean>(false);

  const allProducts: Product[] = products.filter((product) => {
    return search.toLowerCase() === ""
      ? product
      : product.title.toLowerCase().includes(search.toLowerCase());
  });

  const sortedProducts: Product[] = sorted
    ? [...allProducts].sort((a, b) => a.title.localeCompare(b.title))
    : allProducts;

  const toggleSort = () => {
    setSorted(!sorted);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log("Search term:", search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  return (
    <>
      <div className="py-4">
        <div className="max-w-[790px] m-auto bg-[#f4edf2] py-[10px] pl-[32px] pr-[30px] text-lg text-[#666] rounded-[34px] flex items-center h-[60px]">
          <input
            className="text-[16px] text-[#333] bg-transparent border-transparent max-w-[790px] w-full outline-none"
            type="text"
            placeholder={t("search")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="">
            <button type="button" onClick={toggleSort}>
              {t("sort")}
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-20">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
          {sortedProducts.map((product) => {
            return (
              <Link href={`/products/${product.id}`} key={product.id}>
                <Card
                  name={product.title}
                  description={product.description}
                  image={product.thumbnail}
                  price={product.price}
                  btnText={t("addToCart")}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsGrid;
