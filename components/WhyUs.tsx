
import React, { useContext } from 'react';
import { ShieldCheck, Zap, Headphones } from 'lucide-react';
import { NavigationContext } from '../NavigationContext';
import { Page } from '../types';

const WhyUs: React.FC = () => {
  const { navigateTo } = useContext(NavigationContext);

  return (
    <section className="py-24 bg-brand-deepBlue border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-emerald font-bold tracking-wider uppercase text-sm mb-2 block font-orbitron">The EcomClear Advantage</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-orbitron">
              Why Global <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald to-brand-electricBlue uppercase">Enterprises</span>
            </h2>
            <div className="w-48 h-10 bg-brand-emerald mb-8 opacity-90 shadow-[0_0_20px_rgba(0,255,133,0.3)]"></div>
            
            <p className="text-gray-400 mb-10 text-lg leading-relaxed font-light">
              In a rapidly evolving digital landscape, you need a partner that prioritizes asset security and market speed. We don't just build; we fortify.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-brand-dark/80 rounded-lg flex items-center justify-center border border-brand-emerald/40 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                        <ShieldCheck className="w-7 h-7 text-brand-emerald" />
                    </div>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-bold text-xl mb-2 font-orbitron tracking-tight">Uncompromising Security</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    From multi-sig wallets to rigorous smart contract audits, we employ military-grade encryption and best practices to safeguard your ecosystem.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-brand-dark/80 rounded-lg flex items-center justify-center border border-brand-electricBlue/40 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                        <Zap className="w-7 h-7 text-brand-electricBlue" />
                    </div>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-bold text-xl mb-2 font-orbitron tracking-tight">Rapid Deployment</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Our agile development methodologies and pre-built modules allow us to launch your MVP faster without cutting corners.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-brand-dark/80 rounded-lg flex items-center justify-center border border-brand-gold/40 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                        <Headphones className="w-7 h-7 text-brand-gold" />
                    </div>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-bold text-xl mb-2 font-orbitron tracking-tight">24/7 Technical Support</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Blockchain never sleeps, and neither do we. Our dedicated support teams ensure your infrastructure is always operational.
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => navigateTo(Page.CONTACT)}
              className="inline-flex items-center gap-3 bg-brand-emerald text-brand-dark px-10 py-4 font-black uppercase tracking-widest text-base hover:bg-white transition-all shadow-[0_0_35px_rgba(0,255,133,0.35)] font-orbitron hover:scale-[1.03]"
            >
              START YOUR PROJECT
            </button>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-brand-electricBlue blur-[120px] opacity-10"></div>
             <div className="relative glass-panel rounded-none p-2 border border-brand-electricBlue/20 transform hover:scale-[1.01] transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2832&auto=format&fit=crop" 
                  alt="Symmetrical Datacenter Hallway" 
                  className="w-full h-full object-cover shadow-2xl opacity-80 hover:opacity-100 transition-opacity duration-1000 min-h-[500px]"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-none border border-white/10">
                    <div className="flex justify-between items-center text-sm font-mono text-brand-electricBlue mb-2 font-orbitron">
                        <span className="text-[10px] tracking-widest uppercase">SYSTEM STATUS</span>
                        <span className="flex items-center gap-1 text-[10px] font-bold"><span className="w-2 h-2 bg-brand-emerald rounded-full animate-pulse"></span> OPERATIONAL</span>
                    </div>
                    <div className="w-full bg-brand-dark/80 h-1.5 rounded-none overflow-hidden">
                        <div className="bg-brand-emerald w-[98%] h-full animate-pulse"></div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
