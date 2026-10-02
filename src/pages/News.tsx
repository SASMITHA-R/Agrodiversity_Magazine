import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  Calendar,
  MapPin,
  Tag,
  ArrowRight,
  Sparkles,
  ExternalLink,
  X,
  Share2,
  Check
} from 'lucide-react';
import { newsItems } from '../data/news';
import { NewsItem } from '../types';

export const News: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="space-y-12 lg:space-y-16 py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6">
      <Breadcrumb items={[{ label: "News & Events" }]} />

      {/* Header */}
      <div className="space-y-3 border-b border-gray-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-agro-leaf flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-agro-gold" />
          <span>Announcements & Historical Events</span>
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-agro-dark tracking-tight">
          News, Conferences & Events
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed">
          Stay informed about national agricultural symposiums, calls for papers, workshops, and milestones from Agrodiversity Magazine.
        </p>
      </div>

      {/* Featured News / Event Banner (AGRI INNOVA 2025) */}
      {newsItems.length > 0 && (
        <div className="journal-card rounded-3xl overflow-hidden bg-white border border-gray-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto">
            <img
              src={newsItems[0].image}
              alt={newsItems[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-agro-primary text-white shadow-md">
                Featured Historical Event
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1.5 font-semibold text-agro-primary">
                  <Calendar className="w-4 h-4 text-agro-leaf" />
                  <span>{newsItems[0].date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>{newsItems[0].location}</span>
                </span>
              </div>

              <h2 className="font-serif font-bold text-xl sm:text-2xl lg:text-3xl text-agro-dark leading-tight">
                {newsItems[0].title}
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {newsItems[0].summary}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedNews(newsItems[0])}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-agro-primary hover:bg-agro-forest text-white transition-colors shadow-sm"
              >
                <span>Read Full Event Report</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-gray-400 font-mono">SRN Special Release</span>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Other News and Calls for Papers */}
      <div className="space-y-6">
        <h2 className="font-serif font-bold text-2xl text-agro-dark border-b border-gray-200 pb-3">
          All Announcements & Calls
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="journal-card rounded-2xl overflow-hidden bg-white border border-gray-200/90 shadow-md hover:border-agro-leaf/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1 font-medium text-agro-primary">
                      <Calendar className="w-3.5 h-3.5 text-agro-leaf" />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base sm:text-lg text-agro-dark leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>

                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0 border-t border-gray-100 mt-2">
                <button
                  onClick={() => setSelectedNews(item)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-bold text-xs bg-agro-tint/70 hover:bg-agro-primary hover:text-white text-agro-dark transition-all"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News Details Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-gray-200 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="relative aspect-[16/8] overflow-hidden bg-gray-900">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-agro-primary text-white">
                  {selectedNews.category}
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-2xl leading-tight">
                  {selectedNews.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-4 overflow-y-auto flex-1 text-xs sm:text-sm text-gray-700 leading-relaxed font-serif">
              <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-gray-500 pb-3 border-b border-gray-100">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-agro-leaf" />
                  <span>{selectedNews.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>{selectedNews.location}</span>
                </span>
              </div>

              <div className="whitespace-pre-line space-y-3">
                {selectedNews.content}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-agro-primary"
              >
                {copiedLink ? <Check className="w-4 h-4 text-agro-leaf" /> : <Share2 className="w-4 h-4" />}
                <span>{copiedLink ? "Link Copied!" : "Share Event"}</span>
              </button>

              <button
                onClick={() => setSelectedNews(null)}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-agro-primary text-white hover:bg-agro-forest transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
