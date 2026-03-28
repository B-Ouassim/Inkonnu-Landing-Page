import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Asset Imports
import alien from '../assets/alien.jpg';
import breda from '../assets/breda.jpg';
import chill from '../assets/chill.jpg';
import echec from '../assets/echec.jpg';
import mama from '../assets/mama.jpg';
import inkonnu from '../assets/inkonnu.jpg';
import souvenir from '../assets/souvenir.jpg';
import split from '../assets/split.jpg';
import yalili from '../assets/yalili.jpg';

const projects = [
  { title: "SPLIT", desc: "A deep dive into isolation and identity.", tech: ["2026", "LP"], demo: "#", img: split },
  { title: "Souvenirs", desc: "Experimental sounds and raw storytelling.", tech: ["2023", "Single"], demo: "#", img: souvenir },
  { title: "ÉCHEC", desc: "Part of the Abatera X experimental series.", tech: ["2023", "EP"], demo: "#", img: echec },
  { title: "Mama", desc: "Pure lyricism and heavy atmosphere.", tech: ["2023", "Single"], demo: "#", img: mama },
  { title: "Breda", desc: "Casablanca's underground culture.", tech: ["2022", "Single"], demo: "#", img: breda },
  { title: "Chill", desc: "Melodic frequencies and personal struggle.", tech: ["2021", "Single"], demo: "#", img: chill },
  { title: "Arabi", desc: "Modern trap rhythms and cultural identity.", tech: ["2021", "LP"], demo: "#", img: inkonnu },
  { title: "YA LILI", desc: "Atmospheric and dark nights.", tech: ["2020", "Single"], demo: "#", img: yalili },
  { title: "Real Alien", desc: "The cult classic intro to the persona.", tech: ["2019", "EP"], demo: "#", img: alien },
];

const Projects = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Calculate current page based on scroll position
      const index = Math.round(scrollLeft / clientWidth) + 1;
      setCurrentIndex(index);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="project" className="h-screen bg-black flex flex-col overflow-hidden relative font-mono border-b border-[#32CD32]/10">
      
      {/* Scrollbar Killer CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* --- Top HUD --- */}
      <div className="absolute top-12 left-0 w-full px-12 flex justify-between items-start z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <h3 className="text-4xl md:text-6xl font-black text-[#32CD32] uppercase tracking-tighter font-['Orbitron']">
            Inko <span className="italic font-light opacity-30 text-white">Archives</span>
          </h3>
          <p className="text-[#32CD32]/40 text-[10px] tracking-[0.5em] uppercase mt-2">Accessing encrypted frequencies...</p>
        </div>

        <div className="text-right hidden md:block">
          <div className="text-[#32CD32] text-5xl font-['Orbitron'] leading-none">
            {currentIndex.toString().padStart(2, '0')}
          </div>
          <div className="text-[#32CD32]/30 text-xs font-['Orbitron'] uppercase mt-2 tracking-widest">
            Module_Index
          </div>
        </div>
      </div>

      {/* --- Full Screen Project Slider --- */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex h-full w-full overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
      >
        {projects.map((p, i) => (
          <div 
            key={i} 
            className="min-w-full h-full snap-center relative flex items-center justify-center overflow-hidden"
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <motion.img 
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 1.5 }}
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover grayscale" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full max-w-6xl px-12 flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-[#32CD32] text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
                  Archive_Serial: {p.tech.join(" // ")}
                </span>
                <h4 className="text-6xl md:text-9xl font-black text-white mb-6 uppercase font-['Orbitron'] tracking-[ -0.05em] leading-[0.8]">
                  {p.title}
                </h4>
                <p className="text-[#32CD32]/70 text-lg max-w-xl leading-relaxed mb-10 font-mono border-l border-[#32CD32]/30 pl-6">
                  {p.desc}
                </p>
                
                <a 
                  href={p.demo} 
                  target="_blank" 
                  className="inline-flex items-center gap-4 bg-[#32CD32] text-black px-10 py-5 font-black text-xs uppercase tracking-[0.3em] hover:bg-white transition-all shadow-[0_0_30px_rgba(50,205,50,0.2)]"
                >
                  Stream Module <FiArrowUpRight size={18} />
                </a>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Bottom Navigation HUD --- */}
      <div className="absolute bottom-12 left-0 w-full px-12 flex justify-between items-center z-50">
        <div className="hidden sm:block">
           <p className="text-[#32CD32]/40 text-[9px] uppercase tracking-[0.3em]">System_Log: <span className="text-[#32CD32]">Sync_Active</span></p>
        </div>

        {/* Central Controller */}
        <div className="flex items-center border border-[#32CD32]/20 bg-black/90 backdrop-blur-xl">
          <button 
            onClick={() => scroll('left')}
            className="p-6 text-[#32CD32] hover:bg-[#32CD32] hover:text-black transition-all border-r border-[#32CD32]/20 group"
          >
            <FiChevronLeft size={24} className="group-active:scale-75 transition-transform" />
          </button>
          
          <div className="px-8 flex flex-col items-center">
            <span className="text-[#32CD32] text-[10px] font-bold tracking-[0.5em] uppercase">Navigator</span>
            <div className="flex gap-1 mt-1">
               {projects.map((_, idx) => (
                 <div key={idx} className={`h-[2px] w-4 transition-all ${currentIndex === idx + 1 ? 'bg-[#32CD32]' : 'bg-[#32CD32]/20'}`} />
               ))}
            </div>
          </div>

          <button 
            onClick={() => scroll('right')}
            className="p-6 text-[#32CD32] hover:bg-[#32CD32] hover:text-black transition-all border-l border-[#32CD32]/20 group"
          >
            <FiChevronRight size={24} className="group-active:scale-75 transition-transform" />
          </button>
        </div>

        <div className="hidden sm:block text-right">
          <p className="text-[#32CD32]/40 text-[9px] uppercase tracking-[0.3em] font-['Orbitron']">© INKONNU_OS // 2026</p>
        </div>
      </div>

    </section>
  );
};

export default Projects;