import React from "react";
import Searchbar from "./Searchbar";
import PlantCard from "./PlantCard";
import plants from "../data/plants";

const Content = () => {
  return (
    <main>
      <section className="bg-image">
        <div className="container">
          <Searchbar />
        </div>
      </section>
      <section>
        <div className="container products-container">
          <div className="products-grid">
            {plants.map((plant) => (
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

export default Content;
