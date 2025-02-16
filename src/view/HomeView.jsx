import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { selectTheme } from '../slice/themeSlice.js';
import { motion } from 'framer-motion';
import Navbar from '../component/Navbar.jsx';
import PortfolioView from '../view/PortfolioView.jsx';
import AboutMe from './AboutView.jsx';
import Resume from './ResumeView.jsx';
import ContactView from './ContactView.jsx';
import SideBar from "../component/SideBar.jsx";

const HomeView = () => {
  const toRotate = ["Digital Marketing", "SEO Specialist", "Business Intelligence"];
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(200);
  const isDarkMode = useSelector(selectTheme);

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
    <div className="page-container min-h-screen overflow-auto">
      <div className="elastic-one"></div>
      <div className="elastic-two"></div>


      <div className="block md:hidden">
        <SideBar isDarkMode={isDarkMode} />
      </div>

      <div className={`flex flex-col md:flex-row min-h-screen ${isDarkMode ? 'dark:bg-[#0b0b0d] dark:text-gray-100' : 'bg-white text-black'}`}>
        

        <div className="hidden md:flex">
          <SideBar isDarkMode={isDarkMode} />
        </div>

        <div className="w-full md:w-3/4 ml-auto min-h-screen overflow-auto px-6 md:px-12 pt-8">
          <Navbar />
          <section className="h-[40rem] block md:hidden"></section>

          <section id="home" className="min-h-screen flex flex-col justify-center">
            <motion.h4 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
              className={`text-5xl font-extrabold ${isDarkMode ? 'dark:text-gray-100' : 'text-gray-400'} tracking-wide`}>
              Hello World, I'm
            </motion.h4>
            <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
              className="text-6xl font-extrabold text-gray-100 tracking-wide">
              <span className={`${isDarkMode ? 'dark:text-amber-400' : 'text-purple-600'}`}>Rerinda Fiktianti</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
              <h2 className={`text-3xl md:text-4xl font-semibold ${isDarkMode ? 'dark:text-amber-400' : 'text-purple-600'} mt-3`}>
                <span className="border-r-4 border-white pr-2">{text}</span>
              </h2>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col items-center md:items-start mt-8">
              <button className={`px-8 py-4 ${isDarkMode ? 'dark:bg-amber-400 dark:text-black hover:bg-amber-500' : 'bg-purple-600 text-white hover:bg-purple-700'}
                  text-black font-semibold rounded-lg transition-all duration-300 cursor-pointer`}>
                <a target="_blank" href="">Download CV</a>
              </button>
            </motion.div>
          </section>

          <section id="portfolio"><PortfolioView isDarkMode={isDarkMode} /></section>
          
          <section id="about-me" className="min-h-screen py-20"><AboutMe isDarkMode={isDarkMode} /></section>
          <section id="resume"><Resume isDarkMode={isDarkMode} /></section>
          <section id="contact"><ContactView isDarkMode={isDarkMode} /></section>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
