
import React, { useContext } from 'react';
import { ArrowRight } from 'lucide-react';
import { NavigationContext } from '../NavigationContext';
import { Page } from '../types';

const CaseStudies: React.FC = () => {
  const { navigateTo } = useContext(NavigationContext);

  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-orbitron uppercase tracking-tighter">Proven <span className="text-brand-electricBlue">Success</span></h2>
            <p className="text-gray-500 font-light font-orbitron text-xs uppercase tracking-[0.2em]">Real-world results for enterprise clients.</p>
          </div>
          <button 
            onClick={() => navigateTo(Page.CONTACT)}
            className="hidden md:flex items-center gap-2 text-brand-electricBlue hover:text-brand-emerald transition-colors font-bold text-[10px] tracking-widest uppercase font-orbitron"
          >
            View All Projects <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            onClick={() => navigateTo(Page.CONTACT)}
            className="group relative rounded-none overflow-hidden h-[450px] cursor-pointer border border-white/5"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620321023374-d1a6861a31e7?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <div className="mb-6 text-left">
                <span className="bg-brand-emerald/10 text-brand-emerald px-4 py-1.5 rounded-none text-[9px] font-black uppercase tracking-[0.3em] border border-brand-emerald/30 font-orbitron">DeFi Architecture</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-4 group-hover:text-brand-electricBlue transition-colors font-orbitron uppercase leading-tight text-left">Successful Token Launch</h3>
              <p className="text-gray-400 mb-8 font-light text-sm leading-relaxed max-w-md text-left">
                Architected and deployed a deflationary tokenomics model for a FinTech unicorn, raising $15M in 48 hours through secure protocol design.
              </p>
              <span className="flex items-center gap-3 text-white font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform font-orbitron">
                Partner with us <ArrowRight className="w-4 h-4 text-brand-electricBlue" />
              </span>
            </div>
          </div>

          <div 
            onClick={() => navigateTo(Page.CONTACT)}
            className="group relative rounded-none overflow-hidden h-[450px] cursor-pointer border border-white/5"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2864&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <div className="mb-6 text-left">
                <span className="bg-brand-electricBlue/10 text-brand-electricBlue px-4 py-1.5 rounded-none text-[9px] font-black uppercase tracking-[0.3em] border border-brand-electricBlue/30 font-orbitron">Wallet Infrastructure</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-4 group-hover:text-brand-electricBlue transition-colors font-orbitron uppercase leading-tight text-left">Enterprise Wallet Integration</h3>
              <p className="text-gray-400 mb-8 font-light text-sm leading-relaxed max-w-md text-left">
                Developed a white-label non-custodial wallet with multi-chain support for a leading logistics provider, managing millions in digital assets.
              </p>
              <span className="flex items-center gap-3 text-white font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform font-orbitron">
                Partner with us <ArrowRight className="w-4 h-4 text-brand-electricBlue" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
