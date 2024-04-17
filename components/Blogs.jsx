"use client";
import { useState, useEffect } from "react";
import BlogPost from "@/components/BlogPost";
const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data.posts);
        console.log(data.posts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      });
  }, []);
  return (
    <section className="bg-white py-20 overflow-y-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-4xl font-bold text-[#B08EAD] capitalize">
            Blogs
          </p>
        </div>
        {loading ? (
          <div className="text-center mt-10">
            <p className="text-gray-500">Loading...</p>
          </div>
        ) : (
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogPosts && blogPosts.length > 0 ? (
              blogPosts.map((blog, index) => (
                <a key={index} href={`/blog/${blog.id}`}>
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
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
