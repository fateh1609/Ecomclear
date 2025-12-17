
import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { NavItem, Page } from '../types';
import { NavigationContext } from '../NavigationContext';

const megaMenuData: Record<string, Record<string, any>> = {
  'Blockchain': {
    'Blockchain': {
      title: 'Blockchain',
      description: 'Navigate your journey towards blockchain with diligently crafted solutions',
      items: [
        { name: 'Blockchain Development', description: 'Tap into the potential of blockchain technology with our strategic blockchain services.', page: Page.BLOCKCHAIN },
        { name: 'Identity Management', description: 'Transparent and flawless identity management with blockchain.', page: Page.BLOCKCHAIN },
        { name: 'Depin Development', description: 'Pioneering the future of DePIN-powered applications.', page: Page.BLOCKCHAIN },
        { name: 'Offshore Capacity Center', description: 'Build Your Offshore Tech Team with Ease.', page: Page.BLOCKCHAIN },
        { name: 'Chain Abstraction', description: 'Leverage our chain abstraction expertise to unify multi-chain operations.', page: Page.BLOCKCHAIN }
      ]
    },
    'Blockchain Frameworks': {
      title: 'Blockchain Frameworks',
      description: 'Cross-chain network environment to achieve high transaction throughput with no fail',
      items: [
        { name: 'Parity Substrate', description: 'Check out the opportunities provided by substrate blockchain development.', page: Page.BLOCKCHAIN },
        { name: 'Op Stack', description: 'Our OP Stack solutions drive your digital infrastructure to success.', page: Page.BLOCKCHAIN },
        { name: 'Arbitrum Orbit', description: 'Unlock efficiency and scalability with our Arbitrum Orbit solution today!', page: Page.BLOCKCHAIN },
        { name: 'Polkadot Parachains', description: 'Launch customizable chains with Polkadot Parachains efficiently.', page: Page.BLOCKCHAIN },
        { name: 'Avalanche Subnets', description: 'Achieve Unparalleled Blockchain Scalability with Avalanche Subnets.', page: Page.BLOCKCHAIN },
        { name: 'Cosmos SDK', description: 'Develop custom chains with Cosmos SDK to boost your business growth.', page: Page.BLOCKCHAIN }
      ]
    },
    'L1 & L2 Solutions': {
      title: 'Layer 1 & Layer 2 Solutions',
      description: 'Participate in the blockchain market with a secure blockchain network',
      items: [
        { name: 'BSC', description: 'Use BSC as the right option for decentralized application development.', page: Page.BLOCKCHAIN },
        { name: 'Solana', description: 'Empower decentralized application development in a more efficient manner.', page: Page.BLOCKCHAIN },
        { name: 'Cardano', description: 'Develop & deploy fast, scalable, and eco-friendly dApps with Cardano.', page: Page.BLOCKCHAIN },
        { name: 'Ethereum', description: 'Launch next-gen secure and scalable platforms with Ethereum solutions.', page: Page.BLOCKCHAIN }
      ]
    },
    'Enterprise Blockchain': {
      title: 'Enterprise Blockchain',
      description: 'Modular blockchain solutions for a smart, safe, and sustainable enterprise ecosystem',
      items: [
        { name: 'Finance', description: 'Bring greater security, transparency, and speed to financial transactions.', page: Page.BLOCKCHAIN },
        { name: 'Supply Chain', description: 'Total visibility, transparency, & full-asset control across networks.', page: Page.BLOCKCHAIN },
        { name: 'Healthcare', description: 'Eliminate issues of fraud and expensive treatments in healthcare.', page: Page.BLOCKCHAIN }
      ]
    }
  },
  'AI': {
    'Artificial Intelligence': {
      title: 'Artificial Intelligence',
      description: 'Unlock the power of AI & ML to restructure your approach towards business operations',
      items: [
        { name: 'AI ML Solutions', description: 'Capitalize on the potential of AI & ML for strategic business operations.', page: Page.AI }
      ]
    },
    'Generative AI': {
      title: 'Generative AI',
      description: 'Automate your business innovation and growth with generative AI development',
      items: [
        { name: 'Generative Ai Development', description: 'Stay ahead of the AI curve with our generative AI development services.', page: Page.AI }
      ]
    },
    'AI Agents': {
      title: 'AI Agents',
      description: 'Supercharge your Workflows with our AI Agent Solutions',
      items: [
        { name: 'AI Agent Development', description: 'Transforming Industries with our Intelligent AI Agent Solutions.', page: Page.AI }
      ]
    }
  },
  'Gaming': {
    'Gaming': {
      title: 'Gaming',
      description: 'Get ready to embark on an epic journey of gaming development!',
      items: [
        { name: 'AAA Game Development', description: 'Unrivaled AAA Game Development: From Concept to Blockbuster.', page: Page.GAMING },
        { name: 'Web3 Game Development', description: 'Amplify your gaming experience with the help of web 3.0.', page: Page.GAMING },
        { name: 'Tap To Earn Game', description: 'Play, Tap, and Prosper in a Game Where Every Click Transforms.', page: Page.GAMING }
      ]
    },
    'Metaverse': {
      title: 'Metaverse',
      description: 'Build larger-than-life, immersive & real 3D experiences for your customers',
      items: [
        { name: 'Metaverse Development', description: 'End-to-end solutions to facilitate your entry into the metaverse.', page: Page.GAMING },
        { name: 'Metaverse App Development', description: 'Tap into the metaverse with enterprise-focused application development.', page: Page.GAMING }
      ]
    },
    'Metaverse Industries': {
      title: 'Metaverse Industries',
      description: 'Metaverse Revolution Transforming Industries Across the Board',
      items: [
        { name: 'Metaverse Casino Game', description: 'Transforming Casino Gaming for the Metaverse Era with Virtual Jackpots.', page: Page.GAMING },
        { name: 'Metaverse For Education', description: 'Enter into the future of learning by implementing metaverse in education.', page: Page.GAMING }
      ]
    }
  },
  'Consulting': {
    'Consulting': {
      title: 'Consulting',
      description: 'We empower your business through blockchain consulting expertise that provides lasting gains.',
      items: [
        { name: 'Blockchain Consulting', description: 'Ours is a blockchain consulting and solution provider company.', page: Page.CONSULTING },
        { name: 'Web3 Consulting', description: 'Creating Web3 ecosystems for leveraging the benefits of technology.', page: Page.CONSULTING }
      ]
    },
    'Legal Consulting': {
      title: 'Legal Consulting',
      description: 'From licensing to regulations, we guide you through every legal step in Web3.',
      items: [
        { name: 'Web3 Legal Consulting Firm', description: 'Simplify Crypto Licensing & Compliance Across Jurisdictions.', page: Page.CONSULTING }
      ]
    },
    'Marketing As A Service': {
      title: 'Marketing As A Service (MAAS)',
      description: 'Elevate Your Web3 Projects with Our Comprehensive Marketing Approach.',
      items: [
        { name: 'Marketing As A Service', description: 'We deliver tailor-made and agile marketing solutions.', page: Page.CONSULTING }
      ]
    }
  },
  'Solutions': {
    'Exchange': {
      title: 'Exchange',
      description: 'Enter the market with the best-in-class crypto exchange development services.',
      items: [
        { name: 'Custom Exchange', description: 'Develop your competitive enterprise-level custom exchange from scratch.', page: Page.SOLUTIONS },
        { name: 'White Label Exchange', description: 'Gear up your revenue stream using a ready-made white label exchange.', page: Page.SOLUTIONS }
      ]
    },
    'Wallet': {
      title: 'Wallet',
      description: 'Solutions that help users enjoy transactions in a speedier & secure environment.',
      items: [
        { name: 'Digital Wallet', description: 'Robust & secure wallet solutions for storing & transferring digital assets.', page: Page.SOLUTIONS },
        { name: 'MPC Crypto Wallet', description: 'MPC wallet streamlines digital asset access & safeguards private keys.', page: Page.SOLUTIONS }
      ]
    },
    'NFT': {
      title: 'NFT',
      description: 'Solutions that help users enjoy transactions in a speedier & secure environment.',
      items: [
        { name: 'NFT Development', description: 'Build decentralized non-fungible tokens aligned with business needs.', page: Page.SOLUTIONS },
        { name: 'NFT Marketplace', description: 'Top-performing marketplaces for users to mint, sell, buy, and trade NFTs.', page: Page.SOLUTIONS }
      ]
    },
    'Digital Banking': {
      title: 'Digital Banking',
      description: 'Empowering millions of digital assets holders to use digital banking facilities.',
      items: [
        { name: 'Digital Banking', description: 'Digital bank with industry-leading features and state-of-the-art infrastructure.', page: Page.SOLUTIONS },
        { name: 'Payment Gateway', description: 'Get Customized Payment Gateway Solutions For Secured Transactions.', page: Page.SOLUTIONS }
      ]
    }
  },
  'Industries': {
    'Govt.': {
      title: 'Government',
      description: 'Share data over a distributed ledger that is secured using cryptography.',
      items: [
        { name: 'G2C', description: 'Improve existing G2C services with blockchain-driven intelligent analytics.', page: Page.INDUSTRIES },
        { name: 'Digital Identity', description: 'Secure digital identities with a decentralized management system.', page: Page.INDUSTRIES }
      ]
    },
    'BFSI': {
      title: 'BFSI',
      description: 'Launch your digital asset bank with digital banking solutions.',
      items: [
        { name: 'CBDC', description: 'Leverage near real-time data with a monetary system to solidify banking.', page: Page.INDUSTRIES },
        { name: 'KYC & AML', description: 'Streamline the KYC process and manage the entire user lifecycle.', page: Page.INDUSTRIES }
      ]
    }
  },
  'About Us': {
    'Company': {
      title: 'Company',
      description: 'Seize opportunities from disruption to deliver transformational outcomes for a decentralized digital world.',
      items: [
        { name: 'About Us', description: 'Fostering innovation to steer digital transformation.', page: Page.ABOUT },
        { name: 'Partners', description: 'Our partner-centric programs equip partners with what they require.', page: Page.ABOUT },
        { name: 'Contact Us', description: 'Get in touch with us for a friendly chat to work out if we can help.', page: Page.CONTACT }
      ]
    }
  }
};

