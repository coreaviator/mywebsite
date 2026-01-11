
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'Discovery Flight',
    message: ''
  });

  const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/oq6ksB8Db4Z9ug03AVhm/webhook-trigger/7086b414-5989-4e32-8444-b71c64c6758d";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("There was an issue sending your request. Please try again or call us directly.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-950 transition-colors overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-20">
          <div className="lg:col-span-5">
            <h2 className="text-primary font-black tracking-[0.2em] uppercase text-xs mb-4">Admissions</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] mb-8">Let's Get You <br/><span className="text-secondary dark:text-primary">Airborne.</span></h3>
            <p className="text-slate-600 dark:text-slate-400 text-xl font-medium leading-relaxed mb-12">
              Ready to visit Page Field? Reach out to schedule your tour or first flight lesson.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white dark:bg-slate-900 text-primary rounded-[1.5rem] flex items-center justify-center shadow-lg">
                  <i className="fas fa-location-dot text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-sm">Location</h4>
                  <p className="text-slate-500 font-medium leading-tight">
                    Page Field Airport<br/>
                    Fort Myers, FL 33907
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white dark:bg-slate-900 text-secondary rounded-[1.5rem] flex items-center justify-center shadow-lg">
                  <i className="fas fa-phone text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-sm">Direct Line</h4>
                  <p className="text-slate-500 font-medium">239-350-7124</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white dark:bg-slate-900 text-primary rounded-[1.5rem] flex items-center justify-center shadow-lg">
                  <i className="fas fa-envelope text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-sm">Email</h4>
                  <p className="text-slate-500 font-medium">cfi@coreaviatortraining.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 p-10 md:p-14 rounded-[4rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative min-h-[500px] flex flex-col justify-center">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[60px] rounded-full pointer-events-none"></div>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Name</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/20 focus:outline-none dark:text-white" 
                      placeholder="John Pilot" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/20 focus:outline-none dark:text-white" 
                      placeholder="wings@sky.com" 
                    />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                    <input 
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel" 
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/20 focus:outline-none dark:text-white" 
                      placeholder="(239) 000-0000" 
                    />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Your Aviation Goal</label>
                    <select 
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/20 focus:outline-none dark:text-white appearance-none"
                    >
                      <option>Discovery Flight</option>
                      <option>Private Pilot License</option>
                      <option>Instrument Rating</option>
                      <option>Commercial License</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4} 
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/20 focus:outline-none dark:text-white" 
                      placeholder="When would you like to fly?"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-primary to-secondary text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-95 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-circle-notch fa-spin mr-3"></i> TRANSMITTING...
                        </>
                      ) : 'REQUEST ADMISSIONS PACKAGE'}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center animate-fadeIn py-10 relative z-10">
                  <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl">
                    <i className="fas fa-check"></i>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Cleared for Takeoff!</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed max-w-sm mx-auto">
                    Thanks, {formData.name.split(' ')[0]}! Your request has been received. Our admissions team at Page Field will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)} 
                    className="mt-10 text-primary font-black uppercase tracking-widest text-xs hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map Integration */}
        <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 animate-fadeIn">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.621453982464!2d-81.8653925238713!3d26.591035076840733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db401569949683%3A0xc3f1734914a8e3f9!2sPage%20Field!5e0!3m2!1sen!2sus!4v1710345678901!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Page Field Airport Location"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
          <div className="absolute bottom-8 left-8 right-8 md:right-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl max-w-sm pointer-events-none">
            <h4 className="font-black text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-xs text-primary">Base of Operations</h4>
            <p className="text-slate-600 dark:text-slate-300 font-bold">Find us at the General Aviation terminal at Page Field.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
