import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  BookOpen,
  Download,
  Calendar,
  FileText,
  User,
  Clock,
  ArrowRight,
  Eye,
  Share2,
  CheckCircle2,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { PDFViewerModal } from '../components/PDFViewerModal';
import { ArticleReaderModal } from '../components/ArticleReaderModal';
import { Article, Issue } from '../types';
import { issueService } from '../services/issueService';
import { articleService } from '../services/articleService';

export const CurrentIssue: React.FC = () => {
  const [searchParams] = useSearchParams();
  const issueIdParam = searchParams.get('issue');

  const [issue, setIssue] = useState<Issue | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [previewArticle, setPreviewArticle] = useState<Article | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    async function loadData() {
      if (issueIdParam) {
        const found = await issueService.getById(issueIdParam);
        if (found) {
          setIssue(found);
        } else {
          setIssue(await issueService.getCurrentIssue());
        }
      } else {
        setIssue(await issueService.getCurrentIssue());
      }

      const allArts = await articleService.getAll();
      setArticles(allArts);
    }
    loadData();
  }, [issueIdParam]);

  if (!issue) {
    return (
      <div className="py-20 text-center text-gray-500">
        Loading current issue information...
      </div>
    );
  }

  // Filter articles that belong to this issue or fallback to first 6
  const issueArticles = articles.filter(
    (a) => a.issueId === issue.id || a.issueTitle?.includes(issue.volume)
  );
  const displayArticles = issueArticles.length > 0 ? issueArticles : articles.slice(0, 6);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="space-y-10 lg:space-y-14 py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6">
      <Breadcrumb
        items={[
          { label: "Issues", path: "/archives" },
          { label: `${issue.volume}, ${issue.issueNumber} (${issue.year})` },
        ]}
      />

      {/* Main Issue Header Card */}
      <div className="journal-card rounded-3xl p-6 sm:p-10 bg-white border border-gray-200/90 shadow-xl overflow-hidden relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Issue Cover on Left */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-white ring-1 ring-gray-200 group">
              <img
                src={issue.coverImage}
                alt={issue.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-agro-dark/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-agro-amber block">
                  {issue.volume} • {issue.issueNumber}
                </span>
                <span className="text-xs font-serif font-bold truncate block">
                  {issue.month} {issue.year}
                </span>
              </div>
            </div>
          </div>

          {/* Issue Details & Actions on Right */}
          <div className="md:col-span-8 lg:col-span-9 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-agro-tint text-agro-dark border border-agro-leaf/20">
                <Sparkles className="w-3.5 h-3.5 text-agro-leaf" />
                <span>Agrodiversity Magazine — Current Issue</span>
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                {issue.month} {issue.year}
              </span>
            </div>

            <h1 className="font-serif font-bold text-2xl sm:text-4xl text-agro-dark tracking-tight leading-tight">
              {issue.title}
            </h1>

            <p className="font-serif italic text-sm sm:text-base text-agro-leaf font-medium">
              Theme: “{issue.theme}”
            </p>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed bg-agro-surface p-4 rounded-2xl border border-gray-100">
              <strong>Editorial Note:</strong> {issue.editorialMessage}
            </p>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 pt-1">
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>Published: {issue.publishedDate}</span>
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-agro-leaf">
                <FileText className="w-4 h-4 text-agro-leaf" />
                <span>{displayArticles.length} Peer-Reviewed Articles</span>
              </span>
              <span className="font-mono text-gray-400">
                Publisher: SRN Publication
              </span>
            </div>

            {/* Prominent Action Buttons including View Current Issue PDF */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowPdfModal(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-agro-primary hover:bg-agro-forest text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <BookOpen className="w-4 h-4 text-agro-amber" />
                <span>View Current Issue PDF</span>
              </button>

              <button
                onClick={() => setShowPdfModal(true)}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors"
              >
                <Download className="w-4 h-4 text-agro-leaf" />
                <span>Download PDF Edition</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="p-3.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                title="Share Issue Link"
              >
                {copiedLink ? (
                  <CheckCircle2 className="w-4 h-4 text-agro-leaf" />
                ) : (
                  <Share2 className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Articles in Current Issue */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div>
            <h2 className="font-serif font-bold text-2xl text-agro-dark">
              Table of Contents & Articles
            </h2>
            <p className="text-xs text-gray-500">
              Browse individual articles included in {issue.volume}, {issue.issueNumber}
            </p>
          </div>
          <span className="text-xs font-semibold text-gray-400 font-mono">
            {displayArticles.length} Contributions
          </span>
        </div>

        {/* Detailed Article List */}
        <div className="space-y-4">
          {displayArticles.map((article, index) => (
            <div
              key={article.id}
              className="journal-card rounded-2xl p-6 bg-white border border-gray-200/90 hover:border-agro-leaf/40 transition-all duration-200 shadow-sm space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-agro-primary/10 text-agro-primary font-bold flex items-center justify-center font-mono text-xs">
                    {index + 1}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-[11px] bg-agro-tint text-agro-dark">
                    {article.category}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{article.readTime}</span>
                  </span>
                  <span>•</span>
                  <span className="font-mono text-agro-leaf">
                    DOI: {article.doi || "10.5281/agrodiversity"}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif font-bold text-lg sm:text-xl text-agro-dark hover:text-agro-primary transition-colors leading-snug">
                <Link to={`/article/${article.id}`}>
                  {article.title}
                </Link>
              </h3>

              {/* Author & Affiliation */}
              <div className="text-xs text-gray-600 flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-agro-leaf flex-shrink-0" />
                <span className="font-semibold text-gray-900">{article.author}</span>
                {article.coAuthors && (
                  <span className="text-gray-500">
                    with {article.coAuthors.join(", ")}
                  </span>
                )}
                <span className="hidden md:inline text-gray-300">|</span>
                <span className="hidden md:inline text-gray-500 italic">
                  {article.authorAffiliation}
                </span>
              </div>

              {/* Abstract */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed bg-gray-50/70 p-3.5 rounded-xl border border-gray-100">
                <strong>Abstract:</strong> {article.abstract}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                {article.tags && (
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-agro-surface text-gray-600 font-medium text-[11px]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-2 ml-auto">
                  <button
                    onClick={() => setPreviewArticle(article)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors font-medium text-xs"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-agro-leaf" />
                    <span>Quick Preview</span>
                  </button>

                  <button
                    onClick={() => setShowPdfModal(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors font-medium text-xs"
                  >
                    <Download className="w-3.5 h-3.5 text-agro-leaf" />
                    <span>PDF</span>
                  </button>

                  <Link
                    to={`/article/${article.id}`}
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg font-bold bg-agro-primary text-white hover:bg-agro-forest transition-colors shadow-sm text-xs"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {showPdfModal && (
        <PDFViewerModal
          issue={issue}
          articles={displayArticles}
          onClose={() => setShowPdfModal(false)}
        />
      )}

      {previewArticle && (
        <ArticleReaderModal
          article={previewArticle}
          onClose={() => setPreviewArticle(null)}
          onOpenPdf={() => {
            setPreviewArticle(null);
            setShowPdfModal(true);
          }}
        />
      )}
    </div>
  );
};
