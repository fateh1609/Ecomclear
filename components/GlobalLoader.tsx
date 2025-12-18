
import React from 'react';

const GlobalLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[1000] bg-brand-dark flex flex-col items-center justify-center overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#00F2FF_0%,transparent_70%)] animate-pulse"></div>
      
      {/* Hexagonal Core */}
      <div className="relative mb-8">
        <svg width="120" height="120" viewBox="0 0 100 100" className="animate-spin-slow">
          <path
            d="M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z"
            fill="none"
            stroke="#00F2FF"
            strokeWidth="1"
            className="opacity-20"
          />
          <path
            d="M50 15 L80 32.5 L80 67.5 L50 85 L20 67.5 L20 32.5 Z"
            fill="none"
            stroke="#00FF85"
            strokeWidth="2"
            strokeDasharray="10 20"
            className="animate-pulse"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-brand-electricBlue rounded-full shadow-[0_0_20px_#00F2FF] animate-ping"></div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center space-y-3 z-10">
        <h2 className="text-white font-orbitron font-black text-2xl tracking-[0.5em] uppercase">
          ECOM<span className="text-brand-electricBlue">CLEAR</span>
        </h2>
        <div className="flex items-center justify-center gap-3">
          <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-brand-electricBlue/50"></div>
          <span className="text-[10px] text-brand-electricBlue font-bold tracking-[0.3em] uppercase font-orbitron animate-pulse">
            System Initializing
          </span>
          <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-brand-electricBlue/50"></div>
        </div>
      </div>

      {/* Scanning Line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-[1px] bg-brand-electricBlue/20 shadow-[0_0_15px_#00F2FF] absolute top-0 animate-[scan_3s_linear_infinite]"></div>
      </div>
    </div>
  );
};

export default GlobalLoader;
