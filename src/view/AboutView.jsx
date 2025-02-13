import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.section
      id="about-me"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 bg-[#121212] text-white"
    >
      <h2 className="text-4xl font-bold text-gray-100 mb-6 text-center">
        About Me
      </h2>
      
      {/* Section: Turning complex problems into simple design */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold text-gray-300">
          Turning complex problems into simple design
        </h3>
        <div className="flex justify-center gap-8 mt-8">
          <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg text-center">
            <h4 className="text-2xl font-bold text-amber-400">778+</h4>
            <p className="text-gray-400">Happy clients</p>
          </div>
          <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg text-center">
            <h4 className="text-2xl font-bold text-amber-400">4+</h4>
            <p className="text-gray-400">Years of experience</p>
          </div>
          <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg text-center">
            <h4 className="text-2xl font-bold text-amber-400">171+</h4>
            <p className="text-gray-400">Projects done</p>
          </div>
        </div>
      </div>

      {/* Section: Introduction */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-400">
          I wonder if I've been changed in the night? Let me think. Was I the same when I got up this morning? I almost think I can remember feeling a little different. But if I'm not the same, the next question is 'Who in the world am I?' Ah, that's the great puzzle!
        </p>
        <p className="text-lg text-gray-400 mt-4">
          Be what you would seem to be - or, if you'd like it put more simply - never imagine yourself not to be otherwise than what it might appear to others that what you were or might have been was not otherwise than what you had been would have appeared to them to be otherwise.
        </p>
      </div>

      {/* Contact and CV Section */}
      <div className="flex justify-center gap-8 mt-12">
        <div className="text-center">
          <h3 className="text-xl text-gray-300">Name</h3>
          <p className="text-lg text-gray-400">Rahmatul Usrs Ladzovic</p>
          <h3 className="text-xl text-gray-300 mt-4">Phone</h3>
          <p className="text-lg text-gray-400">+62851-6262-xxxx</p>
          <h3 className="text-xl text-gray-300 mt-4">Email</h3>
          <p className="text-lg text-gray-400">email@xsrazy.my.id</p>
          <h3 className="text-xl text-gray-300 mt-4">Location</h3>
          <p className="text-lg text-gray-400">Jakarta, Indonesia</p>
        </div>

        <a
          href="/path-to-cv.pdf"
          download
          className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          <span>Download CV</span>
        </a>
      </div>
    </motion.section>
  );
};

export default AboutMe;
