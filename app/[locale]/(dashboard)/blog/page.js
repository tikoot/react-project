import PlantCard from "@/components/PlantCard";

async function getProductsData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Blogs() {
  const itemsData = await getProductsData();

  return (
    <>
      <section className="bg-white py-20 overflow-y-auto">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mt-2 text-4xl font-bold text-[#B08EAD] capitalize">
              Blogs
            </p>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-500">Loading...</p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
            {/* {blogs && blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <a key={index} href={`/blogs/${blog.id}`}>
                <BlogPost
                  key={index}
                  title={blog.title}
                  description={blog.body}
                  image={blog.image}
                  date={blog.release_date}
                />
              </a>
            ))
          ) : (
            <p>No blog posts found.</p>
          )} */}
          </div>
        </div>
      </section>
    </>
  );
}

export { getProductsData };
