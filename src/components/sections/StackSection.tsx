import { motion } from 'framer-motion';
import { StackDeck, StackFooter } from '@/components/stack';

export const StackSection: React.FC = () => {
  return (
    <section
      id="stack"
      className="w-full lg:w-screen lg:min-w-[100vw] h-auto min-h-screen lg:h-screen flex-shrink-0 flex flex-col justify-between px-6 sm:px-10 lg:pl-12 lg:pr-28 pt-14 pb-16 lg:pt-14 lg:pb-16 relative select-none lg:snap-start overflow-hidden bg-gradient-to-b from-[#090716] via-[#0b081a] to-[#090716]"
    >
      {/* Background Ambient Radial Glow Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Stacked Photo Deck Viewport with Scroll Reveal Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 flex flex-col justify-center my-auto py-2 z-10"
      >
        <StackDeck />
      </motion.div>

      {/* Bottom Footer Bar */}
      <StackFooter />
    </section>
  );
};
