import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full top-0 z-50 px-8 py-4 pointer-events-none"
    >
      <div className="max-w-5xl mx-auto glass-panel rounded-full px-8 py-3 flex justify-between items-center pointer-events-auto shadow-[0_0_20px_rgba(14,165,233,0.1)] border border-white/10">
        <a href="#" className="font-black text-xl tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 animate-pulse-glow"></div>
          <span className="text-zinc-500 font-light">YogaditiaR</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-zinc-400 items-center">
          <a href="#about" className="hover:text-white transition-colors hover:scale-105 transform">About</a>
          <a href="#portfolio" className="hover:text-white transition-colors hover:scale-105 transform">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors hover:scale-105 transform">Educational Background</a>
          <a href="#contact" className="hover:text-white transition-colors hover:scale-105 transform">Contact</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="px-5 py-2 text-sm font-bold bg-white text-zinc-950 rounded-full hover:bg-zinc-200 transition-colors">
            Let's Talk
          </a>
          <Link to="/admin/login" className="neon-border px-5 py-2 text-sm font-bold bg-zinc-900 border border-white/10 text-white rounded-full hover:bg-zinc-800 transition-colors">
            Sign In
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
