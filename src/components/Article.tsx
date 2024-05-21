import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Article: React.FC<articleProps> = ({ article: { id, title, body } }) => {
  const t = useTranslations("Index");

  return (
    <div className="mb-10 " key={id}>
      <div className="w-full gap-5  flex items-center justify-center">
        <div className="py-[15px] w-3/4 flex flex-col gap-2">
          <div className="">
            <Image
              src="/assets/blog3.avif"
              alt={title}
              className="w-full h-full object-cover rounded-md"
              width={692}
              height={330}
            />
          </div>
          <h3 className="w-fit  text-[24px] text-start break-words break-normal mb-[20px]">
            {title}
          </h3>

          {body}
          <Link
            href={"/blog/" + id}
            className="w-fit text-[20px] dark:text-[#755272] hover:text-[#755272] transition-all duration-300 ease-in-out px-4 py-2 text-[#f4edf2] bg-[#b08ead] rounded-md border-none m-0"
          >
            {t("readMore")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article;
