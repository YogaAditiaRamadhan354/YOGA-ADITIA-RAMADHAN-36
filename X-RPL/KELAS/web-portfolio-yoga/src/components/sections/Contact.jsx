import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FloatingCard from '../ui/FloatingCard';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import api from '../../api';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', msg: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', msg: '' });
    try {
      await api.post('/contact', formData);
      setStatus({ state: 'success', msg: 'Message sent! Reaching out soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ state: 'error', msg: 'Failed to send message.' });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto relative z-10">
      <FloatingCard className="!p-10 md:!p-16 neon-border group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-pink-500/20 transition-all duration-700"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-700"></div>
        
        <div className="relative z-10 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">Contact Me</h2>
          <p className="text-zinc-400 mb-8"></p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:aditiaramadhanyoga@gmail.com" className="flex items-center gap-3 px-6 py-3 glass-panel hover:bg-white/10 transition-all rounded-2xl border border-white/10 group/item">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover/item:scale-110 transition-transform">
                <Send className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Email</p>
                <p className="text-sm font-semibold text-white">aditiaramadhanyoga@gmail.com</p>
              </div>
            </a>

            <a href="https://github.com/YogaAditiaRamadhan354" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 glass-panel hover:bg-white/10 transition-all rounded-2xl border border-white/10 group/item">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover/item:scale-110 transition-transform">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">GitHub</p>
                <p className="text-sm font-semibold text-white">YOGA-ADITIA-RAMADHAN</p>
              </div>
            </a>

            <a href="https://instagram.com/yogaditia159" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 glass-panel hover:bg-white/10 transition-all rounded-2xl border border-white/10 group/item">
              <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 group-hover/item:scale-110 transition-transform">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Instagram</p>
                <p className="text-sm font-semibold text-white">@yogaditia159</p>
              </div>
            </a>
          </div>
        </div>

        
      </FloatingCard>
    </section>
  );
};

export default Contact;
