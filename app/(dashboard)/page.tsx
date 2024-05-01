"use client";

import Layout from "../../components/Layout";
import ProductsGrid from "../../components/ProductsGrid";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const { products: nestedProducts } = await response.json();
        setProducts(nestedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <ProductsGrid products={products} />
    </Layout>
  );
}
