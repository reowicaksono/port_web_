import React, { useEffect, useState } from "react";
import { FaLinkedin, FaInstagram, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const SideBar = ({ isDarkMode }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsMobileSidebarOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      <div className={`hidden md:flex w-1/3 xl:w-1/4 h-[80%] fixed ml-6 top-1/2 transform -translate-y-1/2 flex-col justify-center items-center bg-[#111] p-8 rounded-3xl shadow-lg
        transition-all duration-300
        ${isDarkMode ? 'dark:bg-[#0b0b0d] dark:text-gray-100 shadow-[0_0_40px_rgba(255,255,255,0.2)]' : 'bg-white text-black shadow-[0_0_40px_rgba(0,0,0,0.2)]'}`}>
        
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          src="https://media.licdn.com/dms/image/v2/D5635AQFmOtPtNIZYtA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1734926123749?e=1740272400&v=beta&t=ooj3XKfYgGnrNCkvj3qLuDV4cTpJ3IoNq6xp45ktEuk"
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto border-4 border-amber-400"
        />
        <h2 className={`mt-4 text-3xl font-bold tracking-wide ${isDarkMode ? 'dark:text-gray-100' : 'text-black'} `}>Rerinda Fiktianti</h2>
        <p className="text-gray-400 text-base">Digital Marketing</p>
        <p className="text-gray-500 text-base">Cirebon, Indonesia</p>

        <div className="flex gap-4 mt-6">
          <a href="https://www.linkedin.com/in/rerindafkt/" target="_blank" rel="noopener noreferrer" 
            className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-blue-600 rounded-full text-white text-2xl transition-all">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/rerindaaftn/" target="_blank" rel="noopener noreferrer" 
            className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-pink-500 rounded-full text-white text-2xl transition-all">
            <FaInstagram />
          </a>
        </div>
      </div>


      {isMobileSidebarOpen && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: isMobileSidebarOpen ? 1 : 0, y: isMobileSidebarOpen ? 0 : -50 }}
          transition={{ duration: 0.5 }}
          className={`md:hidden absolute top-0 left-0 w-full h-screen bg-[#111] text-white flex flex-col items-center justify-center z-50 ${isDarkMode ? 'dark:bg-[#0b0b0d] dark:text-gray-100' : 'bg-white text-black'}`}
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src="https://media.licdn.com/dms/image/v2/D5635AQFmOtPtNIZYtA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1734926123749?e=1740272400&v=beta&t=ooj3XKfYgGnrNCkvj3qLuDV4cTpJ3IoNq6xp45ktEuk"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-amber-400"
          />
          <h2 className={`mt-4 text-3xl font-bold tracking-wide ${isDarkMode ? 'dark:text-gray-100' : 'text-black'} `}>Rerinda Fiktianti</h2>
          <p className="text-gray-400 text-base">Digital Marketing</p>
          <p className="text-gray-500 text-base">Cirebon, Indonesia</p>

          <div className="flex gap-4 mt-6">
            <a href="https://www.linkedin.com/in/rerindafkt/" target="_blank" rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-blue-600 rounded-full text-white text-xl transition-all">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/rerindaaftn/" target="_blank" rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-pink-500 rounded-full text-white text-xl transition-all">
              <FaInstagram />
            </a>
          </div>

 
          {/* <button
            className="mt-6 px-4 py-2 bg-red-500 rounded-lg text-white"
            onClick={() => setIsMobileSidebarOpen(false)}
          >
            Close
          </button> */}
        </motion.div>
      )}

      {!isMobileSidebarOpen && (
        <button
          className="fixed top-4 left-4 bg-gray-800 p-3 rounded-full text-white md:hidden"
          onClick={() => setIsMobileSidebarOpen(true)}
        >
          <FaUserCircle  className="text-xl" />
        </button>
      )}
    </>
  );
};

export default SideBar;
