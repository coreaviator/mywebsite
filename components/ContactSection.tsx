
import React from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/oq6ksB8Db4Z9ug03AVhm/webhook-trigger/7086b414-5989-4e32-8444-b71c64c6758d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', city: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-950 transition-colors overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-20">
          <div className="lg:col-span-5">
            <h2 className="text-primary font-black tracking-[0.2em] uppercase text-xs mb-4">Admissions</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] mb-8">Let's Get You <br /><span className="text-secondary dark:text-primary">Airborne.</span></h3>
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
                    Page Field Airport<br />
                    Fort Myers, FL 33907
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white dark:bg-slate-900 text-secondary rounded-[1.5rem] flex items-center justify-center shadow-lg">
                  <i className="fas fa-clock text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-sm">Business Hours</h4>
                  <p className="text-slate-500 font-medium leading-tight">
                    Mon - Sat: 7AM - 6PM<br />
                    Sun: By Appointment
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white dark:bg-slate-900 text-primary rounded-[1.5rem] flex items-center justify-center shadow-lg">
                  <i className="fas fa-phone text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-sm">Direct Line</h4>
                  <p className="text-slate-500 font-medium">239-350-7124</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white dark:bg-slate-900 text-secondary rounded-[1.5rem] flex items-center justify-center shadow-lg">
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
            <div className="bg-white dark:bg-slate-900 p-10 md:p-14 rounded-[4rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[60px] rounded-full pointer-events-none"></div>
              {submitStatus === 'success' ? (
                <div className="text-center py-20 animate-fadeIn">
                  <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-check text-4xl"></i>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Message Received!</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-lg">We'll be in touch shortly to schedule your flight.</p>
                  <button onClick={() => setSubmitStatus('idle')} className="mt-8 text-primary font-bold hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 transition-all">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/20 focus:outline-none dark:text-white"
                      placeholder="John Pilot"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/20 focus:outline-none dark:text-white"
                      placeholder="wings@sky.com"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/20 focus:outline-none dark:text-white"
                      placeholder="(239) 555-0123"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">City</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/20 focus:outline-none dark:text-white"
                      placeholder="Fort Myers"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">MESSAGE / AVIATION GOAL</label>
                    <textarea
                      rows={4}
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/20 focus:outline-none dark:text-white"
                      placeholder="Tell us about your flight goals..."
                    ></textarea>
                  </div>

                  <div className="md:col-span-2 space-y-4 pt-2">
                    <div className="flex items-start">
                      <input id="consent-transactional" type="checkbox" className="mt-1 w-4 h-4 text-primary bg-slate-50 border-slate-300 rounded focus:ring-primary" />
                      <label htmlFor="consent-transactional" className="ml-3 text-sm text-slate-500 dark:text-slate-400 leading-normal">
                        I consent to receive transactional messages from Core Aviator Training through the phone number provided. Message frequency may vary. Message & data rates may apply. Reply HELP for help or STOP to opt out.
                      </label>
                    </div>
                    <div className="flex items-start">
                      <input id="consent-marketing" type="checkbox" className="mt-1 w-4 h-4 text-primary bg-slate-50 border-slate-300 rounded focus:ring-primary" />
                      <label htmlFor="consent-marketing" className="ml-3 text-sm text-slate-500 dark:text-slate-400 leading-normal">
                        I consent to receive marketing and promotional messages from Core Aviator Training at the phone number provided. Message frequency may vary. Message & data rates may apply. Reply help for HELP or STOP to opt out.
                      </label>
                    </div>
                  </div>

                  <div className="md:col-span-2 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-primary to-secondary text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-95 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'SENDING...' : 'REQUEST ADMISSIONS PACKAGE'}
                    </button>
                    <div className="mt-6 flex justify-center space-x-1 text-xs text-slate-400 font-bold uppercase tracking-wider">
                      <a href="/privacy" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'privacy' })); }} className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</a>
                      <span>|</span>
                      <a href="/terms" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'terms' })); }} className="hover:text-primary transition-colors cursor-pointer">Terms of Service</a>
                    </div>
                  </div>
                </form>
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
