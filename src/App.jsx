import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white selection:bg-[#32CD32] selection:text-black">
      {/* 1. The Global Cursor (Must be at the top level) */}
      <CustomCursor />

      {/* 2. Navigation */}
      <Navbar />

      {/* 3. Main Content Sections */}
      <main>
        <Hero />
        
        <About />
        {/* The Project Archive Slider */}
        <Projects />
        
        {/* The Media Gallery */}
        <Gallery />
        
        {/* The Final Transmission Section */}
        <Contact />
      </main>

      {/* 4. Global System Overlays (Optional) */}
      <div className="fixed bottom-4 left-4 z-50 pointer-events-none">
        <span className="text-[#32CD32]/20 text-[8px] tracking-[0.3em] uppercase">
          System_v4.0.2 // stable
        </span>
      </div>
    </div>
  );
}

export default App;