import React from 'react';

interface FooterProps {
  onPageChange: (page: string) => void;
  onReviewClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange, onReviewClick }) => {
  
  const handleNavigate = (page: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onPageChange(page);
  };

  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo Replacement: Text and Icon removed for png logo */}
          <div 
            className="cursor-pointer" 
            onClick={() => handleNavigate('home')}
          >
            <img src="assets/flat_logo_transparent.png" alt="Core Aviator" className="h-12 w-auto" />
          </div>

          <div className="flex flex-wrap justify-center gap-8 font-bold text-sm uppercase tracking-widest">
            <button onClick={() => handleNavigate('ppl')} className="hover:text-blue-400 transition-colors">Private Pilot</button>
            <button onClick={() => handleNavigate('discovery')} className="hover:text-blue-400 transition-colors">Discovery Flight</button>
            <button onClick={() => handleNavigate('blog')} className="hover:text-blue-400 transition-colors">Blog</button>
            <button onClick={() => handleNavigate('contact')} className="hover:text-blue-400 transition-colors">Contact</button>
            <button onClick={onReviewClick} className="hover:text-blue-400 transition-colors">Leave Review</button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Core Aviator. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
