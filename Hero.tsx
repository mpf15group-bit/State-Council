import React from 'react';
import { motion } from 'framer-motion';
import { HeroScene } from './Visuals/FluidShader';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center overflow-hidden bg-black">
      <HeroScene className="opacity-100" />
      
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center h-full">
          
          <div className="md:col-span-8 pt-20 md:pt-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-[10vw] md:text-[6.5rem] font-sans font-bold text-stone-100 tracking-tighter leading-[0.9] mix-blend-difference mb-8">
                ГОСУДАРСТВЕННЫЙ
                <span className="text-stone-100 block mt-2 md:mt-4">СОВЕТ</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-lg"
            >
              <p className="text-xs md:text-sm font-mono text-stone-400 mb-12 uppercase tracking-tight leading-relaxed">
                Сравнительный анализ институтов публичного управления:<br />
                Опыт Франции и перспективы России.
              </p>

              <a 
                href="mailto:tatarchenkoea@my.msu.ru"
                className="pointer-events-auto inline-block group relative px-8 py-3 bg-transparent border border-stone-700 text-stone-300 text-xs font-mono uppercase tracking-[0.2em] hover:bg-stone-100 hover:text-black transition-all duration-300"
              >
                <span className="relative z-10">Татарченко Е. А.</span>
                <div className="absolute inset-0 bg-stone-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></div>
              </a>
            </motion.div>
          </div>
          
          {/* Spacer for the 3D element which is in the background canvas */}
          <div className="md:col-span-4 h-full pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};