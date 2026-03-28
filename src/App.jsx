import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion'; // Added motion for entry
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Lock scroll during load
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <div className='bg-black min-h-screen selection:bg-[#32CD32] selection:text-black'>
      
      {/* 1. Custom Cursor - Should always be active once loading is done */}
      {!isLoading && <CustomCursor />}

      {/* 2. Loading Screen Logic */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onFinished={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* 3. Main Site Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Ambient Digital Noise Overlay (Optional Aesthetic) */}
            <div className="fixed inset-0 pointer-events-none z-[50] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            <Navbar />
            
            {/* Wrapping components in a container for consistent spacing */}
            <div className="relative">
              <Hero />
              <About />
              <Projects />
              <Gallery />
              <Contact />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default App;