"use client";
import Layout from "../../../components/Layout";
import BlogCard from "../../../components/BlogCard";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  body: string;
  date: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const { posts: nestedBlogs }: { posts: Blog[] } = await response.json();
        setBlogs(nestedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="flex items-center justify-center py-20">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 max-w-6xl">
          {blogs.map((blog) => {
            return (
              <Link href={`/blog/${blog.id}`} key={blog.id}>
                <BlogCard
                  title={blog.title}
                  description={blog.body}
                  date={blog.date}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
