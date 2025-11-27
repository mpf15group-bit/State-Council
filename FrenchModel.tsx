import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, FileText, ChevronRight } from 'lucide-react';

export const FrenchModel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'consultative' | 'judicial'>('consultative');

  return (
    <section id="france" className="py-24 bg-stone-100 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4">Conseil d'État</h2>
          <p className="text-stone-500 font-sans uppercase tracking-widest">Двойственная Природа</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Graphic */}
          <div className="relative h-[400px] flex items-center justify-center bg-stone-200 rounded-full overflow-hidden shadow-inner">
             <div className="absolute inset-0 bg-stone-50 opacity-50 rounded-full scale-90 blur-3xl"></div>
             
             <motion.div 
               animate={{ 
                 x: activeTab === 'consultative' ? -50 : 50,
                 rotate: activeTab === 'consultative' ? -5 : 5
               }}
               transition={{ type: "spring", stiffness: 100 }}
               className="relative z-10 bg-white w-64 h-64 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 text-center border border-stone-100"
             >
                {activeTab === 'consultative' ? (
                  <FileText size={48} className="text-blue-900 mb-4" />
                ) : (
                  <Scale size={48} className="text-red-900 mb-4" />
                )}
                <h3 className="text-xl font-bold font-sans mb-2">
                  {activeTab === 'consultative' ? 'Консультант' : 'Судья'}
                </h3>
                <p className="text-sm text-stone-500 font-sans">
                  {activeTab === 'consultative' 
                    ? 'Экспертиза законопроектов до их внесения в парламент.' 
                    : 'Высшая инстанция административной юстиции.'}
                </p>
             </motion.div>
          </div>

          {/* Controls & Content */}
          <div className="space-y-8">
            <div className="flex space-x-4 border-b border-stone-300 pb-4">
              <button 
                onClick={() => setActiveTab('consultative')}
                className={`text-lg font-sans pb-2 transition-colors ${activeTab === 'consultative' ? 'text-stone-900 font-bold border-b-2 border-stone-900' : 'text-stone-400'}`}
              >
                Административная роль
              </button>
              <button 
                onClick={() => setActiveTab('judicial')}
                className={`text-lg font-sans pb-2 transition-colors ${activeTab === 'judicial' ? 'text-stone-900 font-bold border-b-2 border-stone-900' : 'text-stone-400'}`}
              >
                Судебная роль
              </button>
            </div>

            <div className="h-64 relative">
              <AnimatePresence mode="wait">
                {activeTab === 'consultative' && (
                  <motion.div 
                    key="cons"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h4 className="text-2xl font-sans">Фильтр качества законов</h4>
                    <p className="text-stone-600 leading-relaxed font-sans">
                      Согласно ст. 39 Конституции 1958 г., проекты законов рассматриваются Государственным советом. Это "превентивная экспертиза", обеспечивающая юридическую чистоту актов.
                    </p>
                    <ul className="space-y-2 text-sm font-semibold text-stone-800 font-sans">
                      <li className="flex items-center"><ChevronRight size={16} className="mr-2"/> Проверка конституционности</li>
                      <li className="flex items-center"><ChevronRight size={16} className="mr-2"/> Анализ целесообразности</li>
                      <li className="flex items-center"><ChevronRight size={16} className="mr-2"/> Независимость суждений</li>
                    </ul>
                  </motion.div>
                )}
                
                {activeTab === 'judicial' && (
                  <motion.div 
                    key="jud"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h4 className="text-2xl font-sans">Административная юстиция</h4>
                    <p className="text-stone-600 leading-relaxed font-sans">
                      Кассационный пересмотр решений и прямая инстанция для актов общенационального значения (указы, ордонансы).
                    </p>
                    <div className="bg-white p-4 rounded shadow-sm border border-stone-200">
                      <p className="text-xs text-stone-400 uppercase mb-1 font-sans">Кейс</p>
                      <p className="font-bold text-stone-800 font-sans">Дело Dame Lamotte (1950)</p>
                      <p className="text-sm text-stone-600 mt-2 font-sans">Признание права на иск об отмене акта за превышение власти "общим принципом права".</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};