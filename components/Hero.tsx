
import React from 'react';
import standtall from '../assets/standtall.png';
import silhouette from '../assets/silhouette.png';
import student1 from '../assets/student1.png';
import student2 from '../assets/student2.png';
import student3 from '../assets/student3.png';
import student4 from '../assets/student4.png';

interface HeroProps {
  onCtaClick: () => void;
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onNavigate }) => {
  return (
    <div className="relative min-h-[95vh] flex items-center overflow-hidden pt-12">
      {/* Dynamic Background with Mesh Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={standtall}
          alt="Aviation Pilot"
          className="w-full h-full object-cover dark:opacity-60 transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-slate-50/70 to-transparent dark:from-slate-950 dark:via-slate-950/80"></div>

        {/* Animated Glow Elements */}
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-secondary/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-primary/20 mb-8 animate-slideIn">
              <i className="fas fa-location-dot text-primary animate-bounce"></i>
              <span className="text-xs font-extrabold tracking-widest uppercase text-primary dark:text-primary">Based at Page Field (FMY)</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter dark:text-white">
              Write Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Own Horizon.</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-slate-600 dark:text-slate-300 font-medium max-w-xl leading-relaxed opacity-90">
              Personalized flight training in our signature <strong>Piper Cherokee 140</strong>. Master the skies with the character and precision of a true aviator.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button
                onClick={onCtaClick}
                className="group px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-3xl font-black text-lg transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1"
              >
                Book Discovery Flight <i className="fas fa-chevron-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </button>
              <button onClick={() => onNavigate('cherokee-140')} className="px-10 py-5 bg-white dark:bg-slate-800 dark:text-white dark:border-slate-700 border border-slate-200 rounded-3xl font-black text-lg transition-all hover:bg-slate-50 dark:hover:bg-slate-700 shadow-xl">
                The Cherokee 140
              </button>
            </div>

            <div className="mt-16 flex items-center space-x-8">
              <div className="flex -space-x-3">
                <div className="flex -space-x-3">
                  {[student1, student2, student3, student4].map((student, i) => (
                    <img key={i} src={student} className="w-12 h-12 rounded-2xl border-4 border-white dark:border-slate-900 object-cover" alt="Student" />
                  ))}
                </div>
              </div>
              <div className="text-sm font-bold text-slate-500 dark:text-slate-400">
                <span className="text-slate-900 dark:text-white block">Elite Student Community</span>
                50+ Safe Solo Pilots in Fort Myers
              </div>
            </div>
          </div>

          {/* Clean Right Side Illustration */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-[80px] animate-pulse"></div>
              <div className="relative h-full w-full flex flex-col justify-center items-center text-center p-8">
                <div className="w-32 h-32 bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20 flex items-center justify-center mb-6 shadow-2xl overflow-hidden p-4">
                  <img src={silhouette} className="w-full h-full object-contain animate-float" alt="Piper Cherokee Silhouette" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2 leading-tight">Piper Cherokee</h3>
                <p className="text-primary font-black tracking-widest uppercase text-sm">140 • FMY</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-slideIn { animation: slideIn 0.8s ease-out; }
        .animate-float { animation: float 6s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default Hero;
