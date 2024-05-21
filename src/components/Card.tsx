"use client";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

const Card: React.FC<cardProps> = ({
  card: { id, title, description, thumbnail, price },
  handleClick,
}) => {
  const locale = useLocale();
  const trimmedTitle = title.length > 26 ? `${title.slice(0, 23)}...` : title;

  return (
    <>
      <div className="flex flex-col bg-[#f4edf2] dark:bg-grey rounded-lg p-4 m-2 cursor-pointer">
        <Link href={`/${locale}/products/${id}`}>
          <Image
            src={thumbnail}
            alt={title}
            width={140}
            height={140}
            className="object-cover rounded-lg w-full"
          />
        </Link>
        <div className="flex flex-col items-start mt-4">
          <h3 className="text-xl font-semibold">{trimmedTitle}</h3>
          <p className="text-sm">{description}</p>
          <p>
            <b>Price:</b> $ {price}
          </p>

          <div
            className={`w-full px-[35px] lg:px-[50px] ${
              locale === "ka" ? "px-[25px]" : ""
            }`}
          >
            <button
              onClick={() => handleClick(id)}
              className={`p-2 leading-none rounded font-medium mt-3 bg-[#b08ead] text-xs uppercase text-[#F4EDF2] ${
                locale === "ka" ? "gap-1 lg:gap-3" : ""
              }`}
            >
              {locale === "en" ? "Add to cart" : "კალათაში დამატება"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
