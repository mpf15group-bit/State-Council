import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { IntroSection } from './components/Sections/IntroSection';
import { FrenchModel } from './components/Sections/FrenchModel';
import { RussianReform } from './components/Sections/RussianReform';
import { AISection } from './components/Sections/AISection';
import { Conclusion } from './components/Sections/Conclusion';

function App() {
  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 font-sans selection:bg-stone-300">
      <Navigation />
      
      <main>
        <Hero />
        <IntroSection />
        <FrenchModel />
        <RussianReform />
        <AISection />
        <Conclusion />
      </main>
    </div>
  );
}

export default App;