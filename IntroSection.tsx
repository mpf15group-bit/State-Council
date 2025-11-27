import React from 'react';
import { motion } from 'framer-motion';

export const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="sticky top-32"
          >
            <h2 className="text-3xl md:text-4xl font-sans font-bold leading-tight mb-6">
              Контекст<br/>Исследования
            </h2>
            <div className="h-1 w-24 bg-stone-900 mb-6"></div>
            <p className="text-sm font-sans text-stone-500 uppercase tracking-widest">
              Татарченко Е. А.
            </p>
          </motion.div>
        </div>
        <div className="md:col-span-8 space-y-8 text-lg text-stone-700 leading-relaxed font-sans">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-6xl float-left mr-3 mt-[-10px] font-bold text-stone-900">С</span>
            татья посвящена сравнительно-правовому анализу <strong>Государственного совета Франции</strong> (Conseil d'État) как эталонного института публичного управления. Цель работы — поиск практического опыта, который может быть адаптирован для Государственного совета Российской Федерации.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            В центре внимания — двойственная природа французского органа, совмещающего функции судьи и консультанта, а также перспективы эволюции российского аналога после конституционной реформы 2020 года.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-stone-200/50 p-8 rounded-lg border-l-4 border-stone-400 my-8"
          >
            <h3 className="text-xl font-bold mb-2 text-stone-900 font-sans">Ключевая гипотеза</h3>
            <p className="text-stone-600">
              Российский Госсовет не может слепо копировать судебные функции французского коллеги из-за различий в конституционном строе, но может перенять инструменты превентивной экспертизы, согласительных процедур и аналитики, особенно в эпоху цифровизации.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};