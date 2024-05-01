import Image from "next/image";
import Layout from "../../../../components/Layout";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  description: string;
}

interface Params {
  params: {
    id: string;
  };
}

interface StaticParams {
  id: string;
}

export async function generateStaticParams(): Promise<StaticParams[]> {
  const res = await fetch(`https://dummyjson.com/products`);
  const data = await res.json();
  return data.products.map((item: Product) => ({ id: String(item.id) }));
}

async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();
  return product;
}

const SingleProductPage: React.FC<Params> = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <Layout>
      <div className="flex items-center justify-center mx-auto">
        <div className=" bg-[#f4edf2] rounded-lg p-4 m-2 cursor-pointer md">
          <Image
            src={product.thumbnail}
            alt="Plant Logo"
            width={140}
            height={140}
            className="object-cover rounded-lg w-full"
          />
          <div className="flex flex-col items-start mt-4">
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <p className="text-sm">{product.description}</p>
            <p>
              <b>Price:</b> ${product.price}
            </p>
            <button className="p-2 leading-none rounded font-medium mt-3 bg-[#b08ead] text-xs uppercase text-[#F4EDF2]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProductPage;
