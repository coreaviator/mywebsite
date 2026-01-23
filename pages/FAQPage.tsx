
import React, { useState } from 'react';

const FAQPage: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long does PPL training take?",
      a: "Training duration varies from 40-80 hrs. Students typically complete in 65 hours, but accelerated schedules are possible with 3+ weekly flights. Expect 2-4 months of consistent training to achieve proficiency."
    },
    {
      q: "Is training conducted in groups?",
      a: "No—all instruction is one-on-one with certified flight instructors. This ensures you get 100% of the instructor's attention and a curriculum tailored specifically to your learning pace and style."
    },
    {
      q: "What FAA regulations govern training?",
      a: "Training follows FAA Part 61 regulations, the set of regulations that governs how individual pilots & flight instructors are certified and trained in the United States. Part 61 offers maximum flexibility for students with busy schedules."
    },
    {
      q: "Do I get a license at 40 hours of flight time?",
      a: "Certification depends on proficiency. While 40 hours is the FAA minimum, all students must meet specific FAA performance standards as evaluated by the instructor. Preparing and studying ground materials before your training leads to significantly quicker results."
    },
    {
      q: "Are payments required upfront?",
      a: "No—at Core Aviator, we believe in transparency. You pay per session as your training progresses, allowing you to manage your budget without large lump-sum commitments."
    },
    {
      q: "Are there any enrollment fees?",
      a: "A $99 enrollment fee covers your initial profile setup and essential administrative tasks, such as student certificate processing and digital logbook integration."
    },
    {
      q: "TSA Flight Security Program requirement? Non-citizen?",
      a: "This is only required for non-U.S. citizens; U.S. citizens are exempt. If you are not a U.S. citizen, you may still be eligible to fly with certain visas and prerequisites completed before training begins. Contact us for specific guidance on international student requirements."
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Header Section */}
      <section className="relative py-32 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-mesh opacity-30 dark:opacity-30 mix-blend-multiply dark:mix-blend-normal"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4">Pilot Knowledge Base</h2>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
            Clear Skies, <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Clear Answers.</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Everything you need to know before stepping into the cockpit at Page Field.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`group border rounded-[2.5rem] transition-all duration-500 ${openIdx === i
                    ? 'bg-white dark:bg-slate-900 border-primary shadow-2xl shadow-primary/10'
                    : 'bg-white/50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800 hover:border-primary/40'
                  }`}
              >
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full p-8 md:p-10 text-left flex justify-between items-center gap-6"
                >
                  <span className={`font-black text-xl md:text-2xl leading-tight transition-colors ${openIdx === i ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'
                    }`}>
                    {faq.q}
                  </span>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${openIdx === i ? 'bg-primary text-white rotate-180 shadow-lg shadow-primary/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                    }`}>
                    <i className="fas fa-chevron-down text-sm"></i>
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIdx === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="px-8 md:px-10 pb-10">
                    <div className="h-1 w-12 bg-primary mb-8 rounded-full"></div>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support Card */}
          <div className="mt-24 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[4rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-slate-900 p-12 md:p-20 rounded-[4rem] border border-slate-100 dark:border-slate-800 text-center shadow-xl">
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-[2rem] flex items-center justify-center mx-auto mb-8">
                <i className="fas fa-headset text-3xl"></i>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">Still have questions?</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg font-medium mb-10 max-w-lg mx-auto">
                Our admissions team is available to walk you through the details of our tailored training programs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-3xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                  Contact Admissions
                </button>
                <div className="flex flex-col justify-center items-center sm:items-start">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Direct Call</span>
                  <span className="text-xl font-black text-slate-900 dark:text-white">239-350-7124</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Bottom Mesh */}
      <div className="h-64 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[100%] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[100%] bg-secondary/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
};

export default FAQPage;
