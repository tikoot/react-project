import Image from "next/image";
import { unstable_setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const paths = data.products.map((product: productElement) => ({
    id: `${product.id}`,
  }));
  return paths;
}

const fetchData = async (productId: number) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const ProductDetails: React.FC<paramsObj> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const productId = params.id;
  const productData: productElement = await fetchData(productId);

  return (
    <section>
      <div className="flex items-center justify-center mx-auto">
        <div className="  rounded-lg p-4 m-2 cursor-pointer md">
          <Image
            src={productData?.thumbnail}
            alt="Plant Logo"
            width={140}
            height={140}
            className="object-cover rounded-lg w-full"
          />
          <div className="flex flex-col items-start mt-4 dark:text-white">
            <h3 className="text-xl font-semibold"> {productData?.brand}</h3>
            <p className="text-sm"> {productData?.description}</p>
            <p>
              <b>Price:</b> $ {productData?.price}
            </p>
            <button className="p-2 leading-none rounded font-medium mt-3 bg-[#b08ead] text-xs uppercase text-[#F4EDF2]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
