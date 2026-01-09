
import React from 'react';

interface TrainingProgramsProps {
  onNavigate: (page: string) => void;
}

const ProgramCard: React.FC<{ image: string, title: string, price: string, features: string[], onNavigate: (p: string) => void, target: string }> = ({ image, title, price, features, onNavigate, target }) => (
  <div className="bg-white dark:bg-slate-800 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
    <div className="h-72 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
      <div className="absolute top-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-5 py-2 rounded-2xl font-black text-secondary dark:text-primary shadow-lg">
        {price}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
    </div>
    <div className="p-10 flex flex-col flex-grow">
      <h3 className="text-3xl font-black mb-6 text-slate-900 dark:text-white leading-tight">{title}</h3>
      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-start text-slate-600 dark:text-slate-400 font-medium">
            <div className="mt-1 mr-3 w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-[10px]">
              <i className="fas fa-check"></i>
            </div>
            {f}
          </li>
        ))}
      </ul>
      <button 
        onClick={() => onNavigate(target)}
        className="w-full py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-black text-lg hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
      >
        View Details
      </button>
    </div>
  </div>
);

const TrainingPrograms: React.FC<TrainingProgramsProps> = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-xl">
          <h2 className="text-primary font-black tracking-[0.2em] uppercase text-xs mb-4">Professional Curriculum</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1]">Elite Training <br/><span className="text-secondary dark:text-primary">Programs.</span></h3>
        </div>
        <p className="text-slate-500 dark:text-slate-400 max-w-sm text-lg font-medium leading-relaxed">
          Based at Page Field Airport (FMY), our training exceeds FAA standards in the world's most trusted trainer.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <ProgramCard 
          image="https://images.unsplash.com/photo-1559135197-8a45ea74d367?q=80&w=1200"
          title="Private Pilot (PPL)"
          price="Foundation"
          target="ppl"
          onNavigate={onNavigate}
          features={[
            "40+ Hours Certified Flight Time",
            "Structured Ground School",
            "Solo Flight Experience",
            "Cross-Country Navigation"
          ]}
        />
        <ProgramCard 
          image="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200"
          title="Instrument Rating"
          price="Precision"
          target="ppl"
          onNavigate={onNavigate}
          features={[
            "IFR Navigation Training",
            "Precision Approach Mastery",
            "Dual Instruction in FMY",
            "Weather Decision Skills"
          ]}
        />
        <ProgramCard 
          image="https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=1200"
          title="Discovery Flight"
          price="Takeoff"
          target="discovery"
          onNavigate={onNavigate}
          features={[
            "Hands-on Controls",
            "60-min Pre-flight Briefing",
            "Piper Cherokee Experience",
            "Logbook Credit"
          ]}
        />
      </div>
    </div>
  );
};

export default TrainingPrograms;
