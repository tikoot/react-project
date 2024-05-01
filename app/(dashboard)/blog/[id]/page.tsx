import React from "react";
import Image from "next/image";
import Layout from "../../../../components/Layout";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface SinglePost {
  title: string;
  body: string;
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const res = await fetch(`https://dummyjson.com/posts`);
  const posts = await res.json();
  return posts.posts.map((item: Post) => ({
    id: String(item.id),
  }));
}

async function fetchPosts(id: string): Promise<SinglePost> {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const posts = await res.json();
  return posts;
}

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const posts = await fetchPosts(id);

  return (
    <Layout>
      <div>
        <Image
          src="/img/blog3.avif"
          alt="Plant Logo"
          width={384}
          height={256}
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href="">
            <span className="absolute inset-0"></span>
            {posts.title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {posts.body}
        </p>
      </div>
    </Layout>
  );
};

export default Page;
