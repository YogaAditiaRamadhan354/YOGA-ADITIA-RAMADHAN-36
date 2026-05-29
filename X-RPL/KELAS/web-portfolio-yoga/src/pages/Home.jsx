import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import { Zap } from 'lucide-react';
import api from '../api';

const Home = () => {
  const [data, setData] = useState({ profile: null, testimonials: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPublicData = async () => {
      try {
        const response = await api.get('/public-data');
        setData({
          profile: response.data.profile,
          testimonials: response.data.testimonials,
        });
      } catch (err) {
        console.error("Failed to load generic data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPublicData();
  }, []);

  if (loading) return (
    <div className="h-screen bg-[#022c22] flex flex-col items-center justify-center text-white font-mono lowercase tracking-tighter">
      <Zap className="w-8 h-8 text-emerald-500 animate-pulse mb-4" />
      <div className="animate-pulse">Loading system...</div>
    </div>
  );

  return (
    <div className="relative selection:bg-emerald-500/30">
      {/* Background Star System */}
      <div className="stars-bg"></div>

      <Navbar />
      
      <main className="flex flex-col gap-12 pb-32">
        <Hero data={data.profile} />
        <About data={data.profile} />
        <Portfolio />
        <Experience data={data} />
        <Contact />
      </main>

      <footer className="py-12 text-center text-zinc-500 text-sm border-t border-white/5 bg-[#022c22]/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {data.profile?.name || 'Yoga'}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="https://github.com/YOGA-ADITIA-RAMADHAN-36-main" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://instagram.com/yogaditiar" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></span> Modern UI</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
