import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, selectTheme } from '../slice/themeSlice.js';
import Navbar from '../component/Navbar.jsx';
import PortfolioView from '../view/PortfolioView.jsx';
import AboutMe from './AboutView.jsx';
import Resume from './ResumeView.jsx';
import ContactView from './ContactView.jsx';
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const HomeView = () => {
  const isDarkMode = useSelector(selectTheme);
  const dispatch = useDispatch();

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  console.log(`state, ${isDarkMode}`);
   const toRotate = ["Web Developer", "Mobile Developer", "Tech Enthusiast", "Cyber Security Enthusiast"];
  const period = 2000;
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(200);

  useEffect(() => {
    let timer = setTimeout(() => {
      let i = loopNum % toRotate.length;
      let fullTxt = toRotate[i];
      let updatedText = isDeleting ? fullTxt.substring(0, text.length - 1) : fullTxt.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullTxt) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setDelta(isDeleting ? 100 : 200);
    }, delta);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, delta]);

  return (
    <div className={`page-container ${isDarkMode ? 'dark' : ''}`}>
      <div className="elastic-one"></div>
      <div className="elastic-two"></div>

      <div className={`flex h-screen bg-gradient-to-r from-[#0b0b0d] to-[#1a1a1d] text-white dark:bg-primary dark:text-gray-100`}>
        <div className="w-1/3 xl:w-1/4 h-[80%] fixed ml-6 top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center bg-[#111]  p-8 rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.2)]">
          <div className="text-center">
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src="https://i1.sndcdn.com/avatars-000214125831-5q6tdw-t500x500.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto border-4 border-amber-400"
            />
            <h2 className="mt-4 text-3xl font-bold tracking-wide text-gray-100">Rerinda Fiktianti</h2>
            <p className="text-gray-400 text-base">Digital Marketing</p>
            <p className="text-gray-500 text-base">Cirebon, Indonesia</p>
          </div>
          
          <div className="flex gap-4 mt-6">
            <button onClick={toggleThemeHandler} className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-blue-600 rounded-full text-white text-2xl transition-all">
              🌙
            </button>
            
          </div>
           <div className="flex gap-4 mt-6">
                <a href="https://www.linkedin.com/in/reo-wicaksono-9a89ab192/" target="_blank" rel="noopener noreferrer" 
                  className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-blue-600 rounded-full text-white text-2xl transition-all">
                  <FaLinkedin />
                </a>
                <a href="https://instagram.com/reowicaksono_" target="_blank" rel="noopener noreferrer" 
                  className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-pink-500 rounded-full text-white text-2xl transition-all">
                  <FaInstagram />
                </a>
                <a href="https://github.com/reowicaksono" target="_blank" rel="noopener noreferrer" 
                  className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-gray-900 rounded-full text-white text-2xl transition-all">
                  <FaGithub />
                </a>
              </div>
        </div>

        <div className="w-2/3 xl:w-3/4 ml-auto h-screen overflow-y-auto px-12 pt-8">
          <Navbar />

          <section id="home" className="min-h-screen flex flex-col justify-center ml-[1rem]">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-6xl font-extrabold text-gray-100 tracking-wide">
              I'm <span className="text-amber-400">Rerinda Fiktianti</span>
            </motion.h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-amber-400 mt-3">
              <span className="border-r-4 border-white pr-2">{text}</span>
            </h2>
            <div className="flex flex-col items-center md:items-start mt-8">
              <button className="px-8 py-4 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                <a target="_blank" href="https://drive.google.com/file/d/12ZftpFJGCs3NnkIVbStLtvjaKkVyOmw4/view?usp=sharing">
                  Download CV
                </a>
              </button>
            </div>
          </section>

          <section id="portfolio" className="min-h-screen py-20">
            <PortfolioView />
          </section>

          <section id="about-me" className="min-h-screen py-20">
            <AboutMe />
          </section>

          <section id="resume">
            <Resume />
          </section>

          <section id="contact">
            <ContactView />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
