
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
import ContactSection from './components/ContactSection';
import ReviewModal from './components/ReviewModal';
import Footer from './components/Footer';

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, blogKey]);

  const handlePageChange = (page: string) => {
    if (page === 'blog' && currentPage === 'blog') {
      setBlogKey(prev => prev + 1);
    }
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'ppl': return <PPLPage />;
      case 'discovery': return <DiscoveryPage />;
      case 'blog': return <BlogPage key={blogKey} />;
      case 'faq': return <FAQPage />;
      case 'contact': return <ContactSection />;
      default: return (
        <div className="animate-fadeIn">
          <Hero onCtaClick={() => setCurrentPage('discovery')} />
          <ServicesGrid onNavigate={setCurrentPage} />
          <div className="py-24 bg-white dark:bg-slate-900 transition-colors">
            <TrainingPrograms onNavigate={setCurrentPage} />
          </div>
          <Features />
          <div className="bg-gradient-to-r from-secondary to-primary py-24 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full"></div>
            <div className="container mx-auto px-4 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Master the Skies?</h2>
              <p className="mb-10 opacity-90 max-w-2xl mx-auto font-medium text-lg italic">
                "The engine is the heart of an airplane, but the pilot is its soul."
              </p>
              <button onClick={() => setCurrentPage('discovery')} className="bg-white text-secondary px-12 py-5 rounded-full font-black hover:scale-105 transition-transform shadow-2xl text-lg">
                Schedule Your Discovery Flight
              </button>
            </div>
          </div>
          <div id="contact-home">
            <ContactSection />
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
