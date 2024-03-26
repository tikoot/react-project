import blogposts from "../data/blogposts";
import BlogPost from "../components/BlogPost";

const Blogs = () => {
  return (
    <section className="bg-white py-20 overflow-y-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-4xl font-bold text-[#B08EAD] capitalize">
            Blogs
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogposts.map((blog) => (
            <BlogPost
              key={blog.id}
              title={blog.title}
              description={blog.description}
              image={blog.image}
              date={blog.release_date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
