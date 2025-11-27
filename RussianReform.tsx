import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  { year: '2000', title: 'Создание', desc: 'Указ Президента. Консультативная площадка ("расширенное совещание").' },
  { year: '2020', title: 'Поправки к Конституции', desc: 'Ст. 83. Госсовет становится конституционным государственным органом. Понятие "Единая система публичной власти".' },
  { year: '2020 (Дек)', title: 'ФЗ № 394', desc: 'Закон закрепил статус: координация, стратегическое планирование, но без властных полномочий.' },
  { year: '2023', title: 'Постановление КС РФ', desc: 'Развитие концепции единой системы публичной власти и роль Госсовета в согласовании.' },
];

export const RussianReform: React.FC = () => {
  return (
    <section id="russia" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-sans font-bold mb-6">Российская Траектория</h2>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed font-sans">
            От совещательного органа к конституционному институту. Реформа 2020 года открыла новые возможности, но оставила открытым вопрос о функциональном наполнении.
          </p>
          <div className="p-6 bg-stone-900 text-stone-50 rounded-lg shadow-xl">
             <h4 className="text-xl font-bold mb-4 font-sans">Вызовы</h4>
             <p className="text-stone-300 text-sm leading-relaxed mb-4 font-sans">
               Конституционный Суд РФ (Постановление 2020 г.) подчеркнул, что Госсовет не должен подменять собой ветви власти. Он не может быть "четвертой властью".
             </p>
             <div className="w-full h-px bg-stone-700 my-4"></div>
             <p className="font-sans text-lg">
               "Орган стратегической координации, а не властных решений."
             </p>
          </div>
        </div>

        <div className="relative border-l border-stone-300 ml-4 md:ml-0 pl-8 md:pl-12 py-4">
           {timelineData.map((item, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="mb-12 relative"
             >
               <span className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-stone-900 border-4 border-stone-50"></span>
               <span className="text-sm font-bold text-stone-400 font-sans tracking-widest">{item.year}</span>
               <h3 className="text-2xl font-sans font-bold mt-1 mb-2">{item.title}</h3>
               <p className="text-stone-600 font-sans">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};