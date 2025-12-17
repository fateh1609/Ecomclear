
import React, { useContext } from 'react';
import { ArrowRight } from 'lucide-react';
import { NavigationContext } from '../NavigationContext';
import { Page } from '../types';

const blockchainLogos = [
  { name: 'ETH', color: '#627EEA', delay: '0s', orbit: 180, duration: '20s' },
  { name: 'SOL', color: '#14F195', delay: '-2s', orbit: 220, duration: '25s' },
  { name: 'POLY', color: '#8247E5', delay: '-4s', orbit: 200, duration: '22s' },
  { name: 'BSC', color: '#F3BA2F', delay: '-6s', orbit: 240, duration: '28s' },
  { name: 'HYP', color: '#FFFFFF', delay: '-8s', orbit: 210, duration: '24s' },
  { name: 'ATOM', color: '#2E3148', delay: '-10s', orbit: 260, duration: '32s' },
  { name: 'SUB', color: '#E6007A', delay: '-12s', orbit: 230, duration: '26s' },
  { name: 'AVAX', color: '#E84142', delay: '-14s', orbit: 160, duration: '18s' },
  { name: 'DOT', color: '#E6007A', delay: '-16s', orbit: 280, duration: '35s' },
  { name: 'NEAR', color: '#00F2FF', delay: '-18s', orbit: 250, duration: '30s' },
];

const Hero: React.FC = () => {
  const { navigateTo } = useContext(NavigationContext);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark pt-28 pb-16 md:pt-32 md:pb-24 lg:pt-24">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] mix-blend-screen"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-electricBlue/10 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-brand-electricBlue/5 rounded-full blur-[140px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-emerald/5 rounded-full blur-[120px] animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 text-left animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-sm glass-panel mb-8 lg:mb-10 border border-brand-emerald/40 shadow-[0_0_15px_rgba(0,255,133,0.15)]">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse"></div>
              <span className="text-brand-emerald text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase font-orbitron">Global Enterprise Authority</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4 sm:mb-6 leading-[1] sm:leading-[0.8] tracking-tighter uppercase font-orbitron">
            ARCHITECTING<br/>
            <div className="w-full h-[30px] sm:h-[45px] md:h-[75px] bg-brand-emerald my-3 sm:my-4 shadow-[0_0_30px_rgba(0,255,133,0.3)]"></div>
            FUTURE.
          </h1>

          <p className="mt-6 sm:mt-10 max-w-2xl text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-12 leading-relaxed font-light border-l border-brand-electricBlue/20 pl-4 sm:pl-6">
            Pioneering <span className="text-white font-medium">Layer 1 Infrastructure</span>, MPC Wallet protocols, and high-fidelity Metaverse environments for the elite digital economy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-12 sm:mb-16">
            <button 
              onClick={() => navigateTo(Page.CONTACT)}
              className="group flex items-center justify-between gap-4 bg-brand-electricBlue text-brand-dark px-6 sm:px-8 py-4 sm:py-5 rounded-none font-black text-base sm:text-lg transition-all shadow-[0_0_35px_rgba(0,242,255,0.4)] hover:shadow-[0_0_50px_rgba(0,242,255,0.6)] hover:scale-[1.02] active:scale-95 uppercase font-orbitron min-w-full sm:min-w-[280px]"
            >
              <span>START PROJECT</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="hidden lg:flex lg:col-span-5 relative justify-center items-center h-[400px] lg:h-[600px] animate-float">
          <div className="absolute inset-0 bg-brand-electricBlue/5 blur-[120px] rounded-full"></div>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            {blockchainLogos.map((logo) => (
              <div
                key={logo.name}
                className="absolute flex items-center justify-center orbit-animation"
                style={{
                  animationDuration: logo.duration,
                  animationDelay: logo.delay,
                  width: `${logo.orbit * 2}px`,
                  height: `${logo.orbit * 2}px`,
                }}
              >
                <div 
                  className="glass-panel w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-white/10 shadow-lg reverse-orbit-animation absolute top-0"
                  style={{
                    animationDuration: logo.duration,
                    animationDelay: logo.delay,
                    borderColor: `${logo.color}33`,
                    boxShadow: `0 0 15px ${logo.color}22`,
                  }}
                >
                  <span className="text-[8px] md:text-[9px] font-black font-orbitron" style={{ color: logo.color }}>
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <svg viewBox="0 0 500 500" className="w-full h-full digital-core-glow max-w-[450px] relative z-10">
            <g className="animate-spin-slow" style={{ transformOrigin: '250px 250px' }}>
              <circle cx="250" cy="250" r="220" fill="none" stroke="url(#cyanGradient)" strokeWidth="0.5" strokeDasharray="20 40" />
              <circle cx="250" cy="250" r="200" fill="none" stroke="url(#mintGradient)" strokeWidth="1" strokeDasharray="100 50" />
            </g>
            <g className="animate-spin" style={{ transformOrigin: '250px 250px', animationDirection: 'reverse', animationDuration: '20s' }}>
              <circle cx="250" cy="250" r="180" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="5 10" />
              <circle cx="250" cy="250" r="150" fill="none" stroke="url(#cyanGradient)" strokeWidth="2" strokeDasharray="10 100" />
            </g>
            <defs>
              <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F2FF" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="mintGradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#00FF85" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <radialGradient id="coreGlow">
                <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#00FF85" stopOpacity="0.1" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <circle cx="250" cy="250" r="80" fill="url(#coreGlow)" className="animate-pulse" />
            <path d="M250 170 L320 210 L320 290 L250 330 L180 290 L180 210 Z" fill="none" stroke="#00F2FF" strokeWidth="2" className="animate-pulse" />
            <path d="M250 190 L300 220 L300 280 L250 310 L200 280 L200 220 Z" fill="none" stroke="#00FF85" strokeWidth="1" />
          </svg>
          <div className="absolute top-20 right-0 glass-panel p-2 border border-brand-electricBlue/30 z-20">
            <span className="block text-[8px] text-gray-500 uppercase font-black tracking-widest">NODE_LATENCY</span>
            <span className="text-brand-electricBlue font-bold text-xs font-mono tracking-tighter">0.02ms</span>
          </div>
          <div className="absolute bottom-24 left-10 glass-panel p-2 border border-brand-emerald/30 z-20">
            <span className="block text-[8px] text-gray-500 uppercase font-black tracking-widest">BLOCK_HEIGHT</span>
            <span className="text-brand-emerald font-bold text-xs font-mono tracking-tighter">#9,241,012</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
