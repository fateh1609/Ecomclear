
import React, { useContext } from 'react';
import { Database, ShieldCheck, Box, Lightbulb, ArrowUpRight } from 'lucide-react';
import { NavigationContext } from '../NavigationContext';
import { Page } from '../types';

const services = [
  {
    id: 'blockchain',
    title: 'BLOCKCHAIN DEVELOPMENT',
    description: 'Engineering the backbone of the decentralized economy. Focus on L1/L2 scaling solutions and high-throughput DApp architecture.',
    features: ['Layer 1 & 2 Custom Chains', 'Enterprise Smart Contract Audits', 'ZK-Rollup Implementations', 'Consensus Algorithm Design'],
    icon: Database,
    color: 'text-brand-electricBlue',
    borderColor: 'border-brand-electricBlue/20',
    hoverBorder: 'hover:border-brand-electricBlue/50',
    page: Page.BLOCKCHAIN
  },
  {
    id: 'wallets',
    title: 'NEXT-GEN WALLETS',
    description: 'The standard for institutional-grade asset management. We prioritize advanced security protocols and seamless cross-chain interoperability.',
    features: ['Non-Custodial MPC Security', 'Biometric Bi-pass Systems', 'Universal Interoperability', 'HD Wallet Architecture'],
    icon: ShieldCheck,
    color: 'text-brand-emerald',
    borderColor: 'border-brand-emerald/20',
    hoverBorder: 'hover:border-brand-emerald/50',
    page: Page.SOLUTIONS
  },
  {
    id: 'metaverse',
    title: 'METAVERSE & GAMING',
    description: 'Where virtuality meets reality. We integrate high-fidelity environments with complex on-chain game mechanics.',
    features: ['Unreal Engine 5 Integrations', 'P2E Economy Balancing', 'Virtual Land Minting Engines', 'Avatar Interoperability'],
    icon: Box,
    color: 'text-purple-500',
    borderColor: 'border-purple-500/20',
    hoverBorder: 'hover:border-purple-500/50',
    page: Page.GAMING
  },
  {
    id: 'consulting',
    title: 'STRATEGIC CONSULTING',
    description: 'Expert-led navigation of the Web3 landscape. From mathematical modeling to global regulatory compliance.',
    features: ['Deep Tokenomics Modeling', 'Regulatory Compliance Advisory', 'Technical Whitepaper Authoring', 'Go-To-Market Architecture'],
    icon: Lightbulb,
    color: 'text-brand-gold',
    borderColor: 'border-brand-gold/20',
    hoverBorder: 'hover:border-brand-gold/50',
    page: Page.CONSULTING
  }
];

const Services: React.FC = () => {
  const { navigateTo } = useContext(NavigationContext);

  return (
    <section id="services" className="py-32 bg-brand-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.03),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <span className="text-brand-electricBlue font-bold tracking-[0.4em] uppercase text-xs mb-4 block heading-font">Core Engineering</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">THE DOINGS.</h2>
          <p className="text-gray-400 max-w-2xl text-lg font-light leading-relaxed">
            EcomClearSolutions provides military-grade technical execution across the four pillars of the Web3 ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service) => (
            <div 
              key={service.title} 
              onClick={() => navigateTo(service.page)}
              className={`group glass-panel p-10 rounded-none border ${service.borderColor} ${service.hoverBorder} transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent via-transparent to-white/5 rotate-45 translate-x-8 -translate-y-8`}></div>
              
              <div className="flex justify-between items-start mb-8">
                <div className={`p-4 rounded-lg bg-white/5 ${service.color} group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-10 h-10" />
                </div>
                <ArrowUpRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-2xl font-black text-white mb-6 group-hover:text-brand-electricBlue transition-colors tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-8 font-light text-base leading-relaxed">
                {service.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors">
                    <span className={`w-1 h-1 rounded-full ${service.color.replace('text-', 'bg-')}`}></span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
