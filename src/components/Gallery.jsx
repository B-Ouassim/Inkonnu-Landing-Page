import React from 'react';
import { motion } from 'framer-motion';

// Replace these with your actual image paths
import inkonnuGallery from '../assets/inkonnuGallery.jpg';
import aboutInko from '../assets/aboutInko.jpg';
import inkonnuGallery2 from '../assets/inkonnuGallery2.jpg';
import inkonnuGallery3 from '../assets/inkonnuGallery3.jpg';
import inkonnuGallery4 from '../assets/inkonnuGallery4.jpg';
import inkonnuGallery5 from '../assets/inkonnuGallery5.jpg';
import inkonnuGallery6 from '../assets/inkonnuGallery6.jpg';

const galleryImages = [
  { id: 'IMG_001', src: inkonnuGallery, span: 'md:col-span-2 md:row-span-2', label: 'PHASE_ALIEN' },
  { id: 'IMG_002', src: aboutInko, span: 'md:col-span-1 md:row-span-1', label: 'LOC_CASABLANCA' },
  { id: 'IMG_003', src: inkonnuGallery3, span: 'md:col-span-1 md:row-span-1', label: 'STUDIO_SESS' },
  { id: 'IMG_004', src: inkonnuGallery4, span: 'md:col-span-1 md:row-span-2', label: 'ABATERA_X' },
  { id: 'IMG_005', src: inkonnuGallery5, span: 'md:col-span-1 md:row-span-1', label: 'LIVE_ARCHIVE' },
  { id: 'IMG_005', src: inkonnuGallery6, span: 'md:col-span-1 md:row-span-1', label: 'LIVE_ARCHIVE' },
  { id: 'IMG_002', src: inkonnuGallery2, span: 'md:col-span-1 md:row-span-1', label: 'LOC_CASABLANCA' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="min-h-screen bg-black py-20 px-6 md:px-12 font-mono relative overflow-hidden border-b border-[#32CD32]/10">
      
      {/* --- HUD Header --- */}
      <div className="mb-12 flex justify-between items-end border-l-2 border-[#32CD32] pl-6">
        <div>
          <h3 className="text-4xl md:text-6xl font-black text-[#32CD32] uppercase tracking-tighter font-['Orbitron']">
            Visual <span className="italic font-light opacity-30 text-white">Intelligence</span>
          </h3>
          <p className="text-[#32CD32]/40 text-[10px] tracking-[0.5em] uppercase mt-2">
            Scanning biometric data archives...
          </p>
        </div>
        <div className="hidden md:block text-[#32CD32]/20 text-[9px] uppercase tracking-widest text-right">
          Total_Files: 006 <br />
          Status: Decrypted
        </div>
      </div>

      {/* --- Bento Grid Layout --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 max-w-7xl mx-auto">
        {galleryImages.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`relative group overflow-hidden border border-[#32CD32]/10 bg-[#0A0A0A] ${img.span}`}
          >
            {/* Image Overlay HUD */}
            <div className="absolute top-2 left-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[8px] bg-[#32CD32] text-black px-1 font-bold">{img.id}</span>
            </div>
            
            <div className="absolute bottom-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[8px] text-[#32CD32] border border-[#32CD32]/30 px-2 py-0.5 backdrop-blur-md">
                {img.label}
              </span>
            </div>

            {/* Main Image */}
            <motion.img
              src={img.src}
              alt={img.label}
              whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
              className="w-full h-full object-cover grayscale opacity-60 transition-all duration-500 cursor-crosshair"
            />

            {/* Scanline / Grid Effect on Hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 bg-[linear-gradient(rgba(50,205,50,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(50,205,50,0.1)_1px,transparent_1px)] bg-[size:20px_20px] transition-opacity duration-500" />
            
            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
          </motion.div>
        ))}
      </div>

      {/* --- Section Footer decoration --- */}
      <div className="mt-12 flex items-center gap-4">
        <div className="h-[1px] flex-1 bg-[#32CD32]/10" />
        <span className="text-[#32CD32]/20 text-[8px] tracking-[1em] uppercase">End_Of_Media_Stream</span>
        <div className="h-[1px] flex-1 bg-[#32CD32]/10" />
      </div>
    </section>
  );
};

export default Gallery;