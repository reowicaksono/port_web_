import React from "react";
import { motion } from "framer-motion";

const AboutMe = ({ isDarkMode }) => {
  return (
    <motion.section
      id="about-me"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 flex flex-col items-center justify-center px-6"
    >
      <div className="text-center w-full max-w-4xl">
        <h2 className={`text-4xl font-bold mb-6 text-center ${isDarkMode ? 'dark:text-gray-100' : 'text-purple-600'}`}>About Me</h2>
        <h3 className="text-2xl font-semibold text-gray-400">
          Turning complex problems into simple design
        </h3>
      </div>


      <div className="w-full overflow-x-auto scrollbar-hide flex justify-center">
        <div className="flex gap-8 mt-8 px-4 md:px-0">
          <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg text-center w-40 min-w-[160px]">
            <h4 className="text-2xl font-bold text-amber-400">778+</h4>
            <p className="text-gray-400">Happy clients</p>
          </div>
          <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg text-center w-40 min-w-[160px]">
            <h4 className="text-2xl font-bold text-amber-400">4+</h4>
            <p className="text-gray-400">Years of experience</p>
          </div>
          <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg text-center w-40 min-w-[160px]">
            <h4 className="text-2xl font-bold text-amber-400">171+</h4>
            <p className="text-gray-400">Projects done</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 mt-10 items-center text-center">
        <div className="text-lg leading-relaxed max-w-xl mx-auto">
          <p>
            I wonder if I've been changed in the night? Let me think. Was I the same when I got up this morning?
            I almost think I can remember feeling a little different. But if I'm not the same, the
            <a href="#" className="text-purple-500 underline"> next question</a> is 'Who in the world am I?'
            Ah, that's the great puzzle!
          </p>

          <p className="mt-6">
            Be what you would seem to be - or, if you'd like it put more simply - never imagine yourself not
            to be otherwise than what it might appear to others that what you were or
            <a href="#" className="text-purple-500 underline"> might have been</a> was not otherwise than what
            you had been would have appeared to them to be otherwise.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-left max-w-xs mx-auto">
          <div>
            <h3 className="text-lg font-semibold text-gray-500">Name</h3>
            <p className={`text-xl font-bold ${isDarkMode ? 'dark:text-white' : 'text-gray-600'}`}>Rerinda Fiktianti</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-500">Phone</h3>
            <p className={`text-xl font-bold ${isDarkMode ? 'dark:text-white' : 'text-gray-600'}`}>+62851-6262-xxxx</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-500">Email</h3>
            <p className={`text-xl font-bold ${isDarkMode ? 'dark:text-white' : 'text-gray-600'}`}>rerindafkt@gmail.com</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-500">Location</h3>
            <p className={`text-xl font-bold ${isDarkMode ? 'dark:text-white' : 'text-gray-600'}`}>Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
