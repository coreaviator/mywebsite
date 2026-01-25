
import React from 'react';
import footerLogo from '../assets/flat_logo_transparent.png';

interface FooterProps {
  onPageChange: (page: string) => void;
  onReviewClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange, onReviewClick }) => {
  const socialLinks = [
    { name: 'facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/profile.php?id=61575953780621' },
    { name: 'instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/coreaviatortraining/' }
  ];

  return (
    <footer className="bg-slate-950 text-white pt-32 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <img src={footerLogo} alt="Core Aviator" className="h-16 w-auto" />
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              Elite flight training based at Page Field (FMY) in Fort Myers, FL. We specialize in precision mentorship for the next generation of captains.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-primary transition-all rounded-2xl flex items-center justify-center group"
                >
                  <i className={`${social.icon} group-hover:scale-110 transition-transform`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 text-primary uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-5 text-slate-400 font-bold">
              <li><button onClick={() => onPageChange('ppl')} className="hover:text-white transition-colors">Private Pilot</button></li>
              <li><button onClick={() => onPageChange('discovery')} className="hover:text-white transition-colors">Discovery Flight</button></li>
              <li><button onClick={() => onPageChange('cherokee-140')} className="hover:text-white transition-colors">The Cherokee 140</button></li>
              <li><button onClick={() => onPageChange('blog')} className="hover:text-white transition-colors">Aviator Blog</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 text-secondary uppercase tracking-widest">Support</h4>
            <ul className="space-y-5 text-slate-400 font-bold">
              <li><button onClick={() => onPageChange('faq')} className="hover:text-white transition-colors">Common Questions</button></li>
              <li><button onClick={() => onPageChange('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onPageChange('terms')} className="hover:text-white transition-colors">Terms of Service</button></li>
              <li><button onClick={onReviewClick} className="hover:text-white transition-colors text-left">Leave Feedback</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 text-primary uppercase tracking-widest">Connect</h4>
            <p className="text-slate-400 font-medium mb-4 leading-relaxed">
              Page Field Airport (FMY)<br />
              Fort Myers, FL 33907
            </p>
            <p className="text-slate-400 font-bold mb-4">239-350-7124</p>
            <p className="text-white font-black text-lg truncate">cfi@coreaviatortraining.com</p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-slate-500 uppercase tracking-widest">
          <div className="flex flex-col space-y-4 text-center md:text-left mb-8 md:mb-0">
            <p>© {new Date().getFullYear()} Core Aviator Training. Florida's Premier Boutique Flight School.</p>

            {/* Pronounced "Powered by" section */}
            <div className="inline-flex items-center">
              <a
                href="https://stratusmarketingllc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 shadow-lg"
              >
                <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Powered by</span>
                <div className="flex items-center">
                  <span className="text-sm font-black text-white group-hover:text-primary transition-colors tracking-tight">Stratus Marketing</span>
                  <span className="ml-1 text-[10px] text-primary group-hover:text-white transition-colors">LLC</span>
                  <i className="fas fa-external-link-alt ml-3 text-[10px] opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"></i>
                </div>
              </a>
            </div>
          </div>

          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Safety Record</a>
            <a href="#" className="hover:text-primary transition-colors">FAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
