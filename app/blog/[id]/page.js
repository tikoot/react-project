"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function Blog() {
  const pathname = usePathname();
  const [blogPosts, setBlogPosts] = useState(null);

  useEffect(() => {
    const lastSlashIndex = pathname.lastIndexOf("/");
    const id = pathname.substring(lastSlashIndex + 1);

    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [pathname]);

  return (
    <div>
      {blogPosts ? (
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
              {blogPosts.title}
            </h3>

            <p className="text-sm">{blogPosts.body}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
