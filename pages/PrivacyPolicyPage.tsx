import React, { useEffect } from 'react';

const PrivacyPolicyPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="animate-fadeIn pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Privacy Policy</h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium mb-12">Last Updated: December 22, 2025</p>

                <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-li:text-slate-600 dark:prose-li:text-slate-400">
                    <h2>Introduction</h2>
                    <p>
                        Core Aviator Training LLC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our aviation training services.
                    </p>

                    <h2>Information We Collect</h2>

                    <h3>Personal Information</h3>
                    <p>We may collect personal information that you voluntarily provide to us when you:</p>
                    <ul>
                        <li>Fill out contact forms or registration forms</li>
                        <li>Schedule discovery flights or training sessions</li>
                        <li>Communicate with us via email, phone, or other channels</li>
                        <li>Enroll in our flight training programs</li>
                    </ul>
                    <p>This information may include:</p>
                    <ul>
                        <li>Name, email address, and phone number</li>
                        <li>Mailing address</li>
                        <li>Date of birth and citizenship information (required for TSA compliance)</li>
                        <li>Pilot certificate information and medical certificate details</li>
                        <li>Payment and billing information</li>
                    </ul>

                    <h3>Automatically Collected Information</h3>
                    <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
                    <ul>
                        <li>IP address</li>
                        <li>Browser type and version</li>
                        <li>Operating system</li>
                        <li>Referring URLs</li>
                        <li>Pages viewed and time spent on pages</li>
                    </ul>

                    <h2>How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Provide, operate, and maintain our flight training services</li>
                        <li>Process and manage your enrollment and training schedule</li>
                        <li>Communicate with you about your training, including scheduling and updates</li>
                        <li>Comply with FAA regulations and TSA security requirements</li>
                        <li>Send you marketing communications (with your consent)</li>
                        <li>Respond to your inquiries and provide customer support</li>
                        <li>Improve our website and services</li>
                        <li>Detect, prevent, and address technical issues or fraudulent activity</li>
                    </ul>

                    <h2>Disclosure of Your Information</h2>
                    <p>We may share your information in the following situations:</p>

                    <h3>Regulatory Compliance</h3>
                    <p>We may disclose your information to comply with FAA regulations, TSA security programs, and other applicable aviation laws and regulations.</p>

                    <h3>Service Providers</h3>
                    <p>We may share your information with third-party service providers who perform services on our behalf, such as:</p>
                    <ul>
                        <li>Payment processors</li>
                        <li>Scheduling and booking systems</li>
                        <li>Email service providers</li>
                        <li>Website hosting and maintenance</li>
                    </ul>

                    <h3>Business Transfers</h3>
                    <p>If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>

                    <h3>Legal Requirements</h3>
                    <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities.</p>

                    <h2>Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </p>

                    <h2>Data Retention</h2>
                    <p>
                        We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Flight training records are maintained in accordance with FAA record-keeping requirements.
                    </p>

                    <h2>Your Privacy Rights</h2>
                    <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                    <ul>
                        <li>The right to access and receive a copy of your personal information</li>
                        <li>The right to correct inaccurate or incomplete information</li>
                        <li>The right to request deletion of your personal information</li>
                        <li>The right to object to or restrict certain processing of your information</li>
                        <li>The right to opt-out of marketing communications</li>
                    </ul>
                    <p>To exercise these rights, please contact us using the information provided below.</p>

                    <h2>Cookies and Tracking Technologies</h2>
                    <p>
                        Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookies through your browser settings, but disabling cookies may limit your ability to use certain features of our website.
                    </p>

                    <h2>Third-Party Links</h2>
                    <p>
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
                    </p>

                    <h2>Children's Privacy</h2>
                    <p>
                        Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                    </p>

                    <h2>Changes to This Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                    </p>

                    <h2>Contact Us</h2>
                    <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
                    <div className="not-prose bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg mt-8">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">Core Aviator Training LLC</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            Page Field Airport<br />
                            Fort Myers, FL 33907
                        </p>
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

                    <h2>Aviation-Specific Privacy Considerations</h2>
                    <p>
                        As an aviation training provider, we are subject to specific federal regulations governing the collection and use of student information:
                    </p>
                    <ul>
                        <li><strong>TSA Security Programs:</strong> For non-U.S. citizens, we are required to collect and submit certain information to the Transportation Security Administration (TSA) as part of the Alien Flight Student Program.</li>
                        <li><strong>FAA Record-Keeping:</strong> We maintain training records as required by Federal Aviation Regulations, including flight time, training endorsements, and student progress.</li>
                        <li><strong>Medical Certificate Information:</strong> We may collect and verify information about your FAA medical certificate to ensure compliance with flight training requirements.</li>
                    </ul>

                    <h2>Consent</h2>
                    <p>
                        By using our website and services, you consent to this Privacy Policy and agree to its terms. If you do not agree with this policy, please do not use our services.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
