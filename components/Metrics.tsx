import React from 'react';

const Metrics: React.FC = () => {
  return (
    <div className="bg-brand-dark py-16 lg:py-20 border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          <div className="text-center group">
            <span className="block text-3xl md:text-5xl font-black text-white mb-4 heading-font group-hover:text-brand-electricBlue transition-all transform group-hover:scale-110">$500M+</span>
            <span className="text-[10px] md:text-xs text-gray-500 font-black uppercase tracking-[0.3em]">Total Ecosystem Value</span>
          </div>

          <div className="text-center group">
            <span className="block text-3xl md:text-5xl font-black text-white mb-4 heading-font group-hover:text-brand-emerald transition-all transform group-hover:scale-110">1,200+</span>
            <span className="text-[10px] md:text-xs text-gray-500 font-black uppercase tracking-[0.3em]">Smart Contracts Deployed</span>
          </div>

          <div className="text-center group">
            <span className="block text-3xl md:text-5xl font-black text-white mb-4 heading-font group-hover:text-brand-electricBlue transition-all transform group-hover:scale-110">2M+</span>
            <span className="text-[10px] md:text-xs text-gray-500 font-black uppercase tracking-[0.3em]">Global Users Impacted</span>
          </div>

          <div className="text-center group">
            <span className="block text-3xl md:text-5xl font-black text-white mb-4 heading-font group-hover:text-brand-emerald transition-all transform group-hover:scale-110">&lt; 2 SEC</span>
            <span className="text-[10px] md:text-xs text-gray-500 font-black uppercase tracking-[0.3em]">Tx Processing Speed</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Metrics;