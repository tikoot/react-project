import Image from "next/image";
import { unstable_setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  const paths = data.posts.map((post: postElement) => ({ id: `${post.id}` }));
  return paths;
}

const fetchData = async (articleId: number) => {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${articleId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const BlogDetails = async ({ params }: paramsObj) => {
  unstable_setRequestLocale(params.locale);
  const articleId = params.id;
  const articleData: postElement = await fetchData(articleId);

  return (
    <section>
      <div className="w-full flex flex-col items-center justify-center  gap-7 lg:gap-10  py-5 px-5  mx-auto my-10 lg:py-10 lg:px-0">
        <div className="w-full lg:w-1/2 flex flex-col gap-5 lg:gap-7">
          <div className="w-full rounded-2xl overflow-hidden">
            <Image
              src="/assets/blog3.avif"
              alt=""
              width={300}
              height={300}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-5 lg:gap-10 justify-start dark:text-[#755272] text-[14px] lg:text-[16px]">
          <div className="w-full flex flex-col gap-3">
            <h2 className="text-[25px] leading-[25px] lg:text-[30px] lg:leading-[45px] text-start text-[#755272]">
              {articleData?.title}
            </h2>
            <p>
              {articleData?.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 mr-3 bg-[#755272] text-white text-[14px] rounded-2xl"
                >
                  {tag}
                </span>
              ))}
            </p>
          </div>
          <p>{articleData?.body}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
