import React from "react";
import { motion } from "framer-motion";

const PortfolioView = ({ isDarkMode }) => {
  return (
    <motion.div
      id="portfolio"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
 
    >
      <h2 className={`text-4xl font-bold  mb-6 text-center ${isDarkMode ? 'dark:text-gray-100' : 'text-purple-600'}`}>Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-[#1e1e1e] p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-[#282828] transition-all">
          <img
            src="https://source.unsplash.com/random/400x300"
            alt="Project"
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="mt-4 text-lg font-semibold">Project Name</h3>
          <p className="text-gray-400 text-sm mt-2">React, Tailwind</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioView;
