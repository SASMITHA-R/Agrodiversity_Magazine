import React, { useState } from "react";
import { X, Download, Copy, Check, BookOpen, User, Calendar, ExternalLink } from "lucide-react";
import { Article } from "../types";
import { Link } from "react-router-dom";

interface ArticleReaderModalProps {
  article: Article | null;
  onClose: () => void;
  onOpenPdf?: (url?: string) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
  onOpenPdf,
}) => {
  const [copiedCitation, setCopiedCitation] = useState<string | null>(null);
  const [citationFormat, setCitationFormat] = useState<"APA" | "MLA" | "BibTeX">("APA");

  if (!article) return null;

  const citations = {
    APA: `${article.author} et al. (${new Date(article.date).getFullYear()}). ${article.title}. Agrodiversity Magazine, 6(1). https://doi.org/${article.doi || "10.5281/agrodiversity"}`,
    MLA: `${article.author}, et al. "${article.title}." Agrodiversity Magazine, vol. 6, no. 1, ${new Date(article.date).getFullYear()}.`,
    BibTeX: `@article{agrodiversity_${article.id},\n  author = {${article.author}},\n  title = {${article.title}},\n  journal = {Agrodiversity Magazine},\n  year = {${new Date(article.date).getFullYear()}},\n  publisher = {SRN Publication}\n}`,
  };

  const handleCopyCitation = (format: "APA" | "MLA" | "BibTeX") => {
    navigator.clipboard.writeText(citations[format]);
    setCopiedCitation(format);
    setTimeout(() => setCopiedCitation(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-start justify-center pt-8 sm:pt-12 p-3 sm:p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full border border-gray-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header bar */}
        <div className="bg-agro-dark text-white px-6 py-4 flex items-center justify-between border-b border-agro-forest">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-agro-amber animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-agro-tint">
              SRN Publication • Academic Paper Preview
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              to={`/article/${article.id}`}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-agro-primary hover:bg-agro-forest text-white text-xs font-medium transition-colors"
            >
              <span>Full Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-agro-tint/70 hover:text-white hover:bg-agro-forest transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
          {/* Category & Date */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-agro-tint text-agro-dark">
              {article.category}
            </span>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                <span>{article.date}</span>
              </span>
              <span>•</span>
              <span className="font-mono text-agro-leaf">DOI: {article.doi || "10.5281/agrodiversity"}</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-agro-dark leading-tight">
            {article.title}
          </h2>

          {/* Authors */}
          <div className="p-4 rounded-xl bg-agro-surface border border-gray-100 text-xs sm:text-sm text-gray-700">
            <p className="font-semibold text-agro-primary flex items-center gap-1.5">
              <User className="w-4 h-4 text-agro-leaf" />
              <span>{article.author}</span>
              {article.coAuthors && <span>, {article.coAuthors.join(", ")}</span>}
            </p>
            <p className="text-gray-500 mt-1 italic pl-5">
              {article.authorAffiliation}
            </p>
          </div>

          {/* Abstract */}
          <div className="space-y-2">
            <h3 className="font-serif font-bold text-base text-agro-dark flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-agro-leaf" />
              <span>Abstract</span>
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-200/80">
              {article.abstract}
            </p>
          </div>

          {/* Keywords */}
          {article.keywords && (
            <div className="flex flex-wrap gap-2 items-center text-xs">
              <span className="font-semibold text-gray-500">Keywords:</span>
              {article.keywords.map((kw, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 font-medium">
                  {kw}
                </span>
              ))}
            </div>
          )}

          {/* Main Content Excerpt */}
          <div className="space-y-3 pt-2">
            <h3 className="font-serif font-bold text-base text-agro-dark">Introduction & Highlights</h3>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3 font-serif">
              <p>{article.sections?.introduction || article.fullContent}</p>
            </div>
          </div>

          {/* Citation Box */}
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-serif font-bold text-xs uppercase tracking-wider text-gray-500">
                Cite this Article
              </span>
              <div className="flex items-center gap-2">
                {(["APA", "MLA", "BibTeX"] as const).map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setCitationFormat(fmt)}
                    className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-colors ${
                      citationFormat === fmt
                        ? "bg-agro-primary text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative p-3 rounded-lg bg-gray-900 text-gray-200 font-mono text-xs overflow-x-auto">
              <code>{citations[citationFormat]}</code>
              <button
                onClick={() => handleCopyCitation(citationFormat)}
                className="absolute top-2 right-2 p-1.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors"
                title="Copy citation"
              >
                {copiedCitation === citationFormat ? (
                  <Check className="w-3.5 h-3.5 text-agro-amber" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <span className="text-xs text-gray-500">Agrodiversity Magazine (SRN Publication)</span>
          <Link
            to={`/article/${article.id}`}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-agro-primary hover:bg-agro-forest transition-colors shadow"
          >
            <span>Read Complete Article</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
