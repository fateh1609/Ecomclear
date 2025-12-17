
import React, { useContext } from 'react';
import { Twitter, Linkedin, Github, Youtube } from 'lucide-react';
import { NavigationContext } from '../NavigationContext';
import { Page } from '../types';

const Footer: React.FC = () => {
  const { navigateTo } = useContext(NavigationContext);

  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-brand-electricBlue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
            <button onClick={() => navigateTo(Page.HOME)} className="flex items-center gap-2 text-left">
               <img 
                 src="https://storage.googleapis.com/static-content-01/logo-ecomclear.png" 
                 alt="EcomClear Solutions" 
                 className="h-10 object-contain brightness-110"
               />
            </button>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-orbitron text-[11px] tracking-wider">
              Empowering global enterprises with military-grade blockchain infrastructure, non-custodial wallets, and immersive virtual environments.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-brand-deepBlue flex items-center justify-center text-gray-400 hover:text-brand-electricBlue hover:bg-brand-electricBlue/10 transition-all border border-white/5"><Twitter className="w-5 h-5"/></a>
              <a href="https://indeed.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-brand-deepBlue flex items-center justify-center text-gray-400 hover:text-brand-electricBlue hover:bg-brand-electricBlue/10 transition-all border border-white/5"><Linkedin className="w-5 h-5"/></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-brand-deepBlue flex items-center justify-center text-gray-400 hover:text-brand-electricBlue hover:bg-brand-electricBlue/10 transition-all border border-white/5"><Github className="w-5 h-5"/></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-brand-deepBlue flex items-center justify-center text-gray-400 hover:text-brand-electricBlue hover:bg-brand-electricBlue/10 transition-all border border-white/5"><Youtube className="w-5 h-5"/></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-tight font-orbitron">Services</h4>
            <ul className="space-y-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest font-orbitron">
              <li><button onClick={() => navigateTo(Page.BLOCKCHAIN)} className="hover:text-brand-electricBlue transition-colors flex items-center gap-2">Blockchain</button></li>
              <li><button onClick={() => navigateTo(Page.SOLUTIONS)} className="hover:text-brand-electricBlue transition-colors flex items-center gap-2">Wallet Labs</button></li>
              <li><button onClick={() => navigateTo(Page.GAMING)} className="hover:text-brand-electricBlue transition-colors flex items-center gap-2">Metaverse</button></li>
              <li><button onClick={() => navigateTo(Page.GAMING)} className="hover:text-brand-electricBlue transition-colors flex items-center gap-2">Gaming Solutions</button></li>
              <li><button onClick={() => navigateTo(Page.CONSULTING)} className="hover:text-brand-electricBlue transition-colors flex items-center gap-2">Consulting</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-tight font-orbitron">Studio</h4>
            <ul className="space-y-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest font-orbitron">
              <li><button onClick={() => navigateTo(Page.HOME)} className="hover:text-brand-emerald transition-colors">Home Studio</button></li>
              <li><button onClick={() => navigateTo(Page.BLOCKCHAIN)} className="hover:text-brand-emerald transition-colors">L1/L2 Scaling</button></li>
              <li><button onClick={() => navigateTo(Page.CONSULTING)} className="hover:text-brand-emerald transition-colors">Tokenomics</button></li>
              <li><button onClick={() => navigateTo(Page.CONTACT)} className="hover:text-brand-emerald transition-colors">Partner with Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-tight font-orbitron">HQ Access</h4>
            <ul className="space-y-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest font-orbitron text-left">
              <li className="flex flex-col">
                <span className="text-gray-300 mb-1">Direct Intel</span>
                <span className="text-brand-electricBlue select-all">contact@ecomclearsolutions.com</span>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-300 mb-1">Physical Node</span>
                <span className="text-white leading-relaxed">
                  C1 - 1F - SF14559<br/>
                  Ajman Free Zone C1 Building<br/>
                  Ajman Free Zone
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs font-bold tracking-[0.2em] uppercase font-orbitron">© {new Date().getFullYear()} EcomClearSolutions. All Rights Reserved.</p>
          <div className="flex gap-10 text-xs text-gray-600 font-bold uppercase tracking-[0.2em] font-orbitron">
            <button className="hover:text-white transition-colors">Security_Protocol</button>
            <button className="hover:text-white transition-colors">Terms_of_Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
