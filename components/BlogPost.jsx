import Image from "next/image";

const BlogPost = ({ key, title, description, image, date }) => {
  return (
    <article key={key} className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        <Image
          src="/img/blog3.avif"
          alt="Plant Logo"
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          width={384}
          height={256}
        />

        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <p className="text-gray-500">{date}</p>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="">
              <span className="absolute inset-0"></span>
              {title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {description}
          </p>
          <a
            href="/"
            className="text-[#B08EAD] font-bold cursor-pointer ml-1 underline"
          >
            ...Read More
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
