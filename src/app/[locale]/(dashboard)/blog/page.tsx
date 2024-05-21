import Article from "../../../../components/Article";
const fetchData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const Blog = async () => {
  const articles: postElement[] = await fetchData();

  return (
    <section className="w-full p-5 pb-[50px] bg-[#E5E1CC]/30 dark:bg-grey">
      <div className="max-w-[1400px] mx-auto w-full pt-[30px] ">
        <div className="grid grid-cols-3">
          {articles?.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
