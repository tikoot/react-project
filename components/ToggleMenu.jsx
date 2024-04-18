"use client";

const ToggleMenu = () => {
  const toggleMenu = () => {
    const menu = document.querySelector(".navbar");
    menu.classList.toggle("open");
  };

  return (
    <div
      className="hidden absolute max-[900px]:flex flex-col justify-between w-9 h-8 right-[75px] max-[900px]:right-6"
      onClick={toggleMenu}
    >
      <span className="h-[6px] w-full bg-[#4b3049] rounded-md"></span>
      <span className="h-[6px] w-full bg-[#4b3049] rounded-md"></span>
      <span className="h-[6px] w-full bg-[#4b3049] rounded-md"></span>
    </div>
  );
};

export default ToggleMenu;
