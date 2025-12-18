
import React, { useState } from 'react';
import { X, Shield, Mail, ArrowRight, Loader2, Smartphone } from 'lucide-react';

interface UserOnboardingProps {
  onClose: () => void;
  onSuccess: (email: string) => void;
}

const UserOnboarding: React.FC<UserOnboardingProps> = ({ onClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'checking' | 'error' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // Mock list of "already registered" emails for demonstration
  const registeredUsers = ['admin@ecomclear.com', 'test@user.com', 'client@enterprise.com'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('checking');
    setErrorMsg('');

    // Simulate database lookup delay
    setTimeout(() => {
      if (registeredUsers.includes(email.toLowerCase())) {
        setStatus('error');
        setErrorMsg("This mobile number or email is already registered. Please login instead.");
      } else {
        setStatus('success');
        setTimeout(() => {
          onSuccess(email);
        }, 1000);
      }
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-brand-dark/95 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-md glass-panel p-10 border-brand-electricBlue/30 relative overflow-hidden">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>

        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-brand-electricBlue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-brand-electricBlue/20">
            <Shield className="w-8 h-8 text-brand-electricBlue" />
          </div>
          <h2 className="text-2xl font-black text-white font-orbitron uppercase tracking-tighter mb-2">Secure Gateway</h2>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Verify Institutional Identity</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] ml-1">Identity Probe</label>
            <div className="relative">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER_EMAIL_OR_MOBILE"
                className={`w-full bg-brand-dark/50 border-b-2 ${status === 'error' ? 'border-red-500' : 'border-white/10'} rounded-none px-10 py-4 text-white focus:outline-none focus:border-brand-electricBlue transition-all placeholder:text-gray-800 font-mono`}
              />
              <Mail className="w-4 h-4 text-gray-600 absolute left-2 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-500 text-[10px] font-black uppercase tracking-widest text-center animate-shake">
              {errorMsg}
            </div>
          )}

          <button 
            type="submit" 
            disabled={status === 'checking'}
            className="w-full bg-brand-electricBlue hover:bg-white text-brand-dark font-black py-5 rounded-none transition-all flex items-center justify-center gap-3 disabled:opacity-50 uppercase text-xs tracking-[0.2em] shadow-[0_0_30px_rgba(0,242,255,0.2)]"
          >
            {status === 'checking' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> SCANNING_DATABASE...
              </>
            ) : status === 'success' ? (
              "IDENTITY_VERIFIED"
            ) : (
              <>
                ACCESS_CORE <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-white/5 flex justify-center gap-6">
           <Smartphone className="w-4 h-4 text-gray-700" />
           <Smartphone className="w-4 h-4 text-gray-700" />
           <Smartphone className="w-4 h-4 text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default UserOnboarding;
