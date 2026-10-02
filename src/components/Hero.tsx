import React from 'react';
import { Link } from 'react-router-dom';
import { Send, BookOpen, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreIssue?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreIssue }) => {
  return (
    <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden">
      {/* High-quality agriculture/scientific background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=85&w=1920"
          alt="Agrodiversity farmlands and sustainable crops"
          className="w-full h-full object-cover"
        />
        {/* Scientific dark editorial gradient overlay */}
        <div className="absolute inset-0 hero-gradient"></div>
        {/* Subtle grid lines overlay */}
        <div className="absolute inset-0 scientific-grid pointer-events-none opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 text-center text-white space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agro-forest/80 border border-agro-gold/40 text-agro-amber text-xs font-semibold backdrop-blur-md shadow-lg tracking-wide uppercase animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-agro-gold" />
          <span>SRN Publication • Monthly Peer-Reviewed E-Magazine</span>
        </div>

        {/* Heading */}
        <h1 className="font-serif font-bold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-md">
          Agrodiversity Magazine
        </h1>

        {/* Subtitle */}
        <p className="font-serif italic text-lg sm:text-2xl text-agro-amber max-w-2xl mx-auto font-medium tracking-wide drop-shadow">
          Connecting Crops, Climate, Culture, and Science
        </p>

        {/* Description */}
        <p className="text-sm sm:text-lg text-agro-tint/90 max-w-3xl mx-auto font-light leading-relaxed drop-shadow">
          Promoting sustainable agriculture, biodiversity conservation, scientific innovation, and knowledge sharing across farming systems.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/current-issue"
            onClick={onExploreIssue}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-agro-tint text-agro-dark shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 border border-white/60"
          >
            <BookOpen className="w-4 h-4 text-agro-leaf" />
            <span>Explore Current Issue</span>
          </Link>

          <Link
            to="/submission"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-agro-amber via-agro-gold to-agro-amber hover:from-agro-gold-dark hover:to-agro-gold text-agro-dark shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 border border-agro-amber/50"
          >
            <Send className="w-4 h-4 text-agro-dark" />
            <span>Submit Manuscript</span>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-agro-tint/80 border-t border-white/10 max-w-2xl mx-auto">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-agro-gold" />
            <span>Double-Blind Peer Review</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-agro-gold"></span>
            <span>Monthly Publication</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-agro-gold"></span>
            <span>Open Access Repository</span>
          </div>
        </div>
      </div>
    </section>
  );
};
