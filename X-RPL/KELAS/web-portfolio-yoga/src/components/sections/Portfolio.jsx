import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingCard from '../ui/FloatingCard';
import { ExternalLink, Github, X } from 'lucide-react';
import api from '../../api';

const staticProjects = [
  {
    id: 'chess-static',
    title: 'Catur Digital Sederhana',
    description: 'Permainan catur digital sederhana yang dibuat dengan antarmuka modern dan interaktif. Mendukung dua pemain dengan tampilan papan catur yang elegan.',
    image: '/chess-project.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demo_link: '/chess.html',
    repo_link: 'https://github.com/YOGA-ADITIA-RAMADHAN-36-main',
  },
  {
    id: 'calc-static',
    title: 'Kalkulator Digital Sederhana',
    description: 'Kalkulator digital dengan desain modern dan responsif. Mendukung operasi matematika dasar seperti penjumlahan, pengurangan, perkalian, dan pembagian.',
    image: '/calculator-project.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demo_link: '/calculator.html',
    repo_link: 'https://github.com/YOGA-ADITIA-RAMADHAN-36-main',
  },
];

const Portfolio = () => {
  const [projects, setProjects] = useState(staticProjects);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Fetch projects from Laravel API
    const fetchProjects = async () => {
      try {
        const response = await api.get('/projects');
        const apiProjects = response.data.projects || [];
        setProjects([...staticProjects, ...apiProjects]);
      } catch (error) {
        console.error("Failed to load projects from API, showing static projects", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">My Projects</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">Berikut adalah beberapa proyek yang pernah saya buat.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <FloatingCard key={project.id} delay={0.1 * idx} className="cursor-pointer group h-full flex flex-col">
            <div
              className="relative aspect-video rounded-2xl overflow-hidden mb-6 ring-1 ring-white/10 group/img shadow-2xl"
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent z-10"></div>

              {/* Hover overlay text */}
              <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center backdrop-blur-sm">
                <span className="px-6 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-bold text-white tracking-widest flex items-center gap-2 transform translate-y-4 group-hover/img:translate-y-0 transition-transform duration-300 shadow-xl">
                  View Details
                </span>
              </div>

              <img
                src={project.image || 'https://via.placeholder.com/600'}
                alt={project.title}
                className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 z-30 flex flex-wrap gap-2">
                {project.technologies && project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col flex-grow px-1">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors" onClick={() => setSelectedProject(project)}>{project.title}</h3>
              <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">{project.description}</p>

              <div className="pt-5 mt-auto border-t border-white/5 flex gap-3">
                {project.demo_link && project.demo_link !== '#' && (
                  <a href={project.demo_link} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 text-[11px] font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 rounded-xl hover:bg-cyan-500/20 transition-colors border border-cyan-500/20">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                )}
                {project.repo_link && project.repo_link !== '#' && (
                  <a href={project.repo_link} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 text-[11px] font-bold uppercase tracking-widest bg-purple-500/10 text-purple-400 rounded-xl hover:bg-purple-500/20 transition-colors border border-purple-500/20">
                    <Github className="w-4 h-4" /> Source
                  </a>
                )}
              </div>
            </div>
          </FloatingCard>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-zinc-900 border border-white/10 p-8 rounded-[32px] max-w-2xl w-full relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <h2 className="text-3xl font-bold mb-4 text-white pr-12">{selectedProject.title}</h2>
              <img
                src={selectedProject.image || 'https://via.placeholder.com/600'}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover rounded-2xl mb-6 shadow-lg"
              />
              <p className="text-zinc-400 text-lg mb-6 leading-relaxed">{selectedProject.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.technologies?.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full border border-cyan-500/30">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mb-8">
                <a href={selectedProject.demo_link} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white text-zinc-950 font-bold rounded-xl flex items-center gap-2 hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10">
                  <ExternalLink className="w-5 h-5" /> Live Preview
                </a>
                <a href={selectedProject.repo_link} target="_blank" rel="noreferrer" className="px-6 py-3 glass-panel text-white font-bold rounded-xl flex items-center gap-2 hover:bg-white/10 transition-colors">
                  <Github className="w-5 h-5" /> View Code
                </a>
              </div>

              {selectedProject.id.includes('static') && (
                <div className="mt-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Quick Code Snippet</h3>
                  <div className="bg-black/50 rounded-2xl p-6 border border-white/5 overflow-hidden">
                    <pre className="text-xs text-cyan-300 font-mono overflow-x-auto max-h-48 custom-scrollbar">
                      {selectedProject.id === 'chess-static' ? (
                        `// Chess Logic Preview
const P={K:'♔',Q:'♕',R:'♖',B:'♗',N:'♘',P:'♙'...};
function getValidMoves(r, c) {
  const piece = board[r][c];
  const type = piece.toUpperCase();
  // Validation logic for each piece type...
}`
                      ) : (
                        `// Calculator Logic Preview
function calculate() {
  let a = parseFloat(prev), b = parseFloat(cur), r = 0;
  if(op === '+') r = a + b;
  else if(op === '-') r = a - b;
  // ...
  cur = r.toString();
}`
                      )}
                    </pre>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
