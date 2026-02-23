import { useState } from "react";
import { FiHome, FiUser, FiBriefcase, FiMail, FiSettings, FiMenu, FiX, FiAward } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Container from "../global/Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      path: "/",
      name: "Home",
      icon: FiHome 
     },
    {
      path: "/service",
      name: "Service",
      icon: FiSettings
     },
    {
     path: "/experience",
     name: "Experience",
     icon: FiAward
     },
    {
     path: "/about",
     name: "About",
     icon: FiUser
     },
    {
     path: "/contact",
     name: "Contact",
     icon: FiMail
     },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const activeClass =
    "flex items-center gap-1 text-orange-500 font-semibold transition";

  const defaultClass =
    "flex items-center gap-1 text-gray-300 hover:text-orange-500 transition";

  return (
    <Container>
      <div className="w-full bg-[#0b0f1a] border-b border-gray-600">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-lg">
              <FaCode />
            </div>
            <h1 className="text-white text-xl font-semibold">Rashida</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 font-medium items-center">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) => (isActive ? activeClass : defaultClass)}
                >
                  <Icon size={16} /> {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Button */}
          <h1
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full transition"
           >
            Lets talk
          </h1>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-orange-500 transition">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#0b0f1a] px-6 py-4 flex flex-col gap-4">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={toggleMenu}
                  className={({ isActive }) => (isActive ? activeClass : defaultClass)}
                >
                  <Icon size={16} /> {item.name}
                </NavLink>
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Navbar;