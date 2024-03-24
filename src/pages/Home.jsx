import Searchbar from "../components/Searchbar";
import PlantCard from "../components/PlantCard";
import plants from "../data/plants";
import bgImage from "../assets/img/banner-all-plnts.avif";

const Home = () => {
  return (
    <main className="flex-grow overflow-y-auto">
      <section
        className="bg-cover bg-no-repeat  bg-center relative"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div>
          <Searchbar />
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center py-20">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
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

export default Home;
