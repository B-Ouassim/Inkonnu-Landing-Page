import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // High-tech weighted physics
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const mouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setCoords({ x: e.clientX, y: e.clientY }); // Update HUD coordinates
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
  }, [mouseX, mouseY]);

  return (
    <>
      {/* --- Hide real cursor and disable on mobile --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        * { cursor: none !important; }
        @media (max-width: 768px) {
          .inkonnu-cursor { display: none !important; }
          * { cursor: auto !important; }
        }
      `}} />

      <motion.div
        className="inkonnu-cursor fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
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
            scale: isHovering ? [1, 1.5, 1] : 1,
            backgroundColor: isHovering ? "#FFFFFF" : "#32CD32",
          }}
          className="w-1.5 h-1.5 rounded-full shadow-[0_0_15px_#32CD32] z-10"
        />

        {/* --- Rotating Targeting Frame --- */}
        <motion.div 
          animate={{
            rotate: isHovering ? 135 : 0,
            scale: isHovering ? 1.4 : 1,
            borderColor: isHovering ? "rgba(255, 255, 255, 0.5)" : "rgba(50, 205, 50, 0.3)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="absolute w-8 h-8 border border-[#32CD32]/30 rounded-sm"
        >
          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#32CD32]" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#32CD32]" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#32CD32]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#32CD32]" />
        </motion.div>

        {/* --- Scanning "Data" Text --- */}
        <div className="absolute left-8 flex flex-col pointer-events-none">
          <motion.span
            animate={{ 
              opacity: isHovering ? 1 : 0.4,
              x: isHovering ? 10 : 0
            }}
            className="text-[8px] font-mono text-[#32CD32] uppercase tracking-[0.2em] whitespace-nowrap bg-black/40 px-1"
          >
            {isHovering ? ">> TARGET_LOCKED" : `X:${coords.x} Y:${coords.y}`}
          </motion.span>
          
          <motion.span
            animate={{ opacity: isHovering ? 1 : 0 }}
            className="text-[7px] font-mono text-white/40 uppercase tracking-widest mt-1"
          >
            SYS_ID: ARCHIVE_04
          </motion.span>
        </div>

        {/* --- Ambient Pulse Layer --- */}
        <motion.div 
          animate={{
            scale: isHovering ? [1.2, 1.5, 1.2] : [1, 1.2, 1],
            opacity: isHovering ? 0.3 : 0.1
          }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute w-20 h-20 bg-[#32CD32] rounded-full blur-3xl pointer-events-none"
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;