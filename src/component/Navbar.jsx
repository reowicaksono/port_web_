import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes, FaCommentDots } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, selectTheme } from "../slice/themeSlice.js";

const Navbar = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectTheme);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-6 ml-[10rem] left-1/2 transform -translate-x-1/2 w-[65%] max-w-5xl hidden md:flex items-center justify-between bg-opacity-70 backdrop-blur-md py-3 px-6 rounded-full z-50 ${
          isDarkMode ? "dark:bg-[#0b0b0d] dark:text-gray-100" : "bg-white text-black shadow-md"
        }`}
      >
        <ul className="flex gap-6 text-xl font-medium">
          {["Home", "Portfolio", "About Me", "Resume", "Contact"].map((item) => {
            const id = item.toLowerCase().replace(" ", "-");
            return (
              <li key={id} className="relative">
                <button
                  onClick={() => scrollToSection(id)}
                  className={`relative px-4 py-2 transition-all duration-300 ${
                    active === id
                      ? isDarkMode
                        ? "text-white font-bold"
                        : "text-black font-bold"
                      : isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-400 hover:text-black"
                  } hover:scale-105 cursor-pointer`}
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
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all cursor-pointer"
          >
            {isDarkMode ? <FaSun className="text-yellow-400 text-lg" /> : <FaMoon className="text-white text-lg" />}
          </button>

          <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transition">
            <FaCommentDots />
            <span>Let's Talk</span>
          </button>
        </div>
      </motion.nav>

      <div className="fixed top-4 right-4 md:hidden z-50">
        <button onClick={() => setMenuOpen(true)} className="text-3xl p-3 bg-black text-white rounded-md">
          <FaBars />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50"
          >
            <div className="flex justify-between items-center px-6 py-4">
              <h2 className="text-2xl font-bold">MENU</h2>
              <button onClick={() => setMenuOpen(false)} className="text-3xl text-white">
                <FaTimes />
              </button>
            </div>
            <ul className="flex flex-col items-center gap-4 py-4 text-xl font-semibold">
              {["Home", "Portfolio", "About Me", "Resume", "Contact"].map((item) => {
                const id = item.toLowerCase().replace(" ", "-");
                return (
                  <li key={id} className="relative">
                    <button
                      onClick={() => scrollToSection(id)}
                      className="hover:text-amber-400 transition-all duration-300"
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
              <button
                onClick={() => dispatch(toggleTheme())}
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all cursor-pointer flex items-center gap-2"
              >
                {isDarkMode ? (
                  <>
                    <FaSun className="text-yellow-400 text-lg" /> <span className="text-lg">Light Mode</span>
                  </>
                ) : (
                  <>
                    <FaMoon className="text-white text-lg" /> <span className="text-lg">Dark Mode</span>
                  </>
                )}
              </button>
            </ul>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
