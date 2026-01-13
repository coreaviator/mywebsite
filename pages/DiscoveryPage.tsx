
import React from 'react';

const DiscoveryPage: React.FC = () => {
  const journeySteps = [
    { 
      title: "Pre-Flight Briefing", 
      desc: "Meet your instructor and dive into the fundamentals. We'll cover basic aerodynamics and the flight plan for the day.", 
      icon: "fa-map",
      accent: "primary"
    },
    { 
      title: "Hands-On Controls", 
      desc: "This isn't a tour—it's a lesson. You'll take the pilot's seat in our Piper Cherokee 140 and actually help fly the aircraft.", 
      icon: "fa-hand-pointer",
      accent: "secondary"
    },
    { 
      title: "Coastal Navigation", 
      desc: "Soar over the stunning Gulf coastline and gain a new perspective on Southwest Florida from the cockpit.", 
      icon: "fa-compass",
      accent: "primary"
    },
    { 
      title: "Logbook Entry", 
      desc: "Receive your first official entry in your pilot logbook. This hour counts toward your Private Pilot License.", 
      icon: "fa-pen-fancy",
      accent: "secondary"
    }
  ];

  return (
    <div className="animate-fadeIn pb-32">
      {/* Hero Section */}
      <section className="relative py-40 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2400" 
            className="w-full h-full object-cover opacity-10 dark:opacity-40 animate-pulse" 
            style={{ animationDuration: '8s' }}
            alt="Sunset Flight"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50/60 to-slate-50 dark:from-slate-950 dark:via-slate-950/60 dark:to-slate-950"></div>
          {/* Decorative Glow */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-primary/20 dark:border-white/20 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
            <span className="text-xs font-black tracking-[0.3em] uppercase text-primary dark:text-white">Your First Logbook Entry</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter">
            Take the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Controls.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            The spark of your aviation career begins with a single hour. Experience flight as it was meant to be—from the left seat.
          </p>
        </div>
      </section>

      {/* Intro Quote Section */}
      <section className="py-24 -mt-16 relative z-20">
        <div className="container mx-auto px-6">
          <div className="bg-white dark:bg-slate-900 p-12 md:p-20 rounded-[4rem] shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-12 transition-colors">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[3rem] rotate-6"></div>
                <img 
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800" 
                  className="relative rounded-[3rem] w-full aspect-square object-cover shadow-xl"
                  alt="Student Pilot"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <i className="fas fa-quote-left text-primary/20 text-6xl mb-6"></i>
              <p className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight mb-8">
                "Every expert pilot was once a student who dared to take their first discovery flight. Your journey starts here."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <i className="fas fa-check"></i>
                </div>
                <span className="font-bold text-slate-700 dark:text-slate-300 text-lg">No experience required. Just passion.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="py-24 relative bg-white dark:bg-slate-950 transition-colors">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-primary font-black tracking-[0.2em] uppercase text-xs mb-4">The Experience</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white">Your Flight Roadmap</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeySteps.map((step, idx) => (
              <div key={idx} className="group relative bg-slate-50 dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`w-16 h-16 ${step.accent === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} rounded-2xl flex items-center justify-center mb-8 text-2xl group-hover:scale-110 transition-transform`}>
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <h4 className="text-2xl font-black mb-4 text-slate-900 dark:text-white leading-tight">{step.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                <div className="absolute bottom-6 right-10 text-6xl font-black text-slate-200 dark:text-slate-800/20 select-none group-hover:text-primary/10 transition-colors">
                  0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Details Section */}
      <section className="py-24 bg-slate-100 dark:bg-slate-900 rounded-[5rem] mx-4 border border-slate-200 dark:border-slate-800 transition-colors">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-8 leading-tight text-balance">Everything You Need <br/><span className="text-secondary dark:text-primary">To Earn Your Wings.</span></h2>
              <div className="space-y-6">
                {[
                  { title: "60-min Pre-flight", desc: "Detailed discussion on controls and safety." },
                  { title: "Piper Cherokee 140", desc: "Experience training in a world-class aircraft." },
                  { title: "FAA Certified Instructor", desc: "Professional guidance through every maneuver." },
                  { title: "Official Documentation", desc: "Get a logbook credit toward your license." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-5">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs mb-1">{item.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <div className="relative bg-white dark:bg-slate-800 p-12 rounded-[4rem] shadow-2xl border border-slate-100 dark:border-slate-700 text-center transition-colors">
                <h4 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">Introductory Rate</h4>
                <div className="text-7xl font-black text-slate-900 dark:text-white mb-6">
                  $199<span className="text-2xl text-slate-400 font-medium">/ flight</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 font-medium mb-10 leading-relaxed">
                  The most affordable way to see if aviation is your calling. No long-term commitment required.
                </p>
                <button className="w-full py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-black text-lg shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-1">
                  RESERVE YOUR SLOT
                </button>
                <p className="mt-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Available Monday - Saturday at Page Field
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center bg-white dark:bg-slate-950 transition-colors">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mx-auto mb-10">
            <i className="fas fa-plane-up text-3xl"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8">Ready for Departure?</h2>
          <p className="text-slate-600 dark:text-slate-400 text-xl font-medium mb-12">
            The view from the cockpit changes everything. Join us at the Page Field General Aviation terminal and start your story.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-12 py-5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-3xl font-black text-lg transition-all hover:bg-primary hover:text-white">
              CONTACT ADMISSIONS
            </button>
            <button className="px-12 py-5 border-2 border-slate-200 dark:border-slate-800 rounded-3xl font-black text-lg text-slate-900 dark:text-white hover:border-primary transition-all">
              VIEW OTHER PROGRAMS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscoveryPage;
