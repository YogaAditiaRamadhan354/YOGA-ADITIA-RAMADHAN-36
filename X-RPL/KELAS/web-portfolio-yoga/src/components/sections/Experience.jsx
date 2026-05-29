import React from 'react';
import { motion } from 'framer-motion';
import FloatingCard from '../ui/FloatingCard';

const Experience = ({ data }) => {
  const educationHistory = [
    { school: 'SMKN 2 BUDURAN SIDOARJO', year: '2025 - Sekarang', content: 'Jurusan Rekayasa Perangkat Lunak (RPL). Mempelajari pengembangan website, database, dan aplikasi modern.' },
    { school: 'SMP TAMADDUN AFKAR', year: 'Lulus 2025', content: 'Membangun fondasi logika pemrograman dasar dan computational thinking.' },
    { school: 'SDN KEBONAGUNG 2', year: 'Lulus 2022', content: 'Pendidikan dasar dan pembentukan karakter serta minat awal terhadap teknologi.' }
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">Riwayat Pendidikan</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">Berikut adalah perjalanan pendidikan yang membentuk kemampuan saya saat ini.</p>
      </motion.div>

      <div className="relative border-l-2 border-white/10 ml-4 md:ml-1/2 left-0 md:left-1/2 transform md:-translate-x-1/2">
        {educationHistory.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`relative mb-12 md:w-1/2 ${idx % 2 === 0 ? 'md:left-0 md:pr-12 md:text-right text-left pl-8 md:pl-0' : 'md:left-1/2 md:pl-12 text-left pl-8 md:pl-0'}`}
          >
            {/* Timeline Dot */}
            <div className={`absolute top-0 w-6 h-6 rounded-full bg-zinc-900 border-4 border-cyan-400 shadow-[0_0_15px_#22d3ee] z-10 
              ${idx % 2 === 0 ? '-left-[13px] md:-right-[13px] md:left-auto' : '-left-[13px]'}`} 
            ></div>
            
            <FloatingCard className="inline-block w-full">
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest block mb-2">{item.year}</span>
              <h3 className="text-xl font-bold text-white mb-3">{item.school}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{item.content}</p>
            </FloatingCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
