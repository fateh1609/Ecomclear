
import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  if (status === 'success') {
    return (
      <div className="glass-panel p-12 rounded-none text-center h-full flex flex-col items-center justify-center min-h-[400px] border-brand-emerald/40 border">
        <div className="w-20 h-20 bg-brand-emerald/10 text-brand-emerald rounded-full flex items-center justify-center mb-6 border border-brand-emerald/30 shadow-[0_0_30px_rgba(0,255,133,0.2)]">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-black text-white mb-4">INQUIRY RECEIVED.</h3>
        <p className="text-gray-400 max-w-sm">Our technical architects will review your project brief and respond via secure channel within 24 hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-10 text-brand-electricBlue hover:text-white transition-colors uppercase font-black text-sm tracking-[0.2em] border-b border-brand-electricBlue"
        >
          Send New Brief
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel p-10 rounded-none space-y-8 border-t-2 border-brand-electricBlue">
      <div>
        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Ready to Decentralize?</h3>
        <p className="text-xs text-brand-electricBlue font-bold tracking-[0.2em] mt-2 uppercase">Secure Lead Intake</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Full Name</label>
          <input 
            type="text" 
            required
            className="w-full bg-brand-dark border-b border-white/10 rounded-none px-0 py-3 text-white focus:outline-none focus:border-brand-electricBlue transition-all placeholder:text-gray-800"
            placeholder="ID_VERIFIED_USER"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Institutional Email</label>
          <input 
            type="email" 
            required
            className="w-full bg-brand-dark border-b border-white/10 rounded-none px-0 py-3 text-white focus:outline-none focus:border-brand-electricBlue transition-all placeholder:text-gray-800"
            placeholder="SECURE_CHANNEL@DOMAIN.COM"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Engagement Type</label>
            <select 
              className="w-full bg-brand-dark border-b border-white/10 rounded-none px-0 py-3 text-white focus:outline-none focus:border-brand-electricBlue transition-all appearance-none cursor-pointer"
            >
              <option>Protocol Development</option>
              <option>MPC Wallet Integration</option>
              <option>Metaverse / Gaming Labs</option>
              <option>Strategic Tokenomics</option>
              <option>Security Audit</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Project Scale (USD)</label>
            <select 
              className="w-full bg-brand-dark border-b border-white/10 rounded-none px-0 py-3 text-white focus:outline-none focus:border-brand-electricBlue transition-all appearance-none cursor-pointer"
            >
              <option>$50k - $250k</option>
              <option>$250k - $1M</option>
              <option>$1M - $10M</option>
              <option>$10M+</option>
            </select>
          </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Technical Requirements</label>
        <textarea 
          rows={3} 
          required
          className="w-full bg-brand-dark border-b border-white/10 rounded-none px-0 py-3 text-white focus:outline-none focus:border-brand-electricBlue transition-all placeholder:text-gray-800 resize-none"
          placeholder="BRIEFING_DATA_INPUT..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full bg-brand-electricBlue hover:bg-white text-brand-dark font-black py-5 rounded-none transition-all flex items-center justify-center gap-3 disabled:opacity-50 uppercase text-lg tracking-widest shadow-[0_0_40px_rgba(0,242,255,0.4)]"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-6 h-6 animate-spin" /> ENCRYPTING...
          </>
        ) : (
          <>
            INITIATE CONTACT <Send className="w-5 h-5" />
          </>
        )}
      </button>
      
      <p className="text-[10px] text-gray-600 text-center font-bold tracking-[0.2em] uppercase">
        Protected by Military-Grade Encryption. NDA Protocols Standard.
      </p>
    </form>
  );
};

export default ContactForm;
