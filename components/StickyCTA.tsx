
import React, { useState, useEffect, useContext } from 'react';
import { Rocket } from 'lucide-react';
import { NavigationContext } from '../NavigationContext';
import { Page } from '../types';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { navigateTo } = useContext(NavigationContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[40] animate-fade-in-up">
      <button 
        onClick={() => navigateTo(Page.CONTACT)}
        className="flex items-center gap-3 bg-brand-emerald text-brand-dark px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(0,255,133,0.4)] hover:shadow-[0_0_50px_rgba(0,255,133,0.6)] hover:scale-105 active:scale-95 transition-all whitespace-nowrap border-2 border-brand-dark/20"
      >
        <Rocket className="w-4 h-4" />
        Start Your Project
      </button>
    </div>
  );
};

export default StickyCTA;
