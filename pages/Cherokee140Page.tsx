
import React, { useEffect } from 'react';
import close1 from '../assets/close1.jpg';
import far1 from '../assets/far1.jpg';
import fly1 from '../assets/fly1.jpg';
import close2 from '../assets/close2.jpg';
import checklist from '../assets/checklist.png';
import panel1 from '../assets/panel1.jpg';

const Cherokee140Page: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={close2}
                        alt="Piper Cherokee 140 Close Up"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl">
                        1964 <span className="text-primary">Piper Cherokee</span> 140
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed shadow-black drop-shadow-md">
                        The legendary trainer that launched a million pilot careers. Stable, forgiving, and endlessly reliable.
                    </p>
                </div>
            </div>

            {/* Main Content Info */}
            <div className="container mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                            <i className="fas fa-history text-primary"></i>
                            <span className="text-sm font-bold text-primary uppercase tracking-widest">A Living Legend</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                            Your Perfect <br /><span className="text-primary">Training Partner</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            Our 1964 Piper Cherokee 140 isn't just an airplane; it's a classroom in the sky. Designed specifically for flight training, the PA-28-140 offers an ideal balance of stability and responsiveness. It's honest enough to show you your mistakes but forgiving enough not to punish you for them—the exact trait you want in your first airplane.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            With its 150HP Lycoming engine (upgraded from the original 140HP), it delivers reliable performance in the Florida heat while maintaining docile handling characteristics that build student confidence from hour one.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full"></div>
                        <img src={far1} alt="Cherokee 140 Distance" className="relative rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 w-full object-cover" />
                    </div>
                </div>

                {/* Low Wing vs High Wing & Banter */}
                <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-12 md:p-20 shadow-xl mb-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 flex items-center">
                                <i className="fas fa-plane-slash text-secondary mr-4"></i>
                                The Low Wing Advantage
                            </h3>
                            <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                                <p>
                                    You'll hear the debate endlessly: Low Wing vs. High Wing. At Core Aviator, we're firmly on Team Low Wing. Why?
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-primary mt-1.5 mr-3"></i>
                                        <span><strong>Visibility in the Turn:</strong> When you bank a low-wing aircraft, the wing dips out of the way, giving you a clear view of where you're turning. Crucial for traffic pattern safety.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-primary mt-1.5 mr-3"></i>
                                        <span><strong>Ground Handling:</strong> With a wider gear stance and lower center of gravity, the Cherokee is exceptionally stable in crosswinds and taxiing.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-primary mt-1.5 mr-3"></i>
                                        <span><strong>Fuel Management:</strong> Direct visual inspection of fuel levels. No need to climb a ladder to check the tanks!</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center bg-slate-50 dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700">
                            <div className="text-primary text-6xl mb-6 opacity-30"><i className="fas fa-quote-left"></i></div>
                            <p className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-6 italic">
                                "Why fly a high wing? The only thing they're good for is keeping the sun out of your eyes while you're parked on the ramp trying to figure out how to look cool climbing in."
                            </p>
                            <div className="flex items-center space-x-4">
                                <img src={fly1} alt="Flying" className="w-12 h-12 rounded-full object-cover border-2 border-primary" />
                                <span className="font-bold text-slate-500 uppercase text-xs tracking-widest">- Totally Unbiased Cherokee Pilot</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    <div className="group overflow-hidden rounded-3xl shadow-lg h-80 relative">
                        <img src={close1} alt="Close view" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                            <span className="text-white font-bold">Classic Lines</span>
                        </div>
                    </div>
                    <div className="group overflow-hidden rounded-3xl shadow-lg h-80 relative md:col-span-2">
                        <img src={panel1} alt="Panel view" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                            <span className="text-white font-bold">Six-Pack Instrument Panel</span>
                        </div>
                    </div>
                </div>

                {/* Checklist Section */}
                <div className="bg-slate-900 text-white rounded-[3rem] overflow-hidden shadow-2xl relative">
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <div className="grid lg:grid-cols-2">
                        <div className="p-12 md:p-20 flex flex-col justify-center relative z-10">
                            <div className="inline-block bg-secondary text-white text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider mb-6 self-start">Safety First</div>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-none">The Checklist <br /><span className="text-slate-500">Mindset</span></h2>
                            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                                <p>
                                    In aviation, a checklist isn't just a "to-do" list—it's a verifiable contract between you and the machine. It is the discipline that separates passengers from pilots.
                                </p>
                                <p>
                                    Many students mistake the checklist for a guide on "how to fly." It is not. It is a <strong>verification</strong> tool. You perform the action flow, then you verify with the checklist. This mindset shift is critical.
                                </p>
                                <p className="font-bold text-white border-l-4 border-primary pl-6">
                                    "Amateurs practice until they get it right. Professionals practice until they can't get it wrong."
                                </p>
                            </div>
                        </div>
                        <div className="bg-slate-800 p-12 flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-primary/10 animate-pulse"></div>
                            <img
                                src={checklist}
                                alt="Aviation Checklist"
                                className="w-full max-w-sm shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500 rounded-lg relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cherokee140Page;
