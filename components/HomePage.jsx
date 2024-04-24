"use client";

import Searchbar from "./SearchBar";
import PlantCard from "./PlantCard";
import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";

export default function HomePage({ productsData }) {
  const t = useTranslations("Header");
  const { products } = productsData;
  const [itemsData, setItemsData] = useState(products);
  const [isSorted, setIsSorted] = useState(false);

  const [filteredItems, setFilteredItems] = useState([]);

  const [isFiltered, setIsFiltered] = useState(false);

  const [searchItem, setSearchItem] = useState("");

  const handleSort = () => {
    setIsSorted(!isSorted);

    if (isSorted) {
      setItemsData([...products]);
    } else {
      let sortedItems;
      if (isFiltered) {
        sortedItems = [...filteredItems].sort((a, b) => a.price - b.price);
      } else {
        sortedItems = [...itemsData].sort((a, b) => a.price - b.price);
      }
      setItemsData(sortedItems);
    }
  };

  const debounce = (func, delay) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debounceSearch = useCallback(
    debounce((searchQuery) => {
      const priceSearch = Number(searchQuery);

      const filtered = itemsData.filter((item) =>
        Object.values(item).some((value) =>
          typeof value === "string"
            ? value
                .toLocaleLowerCase()
                .includes(searchQuery.toLocaleLowerCase())
            : !isNaN(priceSearch) && item.price === priceSearch
        )
      );

      setFilteredItems(filtered);
      setIsFiltered(true);
      setItemsData(filtered);
    }, 500),
    []
  );

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setSearchItem(searchQuery);
    debounceSearch(searchQuery);
  };

  return (
    <>
      <section
        className="bg-cover bg-no-repeat bg-center relative 
      "
      >
        <div>
          <Searchbar
            onSort={handleSort}
            searchItem={searchItem}
            onSearch={handleSearch}
          />
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center py-20">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
            {itemsData &&
              itemsData.map((product) => (
                <a key={product.id} href={`/product/${product.id}`}>
                  <PlantCard
                    id={product.id}
                    name={product.title}
                    description={product.description}
                    image={product.thumbnail}
                    price={product.price}
                  />
                </a>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
