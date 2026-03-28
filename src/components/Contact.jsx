import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiInstagram, FiMusic, FiCode } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden font-mono border-t border-[#32CD32]/10">
      
      {/* HUD Background Decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#32CD32_1px,transparent_1px),linear-gradient(to_bottom,#32CD32_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[12vw] font-black text-[#32CD32]/5 uppercase select-none pointer-events-none leading-none font-['Orbitron']">
        UPLINK
      </div>

      {/* Main Terminal Frame */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-[90vw] md:w-[75vw] h-[65vh] border border-[#32CD32]/20 bg-[#050505] relative z-10 flex flex-col shadow-[0_0_50px_rgba(0,0,0,1)]"
      >
        {/* Terminal Header */}
        <div className="w-full p-4 border-b border-[#32CD32]/10 flex justify-between items-center bg-black/50">
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#32CD32]/60 animate-pulse" />
            <span className="text-[#32CD32]/40 text-[9px] tracking-[0.4em] uppercase font-bold">Inkonnu_System_v4.0</span>
          </div>
          <div className="text-[#32CD32]/40 text-[9px] tracking-[0.2em] uppercase font-bold flex items-center gap-2">
            <FiCode size={10} /> Created_by: Ouassim
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-[#32CD32] text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8 font-['Orbitron']">
            CONNECT WITH <br /> <span className="italic font-light opacity-40 text-white">Inkonnu.</span>
          </h2>
          
          {/* --- THE ARTIST CHANNELS (Main Focus) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mb-12">
            <motion.a
              href="https://www.instagram.com/inkonnu_/"
              target="_blank"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(50, 205, 50, 0.1)" }}
              className="flex items-center justify-between border border-[#32CD32]/40 p-5 group transition-all"
            >
              <div className="flex items-center gap-4">
                <FiInstagram className="text-[#32CD32] text-xl" />
                <div className="text-left">
                  <p className="text-white text-sm font-bold tracking-widest">INSTAGRAM</p>
                  <p className="text-[#32CD32]/40 text-[9px] uppercase">@inkonnu_</p>
                </div>
              </div>
              <FiArrowUpRight className="text-[#32CD32]/40 group-hover:text-[#32CD32] group-hover:rotate-45 transition-all" />
            </motion.a>

            <motion.a
              href="https://open.spotify.com/artist/inkonnu"
              target="_blank"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(50, 205, 50, 0.1)" }}
              className="flex items-center justify-between border border-[#32CD32]/40 p-5 group transition-all"
            >
              <div className="flex items-center gap-4">
                <FiMusic className="text-[#32CD32] text-xl" />
                <div className="text-left">
                  <p className="text-white text-sm font-bold tracking-widest">SPOTIFY</p>
                  <p className="text-[#32CD32]/40 text-[9px] uppercase">Stream_Frequencies</p>
                </div>
              </div>
              <FiArrowUpRight className="text-[#32CD32]/40 group-hover:text-[#32CD32] group-hover:rotate-45 transition-all" />
            </motion.a>
          </div>

          {/* --- THE TRANSMISSION BUTTON (Mail) --- */}
          <motion.a
            href="mailto:inkonnu.infos@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="px-10 py-5 bg-[#32CD32] text-black text-xs font-black uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(50,205,50,0.3)] hover:bg-white transition-all"
          >
            Send_Secure_Signal
          </motion.a>
        </div>

        {/* Terminal Footer (Developer Info Section) */}
        <div className="w-full p-6 border-t border-[#32CD32]/10 bg-black/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
             <span className="text-[#32CD32]/30 text-[9px] uppercase tracking-widest font-bold border-r border-[#32CD32]/10 pr-6">Architect_Access:</span>
             <div className="flex gap-4">
                <a href="https://github.com/B-Ouassim" target="_blank" className="text-[#32CD32]/50 hover:text-[#32CD32] transition-colors"><FiGithub size={18} /></a>
                <a href="https://github.com/B-Ouassim" target="_blank" className="text-[#32CD32]/50 hover:text-[#32CD32] transition-colors"><FiInstagram size={18} /></a>
                <a href="https://www.linkedin.com/in/ouassim-babakhali-69bb272b4" target="_blank" className="text-[#32CD32]/50 hover:text-[#32CD32] transition-colors"><FiLinkedin size={18} /></a>
             </div>
          </div>
          
          <div className="flex items-center gap-3">
             <div className="text-right">
                <p className="text-[#32CD32]/40 text-[8px] uppercase tracking-widest">Dev_Status: <span className="text-[#32CD32] animate-pulse">Online</span></p>
                <p className="text-[#32CD32]/40 text-[8px] uppercase tracking-widest">Lat: 33.5731 / Lon: -7.5898</p>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Final Branding Overlay */}
      <div className="absolute bottom-6 w-full px-10 flex justify-between items-center opacity-30 pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#32CD32]">Casablanca_Morocco</span>
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#32CD32]">© 2026_Inkonnu_OS</span>
      </div>
    </section>
  );
};

export default Contact;