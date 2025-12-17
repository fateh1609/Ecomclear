
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import CaseStudies from './components/CaseStudies';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import { Page } from './types';
import { NavigationContext } from './NavigationContext';
import { Database, Lightbulb, ArrowLeft, Target, Bot, Coins, Landmark } from 'lucide-react';

const logos = [
  "ETHEREUM", "SOLANA", "POLYGON", "BINANCE", "HYPERLEDGER", "COSMOS", "SUBSTRATE", "AVALANCHE", "POLKADOT", "NEAR"
];

const HomePage = () => (
  <div className="animate-fade-in">
    <Hero />
    <div className="relative z-10 -mt-10 lg:-mt-20">
      <Metrics />
    </div>
    <div className="py-20 lg:py-32 border-b border-white/5 bg-brand-deepBlue/20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10 mb-16 text-center">
        <p className="text-brand-electricBlue text-[10px] font-black uppercase tracking-[0.5em] opacity-80 font-orbitron">Protocol Ecosystem Integrations</p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap gap-x-24 items-center">
          {[...logos, ...logos].map((logo, index) => (
            <span key={index} className="text-xl md:text-2xl font-black text-white/30 tracking-[0.3em] font-orbitron hover:text-brand-electricBlue transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
    <Services />
    <WhyUs />
    <CaseStudies />
  </div>
);

const SubPageHeader = ({ title, subtitle, icon: Icon, color, image }: { title: string, subtitle: string, icon: any, color: string, image?: string }) => {
  const { navigateTo } = React.useContext(NavigationContext);
  return (
    <div className="pt-40 pb-20 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-electricBlue/5 to-transparent blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <button 
          onClick={() => navigateTo(Page.HOME)}
          className="inline-flex items-center gap-2 text-brand-electricBlue text-[10px] font-black uppercase tracking-widest mb-12 hover:text-white transition-all hover:-translate-x-1 font-orbitron"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Matrix
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-6 mb-8">
              <div className={`p-4 rounded-xl bg-white/5 ${color} border border-current/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]`}>
                <Icon className="w-12 h-12" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white font-orbitron uppercase tracking-tighter leading-none">{title}</h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed border-l-2 border-brand-electricBlue/20 pl-8 mb-12">{subtitle}</p>
          </div>
          
          {image && (
            <div className="relative h-[300px] lg:h-[400px] w-full overflow-hidden border border-white/5 shadow-2xl animate-fade-in group">
              <img src={image} alt={title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.BLOCKCHAIN:
        return <SubPageHeader title="BLOCKCHAIN LABS" subtitle="Architecting modular Layer 1 & 2 protocols for the global enterprise economy." icon={Database} color="text-brand-electricBlue" image="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop" />;
      case Page.AI:
        return <SubPageHeader title="AI & MACHINE LEARNING" subtitle="Integrating sophisticated LLMs and autonomous agents into business logic." icon={Bot} color="text-brand-emerald" image="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop" />;
      case Page.GAMING:
        return <SubPageHeader title="GAMING & METAVERSE" subtitle="Crafting high-fidelity virtual realities with sustainable play-to-earn mechanics." icon={Target} color="text-purple-500" image="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2832&auto=format&fit=crop" />;
      case Page.SOLUTIONS:
        return <SubPageHeader title="WEB3 SOLUTIONS" subtitle="Institutional-grade digital asset infrastructure and secure custodial solutions." icon={Coins} color="text-brand-gold" image="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2832&auto=format&fit=crop" />;
      case Page.INDUSTRIES:
        return <SubPageHeader title="INDUSTRY SECTORS" subtitle="Bridging traditional enterprise with decentralized infrastructure for government, BFSI, and cloud." icon={Landmark} color="text-brand-electricBlue" image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2832&auto=format&fit=crop" />;
      case Page.ABOUT:
        return <SubPageHeader title="ABOUT THE FIRM" subtitle="A collective of veteran engineers and strategists building the future of Web3." icon={Lightbulb} color="text-brand-emerald" image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2832&auto=format&fit=crop" />;
      case Page.CONTACT:
        return (
          <div className="min-h-screen animate-fade-in bg-brand-dark pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                  <span className="text-brand-electricBlue font-bold tracking-[0.4em] uppercase text-xs mb-4 block font-orbitron">Initiate Channel</span>
                  <h2 className="text-5xl md:text-8xl font-black text-white mb-8 font-orbitron uppercase tracking-tighter leading-[0.9]">READY TO<br/>ARCHITECT.</h2>
                  <p className="text-gray-400 text-xl font-light leading-relaxed mb-10 border-l-2 border-brand-electricBlue/20 pl-8">Connect with our engineering leads via encrypted intake for priority architectural review.</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo }}>
      <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-electricBlue selection:text-brand-dark">
        <Navbar />
        <main>{renderPage()}</main>
        <Footer />
        <StickyCTA />
      </div>
    </NavigationContext.Provider>
  );
};

export default App;
