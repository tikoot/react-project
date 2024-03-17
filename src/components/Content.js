import React from "react";
import Searchbar from "./Searchbar";

const Content = () => {
  return (
    <main>
      <section className="bg-image">
        <div className="container">
          <Searchbar />
        </div>
      </section>
      <section>
        <div className="container"></div>
      </section>
    </main>
  );
};

export default Content;
