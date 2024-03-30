import Searchbar from "../components/Searchbar";
import PlantCard from "../components/PlantCard";
import plants from "../data/plants";
import bgImage from "../assets/img/banner-all-plnts.avif";
import { useState } from "react";

const Home = () => {
  const [sortOrder, setSortOrder] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredData = () => {
    let filteredPlants = [...plants];

    if (searchQuery.trim() !== "") {
      filteredPlants = filteredPlants.filter((plant) =>
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
    <main className="flex-grow overflow-y-auto">
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
        <div className="flex items-center justify-center py-20">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
            {filteredData().map((plant) => (
              <PlantCard
                key={plant.id}
                name={plant.name}
                description={plant.description}
                image={plant.image}
                price={plant.price}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
