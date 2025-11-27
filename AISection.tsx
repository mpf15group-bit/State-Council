import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, UserCheck, AlertTriangle } from 'lucide-react';

export const AISection: React.FC = () => {
  return (
    <section id="ai" className="py-24 bg-stone-900 text-stone-50 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
           <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
             <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
           </pattern>
           <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6">Цифровой Вызов</h2>
          <p className="text-xl text-stone-300 leading-relaxed font-sans">
            Внедрение ИИ в госуправление (виртуальные министры, чат-боты) порождает новые правовые споры. Может ли Госсовет РФ стать арбитром в "цифровых" конфликтах?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Albania */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-stone-800 p-8 rounded-xl border border-stone-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-blue-900/50 rounded-lg">
                <Cpu size={32} className="text-blue-300" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-sans">Diella (Албания)</h3>
                <span className="text-xs font-mono text-blue-300 uppercase">Эксперимент 2025</span>
              </div>
            </div>
            <p className="text-stone-400 mb-4 font-sans">
              Виртуальный "министр" на базе ИИ, интегрированный в платформу e-Albania. Мандат в сфере госзакупок для борьбы с коррупцией.
            </p>
            <div className="flex items-start space-x-2 text-yellow-500 text-sm bg-yellow-900/20 p-3 rounded font-sans">
              <AlertTriangle size={16} className="mt-0.5 flex-shrink-0" />
              <span>Проблемы: статус субъекта права, демократическая подотчетность, ответственность за ошибки алгоритма.</span>
            </div>
          </motion.div>

          {/* Card 2: Russia */}
          <motion.div 
             whileHover={{ y: -5 }}
             className="bg-stone-800 p-8 rounded-xl border border-stone-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-red-900/50 rounded-lg">
                <UserCheck size={32} className="text-red-300" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-sans">Робот Макс (РФ)</h3>
                <span className="text-xs font-mono text-red-300 uppercase">Госуслуги</span>
              </div>
            </div>
            <p className="text-stone-400 mb-4 font-sans">
              Эволюция от чат-бота до LLM-ассистента. Помогает в жизненных ситуациях, но ставит вопросы о прозрачности алгоритмических решений.
            </p>
            <div className="mt-4 border-t border-stone-700 pt-4">
               <h4 className="font-sans font-bold mb-2">Роль Госсовета РФ</h4>
               <p className="text-sm text-stone-300 font-sans">
                 Предлагается создать комиссию по цифровой трансформации и ИИ для досудебного разрешения споров и выработки "мягких" стандартов этики.
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};