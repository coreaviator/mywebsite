import React from 'react';

interface PPLPageProps {
  onNavigate: (page: string) => void;
}

const PPLPage: React.FC<PPLPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen relative">
      {/* Background Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('assets/stock.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/40" /> {/* Overlay for readability */}
      </div>

      <div className="relative z-10 pt-32 pb-20 container mx-auto px-4">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-16 shadow-2xl max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
            <div className="text-left">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Gold Standard Certification</span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-2">
                Mastering the <br />Cherokee 140.
              </h1>
            </div>
            <img src="assets/handshake.png" alt="Handshake" className="w-48 h-auto" />
          </div>

          <p className="text-xl text-slate-700 leading-relaxed mb-10 max-w-2xl">
            Our Private Pilot program is designed for those who demand excellence. From your first pre-flight to your checkride, you'll train in the iconic Piper Cherokee.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Request Info Packet
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors"
            >
              Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPLPage;
