"use client";
import Card from "./Card";
import { useDebounce } from "../hooks/hooks";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { addToCartAction } from "../app/actions";
import LoadingAnimation from "./LoadingAnimation";

const Products = ({ isSorted = false, searchQuery = "" }) => {
  const locale = useLocale();

  const [cards, setCards] = useState<productElement[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCards(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  let newCards = isSorted
    ? cards.slice().sort((a, b) => a.title.localeCompare(b.title))
    : cards;

  const debouncedSearchQuery = useDebounce(searchQuery, 1000);
  newCards = newCards.filter((product) =>
    product.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  return (
    <section>
      {cards.length === 0 ? (
        <LoadingAnimation />
      ) : (
        <div className="w-full py-5 px-5 max-w-[1400px] mx-auto my-10 lg:py-10 lg:px-0">
          {newCards.length === 0 ? (
            <div className="text-center text-xl mt-10">
              {locale === "en" ? "Product not found" : "პროდუქტი არ მოიძებნა"}
            </div>
          ) : (
            <>
              <div className="relative mb-[60px]">
                <h2 className="text-[40px] leading-[25px] text-center">
                  {locale === "en" ? "Products" : "პროდუქტები"}
                </h2>
              </div>
              <div className="flex items-center justify-center py-20">
                <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
                  {newCards.map((card) => (
                    <Card
                      card={card}
                      handleClick={() => addToCartAction(card.id)}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default Products;
