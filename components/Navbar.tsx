
import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

interface NavbarProps {
  onPageChange: (page: string) => void;
  currentPage: string;
  onReviewClick: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onPageChange, currentPage, onReviewClick, isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'ppl', label: 'Private Pilot' },
    { id: 'discovery', label: 'Discovery' },
    { id: 'blog', label: 'Blog' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Contact' },
  ];

  const activeStyles = "text-primary dark:text-primary";
  const inactiveStyles = isDarkMode ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-primary";

  return (
    <div className="fixed w-full z-50 px-4 py-4 pointer-events-none">
      <nav className={`container mx-auto max-w-7xl rounded-full glass-nav transition-all duration-500 pointer-events-auto border ${isScrolled
          ? (isDarkMode ? 'bg-slate-900/80 border-slate-700 shadow-2xl' : 'bg-white/80 border-slate-200 shadow-xl')
          : (isDarkMode ? 'bg-slate-950/20 border-white/10' : 'bg-white/40 border-black/5')
        }`}>
        <div className="flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => onPageChange('home')}>
            <img src={logo} alt="Core Aviator" className="h-14 w-auto object-contain transition-transform group-hover:scale-105" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${currentPage === item.id ? activeStyles : inactiveStyles
                  }`}
              >
                {item.label}
              </button>
            ))}

            <div className="h-6 w-[1px] bg-slate-400/20 mx-2"></div>

            <button
              onClick={toggleDarkMode}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDarkMode ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-slate-600'
                }`}
            >
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>

            <button
              onClick={onReviewClick}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-black text-xs shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-0.5"
            >
              LEAVE REVIEW
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-2xl p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} ${isDarkMode ? 'text-white' : 'text-slate-900'}`}></i>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden rounded-b-[2rem] p-6 flex flex-col space-y-4 animate-fadeIn border-t ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'
            }`}>
            {navItems.map(item => (
              <button key={item.id} onClick={() => { onPageChange(item.id); setIsMobileMenuOpen(false); }} className={`text-left font-bold text-lg ${currentPage === item.id ? 'text-primary' : (isDarkMode ? 'text-white' : 'text-slate-800')}`}>
                {item.label}
              </button>
            ))}
            <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-800">
              <button onClick={toggleDarkMode} className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
                <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} ${isDarkMode ? 'text-yellow-400' : 'text-slate-600'}`}></i>
              </button>
              <button onClick={() => { onReviewClick(); setIsMobileMenuOpen(false); }} className="flex-grow ml-4 py-3 bg-primary text-white font-bold rounded-xl shadow-lg">Leave Review</button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
