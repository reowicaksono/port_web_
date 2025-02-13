import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 bg-[#121212] text-white"
    >
      <h2 className="text-4xl font-bold text-gray-100 mb-6 text-center">
        My Resume
      </h2>

      {/* Introduction */}
      <div className="text-center mb-12">
        <p className="text-xl text-gray-400">
          Be what you would seem to be - or, if you'd like it put more simply - never imagine yourself not to be otherwise than what it might appear to others that what you were or might have been was not otherwise than what you had been would have appeared to them to be otherwise.
        </p>
        <h3 className="text-3xl font-semibold mt-4 text-gray-300">Education and practical experience</h3>
      </div>

      {/* Education Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <h4 className="text-2xl font-semibold text-gray-300">My education</h4>
        <div className="space-y-4 mt-6">
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-200">2015 - 2016</span>
            <span className="text-lg text-gray-400">Drawing Concentration</span>
            <span className="text-sm text-gray-500">Course by Jakarta Academy of Art</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-200">2019 - 2021</span>
            <span className="text-lg text-gray-400">UI/UX Design Specialization</span>
            <span className="text-sm text-gray-500">Course by Jakarta Institute of Arts</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-200">2022</span>
            <span className="text-lg text-gray-400">UI/UX Designer</span>
            <span className="text-sm text-gray-500">Course by Coursera</span>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <h4 className="text-2xl font-semibold text-gray-300">Work experience</h4>
        <div className="space-y-4 mt-6">
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-200">2018 - 2019</span>
            <span className="text-lg text-gray-400">Illustrator</span>
            <span className="text-sm text-gray-500">in the Creative Mind agency</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-200">2019 - 2021</span>
            <span className="text-lg text-gray-400">Graphic Designer</span>
            <span className="text-sm text-gray-500">in the Moon Light agency</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-200">2021 - Now</span>
            <span className="text-lg text-gray-400">UI/UX Designer</span>
            <span className="text-sm text-gray-500">in the Moon Light agency</span>
          </div>
        </div>
      </div>

      {/* Favorite Tools Section */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h4 className="text-2xl font-semibold text-gray-300">My favourite tools</h4>
        <div className="flex justify-center gap-6 mt-6">
          <div className="w-12 h-12 bg-black rounded-lg text-white flex justify-center items-center">Ps</div>
          <div className="w-12 h-12 bg-black rounded-lg text-white flex justify-center items-center">F</div>
          <div className="w-12 h-12 bg-black rounded-lg text-white flex justify-center items-center">Ai</div>
          <div className="w-12 h-12 bg-black rounded-lg text-white flex justify-center items-center">Sk</div>
          <div className="w-12 h-12 bg-black rounded-lg text-white flex justify-center items-center">Bl</div>
        </div>
      </div>

      {/* Client Testimonials Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h4 className="text-2xl font-semibold text-gray-300">Clients say about me</h4>
        <div className="flex justify-center gap-6 mt-6">
          <div className="w-24 h-24 bg-black rounded-full flex justify-center items-center text-white">
            <span>⭐</span>
          </div>
          <div className="w-24 h-24 bg-black rounded-full flex justify-center items-center text-white">
            <span>⭐</span>
          </div>
          <div className="w-24 h-24 bg-black rounded-full flex justify-center items-center text-white">
            <span>⭐</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
