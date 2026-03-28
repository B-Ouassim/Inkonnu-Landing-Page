import { motion } from 'framer-motion';
import aboutInko from '../assets/aboutInko.jpg';

const MotionDiv = motion.div;

const About = () => {
  return (
    <section id="about" className="flex items-center bg-black relative overflow-hidden border-b border-[#32CD32]/10 min-h-screen py-20">
      
      {/* --- Alien/Futuristic Background Text --- */}
      <div className="absolute top-10 left-0 text-[12rem] font-black text-[#32CD32]/5 select-none leading-none tracking-tighter uppercase whitespace-nowrap font-['Orbitron']">
        System Archive
      </div>

      {/* Green Ambient Light (Subtle) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#32CD32]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-8 grid lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Side: Image with Tech Frame */}
        <MotionDiv 
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative group"
        >
          {/* Futuristic Corner Brackets for Frame */}
          <div className="absolute -inset-4 border border-[#32CD32]/20 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
          
          <div className="relative aspect-[4/5] overflow-hidden shadow-2xl bg-[#0A0A0A] border border-[#32CD32]/30">
            <img 
              src={aboutInko} // Ensure your pfp path is correct
              alt="Inkonnu Working" 
              className="w-full h-full object-cover grayscale brightness-75 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" 
            />
            {/* Scanline Overlay Effect on Image */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />
          </div>

          {/* Floating HUD Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 bg-[#32CD32] text-black p-6 font-mono font-black text-xs tracking-widest shadow-[0_0_20px_rgba(50,205,50,0.4)] hidden md:block uppercase"
          >
            Origin: <br/> Morocco // 1990
          </motion.div>
        </MotionDiv>

        {/* Right Side: Content */}
        <div className="lg:col-span-7 space-y-10 font-mono">
          <MotionDiv
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >            
            <h2 className="text-[4rem] md:text-[6rem] font-black text-[#32CD32] tracking-tighter uppercase leading-[0.85] font-['Orbitron']">
              About <span className="block opacity-30 text-white italic">Inkonnu.</span>
            </h2>
          </MotionDiv>

        <MotionDiv 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl font-mono"
        >
        <p className="text-[#32CD32]/80 text-xl md:text-xl leading-tight font-light">
            A <span className="text-white font-medium italic">Shadow Poet</span> capturing the unspoken weight of the night and converting it into <span className="text-white font-bold">Lyrical Reality.</span> 
            Mastering the art of <span className="italic text-white decoration-[#32CD32]/30">Street Narratives</span> taking cold isolation and heavy truths to re-code them into <span className="italic text-white decoration-[#32CD32]/30">Iconic Bars.</span>
        </p>
        
        {/* Glowing Divider */}
        <div className="h-[2px] w-20 bg-[#32CD32] my-8 shadow-[0_0_15px_#32CD32]" />

        {/* Status Line */}
        <p className="text-[#32CD32]/60 text-[10px] md:text-sm uppercase tracking-[0.4em] flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#32CD32]/40" />
            System_Update: Encoding new verses...
        </p>
        </MotionDiv>

        {/* --- Stats Section: Focus on Rhymes & Flow --- */}
        <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-12 pt-4 border-t border-[#32CD32]/10"
        >
        <div>
            <p className="text-[#32CD32] font-black text-3xl font-['Orbitron'] tracking-tighter">LYRICAL</p>
            <p className="text-[#32CD32]/40 text-[10px] uppercase mt-1 font-bold tracking-widest">[ Delivery_Mode ]</p>
        </div>
        <div className="w-[1px] h-12 bg-[#32CD32]/20" />
        <div>
            <p className="text-[#32CD32] font-black text-3xl font-['Orbitron'] tracking-tighter">FLOW-STATE</p>
            <p className="text-[#32CD32]/40 text-[10px] uppercase mt-1 font-bold tracking-widest">[ Core_Engine ]</p>
        </div>
        </MotionDiv>

        {/* --- Updated Stats Section for a Rapper --- */}
        <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-12 pt-4 border-t border-[#32CD32]/10"
        >
        <div>
            <p className="text-[#32CD32] font-black text-3xl font-['Orbitron'] tracking-tighter">CASABLANCA</p>
            <p className="text-[#32CD32]/40 text-[10px] uppercase mt-1 font-bold tracking-widest">[ Sector_Origin ]</p>
        </div>
        <div className="w-[1px] h-12 bg-[#32CD32]/20" />
        <div>
            <p className="text-[#32CD32] font-black text-3xl font-['Orbitron'] tracking-tighter">INDEPENDENT</p>
            <p className="text-[#32CD32]/40 text-[10px] uppercase mt-1 font-bold tracking-widest">[ Entity_Status ]</p>
        </div>
        </MotionDiv>

          {/* Terminal Style Stats */}
          <MotionDiv
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="flex gap-12 pt-4 border-t border-[#32CD32]/10"
          >
            <div>
              <p className="text-[#32CD32] font-black text-3xl font-['Orbitron'] tracking-tighter">SPLIT</p>
              <p className="text-[#32CD32]/40 text-[10px] uppercase mt-1 font-bold tracking-widest">[ Current_Task ]</p>
            </div>
            <div className="w-[1px] h-12 bg-[#32CD32]/20" />
            <div>
              <p className="text-[#32CD32] font-black text-3xl font-['Orbitron'] tracking-tighter">ACTIVE</p>
              <p className="text-[#32CD32]/40 text-[10px] uppercase mt-1 font-bold tracking-widest">[ Availability ]</p>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default About;