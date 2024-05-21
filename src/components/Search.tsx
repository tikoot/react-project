import { useLocale } from "next-intl";

const Search: React.FC<searchProps> = ({
  isSorted,
  setIsSorted,
  searchQuery,
  setSearchQuery,
}) => {
  const locale = useLocale();

  function handleClick() {
    setIsSorted((prev: boolean) => !prev);
  }

  const pattern = /[^a-z0-9]/gi;
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value).replace(pattern, "");
  }

  return (
    <section className="w-full pt-20">
      <div className="">
        <div className="max-w-[790px] m-auto bg-[#f4edf2] dark:bg-[#b08ead]  py-[10px] pl-[32px] pr-[30px] text-lg text-[#666] rounded-[34px] flex items-center h-[60px]">
          <input
            className="text-[16px] text-[#333] dark:text-white bg-transparent border-transparent max-w-[790px] w-full outline-none placeholder:dark:text-white"
            maxLength={100}
            name="search"
            placeholder={locale === "en" ? "Type to search ..." : "ძებნა ..."}
            type="search"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
            value={searchQuery}
            onChange={handleChange}
          />

          <div className="">
            <button
              type="button"
              onClick={handleClick}
              className="text-[#333] dark:text-white"
            >
              {isSorted
                ? locale === "en"
                  ? "Reset"
                  : "გაფილტვრა"
                : locale === "en"
                ? "Sort"
                : "გაფილტვრა"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
