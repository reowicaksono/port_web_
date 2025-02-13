import React, { useState } from "react";
import { FaSun, FaCommentDots } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        setActive(id);
      }, 800);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[85%] max-w-5xl flex items-center justify-between bg-[#121212] bg-opacity-70 backdrop-blur-md py-3 px-6 rounded-full ml-[5rem]"
    >
      <ul className="flex gap-6 text-white text-xl font-medium relative cursor">
        {["Home", "Portfolio", "About Me", "Resume", "Contact"].map((item) => {
          const id = item.toLowerCase().replace(" ", "-");
          return (
            <li key={id} className="relative cursor">
              <button
                onClick={() => scrollToSection(id)}
                className={`relative px-4 py-2 transition-all duration-300 ${active === id ? "text-white" : "text-gray-400 hover:text-white hover:scale-105 cursor-pointer"}`}
              >
                {item}
                {active === id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-amber-400"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all">
          <FaSun className="text-white text-lg" />
        </button>

        <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transition">
          <FaCommentDots />
          <span>Let's Talk</span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
