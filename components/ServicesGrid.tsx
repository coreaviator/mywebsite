
import React from 'react';

interface ServicesGridProps {
  onNavigate: (page: string) => void;
}

const ServiceCard: React.FC<{ title: string, desc: string, icon: string, target: string, onNavigate: (p: string) => void, accent: string }> = ({ title, desc, icon, target, onNavigate, accent }) => (
  <div className="group relative bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
    <div className={`absolute top-0 right-0 w-32 h-32 bg-${accent}-500/5 dark:bg-${accent}-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`}></div>
    
    <div className="relative z-10">
      <div className={`w-16 h-16 bg-${accent}-500 text-white rounded-[1.25rem] flex items-center justify-center mb-8 shadow-lg shadow-${accent}-500/20 group-hover:rotate-12 transition-transform`}>
        <i className={`fas ${icon} text-2xl`}></i>
      </div>
      <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">{desc}</p>
      
      <button 
        onClick={() => onNavigate(target)}
        className="inline-flex items-center font-black text-sm text-primary group-hover:translate-x-2 transition-transform"
      >
        EXPLORE PROGRAM <i className="fas fa-arrow-right ml-2 text-xs"></i>
      </button>
    </div>
  </div>
);

const ServicesGrid: React.FC<ServicesGridProps> = ({ onNavigate }) => {
  const services = [
    { title: "Discovery Flight", icon: "fa-binoculars", accent: "primary", target: "discovery", desc: "The spark of it all. Take the controls of our Piper Cherokee 140 and experience the magic firsthand." },
    { title: "Private Pilot (PPL)", icon: "fa-certificate", accent: "secondary", target: "ppl", desc: "The gold standard. Gain absolute autonomy to travel across the country on your own terms." },
    { title: "Instrument Rating", icon: "fa-compass", accent: "primary", target: "ppl", desc: "Fly with precision. Learn to navigate through the clouds and master the G5 glass cockpit environment." },
    { title: "Commercial Pilot", icon: "fa-briefcase", accent: "secondary", target: "ppl", desc: "Turn your passion into a paycheck. Advanced maneuvers and professional grade piloting standards." },
    { title: "Flight Reviews", icon: "fa-rotate", accent: "primary", target: "contact", desc: "Maintain your proficiency. Biannual reviews to keep your skills sharp and your license active." }
  ];

  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-primary font-black tracking-[0.2em] uppercase text-xs mb-4">Training Pathways</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1]">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Excellence.</span>
            </h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm text-lg font-medium">
            From your very first takeoff to professional certification, we provide the structured mentorship you need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} accent={s.accent === 'primary' ? 'primary' : 'secondary'} onNavigate={onNavigate} />
          ))}
          
          <div className="relative group p-1 bg-gradient-to-br from-primary to-secondary rounded-[3rem] shadow-xl overflow-hidden cursor-pointer" onClick={() => onNavigate('contact')}>
            <div className="bg-slate-900 dark:bg-slate-900 h-full w-full rounded-[2.9rem] p-10 flex flex-col justify-center text-white">
               <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:rotate-12 transition-transform">
                 <i className="fas fa-paper-plane text-7xl"></i>
               </div>
               <h4 className="text-3xl font-black mb-4">Custom Training</h4>
               <p className="text-slate-400 font-medium mb-8">Need a specific endorsement or refresher training? We tailor plans for every aviator.</p>
               <button className="w-max px-8 py-3 bg-white text-slate-900 rounded-2xl font-black text-sm hover:bg-primary hover:text-white transition-all">
                 ENROLL NOW
               </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-primary-500 { background-color: #11A5CD; }
        .bg-secondary-500 { background-color: #0572AF; }
        .text-primary { color: #11A5CD; }
        .text-secondary { color: #0572AF; }
        .shadow-primary\/20 { shadow-color: rgba(17, 165, 205, 0.2); }
      `}</style>
    </section>
  );
};

export default ServicesGrid;
