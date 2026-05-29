import React from 'react';
import { motion } from 'framer-motion';

const FloatingCard = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
      className={`glass-panel rounded-3xl p-6 relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] ${className}`}
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      {children}
    </motion.div>
  );
};

export default FloatingCard;
