import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Configuration for that "high-tech" weight
  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const mouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%', 
        translateY: '-50%',
      }}
    >
      {/* --- Central Aiming Point --- */}
      <motion.div 
        animate={{
          scale: isHovering ? 0.5 : 1,
          backgroundColor: "#32CD32",
        }}
        className="w-1.5 h-1.5 rounded-full shadow-[0_0_10px_#32CD32]"
      />

      {/* --- Rotating Targeting Frame --- */}
      <motion.div 
        animate={{
          rotate: isHovering ? 90 : 0,
          scale: isHovering ? 2 : 1,
          width: isHovering ? 40 : 24,
          height: isHovering ? 40 : 24,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute border border-[#32CD32]/30 rounded-sm"
      >
        {/* Corner Brackets (Alien Style) */}
        <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#32CD32]" />
        <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#32CD32]" />
        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#32CD32]" />
        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#32CD32]" />
      </motion.div>

      {/* --- Scanning "Data" Text (Next to cursor) --- */}
      <motion.span
        animate={{ 
          opacity: isHovering ? 1 : 0,
          x: isHovering ? 30 : 20
        }}
        className="absolute left-0 text-[8px] font-mono text-[#32CD32] uppercase tracking-tighter whitespace-nowrap"
      >
        {isHovering ? "Target: Locked" : ""}
      </motion.span>

      {/* --- Ambient Pulse --- */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute w-16 h-16 bg-[#32CD32] rounded-full blur-2xl pointer-events-none"
      />
    </motion.div>
  );
};

export default CustomCursor;