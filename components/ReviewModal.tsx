
import React, { useState } from 'react';

interface ReviewModalProps {
  onClose: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ onClose }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  // Updated with the user's specific Google Business review link
  const GOOGLE_REVIEW_URL = "https://g.page/r/CdUl6-sVK6ZgEAE/review";

  const handleSubmitInternal = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send 'feedback' and 'rating' to your server here
  };

  const handleStarClick = (num: number) => {
    setRating(num);
    if (num >= 4) {
      // Small delay for visual feedback before opening Google
      setTimeout(() => {
        window.open(GOOGLE_REVIEW_URL, '_blank');
        onClose();
      }, 1200);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative bg-white dark:bg-slate-900 rounded-[3rem] w-full max-w-xl shadow-[0_35px_60px_-15px_rgba(17,165,205,0.3)] overflow-hidden animate-scaleUp border border-slate-200 dark:border-slate-800">
        <button onClick={onClose} className="absolute top-8 right-8 text-slate-400 hover:text-primary transition-colors z-10">
          <i className="fas fa-times text-2xl"></i>
        </button>

        <div className="p-10 md:p-12 text-center">
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-[1.5rem] flex items-center justify-center mx-auto mb-8">
            <i className="fas fa-star text-3xl"></i>
          </div>

          {!submitted ? (
            <>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">How was your flight?</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-10 font-medium text-lg">
                Your feedback helps us maintain our standard of excellence at Page Field.
              </p>

              <div className="flex justify-center space-x-3 mb-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleStarClick(star)}
                    className={`text-5xl transition-all duration-300 ${
                      (rating || 0) >= star ? 'text-primary scale-110 drop-shadow-[0_0_10px_rgba(17,165,205,0.5)]' : 'text-slate-200 dark:text-slate-800'
                    }`}
                  >
                    <i className="fas fa-star"></i>
                  </button>
                ))}
              </div>

              {rating !== null && rating <= 3 && (
                <form onSubmit={handleSubmitInternal} className="text-left animate-fadeIn">
                  <div className="h-px bg-slate-100 dark:bg-slate-800 w-full mb-8"></div>
                  <label className="block text-xs font-black text-slate-400 mb-3 uppercase tracking-[0.2em] ml-1">
                    How can we improve?
                  </label>
                  <textarea
                    required
                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-6 text-slate-600 dark:text-slate-200 focus:ring-4 focus:ring-primary/20 focus:outline-none mb-6 font-medium placeholder:text-slate-400"
                    rows={4}
                    placeholder="Tell us what we could have done better..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  ></textarea>
                  <button type="submit" className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white py-5 rounded-2xl font-black hover:bg-primary hover:text-white transition-all shadow-xl active:scale-95">
                    SUBMIT FEEDBACK
                  </button>
                </form>
              )}

              {rating !== null && rating >= 4 && (
                <div className="flex flex-col items-center animate-pulse">
                  <div className="text-primary font-black text-lg tracking-[0.2em] mb-2 uppercase">
                    Fantastic!
                  </div>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                    Redirecting to Google Reviews...
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="animate-fadeIn py-10">
              <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl">
                <i className="fas fa-check"></i>
              </div>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Feedback Received</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-10 font-medium text-lg leading-relaxed">
                Thank you for your honesty. We've sent this directly to our management team for review.
              </p>
              <button onClick={onClose} className="w-full bg-primary text-white py-5 rounded-2xl font-black shadow-xl hover:bg-secondary transition-all">
                CLOSE WINDOW
              </button>
            </div>
          )}
        </div>
      </div>
      
      <style>{`
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scaleUp { animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </div>
  );
};

export default ReviewModal;
