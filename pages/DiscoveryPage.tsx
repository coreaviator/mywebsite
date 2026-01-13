import React from 'react';

interface DiscoveryPageProps {
  onNavigate: (page: string) => void;
}

const DiscoveryPage: React.FC<DiscoveryPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Sunset Background */}
      <div 
        className="h-[60vh] flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('assets/sunset.png')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="relative z-10 text-5xl md:text-7xl font-black text-white drop-shadow-2xl">
          Take the Controls.
        </h1>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <img 
            src="assets/DSC_0156-Enhanced-NR.jpg" 
            alt="Student Discovery Flight" 
            className="rounded-2xl shadow-2xl w-full object-cover aspect-video md:aspect-square" 
          />
          <div className="space-y-6">
            <blockquote className="text-3xl font-medium italic text-slate-800 leading-tight">
              "Every expert pilot was once a student who dared to take their first discovery flight. Your journey starts here."
            </blockquote>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-12 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Introductory Flight Rate</h2>
          <div className="text-6xl font-black text-blue-600 mb-10">$179<span className="text-lg text-slate-400 font-normal"> / flight</span></div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Contact Admissions
            </button>
            <button 
              onClick={() => onNavigate('ppl')}
              className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              View Other Programs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryPage;
