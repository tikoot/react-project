"use client";
import { useState, useEffect } from "react";
import Searchbar from "@/components/SearchBar";
import PlantCard from "@/components/PlantCard";

const HomeData = () => {
  const [sortOrder, setSortOrder] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setPlants(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleSortAsc = () => {
    if (sortOrder === "asc") {
      setSortOrder(null);
    } else {
      setSortOrder("asc");
    }
  };

  const handleSortDesc = () => {
    if (sortOrder === "desc") {
      setSortOrder(null);
    } else {
      setSortOrder("desc");
    }
  };

  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const debouncedHandleSearch = debounce((query) => {
    console.log("Search:", query);
    setSearchQuery(query);
  }, 300);

  const handleSearch = (query) => {
    debouncedHandleSearch(query);
  };

  const filteredData = () => {
    let filteredPlants = [...plants];

    if (searchQuery.trim() !== "") {
      filteredPlants = filteredPlants.filter(
        (plant) =>
          plant.name &&
          plant.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      return filteredPlants.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      return filteredPlants.sort((a, b) => b.price - a.price);
    } else {
      return filteredPlants;
    }
  };

  return (
    <>
      <section className="bg-cover bg-no-repeat bg-center relative">
        <div>
          <Searchbar
            onSortAsc={handleSortAsc}
            onSortDesc={handleSortDesc}
            onSearch={handleSearch}
          />
        </div>
      </section>
      <section>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex items-center justify-center py-20">
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
              {plants.length > 0 &&
                filteredData().map((plant, index) => (
                  <a key={index} href={`/product/${plant.id}`}>
                    <PlantCard
                      id={plant.id}
                      name={plant.title}
                      description={plant.description}
                      image={plant.thumbnail}
                      price={plant.price}
                    />
                  </a>
                ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default HomeData;
