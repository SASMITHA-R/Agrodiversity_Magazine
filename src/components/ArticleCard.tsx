import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import { Calendar, Clock, ArrowRight, User, Eye, Download, BookOpen } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onQuickRead?: (article: Article) => void;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onQuickRead,
  featured = false,
}) => {
  return (
    <article
      className={`journal-card rounded-2xl overflow-hidden flex flex-col group transition-all duration-200 border border-gray-200/90 hover:border-agro-leaf/40 ${
        featured ? 'bg-white shadow-xl' : 'bg-white shadow-md'
      }`}
    >
      {/* Article Image Container */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

        {/* Category Pill */}
        <div className="absolute top-3 left-3">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-agro-primary/95 text-white shadow-sm border border-agro-gold/30 backdrop-blur-md">
            {article.category}
          </span>
        </div>

        {/* Read Time Badge */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/60 text-white text-[11px] font-medium backdrop-blur-sm">
          <Clock className="w-3 h-3 text-agro-amber" />
          <span>{article.readTime}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1 font-medium text-agro-primary">
              <User className="w-3.5 h-3.5 text-agro-leaf" />
              <span>{article.author}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              <span>{article.date}</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif font-bold text-lg sm:text-xl text-agro-dark group-hover:text-agro-primary transition-colors line-clamp-2 leading-snug">
            <Link to={`/article/${article.id}`}>
              {article.title}
            </Link>
          </h3>

          {/* Short description / Abstract */}
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
            {article.abstract}
          </p>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {article.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[11px] bg-agro-surface text-agro-leaf border border-agro-tint font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
          {/* DOI / Metrics */}
          <div className="flex items-center gap-3 text-xs text-gray-400">
            {article.views && (
              <span className="flex items-center gap-1" title="Views">
                <Eye className="w-3.5 h-3.5" />
                <span>{article.views}</span>
              </span>
            )}
            {article.downloadsCount && (
              <span className="flex items-center gap-1" title="Downloads">
                <Download className="w-3.5 h-3.5" />
                <span>{article.downloadsCount}</span>
              </span>
            )}
          </div>

          {/* Buttons: Quick Read & Read More */}
          <div className="flex items-center gap-2">
            {onQuickRead && (
              <button
                onClick={() => onQuickRead(article)}
                className="px-2.5 py-1.5 rounded-lg text-xs text-gray-600 hover:text-agro-primary hover:bg-agro-tint/50 transition-colors flex items-center gap-1"
                title="Quick preview"
              >
                <BookOpen className="w-3.5 h-3.5 text-agro-leaf" />
                <span className="hidden sm:inline">Preview</span>
              </button>
            )}

            <Link
              to={`/article/${article.id}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-agro-primary bg-agro-tint/60 hover:bg-agro-primary hover:text-white transition-all duration-150"
            >
              <span>Read More</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
