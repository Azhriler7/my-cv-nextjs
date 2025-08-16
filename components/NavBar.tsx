'use client';

import React, {useState, useEffect} from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'portfolio', 'skills', 'contact'];
      let currenctActive = 'hero';

      for (const sectionId of sections){
        const element = document.getElementById(sectionId);
        if(element){
          const rect = element?.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.25 && rect.bottom >= window.innerHeight  * 0.25){
            currenctActive = sectionId;
            break;
          }
        }
      }
      setActiveSection(currenctActive);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // mendapatkan kelas link
  const getLinkClasses = (sectionId: string) => {
    return `${
      activeSection === sectionId ? 'bg-blue-600 text-white rounded-md' : 'text-gray-300'
    } hover:text-white px-3 py-2 transition-colors duration-300 transform hover:scale-105`;
  }

  // fungsi saat tautan di klik
  const handleLinkClick = (sectionId : string) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  }

  return(
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-400 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo Kiri */}
        <Link href="/" onClick={() => handleLinkClick('hero')} className="text-2xl font-bold text-white tracking-wide">
          <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          > Azhriler Lintang</motion.div>
        </Link>

       {/* Navigasi Button (web) */}
        <nav className="hidden md:flex space-x-2 lg:space-x-8">
          <Link href="#Hero" onClick={() => handleLinkClick('hero')} className="text-gray-300 hover:text-white transition-colors duration-300">Hero</Link>
          <Link href="#about" onClick={() => handleLinkClick('about')} className="text-gray-300 hover:text-white transition-colors duration-300">About</Link>
          <Link href="#portfolio" onClick={() => handleLinkClick('portfolio')} className="text-gray-300 hover:text-white transition-colors duration-300">Portfolio</Link>
          <Link href="#skills" onClick={() => handleLinkClick('skills')} className="text-gray-300 hover:text-white transition-colors duration-300">Skills</Link>
          <Link href="#contact" onClick={() => handleLinkClick('contact')} className="text-gray-300 hover:text-white transition-colors duration-300">Contact</Link>
        </nav>

        {/* button hamburger */}
        <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden text-white focus-outline-none"
        aria-label="Toggle Navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Navigasi button (mobile) */}
      <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0}}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800"
          >
        <div className="flex flex-col items-start p-4 space-y-4">
          <Link href="#Hero" onClick={() => handleLinkClick('hero')} className={getLinkClasses('hero')}>Hero</Link>
          <Link href="#about" onClick={() => handleLinkClick('about')} className={getLinkClasses('about')}>About</Link>
          <Link href="#portfolio" onClick={() => handleLinkClick('portfolio')} className={getLinkClasses('portfolio')}>Portfolio</Link>
          <Link href="#skills" onClick={() => handleLinkClick('skills')} className={getLinkClasses('skills')}>Skills</Link>
          <Link href="#contact" onClick={() => handleLinkClick('contact')} className={getLinkClasses('contact')}>Contact</Link>
        </div>
          </motion.nav>
      )}
      </AnimatePresence>
    </header>
  )
}

export default NavBar;