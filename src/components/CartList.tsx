"use client";

import Image from "next/image";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import RemoveProductButton from "./RemoveProductButton";
import ClearCartButton from "./ClearCartButton";
import { useLocale, useTranslations } from "next-intl";
import { useOptimistic } from "react";
import Link from "next/link";

const CartList = ({ cartElements }: { cartElements: CartWithProducts }) => {
  const [optimistic, addOptimistic] = useOptimistic<
    CartWithProducts,
    CartWithProducts
  >(cartElements, (state, newCart) => ({ ...state, ...newCart }));

  const cardsData = optimistic.products;
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <div className="w-full py-5 px-5 max-w-[1400px] mx-auto my-10 lg:py-10 lg:px-0 ">
      {cardsData.length > 0 ? (
        <h2
          className={`text-[40px] leading-[25px] text-center  ${
            cardsData.length < 2 ? "lg:-mt-[200px]" : ""
          } ${cardsData.length < 2 ? "-mt-[50px]" : ""}`}
        >
          {t("cart")}
        </h2>
      ) : (
        ""
      )}
      {cardsData.length > 0 ? (
        <div className="w-full lg:w-4/5 flex flex-col mt-[25px] lg:mt-[65px] gap-[25px] lg:gap-10 mx-auto">
          <table>
            <thead className="[&>tr>th]:pb-3">
              <tr className="[&>th]:text-start ">
                <th>{t("product-image")}</th>
                <th>{t("product-title")}</th>

                <th>{t("price")}</th>
                <th>{t("quantity")}</th>
                <th className="flex justify-center">
                  <ClearCartButton addOptimistic={addOptimistic} />
                </th>
              </tr>
            </thead>
            <tbody className="[&>tr>td]:p-2 ">
              {cardsData.map((product: productElement, index: number) => (
                <tr
                  key={product.id}
                  className={`${
                    index === cardsData.length - 1 ? "[&>td>div]:pb-5" : ""
                  }`}
                >
                  <td>
                    <div className="w-full max-h-[100px] lg:max-h-[150px] overflow-hidden">
                      <Link href={`/${locale}/products/${product.id}`}>
                        <Image
                          className="w-auto object-cover object-center"
                          src={product.thumbnail}
                          alt={product.title}
                          width={100}
                          height={100}
                        />
                      </Link>
                    </div>
                  </td>
                  <td>{product.title}</td>
                  <td>${product.price}</td>

                  <td>
                    <p className="flex gap-3 items-center">
                      <DecrementButton
                        item={product}
                        optimistic={optimistic}
                        addOptimistic={addOptimistic}
                      />
                      <span className="w-4 text-center text-xl">
                        {product.quantity}
                      </span>
                      <IncrementButton
                        item={product}
                        optimistic={optimistic}
                        addOptimistic={addOptimistic}
                      />
                    </p>
                  </td>
                  <td className="text-center">
                    <RemoveProductButton
                      item={product}
                      optimistic={optimistic}
                      addOptimistic={addOptimistic}
                    />
                  </td>
                </tr>
              ))}
              <tr className="mt-5 ">
                <td className="text-[20px] font-bold text-[#755272]">
                  <div className="w-full">{t("total-items")} :</div>
                  <div className="w-full">{t("total-price")} :</div>
                </td>
                <td className="text-[20px] font-bold text-[#755272] ">
                  <div className="w-full">{optimistic?.count}</div>
                  <div className="w-full">{optimistic?.price} $</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-[25px] lg:mt-[65px] flex justify-center text-[20px] lg:text-[25px]">
          {t("cart-is-empty")}
        </div>
      )}
    </div>
  );
};

export default CartList;
