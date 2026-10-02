import React from 'react';
import { Link } from 'react-router-dom';
import { Issue } from '../types';
import { BookOpen, Download, Calendar, FileText, ArrowRight } from 'lucide-react';

interface IssueCardProps {
  issue: Issue;
  onOpenPdf?: (issue: Issue) => void;
  featured?: boolean;
}

export const IssueCard: React.FC<IssueCardProps> = ({
  issue,
  onOpenPdf,
  featured = false,
}) => {
  return (
    <div
      className={`journal-card rounded-2xl overflow-hidden bg-white border border-gray-200/90 hover:border-agro-leaf/40 transition-all duration-200 flex flex-col group ${
        featured ? 'ring-2 ring-agro-primary/20 shadow-xl' : 'shadow-md'
      }`}
    >
      {/* Cover Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-900">
        <img
          src={issue.coverImage}
          alt={issue.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-agro-dark/90 via-agro-dark/40 to-transparent"></div>

        {/* Issue Identification Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-agro-primary/95 text-white shadow-md border border-agro-gold/30 backdrop-blur-md">
            {issue.volume} • {issue.issueNumber}
          </span>
          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 text-agro-amber backdrop-blur-sm self-start">
            {issue.month} {issue.year}
          </span>
        </div>

        {/* Bottom Title on Image */}
        <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
          <h4 className="font-serif font-bold text-base sm:text-lg leading-tight line-clamp-2 drop-shadow">
            {issue.title}
          </h4>
          <p className="text-xs text-agro-tint/90 line-clamp-1 italic font-light">
            {issue.theme}
          </p>
        </div>
      </div>

      {/* Details Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              <span>{issue.publishedDate}</span>
            </span>
            <span className="flex items-center gap-1 font-semibold text-agro-leaf">
              <FileText className="w-3.5 h-3.5" />
              <span>{issue.articlesCount} Articles</span>
            </span>
          </div>

          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
            {issue.editorialMessage}
          </p>
        </div>

        {/* Buttons */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
          {/* PDF Button */}
          {onOpenPdf ? (
            <button
              onClick={() => onOpenPdf(issue)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
              title="Read / Download PDF"
            >
              <Download className="w-3.5 h-3.5 text-agro-leaf" />
              <span>PDF</span>
            </button>
          ) : (
            <a
              href={issue.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-agro-leaf" />
              <span>PDF</span>
            </a>
          )}

          {/* View Issue Button */}
          <Link
            to={`/current-issue?issue=${issue.id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-agro-primary hover:bg-agro-forest transition-colors shadow-sm"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>View Issue</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
