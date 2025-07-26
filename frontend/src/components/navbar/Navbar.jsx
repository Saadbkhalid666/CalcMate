import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const onHomePage = location.pathname === "/";

  const navItems = [
    { label: "Calculators", path: "calculators" },
    { label: "About Us", path: "aboutus" },
    { label: "Contact", path: "contact" },
  ];

  return (
    <>
      <nav className="bg-[#3190ce] text-white py-4 px-6 flex justify-between items-center relative w-full z-50">
        <NavLink to="/" className="text-2xl font-bold">CalcMate</NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-xl items-center">
          {onHomePage ? (
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="hover:cursor-pointer hover:text-blue-950 font-extrabold font-serif transition-all duration-300 ease-in-out"
            >
              Home
            </ScrollLink>
          ) : (
            <NavLink
              to="/"
              className="hover:cursor-pointer hover:text-blue-950 font-extrabold font-serif transition-all duration-300 ease-in-out"
            >
              Home
            </NavLink>
          )}

          {navItems.map(({ label, path }, index) =>
            onHomePage ? (
              <ScrollLink
                key={index}
                to={path}
                smooth={true}
                duration={500}
                className="hover:cursor-pointer hover:text-blue-950 font-extrabold font-serif transition-all duration-300 ease-in-out"
              >
                {label}
              </ScrollLink>
            ) : (
              <NavLink
                key={index}
                to={`/#${path}`} // optional: use anchors or routing strategy
                className="hover:cursor-pointer hover:text-blue-950 font-extrabold font-serif transition-all duration-300 ease-in-out"
              >
                {label}
              </NavLink>
            )
          )}
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
        {(onHomePage ? (
          <>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="hover:cursor-pointer hover:text-blue-950 font-extrabold font-serif transition-all duration-300 ease-in-out"
            >
              Home
            </ScrollLink>
            {navItems.map(({ label, path }, index) => (
              <ScrollLink
                key={index}
                to={path}
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="hover:cursor-pointer hover:text-blue-950 font-extrabold font-serif transition-all duration-300 ease-in-out"
              >
                {label}
              </ScrollLink>
            ))}
          </>
        ) : (
          <>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:cursor-pointer hover:text-blue-950 font-extrabold font-serif transition-all duration-300 ease-in-out"
            >
              Home
            </NavLink>
            {navItems.map(({ label, path }, index) => (
              <NavLink
                key={index}
                to={`/#${path}`} // optional — if you want to anchor or use client-side routing
                onClick={() => setMenuOpen(false)}
                className="hover:cursor-pointer hover:text-blue-950 font-extrabold font-serif transition-all duration-300 ease-in-out"
              >
                {label}
              </NavLink>
            ))}
          </>
        ))}
      </div>
    </>
  );
};
