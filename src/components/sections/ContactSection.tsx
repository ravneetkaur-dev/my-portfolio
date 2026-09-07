import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ContactHeader, ContactChannels, ContactForm } from '@/components/contact';
import { FooterSheet } from '@/components/common/Footer';
import { SectionId } from '@/types/navigation';
import { ChevronRight } from 'lucide-react';

interface ContactSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <section
      id="contact"
      className="w-full lg:w-screen lg:min-w-[100vw] h-auto min-h-screen lg:h-screen flex-shrink-0 flex flex-col justify-between px-6 sm:px-10 lg:pl-12 lg:pr-28 pt-14 pb-16 lg:pt-14 lg:pb-16 relative select-none lg:snap-start overflow-hidden bg-gradient-to-b from-[#090716] via-[#060410] to-[#05040d]"
    >
      {/* Background Ambient Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container with Scroll Reveal Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-4xl mx-auto space-y-3 z-10 flex flex-col justify-center flex-1 my-auto relative py-1"
      >
        {/* Top Section Sub-Header */}
        <ContactHeader />

        {/* 3D CYBERPUNK CONTACT TERMINAL CONSOLE WRAPPER */}
        <div className="relative w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full h-auto min-h-[380px] lg:h-[440px] p-4 sm:p-5 lg:p-6 rounded-[28px] bg-gradient-to-br from-[#130b2c]/90 via-[#0e0822]/95 to-[#070414]/90 border-2 border-violet-500/40 shadow-[0_25px_65px_rgba(139,92,246,0.25)] relative overflow-hidden backdrop-blur-md"
          >
            {/* Cybernetic Corner Bracket Highlights */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400/70 pointer-events-none" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400/70 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400/70 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400/70 pointer-events-none" />

            {/* Grid Layout: Left Channels (span 6) & Right Form (span 6) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 h-full items-stretch overflow-y-auto lg:overflow-visible">
              {/* Left Column: Direct Communication Channels & Social Orbit Cards */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-3 lg:space-y-0">
                <ContactChannels />
              </div>

              {/* Right Column: Encrypted Signal Transmission Console Form */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-3 lg:space-y-0 pt-4 lg:pt-0 border-t border-violet-900/40 lg:border-t-0">
                <ContactForm />
              </div>
            </div>
          </motion.div>

          {/* Floating Side Right Navigation Arrow Button directly beside the Right Side of the Contact Form Card (Desktop lg: 1024px+) */}
          <motion.button
            key="footer-arrow-button"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.15, x: 4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsSheetOpen(true)}
            className="hidden lg:flex absolute -right-14 lg:-right-16 xl:-right-20 top-1/2 -translate-y-1/2 z-50 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#0c0920]/95 hover:bg-[#160d38] border-2 border-violet-500/70 hover:border-violet-300 text-violet-300 hover:text-white shadow-2xl shadow-violet-950/90 items-center justify-center cursor-pointer transition-all duration-200 group"
            title="Open Footer & Credits Sheet (Right Arrow)"
          >
            <motion.div
              animate={{ x: [1.5, -1.5, 1.5] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
            >
              <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>

      {/* Desktop Slide-Out Footer Sheet Drawer Panel */}
      <FooterSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} onNavigate={onNavigate} />
    </section>
  );
};
