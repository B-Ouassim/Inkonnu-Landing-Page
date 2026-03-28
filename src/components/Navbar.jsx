import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react'; // Added useRef
import { Link } from "react-scroll";
import track from '../assets/track.mp3'; // Import your audio file

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const navItems = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Projects', target: 'project' },
    { name: 'Gallery', target: 'gallery' },
    { name: 'Contact', target: 'contact' },
  ];

  // Logic to handle auto-play and toggle
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; 
    }
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const restartAudio = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <nav className='fixed top-0 left-0 w-full z-[100] flex items-center justify-between py-6 px-12 bg-black/80 backdrop-blur-md border-b border-[#32CD32]/10'>
      
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={track} loop />

      {/* Brand Logo */}
      <div className="text-3xl font-black tracking-tighter text-[#32CD32]"
        style={{ 
          textShadow: "0 0 20px rgba(50, 205, 50, 0.5)",
          WebkitTextStroke: "1px rgba(50, 205, 50, 0.3)" 
        }}
      >
        Inko<span className="italic font-light text-[#32CD32]/40">.</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-12 items-center">
        {navItems.map((item) => (
          <Link 
            key={item.target}
            to={item.target}
            spy={true}     
            smooth={true}
            duration={500}
            offset={-80}
            onSetActive={() => setActive(item.target)} 
            className='relative group cursor-pointer'
          >
            <motion.p 
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-300 ${
                active === item.target ? 'text-[#32CD32]' : 'text-[#32CD32]/40 group-hover:text-[#32CD32]'
              }`}
            >
              {item.name}
            </motion.p>
            {active === item.target && (
              <motion.div 
                layoutId="nav-underline"
                className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#32CD32]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>

      {/* Futuristic Audio Controller */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 border-l border-[#32CD32]/20 pl-6">
          
          {/* Audio Visualizer Bars */}
          <div className="flex gap-[2px] items-center h-4 w-6" onClick={toggleAudio}>
             {[1, 2, 3, 4].map((bar) => (
               <motion.div
                 key={bar}
                 animate={{ 
                   height: isPlaying ? [4, 16, 8, 14, 4] : 4 
                 }}
                 transition={{ 
                   repeat: Infinity, 
                   duration: 0.6, 
                   delay: bar * 0.1,
                   ease: "easeInOut" 
                 }}
                 className="w-[2px] bg-[#32CD32]"
               />
             ))}
          </div>

          <div className="flex flex-col">
            <button 
              onClick={toggleAudio}
              className="text-[9px] font-mono font-bold text-[#32CD32] uppercase tracking-[0.2em] hover:opacity-100 transition-opacity"
              style={{ opacity: isPlaying ? 1 : 0.4 }}
            >
              {isPlaying ? "System: Audio ON" : "System: Muted"}
            </button>
            <button 
              onClick={restartAudio}
              className="text-[7px] font-mono text-[#32CD32]/30 uppercase text-left hover:text-[#32CD32] transition-colors"
            >
              [ Genkidama ]
            </button>
          </div>
        </div>

        {/* Status indicator */}
        <div className="hidden lg:flex items-center gap-3 bg-[#32CD32]/5 px-3 py-1 rounded-full border border-[#32CD32]/10">
          <div className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-green-900'}`} />
          <span className="text-[9px] font-mono font-bold text-[#32CD32]/60 uppercase tracking-widest">
            {isPlaying ? "Signal Active" : "Standby"}
          </span>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;