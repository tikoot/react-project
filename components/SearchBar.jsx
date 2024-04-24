import { useState } from "react";

const Searchbar = ({ onSort, searchItem, onSearch }) => {
  return (
    <div className="py-4">
      <div className="max-w-[790px] m-auto bg-[#f4edf2] py-[10px] pl-[32px] pr-[30px] text-lg text-[#666] rounded-[34px] flex items-center h-[60px]">
        <input
          className="text-[16px] text-[#333] bg-transparent border-transparent max-w-[790px] w-full outline-none"
          type="text"
          placeholder="Type to search..."
          value={searchItem}
          onChange={(e) => onSearch(e)}
        />

        <div className="">
          <button type="button" onClick={onSort} className="">
            sort
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
