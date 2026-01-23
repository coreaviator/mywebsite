import React, { useEffect } from 'react';

const TermsOfServicePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="animate-fadeIn pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Terms of Service</h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium mb-12">Last Updated: January 23, 2026</p>

                <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-li:text-slate-600 dark:prose-li:text-slate-400">
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using the services provided by Core Aviator Training LLC, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>

                    <h2>2. Flight Training Services</h2>
                    <p>
                        Core Aviator Training provides flight instruction in accordance with Federal Aviation Administration (FAA) regulations. All students are expected to comply with FAA rules, TSA security requirements, and Core Aviator Training policies.
                    </p>

                    <h2>3. Payment Terms</h2>
                    <p>
                        To maintain flexibility and transparency, Core Aviator Training operates on a <strong>Pay-Per-Session</strong> basis.
                    </p>
                    <ul>
                        <li>Payment is due at the conclusion of each flight or ground instruction session.</li>
                        <li>We accept major credit cards, debit cards, and electronic transfers.</li>
                        <li>Block rates or package deals, if purchased, are non-refundable but remain valid for one year from the date of purchase.</li>
                    </ul>

                    <h2>4. Cancellation and No-Show Policy</h2>
                    <p>
                        We respect your time and ask that you respect ours. Our schedule is dedicated to providing focused instruction to our students.
                    </p>
                    <ul>
                        <li><strong>Cancellation:</strong> Please provide at least 24 hours' notice if you need to cancel or reschedule a lesson.</li>
                        <li><strong>Late Cancellations & No-Shows:</strong> Cancellations made with less than 24 hours' notice or failure to appear for a scheduled lesson may result in a cancellation fee equivalent to one hour of ground instruction.</li>
                        <li><strong>Weather Cancellations:</strong> We prioritize safety above all else. Cancellations due to unsafe weather conditions (as determined by the instructor) will <strong>not</strong> incur a fee.</li>
                    </ul>

                    <h2>5. 10DLC & Messaging Compliance</h2>
                    <p>
                        By providing your phone number to Core Aviator Training, you agree to the following in compliance with A2P 10DLC regulations:
                    </p>
                    <ul>
                        <li><strong>Consent:</strong> You consent to receive transactional and promotional messages from us regarding your training, scheduling, and aviation updates.</li>
                        <li><strong>Frequency:</strong> Message frequency varies based on your training schedule and our communications.</li>
                        <li><strong>Rates:</strong> Standard message and data rates may apply depending on your carrier plan.</li>
                        <li><strong>Opt-Out:</strong> You can opt-out of receiving SMS messages at any time by replying <strong>STOP</strong>. For assistance, reply <strong>HELP</strong>.</li>
                        <li><strong>Privacy:</strong> Your phone number and consent status will solely be used for Core Aviator Training communications and will not be shared with third parties for marketing purposes.</li>
                    </ul>

                    <h2>6. Data Collection and Retention</h2>
                    <p>
                        For security purposes and to comply with federal regulations, we collect and retain certain personal information throughout the duration of our business relationship.
                    </p>
                    <ul>
                        <li><strong>Security:</strong> We collect copies of identification (passport, birth certificate, driver's license) and medical certificates to verify eligibility and comply with TSA Alien Flight Student Program (AFSP) requirements where applicable.</li>
                        <li><strong>Retention:</strong> This data is securely retained for the duration of your training and as required by FAA record-keeping statutes (typically 3 years for training records).</li>
                        <li><strong>Protection:</strong> We employ industry-standard security measures to protect this sensitive data from unauthorized access.</li>
                    </ul>

                    <h2>7. Liability</h2>
                    <p>
                        Aviation activities carry inherent risks. While we adhere to the highest safety standards and maintenance protocols, students acknowledge these risks. Core Aviator Training LLC is not liable for incidental or consequential damages arising from the use of our services, except in cases of proven gross negligence or willful misconduct.
                    </p>

                    <h2>8. Code of Conduct</h2>
                    <p>
                        Students are expected to conduct themselves professionally. Any behavior that compromises safety, disrupts operations, or harasses staff or other students may result in immediate termination of training services without refund of unused block funds.
                    </p>

                    <h2>9. Contact Us</h2>
                    <p>
                        If you have any questions regarding these Terms of Service, please contact us at:
                    </p>
                    <div className="not-prose bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg mt-8">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">Core Aviator Training LLC</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                                <i className="fas fa-envelope text-primary"></i>
                                <span className="font-medium">cfi@coreaviatortraining.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                                <i className="fas fa-phone text-secondary"></i>
                                <span className="font-medium">239-350-7124</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfServicePage;
