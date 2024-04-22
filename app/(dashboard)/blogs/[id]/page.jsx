import DashboardLayout from "../../DashboardLayout";
import Image from "next/image";

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await response.json();

  const staticParams = products.products.map((product) => ({
    params: { id: `{/${product.id}}` },
  }));

  return staticParams;
}

async function fetchData(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  return response.json();
}

export default async function BlogPost({ params }) {
  const id = params.id;
  const blog = await fetchData(id);

  return (
    <DashboardLayout>
      {blog ? (
        <div className="flex flex-col items-center rounded-lg p-4 m-2 cursor-pointer mx-auto max-w-[500px]">
          <Image
            src="/img/blog3.avif"
            alt="Plant Logo"
            width={300}
            height={300}
            className=" rounded-lg  "
          />
          <div className="flex flex-col  mt-4">
            <h3 className="text-xl font-semibold text-center mb-2">
              {blog.title}
            </h3>

            <p className="text-sm">{blog.description}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </DashboardLayout>
  );
}
