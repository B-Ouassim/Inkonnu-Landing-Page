import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [glitchText, setGlitchText] = useState("INITIALIZING");

  // Alien Decryption phrases
  const phrases = ["DECRYPTING", "EXTRACTING", "MAPPING VOID", "LINKING NEURAL", "COMPLETE"];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinished, 1200);
          return 100;
        }
        
        // Change phrase based on progress
        const phraseIndex = Math.floor((prev / 100) * phrases.length);
        if (phrases[phraseIndex]) setGlitchText(phrases[phraseIndex]);
        
        return prev + 1;
      });
    }, 40); // Slightly slower for more "weight"
    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <motion.div
      exit={{ 
        clipPath: "inset(50% 0 50% 0)", // Horizon line collapse effect
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden font-['Orbitron']"
    >
      {/* Background Scanning Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
           style={{ 
             backgroundImage: `linear-gradient(#32CD32 1px, transparent 1px), linear-gradient(90deg, #32CD32 1px, transparent 1px)`,
             backgroundSize: '40px 40px' 
           }} 
      />

      {/* Moving Scanning Line */}
      <motion.div 
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] bg-[#32CD32] shadow-[0_0_15px_#32CD32] z-0 opacity-50"
      />

      <div className="relative z-10 w-full max-w-md px-10">
        
        {/* Top Data Header */}
        <div className="flex justify-between items-end mb-2 border-b border-[#32CD32]/20 pb-2">
          <motion.p 
            key={glitchText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#32CD32] text-[10px] tracking-[0.5em] font-bold"
          >
            {glitchText}
          </motion.p>
          <span className="text-[#32CD32] text-[12px] font-black">
            {progress}%
          </span>
        </div>

        {/* Futuristic Binary/Hex Stream (Left side) */}
        <div className="absolute -left-12 top-0 h-full flex flex-col gap-1 opacity-20">
            {[...Array(10)].map((_, i) => (
                <span key={i} className="text-[#32CD32] text-[8px]">{Math.random().toString(16).substring(2, 8)}</span>
            ))}
        </div>

        {/* The Main Progress "Core" */}
        <div className="relative h-1 w-full bg-[#32CD32]/10 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="absolute top-0 left-0 h-full bg-[#32CD32] shadow-[0_0_20px_#32CD32]"
          />
        </div>

        {/* Bottom Metadata */}
        <div className="mt-4 flex flex-col gap-1">
          <div className="flex justify-between text-[#32CD32]/40 text-[7px] tracking-[0.3em] uppercase">
            <span>Sector: 7G</span>
            <span>Origin: Unknown</span>
          </div>
          
          {/* Pulsing "Alien" Dot symbols */}
          <div className="flex justify-center gap-4 mt-6">
             {[0, 1, 2].map((i) => (
                 <motion.div 
                    key={i}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
                    className="w-1.5 h-1.5 bg-[#32CD32] rounded-full shadow-[0_0_8px_#32CD32]"
                 />
             ))}
          </div>
        </div>
      </div>

      {/* Frame Details */}
      <div className="absolute top-10 left-10 text-[#32CD32]/20 text-[10px]"> [INKO_OS] </div>
      <div className="absolute bottom-10 right-10 text-[#32CD32]/20 text-[10px]"> TRM_v.02 </div>

      {/* CRT Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%]" />
    </motion.div>
  );
};

export default LoadingScreen;