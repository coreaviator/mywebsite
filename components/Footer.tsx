
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
              <li><button onClick={() => onPageChange('home')} className="hover:text-white transition-colors">Sky Lobby</button></li>
              <li><button onClick={() => onPageChange('ppl')} className="hover:text-white transition-colors">Private Pilot</button></li>
              <li><button onClick={() => onPageChange('discovery')} className="hover:text-white transition-colors">Discovery Flight</button></li>
              <li><button onClick={() => onPageChange('blog')} className="hover:text-white transition-colors">Aviator Blog</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 text-secondary uppercase tracking-widest">Support</h4>
            <ul className="space-y-5 text-slate-400 font-bold">
              <li><button onClick={() => onPageChange('faq')} className="hover:text-white transition-colors">Common Questions</button></li>
              <li><button onClick={() => onPageChange('contact')} className="hover:text-white transition-colors">Flight Desk</button></li>
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
          <p>© {new Date().getFullYear()} Core Aviator Training. Florida's Premier Boutique Flight School.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-primary">Safety Record</a>
            <a href="#" className="hover:text-primary">FAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
