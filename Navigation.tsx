import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Введение', id: 'intro' },
  { label: 'Модель Франции', id: 'france' },
  { label: 'Реформа 2020', id: 'russia' },
  { label: 'ИИ и Управление', id: 'ai' },
  { label: 'Заключение', id: 'conclusion' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Dynamic text color based on scroll state
  const textColorClass = scrolled ? 'text-stone-600 hover:text-stone-900' : 'text-stone-300 hover:text-white';
  const logoColorClass = scrolled ? 'text-stone-900' : 'text-white';
  const mobileMenuBg = scrolled ? 'bg-stone-50' : 'bg-stone-900';
  const mobileTextColor = scrolled ? 'text-stone-800' : 'text-stone-100';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-stone-50/90 backdrop-blur-md py-4 border-b border-stone-200' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Removed as requested, keeping a minimal placeholder or empty if desired. 
            The reference has 'JOHN DOE' in the corner, we will leave it empty or minimal 
            to keep the focus on the design. */}
        <div className={`text-xs font-sans tracking-[0.2em] font-bold cursor-pointer transition-colors ${logoColorClass}`} onClick={() => scrollToSection('hero')}>
          
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-xs uppercase tracking-widest transition-colors ${textColorClass}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={`p-2 ${logoColorClass}`}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`absolute top-full left-0 w-full ${mobileMenuBg} border-b border-stone-800 md:hidden flex flex-col items-center py-8 space-y-6 shadow-2xl`}>
           {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-lg font-sans ${mobileTextColor}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};