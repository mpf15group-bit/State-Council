import React from 'react';
import { CheckCircle } from 'lucide-react';

export const Conclusion: React.FC = () => {
  return (
    <section id="conclusion" className="py-24 px-6 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-sans font-bold text-center mb-12">Практические Предложения</h2>
        
        <div className="space-y-6">
          <div className="flex items-start group">
            <CheckCircle className="text-green-700 mt-1 mr-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-xl font-bold text-stone-900 font-sans">Превентивная экспертиза</h3>
              <p className="text-stone-600 mt-1 font-sans">
                Внедрение обязательной экспертизы ключевых законопроектов Госсоветом РФ (без права вето, но с авторитетным заключением), как это делает Conseil d'État.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-stone-200"></div>

          <div className="flex items-start group">
            <CheckCircle className="text-green-700 mt-1 mr-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-xl font-bold text-stone-900 font-sans">Согласительные процедуры</h3>
              <p className="text-stone-600 mt-1 font-sans">
                Детализация механизма разрешения разногласий между уровнями публичной власти (Федерация – Регионы – Муниципалитеты).
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-stone-200"></div>

          <div className="flex items-start group">
            <CheckCircle className="text-green-700 mt-1 mr-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-xl font-bold text-stone-900 font-sans">Аналитические доклады</h3>
              <p className="text-stone-600 mt-1 font-sans">
                Публикация ежегодных докладов по качеству госуправления (soft law), задающих ориентиры для судов и чиновников.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 p-8 bg-stone-200 text-center rounded-lg">
          <p className="font-sans text-lg text-stone-800">
            "Государственный совет РФ может стать не теневым парламентом, а интеллектуальным центром стратегической координации, сочетая традиции с цифровыми инновациями."
          </p>
        </div>
      </div>
      
      <footer className="mt-24 text-center text-stone-400 text-xs font-sans uppercase tracking-widest">
        tatarchenkoea@my.msu.ru © 2025
      </footer>
    </section>
  );
};