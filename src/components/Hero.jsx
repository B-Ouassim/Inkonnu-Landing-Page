import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import inkonnu from '../assets/inkonnu.jpg';

const Hero = () => {
  const [index, setIndex] = useState(0);
// High-level titles (The "Roles")
const roles = [
    "Street Lyricist", 
    "Flow Architect", 
    "Shadow Poet", 
    "Alien Entity"
  ];

  // The Mission (The "Texts")
  const texts = [
    "Turning cold silence into heavy bars", 
    "Translating the pain of the dark into rhyme", 
    "Encoding the reality of the streets", 
    "Giving a voice to the shadows"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="h-screen flex flex-col items-center justify-center relative bg-black overflow-hidden"
      style={{ fontFamily: "'Orbitron', sans-serif" }} // Applying the futuristic font
    >
      
      {/* --- Background Image Container --- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-[90%] h-[70%] lg:w-[70%] lg:h-full relative overflow-hidden rounded-3xl"
        >
          <img 
            src={inkonnu} 
            alt="inkonnu" 
            className="w-full h-full object-cover grayscale contrast-125" 
          />
          
          {/* Radial Overlay to blend edges */}
          <div 
            className="absolute inset-0" 
            style={{ 
              background: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.5) 70%, black 100%)' 
            }} 
          />
        </motion.div>
      </div>

      {/* --- Main Content --- */}
      <div className="text-center z-10 select-none">
        <div className="h-20 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[index]}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="text-sm lg:text-2xl text-[#32CD32] font-mono tracking-[0.5em] uppercase"
              style={{ 
            textShadow: "0 0 20px rgba(50, 205, 50, 0.5), 0 0 40px rgba(50, 205, 50, 0.2)",
            WebkitTextStroke: "1px rgba(50, 205, 50, 0.3)" 
          }}
            >
              {roles[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* --- FUTURISTIC ALIEN TITLE --- */}
        <motion.h1 
          initial={{ letterSpacing: "0.5em", opacity: 0, filter: "blur(10px)" }}
          animate={{ letterSpacing: "0.1em", opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="text-7xl md:text-9xl lg:text-[160px] font-black text-[#32CD32] leading-none uppercase"
          style={{ 
            textShadow: "0 0 20px rgba(50, 205, 50, 0.5), 0 0 40px rgba(50, 205, 50, 0.2)",
            WebkitTextStroke: "1px rgba(50, 205, 50, 0.3)" 
          }}
        >
          INKONNU
        </motion.h1>
      </div>

      {/* --- Secondary Animated Text --- */}
      <div className="relative mt-12 w-full h-12 text-center z-10">
        <AnimatePresence mode="wait">
          <motion.span
            key={texts[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-[10px] lg:text-xs text-[#32CD32]/90 font-mono tracking-[0.8em] uppercase"
            style={{ 
            textShadow: "0 0 20px rgba(50, 205, 50, 0.5), 0 0 40px rgba(50, 205, 50, 0.2)",
            WebkitTextStroke: "1px rgba(50, 205, 50, 0.3)" 
          }}
          >
            {texts[index]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* --- Floating Scroll Indicator --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 z-10"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#32CD32] to-transparent opacity-50" />
        <span className="text-[9px] tracking-[0.4em] text-[#32CD32] uppercase"
        style={{ 
            textShadow: "0 0 20px rgba(50, 205, 50, 0.5), 0 0 40px rgba(50, 205, 50, 0.2)",
            WebkitTextStroke: "1px rgba(50, 205, 50, 0.3)" 
          }}
        >SCROLL</span>
      </motion.div>

    </section>
  );
};

export default Hero;