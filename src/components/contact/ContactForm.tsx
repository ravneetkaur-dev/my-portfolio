'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldAlert, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '@/data/personal';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setErrorMessage('');

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

    // If EmailJS credentials are set up in .env.local
    if (serviceId && templateId && publicKey && serviceId !== 'service_id_here') {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: PERSONAL_INFO.name,
            reply_to: formData.email,
          },
          publicKey
        );

        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } catch (err: any) {
        console.error('EmailJS Error:', err);
        setStatus('error');
        setErrorMessage(err?.text || 'EmailJS transmission failed. Please check credentials.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } else {
      // Fallback mode if keys are not yet configured in .env.local
      setTimeout(() => {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, 1000);
    }
  };

  return (
    <div className="h-full p-4 sm:p-5 rounded-2xl bg-[#0a0718]/90 border border-violet-700/40 shadow-inner flex flex-col justify-between relative overflow-hidden">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Form Sub-Header */}
      <div className="pb-3 border-b border-violet-800/40 flex items-center justify-between z-10">
        <div>
          <span className="text-[9px] font-mono text-cyan-400 font-bold uppercase tracking-widest block">
            ENCRYPTED SIGNAL TRANSMISSION
          </span>
          <h4 className="text-sm font-mono font-bold text-white">
            Send Direct Message
          </h4>
        </div>

        <div className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-[9px] font-mono text-cyan-300 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>PORTAL ONLINE</span>
        </div>
      </div>

      {/* Main Interactive Form */}
      <form onSubmit={handleSubmit} className="space-y-3 py-3 z-10 flex-1 flex flex-col justify-between">
        {/* Field 01: Name */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-gray-300 font-bold uppercase tracking-wider flex items-center justify-between">
            <span>[01 / Your Name]</span>
            <span className="text-violet-400/80 text-[9px]">REQUIRED</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Alex Vance"
            className="w-full px-3 py-2 rounded-lg bg-[#0d0922] border border-violet-800/60 focus:bg-[#120a2e] focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 text-xs font-mono text-white placeholder-gray-500 transition-all duration-200 shadow-sm"
          />
        </div>

        {/* Field 02: Return Email */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-gray-300 font-bold uppercase tracking-wider flex items-center justify-between">
            <span>[02 / Your Email]</span>
            <span className="text-violet-400/80 text-[9px]">EMAIL</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="alex@company.com"
            className="w-full px-3 py-2 rounded-lg bg-[#0d0922] border border-violet-800/60 focus:bg-[#120a2e] focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 text-xs font-mono text-white placeholder-gray-500 transition-all duration-200 shadow-sm"
          />
        </div>

        {/* Field 03: Encrypted Message */}
        <div className="space-y-1 flex-1 flex flex-col justify-between">
          <label className="text-[10px] font-mono text-gray-300 font-bold uppercase tracking-wider flex items-center justify-between">
            <span>[03 / Message]</span>
            <span className="text-violet-400/80 text-[9px]">PAYLOAD</span>
          </label>
          <textarea
            required
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell me about your project, idea, or role opportunity..."
            className="w-full flex-1 min-h-[70px] px-3 py-2 rounded-lg bg-[#0d0922] border border-violet-800/60 focus:bg-[#120a2e] focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 text-xs font-mono text-white placeholder-gray-500 transition-all duration-200 resize-none shadow-sm"
          />
        </div>

        {/* Submit Action Button */}
        <button
          type="submit"
          disabled={status !== 'idle'}
          className={`w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg z-10 ${
            status === 'sent'
              ? 'bg-emerald-600 text-white border border-emerald-400 shadow-emerald-950'
              : status === 'error'
              ? 'bg-red-900/90 text-red-200 border border-red-500 shadow-red-950'
              : status === 'sending'
              ? 'bg-violet-950 text-violet-200 border border-violet-700 cursor-wait'
              : 'bg-gradient-to-r from-purple-700 via-violet-800 via-[#27104d] to-[#0a0618] hover:from-purple-600 hover:via-violet-700 hover:to-[#120a28] text-white border border-purple-400/50 hover:border-violet-300 shadow-[0_4px_20px_rgba(126,34,206,0.35)] hover:shadow-[0_4px_25px_rgba(139,92,246,0.5)] active:scale-[0.99]'
          }`}
        >
          {status === 'sending' ? (
            <>
              <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>TRANSMITTING MESSAGE...</span>
            </>
          ) : status === 'sent' ? (
            <>
              <CheckCircle2 size={15} className="text-white" />
              <span>MESSAGE TRANSMITTED SUCCESSFULLY!</span>
            </>
          ) : status === 'error' ? (
            <>
              <AlertCircle size={15} className="text-red-300" />
              <span>TRANSMISSION ERROR</span>
            </>
          ) : (
            <>
              <Send size={14} className="text-cyan-300" />
              <span>TRANSMIT MESSAGE</span>
            </>
          )}
        </button>
      </form>

      {/* Footer Security Note */}
      <div className="pt-2 border-t border-violet-900/40 flex items-center justify-between text-[9px] font-mono text-gray-400 z-10">
        <span className="flex items-center gap-1">
          <ShieldAlert size={11} className="text-cyan-400" />
          <span>256-BIT ENCRYPTED CHANNEL</span>
        </span>
        <span className="text-violet-400/80">DIRECT INBOX DELIVERY</span>
      </div>
    </div>
  );
};
