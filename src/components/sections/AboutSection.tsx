import { motion } from 'framer-motion';
import { SectionId } from '@/types/navigation';
import {
  AboutHeader,
  AboutHeadline,
  AboutStory,
  ThoughtTerminal,
  AboutFooter,
} from '@/components/about';

interface AboutSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section
      id="about"
      className="w-full lg:w-screen lg:min-w-[100vw] h-auto min-h-screen lg:h-screen flex-shrink-0 flex flex-col justify-between px-6 sm:px-10 lg:pl-12 lg:pr-28 pt-14 pb-16 lg:pt-14 lg:pb-16 relative select-none lg:snap-start overflow-hidden bg-gradient-to-b from-[#090716] via-[#0b081c] to-[#0c0919]"
    >
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Whole Section Content with Smooth Scroll Entrance Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 flex flex-col justify-between z-10 my-auto py-1 h-full"
      >
        {/* Top Header */}
        <AboutHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center my-auto py-2">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-4 lg:space-y-6">
            <AboutHeadline />
            <AboutStory />
          </div>

          {/* Right Column: Thought Terminal */}
          <div className="lg:col-span-5 space-y-4">
            <ThoughtTerminal />
          </div>
        </div>

        {/* Bottom Footer */}
        <AboutFooter />
      </motion.div>
    </section>
  );
};
