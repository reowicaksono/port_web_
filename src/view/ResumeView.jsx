import React from "react";
import { motion } from "framer-motion";

const Resume = ({isDarkMode}) => {
  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20  text-white"
    >
      <h2 className={`text-4xl font-bold ${isDarkMode ? 'dark:text-gray-100' : 'text-purple-600'} mb-6 text-center`}>
        My Resume
      </h2>


      <div className="text-center mb-12">
        <p className="text-xl text-gray-400">
          Be what you would seem to be - or, if you'd like it put more simply - never imagine yourself not to be otherwise than what it might appear to others that what you were or might have been was not otherwise than what you had been would have appeared to them to be otherwise.
        </p>
        <h3 className={`text-3xl font-semibold mt-4 ${isDarkMode ? 'dark:text-gray-300' : 'text-gray-600'}`}>Education and practical experience</h3>
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <h4 className={`text-2xl font-semibold  ${isDarkMode ? 'dark:text-gray-300' : 'text-gray-600'}`}>My education</h4>
        <div className="space-y-4 mt-6">
          <div className="flex justify-between items-center">
            <span className={`text-xl ${isDarkMode ? 'dark:text-gray-200' : 'text-gray-600'}`}>2020 - 2024</span>
            <span className={`text-lg ${isDarkMode ? 'dark:text-gray-200' : 'text-gray-600'}`}>Bachelor of Computer Science</span>
            <span className={`text-lg ${isDarkMode ? 'dark:text-gray-200' : 'text-gray-600'}`}>Universitas Pendidikan Indonesia</span>
          </div>
        </div>
      </div>

   
      <div className="max-w-4xl mx-auto mb-12">
        <h4 className={`text-2xl font-semibold ${isDarkMode ? 'dark:text-gray-300' : 'text-gray-600'}`}>Work experience</h4>
        <div className="space-y-4 mt-6">
          <div className="flex justify-between items-center">
            <span className={`text-xl ${isDarkMode ? 'dark:text-gray-200' : 'text-gray-600'}`}>Feb 2023 - June 2023</span>
            <span className={`text-lg ${isDarkMode ? 'dark:text-gray-200' : 'text-gray-600'}`}>Digital Marketing</span>
            <span className={`text-lg ${isDarkMode ? 'dark:text-gray-200' : 'text-gray-600'}`}>Revou</span>
          </div>
          <div className="flex justify-between items-center">
            <span className={`text-xl ${isDarkMode ? 'dark:text-gray-200' : 'text-gray-600'}`}>Feb 2023 - June 2023</span>
            <span className={`text-lg ${isDarkMode ? 'dark:text-gray-200' : 'text-gray-600'}`}>Product Management</span>
            <span className={`text-lg ${isDarkMode ? 'dark:text-gray-200' : 'text-gray-600'}`}>Revou</span>
          </div>
          <div className="flex justify-between items-center">
            <span className={`text-xl ${isDarkMode ? 'dark:text-gray-200' : 'text-gray-600'}`}>Feb 2023 - June 2023</span>
            <span className={`text-lg ${isDarkMode ? 'dark:text-gray-200' : 'text-gray-600'}`}>Software Engineer</span>
            <span className={`text-lg ${isDarkMode ? 'dark:text-gray-200' : 'text-gray-600'}`}>Revou</span>
          </div>
       
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h4 className="text-2xl font-semibold text-gray-300">My favourite tools</h4>
        <div className="flex justify-center gap-6 mt-6 bg-">
          <div className="w-24 h-24 bg-gray-400 rounded-lg text-white flex justify-center items-center"><img className="w-12 h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="" /></div>
          <div className="w-24 h-24 bg-gray-400 rounded-lg text-white flex justify-center items-center"><img className="w-12 h-12" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Logo_Google_Analytics.svg" alt="" /></div>
          <div className="w-24 h-24 bg-gray-400 rounded-lg text-white flex justify-center items-center"><img className="w-12 h-12" src="https://www.vectorlogo.zone/logos/canva/canva-ar21.svg" alt="" /></div>
          <div className="w-24 h-24 bg-gray-400 rounded-lg text-white flex justify-center items-center"><img className="w-12 h-12" src="https://www.vectorlogo.zone/logos/google_ads/google_ads-ar21.svg" alt="" /></div>
          <div className="w-24 h-24 bg-gray-400 rounded-lg text-white flex justify-center items-center"><img className="w-12 h-12" src="https://www.vectorlogo.zone/logos/hootsuite/hootsuite-ar21.svg" alt="" /></div>

        </div>
      </div>


    </motion.section>
  );
};

export default Resume;
