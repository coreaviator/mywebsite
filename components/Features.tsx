
import React from 'react';

const FeatureCard: React.FC<{ icon: string, title: string, desc: string, color: 'primary' | 'secondary' }> = ({ icon, title, desc, color }) => (
  <div className="p-10 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
    <div className={`w-16 h-16 ${color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
      <i className={`fas ${icon} text-3xl`}></i>
    </div>
    <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{desc}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-slate-900 transition-colors relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-secondary font-black tracking-[0.2em] uppercase text-xs mb-4">The Core Philosophy</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] mb-8">
              Training with <br /><span className="text-primary">Character.</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg font-medium leading-relaxed mb-10">
              We believe flight training should be as inspiring as the flight itself. That's why we focus on high-quality 1-on-1 sessions in our signature Piper Cherokee 140.
            </p>
            <div className="space-y-6">
              {[
                { label: "Elite Safety Protocol", icon: "fa-shield-halved" },
                { label: "Top 5% National Airport", icon: "fa-trophy" },
                { label: "No Shared Cockpit Policy", icon: "fa-user-group" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <span className="font-bold dark:text-white">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon="fa-location-dot"
              title="Page Field Advantage"
              color="primary"
              desc="Train at a world-class facility that offers professional tower communication and diverse air traffic experience."
            />
            <FeatureCard
              icon="fa-plane"
              title="The Cherokee 140"
              color="secondary"
              desc="The quintessential flight trainer. Stable, reliable, and maintained to the most rigorous safety standards."
            />
            <FeatureCard
              icon="fa-id-card"
              title="FAA Verified Paths"
              color="secondary"
              desc="Our curriculum meets and exceeds all FAA standards, ensuring you're prepared for the real world."
            />
            <FeatureCard
              icon="fa-sun"
              title="Florida Flying"
              color="primary"
              desc="Maximize your hours with 300+ days of flyable weather in the stunning Fort Myers coastal environment."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
