
import React from 'react';

const PPLPage: React.FC = () => {
  const requirements = [
    { title: "Age", value: "17 Years Old", icon: "fa-calendar-check" },
    { title: "Language", value: "English Proficient", icon: "fa-language" },
    { title: "Medical", value: "3rd Class FAA", icon: "fa-stethoscope" },
    { title: "Flight Time", value: "40 Hours Min.", icon: "fa-stopwatch" }
  ];

  const milestones = [
    { 
      step: "01",
      title: "The First Solo", 
      desc: "The most memorable day in any pilot's life. You'll take command of the Cherokee 140 alone for the first time.",
      tags: ["Confidence", "Skill"]
    },
    { 
      step: "02",
      title: "Cross-Country Navigation", 
      desc: "Learn to navigate away from Page Field to airports across Florida using both visual and electronic methods.",
      tags: ["Planning", "Tech"]
    },
    { 
      step: "03",
      title: "The Checkride", 
      desc: "Your final practical exam with an FAA examiner. We ensure you're over-prepared and ready to pass with flying colors.",
      tags: ["Certification", "Elite"]
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Dynamic Header */}
      <section className="relative py-32 md:py-48 bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2400" 
            className="w-full h-full object-cover opacity-10 dark:opacity-20 scale-105"
            alt="Cockpit View" 
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-slate-50/80 to-transparent dark:from-slate-950 dark:via-slate-950/80"></div>
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[150px] rounded-full animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-3 bg-primary/10 dark:bg-primary/20 backdrop-blur-xl border border-primary/30 px-6 py-2 rounded-2xl mb-10">
              <i className="fas fa-certificate text-primary animate-spin-slow"></i>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Gold Standard Certification</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter mb-8">
              Private Pilot <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Autonomy.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
              Earn the key to the skies. Our PPL program at Page Field transforms you from a passenger into a commander of the clouds.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats / Requirements Bar */}
      <section className="relative z-20 -mt-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {requirements.map((req, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center transition-colors">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                  <i className={`fas ${req.icon} text-xl`}></i>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{req.title}</span>
                <span className="text-lg font-black text-slate-900 dark:text-white leading-tight">{req.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Deep Dive */}
      <section className="py-32 bg-white dark:bg-slate-950 transition-colors">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <h2 className="text-secondary font-black tracking-[0.2em] uppercase text-xs mb-4">Core Curriculum</h2>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-[1.1]">
                Mastering the <br/><span className="text-primary">Cherokee 140.</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed mb-10">
                Our program isn't just about passing a test; it's about building "stick and rudder" proficiency that stays with you for life. We utilize the Piper Cherokee 140 for its exceptional stability and forgiving flight characteristics.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "G5 Dual Glass Cockpit",
                  "ADS-B In/Out Technology",
                  "Meticulous 100hr Insp.",
                  "Comfortable Leather Int."
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center text-[10px]">
                      <i className="fas fa-check"></i>
                    </div>
                    <span className="font-bold text-slate-700 dark:text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all"></div>
              <img 
                src="https://images.unsplash.com/photo-1559135197-8a45ea74d367?q=80&w=1200" 
                className="relative z-10 rounded-[4rem] shadow-2xl border-4 border-white dark:border-slate-800 transition-colors"
                alt="Pilot in Training"
              />
              <div className="absolute -bottom-10 -right-10 z-20 bg-white dark:bg-slate-900 p-8 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800 max-w-xs animate-float transition-colors">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white">
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="font-black text-slate-900 dark:text-white uppercase tracking-tighter">Elite Success</span>
                </div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">95% First-Time Pass Rate for our PPL candidates at Page Field.</p>
              </div>
            </div>
          </div>

          {/* Training Milestones */}
          <div className="bg-slate-100 dark:bg-slate-900/50 rounded-[5rem] p-12 md:p-24 text-slate-900 dark:text-white transition-colors">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
              <div className="max-w-xl">
                <h2 className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4">The Pathway</h2>
                <h3 className="text-4xl md:text-5xl font-black">Major Milestones.</h3>
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-medium text-lg max-w-sm">
                Structured phases designed to build your confidence and technical skill set from zero to hero.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-gradient-to-r from-primary/50 via-secondary/50 to-transparent"></div>
              {milestones.map((m, i) => (
                <div key={i} className="relative z-10 group">
                  <div className="w-20 h-20 bg-white dark:bg-slate-800 border-4 border-slate-200 dark:border-slate-900 rounded-[2rem] flex items-center justify-center mb-8 shadow-xl group-hover:border-primary transition-all">
                    <span className="text-2xl font-black text-primary">{m.step}</span>
                  </div>
                  <h4 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors text-slate-900 dark:text-white">{m.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium mb-6 leading-relaxed">{m.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-black uppercase tracking-widest bg-slate-200 dark:bg-white/5 px-3 py-1 rounded-full text-slate-600 dark:text-slate-300 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-secondary rounded-[4rem] p-12 md:p-24 text-white text-center relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <img src="https://www.transparenttextures.com/patterns/cubes.png" className="w-full h-full" />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Start Your Career <br/>Today.</h2>
              <p className="text-xl md:text-2xl mb-12 opacity-90 font-medium max-w-2xl mx-auto">
                Ready to take the first step towards your Private Pilot License? Our admissions team is standing by to schedule your consultation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="px-12 py-5 bg-white text-secondary rounded-3xl font-black text-lg shadow-xl hover:scale-105 transition-transform active:scale-95">
                  Request Info Packet
                </button>
                <button className="px-12 py-5 bg-slate-900 text-white rounded-3xl font-black text-lg shadow-xl hover:bg-slate-800 transition-all">
                  Book Consultation
                </button>
              </div>
              <p className="mt-10 text-xs font-black uppercase tracking-[0.4em] opacity-70">
                Operating Out of FMY General Aviation Terminal
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 4s infinite ease-in-out; }
        .spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default PPLPage;
