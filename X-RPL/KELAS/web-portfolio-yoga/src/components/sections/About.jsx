import React from 'react';
import { motion } from 'framer-motion';
import FloatingCard from '../ui/FloatingCard';
import { Code2, Server, Database, PenTool } from 'lucide-react';

const skills = [
  { name: 'Frontend (React/Vite)', icon: <Code2 className="w-6 h-6 text-cyan-400" />, level: '85%' },
  { name: 'Backend (Laravel)', icon: <Server className="w-6 h-6 text-red-500" />, level: '80%' },
  { name: 'Database (MySQL)', icon: <Database className="w-6 h-6 text-purple-400" />, level: '75%' },
  { name: 'UI/UX Design', icon: <PenTool className="w-6 h-6 text-pink-400" />, level: '70%' },
];

const About = ({ data }) => {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">About Me</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">{data?.about_text || ''}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FloatingCard delay={0.1} className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Perkenalkan</h3>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Nama saya yoga aditia ramadhan, saya adalah siswa SMKN 2 BUDURAN SIDOARJO kelas X-RPL.
                        
          </p>
          <div className="flex flex-wrap gap-3">
            {['React', 'Laravel','HTML','MySQL'].map((tech, i) => (
              <span key={i} className="px-4 py-2 text-sm font-medium bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-cyan-400/50 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </FloatingCard>

        <div className="grid grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <FloatingCard key={idx} delay={0.2 + (idx * 0.1)} className="flex flex-col items-center text-center justify-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <span className="font-bold text-white">{skill.name}</span>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-2">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                />
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