const navItems: NavItem[] = [
  { label: 'Blockchain', page: Page.BLOCKCHAIN, hasMegaMenu: true, megaMenuData: megaMenuData['Blockchain'] },
  { label: 'AI', page: Page.AI, hasMegaMenu: true, megaMenuData: megaMenuData['AI'] },
  { label: 'Gaming', page: Page.GAMING, hasMegaMenu: true, megaMenuData: megaMenuData['Gaming'] },
  { label: 'Consulting', page: Page.CONSULTING, hasMegaMenu: true, megaMenuData: megaMenuData['Consulting'] },
  { label: 'Solutions', page: Page.SOLUTIONS, hasMegaMenu: true, megaMenuData: megaMenuData['Solutions'] },
];

const Navbar: React.FC = () => {
  const { navigateTo, currentPage } = useContext(NavigationContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubTab, setActiveSubTab] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuEnter = (item: NavItem) => {
    if (item.hasMegaMenu) {
      setActiveMenu(item.label);
      const firstTab = Object.keys(item.megaMenuData || {})[0];
      setActiveSubTab(firstTab);
    } else {
      setActiveMenu(null);
    }
  };

  const currentItem = navItems.find(i => i.label === activeMenu);
  const currentSubData = activeSubTab && currentItem?.megaMenuData ? currentItem.megaMenuData[activeSubTab] : null;

  const allNavItemsForMobile = [
    ...navItems,
    { label: 'Industries', page: Page.INDUSTRIES, hasMegaMenu: true, megaMenuData: megaMenuData['Industries'] },
    { label: 'About Us', page: Page.ABOUT, hasMegaMenu: true, megaMenuData: megaMenuData['About Us'] },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled || activeMenu ? 'bg-brand-dark/95 backdrop-blur-xl border-b border-white/5 shadow-2xl py-3' : 'bg-transparent py-6'}`}
         onMouseLeave={() => setActiveMenu(null)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-6 lg:gap-12">
          <button className="lg:hidden p-2 text-white hover:text-brand-electricBlue transition-colors" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6" />
          </button>

          <button onClick={() => navigateTo(Page.HOME)} className="font-black text-2xl text-white font-orbitron tracking-tighter uppercase">
            ECOM<span className="text-brand-electricBlue">CLEAR</span>
          </button>
          
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group" onMouseEnter={() => handleMenuEnter(item)}>
                <button 
                  onClick={() => navigateTo(item.page)}
                  className={`px-4 py-2 text-[11px] font-bold tracking-widest uppercase font-orbitron flex items-center gap-1.5 transition-colors ${currentPage === item.page ? 'text-brand-electricBlue bg-white/5' : 'text-white/60 hover:text-white'}`}
                >
                  {item.label}
                  {item.hasMegaMenu && <ChevronDown className={`w-3 h-3 transition-transform ${activeMenu === item.label ? 'rotate-180' : ''}`} />}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
           <button onClick={() => navigateTo(Page.CONTACT)} className="bg-brand-gold hover:bg-white text-brand-dark px-4 lg:px-6 py-2.5 font-bold text-[10px] tracking-widest uppercase font-orbitron transition-all">Get in touch</button>
        </div>
      </div>

      {activeMenu && currentItem?.megaMenuData && (
        <div className="hidden lg:block absolute left-0 w-full bg-brand-deepBlue border-t border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] animate-fade-in origin-top">
          <div className="max-w-7xl mx-auto flex min-h-[480px]">
            <div className="w-1/4 bg-brand-dark/40 border-r border-white/5 py-8">
              {Object.keys(currentItem.megaMenuData).map((tab) => (
                <div key={tab} onMouseEnter={() => setActiveSubTab(tab)}
                     className={`px-8 py-4 cursor-pointer flex justify-between items-center transition-all border-l-4 ${activeSubTab === tab ? 'border-brand-electricBlue bg-brand-electricBlue/5 text-brand-electricBlue' : 'border-transparent text-white/40 hover:text-white'}`}>
                  <span className="text-[11px] font-black uppercase tracking-widest font-orbitron">{tab}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeSubTab === tab ? 'translate-x-1' : 'opacity-0'}`} />
                </div>
              ))}
            </div>

            <div className="w-3/4 p-12 overflow-y-auto">
              {currentSubData && (
                <div className="animate-fade-in">
                  <div className="mb-10 border-b border-white/5 pb-8">
                    <h3 className="text-2xl font-black text-white font-orbitron uppercase mb-3 tracking-tight">
                      {currentSubData.title}
                    </h3>
                    <p className="text-gray-500 text-sm max-w-2xl font-light leading-relaxed">
                      {currentSubData.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {currentSubData.items.map((item: any, idx: number) => (
                      <button 
                        key={idx} 
                        onClick={() => { navigateTo(item.page); setActiveMenu(null); }}
                        className="group block text-left"
                      >
                        <div className="w-24 h-0.5 bg-brand-electricBlue/30 group-hover:bg-brand-electricBlue transition-colors mb-4"></div>
                        <h4 className="text-sm font-black text-white font-orbitron uppercase mb-2 group-hover:text-brand-electricBlue transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-brand-dark/80 backdrop-blur-sm z-[110]" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-[320px] bg-brand-dark z-[120] p-8 border-r border-white/10 shadow-2xl animate-fade-in-right overflow-y-auto">
            <div className="flex justify-between items-center mb-12">
              <span className="text-brand-electricBlue font-bold tracking-widest uppercase text-xs font-orbitron">Explore Services</span>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-brand-electricBlue transition-colors">
                <X className="w-6 h-6"/>
              </button>
            </div>
            
            <div className="space-y-8">
              {allNavItemsForMobile.map((item) => (
                <div key={item.label} className="group">
                  <button 
                    onClick={() => { navigateTo(item.page); setIsOpen(false); }}
                    className="text-xl font-black text-white uppercase font-orbitron tracking-tighter hover:text-brand-electricBlue transition-colors block mb-4 w-full text-left"
                  >
                    {item.label}
                  </button>
                  {item.megaMenuData && (
                    <div className="pl-4 border-l border-white/5 space-y-4">
                      {Object.keys(item.megaMenuData).map(subTab => (
                        <div key={subTab}>
                          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block mb-2">{subTab}</span>
                          <div className="space-y-2">
                            {item.megaMenuData![subTab].items.slice(0, 3).map((subItem: any) => (
                              <button 
                                key={subItem.name} 
                                onClick={() => { navigateTo(subItem.page); setIsOpen(false); }}
                                className="text-[11px] text-gray-400 hover:text-white transition-colors block w-full text-left"
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <button 
                onClick={() => { navigateTo(Page.CONTACT); setIsOpen(false); }}
                className="w-full bg-brand-electricBlue text-brand-dark px-6 py-4 font-black text-xs tracking-widest uppercase font-orbitron block text-center shadow-[0_0_20px_rgba(0,242,255,0.2)]"
              >
                Get in touch
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
