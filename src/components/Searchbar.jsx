import { useState } from "react";
const Searchbar = ({ onSortAsc, onSortDesc, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="py-4">
      <div className="max-w-[790px] m-auto bg-[#f4edf2] py-[10px] pl-[32px] pr-[30px] text-lg text-[#666] rounded-[34px] flex items-center h-[60px]">
        <input
          className="text-[16px] text-[#333] bg-transparent border-transparent max-w-[790px] w-full outline-none"
          type="text"
          placeholder="Type to search..."
          value={searchQuery}
          onChange={handleChange}
        />

        <div className="flex items-center">
          <p>Price</p>
          <div className="text-xs ml-2">
            <button type="button" onClick={onSortAsc}>
              Low-High
            </button>
            <button type="button" onClick={onSortDesc}>
              High-Low
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
