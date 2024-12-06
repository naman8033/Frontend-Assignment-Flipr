import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        type="button"
        className="flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-100 bg-gray-700 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded={isMenuOpen}
      >
        {/* <span className="sr-only">Open main menu</span> */}
        {/* Icon */}
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <ul
        className={`${
          isMenuOpen ? "flex flex-col gap-2" : "hidden"
        } absolute right-6 top-16 z-10 shadow-xl bg-black px-8 py-6 rounded-lg mt-1 w-[25%]]`}
      >
        <li className={`cursor-pointer hover:text-sky-300 hover:border-b-2 hover:border-sky-300 ${path === "/" ? "border-b-2 border-sky-300 text-sky-300" : ""}`} onClick={() => {navigate("/"); toggleMenu()}}>Home</li>
        <li className={`cursor-pointer hover:text-sky-300 hover:border-b-2 hover:border-sky-300 ${path === "/blog" ? "border-b-2 border-sky-300 text-sky-300" : ""}`} onClick={() => {navigate("/blog"); toggleMenu()}}>Blog</li>
        <li className={`cursor-pointer hover:text-sky-300 hover:border-b-2 hover:border-sky-300 ${path === "/about-us" ? "border-b-2 border-sky-300 text-sky-300" : ""}`} onClick={() => {navigate("/about-us"); toggleMenu()}}>About Us</li>
        <li className={`cursor-pointer hover:text-sky-300 hover:border-b-2 hover:border-sky-300 ${path === "/contact" ? "border-b-2 border-sky-300 text-sky-300" : ""}`} onClick={() => {navigate("/contact"); toggleMenu()}}>Contact Us</li>
        <button className="px-8 py-2 mt-4 text-sm font-bold text-black bg-white hover:bg-gray-100 active:scale-95">Subscribe</button>
      </ul>
    </div>
  );
};

export default MenuButton;
