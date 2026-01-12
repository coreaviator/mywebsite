
import React, { useState, useEffect } from 'react';

interface Article {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
}

const ARTICLES: Article[] = [
  {
    id: 1,
    category: "PPL Guide",
    title: "4-Step Roadmap to Private Pilot License Success",
    excerpt: "In the skies, you don't get what's handed to you, you get what you train for. Discover the proven path to certification.",
    date: "Nov 27, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1527668285770-9646610b48ad?q=80&w=1200",
    content: `
      <p class="text-xl italic text-primary font-black mb-8">"In the skies, you don't get what's handed to you, you get what you train for."</p>
      
      <p>If you've ever dreamed of soaring through the clouds with your own private pilot license, you know it's not just about showing up—it's about dominating the process. At Core Aviator Training in Fort Myers, Florida, we've helped countless aspiring pilots in SWFL turn their passion into reality with meaningful mentorship/instruction.</p>

      <p>Drawing from years of expertise in aviation training, I'm here to share my proven 4-step roadmap to private pilot license success. This isn't some fluffy advice; it's hardcore, actionable strategies that require daily commitment, practice, and the right mindset. Whether you're just starting to learn to fly or looking to accelerate your journey in Fort Myers, Florida, these steps will explode your progress and get you certified faster than you think.</p>

      <h3>Why Is It So Important to Follow a Proven Roadmap?</h3>
      <p>Life in the cockpit is full of negotiations—with weather, regulations, and your own skills. But when it comes to earning your private pilot license, you can't wing it. Every aspiring aviator faces challenges like rising to the occasion, mastering maneuvers, and passing exams. Without a solid plan, you're just burning fuel.</p>

      <p>In aviation, like in any high-stakes field, the dreamers don't win, the dabblers don't win, and the half-committed don't win. <strong>THE BEST-PREPARED PILOTS WILL BE THE WINNERS.</strong> Everything in life should be about being the best.</p>

      <h3>1. The Discovery Flight: Uncover Your Strengths</h3>
      <p>Every private pilot license journey starts with one thing: getting airborne to reveal what's really holding you back. In this step, you hop into the cockpit for a hands-on discovery flight. It's not just a joyride—it's your chance to identify strengths and weaknesses right away.</p>
      <p>Ask yourself: <em>"WHAT DID I LEARN ABOUT MYSELF TODAY THAT—IF FIXED TODAY—WOULD TURN HESITATION INTO CONFIDENCE?"</em> At our Fort Myers, Florida hangar, we guide you through this to build confidence from day one.</p>

      <h3>2. Ground School Mastery: Crush the Written Exam</h3>
      <p>Once you've tasted the skies, it's time to ground yourself. Step two is all about completing ground school and acing the written exam. This isn't optional; it's the foundation that ensures you understand aerodynamics, regulations, and navigation.</p>
      <p>Getting this done early is a pro move—it clears the runway for your next steps and ensures you're flying forward with the knowledge from the get-go.</p>

      <h3>3. Simulator Domination: Master Maneuvers</h3>
      <p>When ground school is done, don't jump straight to the skies—chair fly! Chair flying is a mental rehearsal technique pilots use to practice flight procedures while on the ground. Today, we utilize the simulator for unlimited practice. I recommend <strong>X-Plane 12</strong> for its unbeatable physics engine.</p>
      
      <p>Here's a quick gear checklist:</p>
      <ul>
        <li>Yoke for precise control</li>
        <li>Pedals for rudder input</li>
        <li>Throttle quadrant for power management</li>
      </ul>

      <h3>4. Accelerated Program Lock-In: Beast-Mode Commitment</h3>
      <p>The final push? Ditch the casual curriculum and dive into an accelerated program that keeps you locked in every day for weeks. This isn't your average flight school grind—it's a commitment designed to build hours fast. Why accelerated? Because in aviation, momentum wins.</p>

      <p class="mt-12 font-black text-2xl">Ready to learn to fly? Enroll today at Core Aviator Training in Fort Myers, Florida by sending a message, and let's get you airborne.</p>
      
      <p class="mt-8 font-black text-primary uppercase tracking-widest">Safety, Proficiency, Professionalism.</p>
    `
  },
  {
    id: 2,
    category: "Safety",
    title: "Weather Decision-Making: A Practical Go/No-Go Framework",
    excerpt: "It's better to be on the ground wishing you were in the air than in the air wishing you were on the ground.",
    date: "Dec 15, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1200",
    content: `
      <p class="text-xl italic text-primary font-black mb-8">"It's better to be on the ground wishing you were in the air than to be in the air wishing you were on the ground."</p>

      <p>Weather decision-making is arguably the most critical skill a pilot can develop. In Southwest Florida, where we train at Page Field Airport in Fort Myers, weather patterns can shift rapidly—from beautiful VFR conditions to challenging afternoon thunderstorms in just hours. This makes having a solid weather decision-making framework not just important, but essential for safe flight operations.</p>

      <h3>The Three-Tier Weather Analysis Approach</h3>
      <p>Effective weather decision-making requires a systematic approach. We teach our students a three-tier analysis system:</p>
      <ul>
        <li><strong>Tier 1: The Big Picture (Synoptic Analysis)</strong> - Understand the overall pattern using surface analysis and satellite imagery.</li>
        <li><strong>Tier 2: Route-Specific Analysis</strong> - Drill down to TAFs, AIRMETs, and winds aloft for your specific path.</li>
        <li><strong>Tier 3: Current Conditions (Real-Time Data)</strong> - Check METARs, PIREPs, and live radar for what's actually happening now.</li>
      </ul>

      <h3>Establishing Your Personal Minimums</h3>
      <p>Legal minimums are just that—minimums. They don't account for your experience level. Every pilot should establish personal minimums that exceed regulatory requirements. (Bring an hour of fuel instead of half an hr!)</p>
      
      <h3>The PAVE Checklist</h3>
      <p>We've adapted the PAVE checklist specifically for weather risk management:</p>
      <ul>
        <li><strong>P - Pilot:</strong> Am I physically and mentally fit? Am I proficient?</li>
        <li><strong>A - Aircraft:</strong> Is the plane equipped for these specific conditions?</li>
        <li><strong>V - enVironment:</strong> What's the worst-case scenario at my destination?</li>
        <li><strong>E - External Pressures:</strong> Am I making this decision based on safety or a schedule?</li>
      </ul>

      <h3>Florida-Specific Challenges</h3>
      <p>Flying in SWFL means mastering convective activity. Afternoon thunderstorms typically develop between 2-6 PM in summer. Strategy: Plan flights for early morning when conditions are most stable. Never attempt to fly under developing cumulus buildups.</p>

      <h3>The 180-Degree Turn: Your Safety Net</h3>
      <p>One of the most important skills is knowing when to turn around. Turn early, before conditions deteriorate. Don't be embarrassed—professional pilots make weather-related turnbacks regularly.</p>

      <p class="mt-12 font-black text-2xl">At Core Aviator Training, we emphasize one fundamental principle: Safety trumps schedule. Always.</p>
      
      <p class="mt-8 font-black text-primary uppercase tracking-widest">Safety, Proficiency, Professionalism.</p>
    `
  },
  {
    id: 3,
    category: "IFR Skills",
    title: "Instrument Scan Basics: Build a Stable Scan",
    excerpt: "Slow is smooth, smooth is fast. The key to instrument flying is a disciplined scan and avoiding the 'needle chase'.",
    date: "Dec 20, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?q=80&w=1200",
    content: `
      <p class="text-xl italic text-primary font-black mb-8">"Slow is smooth, smooth is fast. The key to instrument flying is a disciplined scan."</p>

      <p>One of the most challenging transitions for pilots moving from VFR to IFR is developing an effective instrument scan. The tendency to "chase the needles"—making constant small corrections that lead to overcorrections—is nearly universal among new students.</p>

      <h3>Understanding the Fundamental Principle</h3>
      <p>Instruments lag behind the aircraft. When you make a control input, the aircraft responds immediately, but the instruments take time to register that change. This delay is what causes "chasing." Understanding this lag allows you to make smooth, deliberate inputs.</p>

      <h3>The "Hub and Spoke" Scan Pattern</h3>
      <p>An effective instrument scan follows a deliberate pattern. We teach the <strong>Radial Scan</strong>:</p>
      <ul>
        <li><strong>Hub:</strong> The Attitude Indicator (AI) is your primary reference.</li>
        <li><strong>Spokes:</strong> From the AI, you radiate out to other instruments, always returning to the hub.</li>
      </ul>
      <p>Cycle: AI → Heading → AI → Altitude → AI → Airspeed → AI → Vertical Speed → AI.</p>

      <h3>Avoiding the "Chase"</h3>
      <p>Stability comes from patience. Here is the CoreAviator approach:</p>
      <ol>
        <li><strong>Establish Target Attitude:</strong> Set the pitch/bank you expect will work.</li>
        <li><strong>The Five Second Rule:</strong> Wait at least five seconds after an input before correcting again.</li>
        <li><strong>Feathering:</strong> Use small, smooth inputs—half of what you think you need.</li>
        <li><strong>Trim Aggressively:</strong> Once established, trim until the plane maintains performance hands-off.</li>
      </ol>

      <h3>Mastering the ILS Approach</h3>
      <p>During a critical phase like an ILS, your scan tightens: AI → Localizer → AI → Glideslope → AI. Notice the emphasis on nav instruments while keeping the AI as your home base for control.</p>

      <p class="mt-12 font-black text-2xl">Fly the attitude, trim the aircraft, and the performance will take care of itself.</p>
      
      <p class="mt-8 font-black text-primary uppercase tracking-widest">Safety, Proficiency, Professionalism.</p>
    `
  }
];

const BlogPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Dynamic SEO Update Hook
  useEffect(() => {
    if (selectedArticle) {
      document.title = `${selectedArticle.title} | Core Aviator Training Journal`;
      
      // Update or create meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', selectedArticle.excerpt);
    } else {
      document.title = "Aviator's Journal | Core Aviator Training | Page Field FMY";
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', "Insights, technical tips, and stories from the cockpit at Page Field. Master your flight training with professional mentorship.");
      }
    }

    // Clean up title on unmount if needed
    return () => {
      document.title = "Core Aviator Training | Fly Page Field";
    };
  }, [selectedArticle]);

  if (selectedArticle) {
    return (
      <div className="animate-fadeIn pb-32">
        <section className="relative h-[60vh] bg-slate-50 dark:bg-slate-950 flex items-end overflow-hidden transition-colors">
          <div className="absolute inset-0 z-0">
            <img src={selectedArticle.image} className="w-full h-full object-cover opacity-10 dark:opacity-40" alt={selectedArticle.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/40 to-transparent dark:from-slate-950 dark:via-slate-950/40 dark:to-transparent"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10 pb-16">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="mb-8 text-primary font-black uppercase tracking-widest text-xs flex items-center hover:translate-x-[-8px] transition-transform"
            >
              <i className="fas fa-arrow-left mr-2"></i> Back to Journal
            </button>
            <span className="bg-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white mb-6 inline-block shadow-lg">
              {selectedArticle.category}
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight max-w-4xl tracking-tighter">
              {selectedArticle.title}
            </h1>
            <div className="flex items-center mt-8 space-x-6 text-slate-500 dark:text-slate-400 font-bold text-sm uppercase tracking-widest">
              <span>{selectedArticle.date}</span>
              <span className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
              <span>{selectedArticle.readTime}</span>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div 
                className="prose prose-xl dark:prose-invert prose-slate prose-headings:font-black prose-headings:tracking-tight prose-a:text-primary text-slate-700 dark:text-slate-300 font-medium leading-relaxed article-content"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
              <div className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl">
                    <i className="fas fa-user-pilot"></i>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 dark:text-white">Core Aviator Editorial</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Flight Training Experts</p>
                  </div>
                </div>
                <button 
                  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                  className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all"
                >
                  <i className="fas fa-arrow-up"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          .article-content h3 { font-size: 1.875rem; color: #11A5CD; margin-top: 2.5rem; margin-bottom: 1.25rem; font-weight: 900; }
          .article-content p { margin-bottom: 1.5rem; font-size: 1.25rem; }
          .article-content ul, .article-content ol { margin-left: 1.5rem; margin-bottom: 1.5rem; }
          .article-content ul { list-style-type: disc; }
          .article-content ol { list-style-type: decimal; }
          .article-content li { margin-bottom: 0.5rem; font-size: 1.25rem; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      <section className="relative py-32 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors">
        <div className="absolute inset-0 z-0 bg-mesh opacity-30 dark:opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4">Pilot Perspectives</h2>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
            Aviator's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Journal.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Insights, technical tips, and stories from the cockpit at Page Field.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {ARTICLES.map((article) => (
              <div 
                key={article.id} 
                className="group bg-slate-50 dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-primary shadow-lg">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center space-x-4 mb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-6 text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium mb-10 flex-grow leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <button 
                    onClick={() => {
                      setSelectedArticle(article);
                      window.scrollTo({top: 0, behavior: 'instant'});
                    }}
                    className="flex items-center font-black text-sm text-secondary dark:text-primary group-hover:translate-x-2 transition-transform"
                  >
                    READ ARTICLE <i className="fas fa-arrow-right ml-2 text-xs"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
