import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = ({ data }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Decorative floating blurred orbs specific to Hero */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px] -z-10"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-600/20 rounded-full blur-[120px] -z-10"
      />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Profile photo removed */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]" />
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Available for work</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
            Hi, I'm {data?.name || 'Developer'} <br />
            <span className="bg-gradient-to-r from-emerald-400 via-lime-400 to-amber-400 bg-clip-text text-transparent">
              Yoga Aditia R
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            {data?.hero_title} <br/> {data?.hero_subtitle}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio" 
              className="px-8 py-4 bg-white text-zinc-950 font-bold rounded-full flex items-center gap-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
            >
              Project saya <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-8 py-4 glass-panel text-white font-bold rounded-full flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              Hubungi Saya
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
