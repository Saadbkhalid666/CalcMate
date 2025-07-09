import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi"; // Install react-icons if not installed
import { NavLink, useNavigate } from "react-router-dom";
export const Nav = () => {
  const navItems = ["Calculators", "About Us", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useNavigate();
  const onHomePage = location.path === "/";
  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-[#3190ce] text-white py-4 px-6 flex justify-between items-center relative w-full z-50 ">
        <NavLink to={"/"} className="text-2xl font-bold">CalcMate</NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-xl">
          {onHomePage ? (
            <Link
              to={"home"}
              smooth={true}
              duration={500}
              className="hover:cursor-pointer hover:text-blue-950 font-extrabold font-serif transition-all duration-300 ease-in-out"
            >
              Home
            </Link>
          ) : (
            <NavLink
              className="hover:cursor-pointer hover:text-blue-950 font-extrabold font-serif transition-all duration-300 ease-in-out"
              to={"/"}
            >
              Home
            </NavLink>
          )}
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.toLowerCase().replace(/\s/g, "")}
              smooth={true}
              duration={500}
              className="hover:cursor-pointer hover:text-blue-950 font-extrabold font-serif transition-all duration-300 ease-in-out"
            >
              {item}
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <FiX
              size={28}
              className="cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <FiMenu
              size={28}
              className="cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#3190ce] via-white to-[#3190ce]"></div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-[#3190ce] text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 flex flex-col items-center justify-center space-y-8 text-xl`}
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.toLowerCase().replace(/\s/g, "")}
            smooth={true}
            duration={500}
            className="hover:cursor-pointer hover:text-blue-950 font-extrabold font-serif transition-all duration-300 ease-in-out"
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  );
};
