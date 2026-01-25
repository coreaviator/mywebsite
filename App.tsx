
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ServicesGrid from './components/ServicesGrid';
import TrainingPrograms from './components/TrainingPrograms';
import PPLPage from './pages/PPLPage';
import DiscoveryPage from './pages/DiscoveryPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ContactSection from './components/ContactSection';
import ReviewModal from './components/ReviewModal';
import Footer from './components/Footer';
import Cherokee140Page from './pages/Cherokee140Page';
import popupInstructor from './assets/popup_instructor.png';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [blogKey, setBlogKey] = useState(0);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.page) {
        if (event.state.page === 'blog' && currentPage === 'blog') {
          setBlogKey(prev => prev + 1);
        }
        setCurrentPage(event.state.page);
      } else {
        // Default to home if no state
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Initial state if needed
    if (!window.history.state) {
      window.history.replaceState({ page: 'home' }, '', '');
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentPage]);

  useEffect(() => {
    // Listen for custom navigation events from components
    const handleNavigate = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      handlePageChange(detail);
    };

    window.addEventListener('navigate', handleNavigate);
    return () => window.removeEventListener('navigate', handleNavigate);
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, blogKey]);

  const handlePageChange = (page: string) => {
    if (page === 'blog' && currentPage === 'blog') {
      setBlogKey(prev => prev + 1);
    }
    setCurrentPage(page);
    window.history.pushState({ page }, '', `/${page === 'home' ? '' : page}`);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'ppl': return <PPLPage />;
      case 'discovery': return <DiscoveryPage />;
      case 'blog': return <BlogPage key={blogKey} />;
      case 'faq': return <FAQPage />;
      case 'contact': return <ContactSection onNavigate={handlePageChange} />;
      case 'privacy': return <PrivacyPolicyPage />;
      case 'terms': return <TermsOfServicePage />;
      case 'cherokee-140': return <Cherokee140Page />;
      default: return (
        <div className="animate-fadeIn">
          <Hero onCtaClick={() => handlePageChange('contact')} onNavigate={handlePageChange} />
          <div id="built-for-excellence">
            <ServicesGrid onNavigate={handlePageChange} />
          </div>
          <Features />
          <div className="bg-gradient-to-r from-secondary to-primary py-12 md:py-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full"></div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 text-left">
                  <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Master the Skies?</h2>
                  <p className="mb-10 opacity-90 font-medium text-lg italic max-w-xl">
                    "The engine is the heart of an airplane, but the pilot is its soul."
                  </p>
                  <button onClick={() => handlePageChange('contact')} className="bg-white text-secondary px-12 py-5 rounded-full font-black hover:scale-105 transition-transform shadow-2xl text-lg">
                    Schedule Your Discovery Flight
                  </button>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                  <img src={popupInstructor} alt="Core Aviator Instructor" className="w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
          <div id="contact-home">
            <ContactSection onNavigate={handlePageChange} />
          </div>
        </div>
      );
    }
  };

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar
        onPageChange={handlePageChange}
        currentPage={currentPage}
        onReviewClick={() => setIsReviewModalOpen(true)}
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onPageChange={handlePageChange} onReviewClick={() => setIsReviewModalOpen(true)} />
      {isReviewModalOpen && <ReviewModal onClose={() => setIsReviewModalOpen(false)} />}
    </div>
  );
};

export default App;
