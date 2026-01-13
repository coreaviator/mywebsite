import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onPageChange: (page: string) => void;
  currentPage: string;
  onReviewClick: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onPageChange, 
  currentPage, 
  onReviewClick, 
  isDarkMode, 
  toggleDarkMode 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onPageChange(page);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md py-3 shadow-lg' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Replacement */}
        <div 
          className="cursor-pointer flex items-center" 
          onClick={() => handleNavClick('home')}
        >
          <img 
            src="assets/flat_logo_transparent.png" 
            alt="Core Aviator" 
            className="h-10 md:h-12 w-auto" 
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => handleNavClick('ppl')}
            className={`font-bold text-sm uppercase tracking-widest transition-colors ${
              currentPage === 'ppl' ? 'text-blue-600' : 'hover:text-blue-500'
            }`}
          >
            Private Pilot
          </button>
          <button 
            onClick={() => handleNavClick('discovery')}
            className={`font-bold text-sm uppercase tracking-widest transition-colors ${
              currentPage === 'discovery' ? 'text-blue-600' : 'hover:text-blue-500'
            }`}
          >
            Discovery Flight
          </button>
          <button 
            onClick={() => handleNavClick('blog')}
            className={`font-bold text-sm uppercase tracking-widest transition-colors ${
              currentPage === 'blog' ? 'text-blue-600' : 'hover:text-blue-500'
            }`}
          >
            Blog
          </button>
          
          <div className="h-6 w-[1px] bg-slate-300 dark:bg-slate-700 mx-2" />

          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
          
          <button 
            onClick={() => handleNavClick('contact')}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-blue-700 transition-all hover:shadow-lg"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Icon (Simplified for this rewrite) */}
        <div className="md:hidden">
          <button onClick={() => handleNavClick('home')} className="text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
