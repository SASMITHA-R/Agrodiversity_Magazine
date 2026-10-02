import React, { useState, useEffect } from "react";
import { X, Search, BookOpen, User, Calendar, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Article } from "../types";
import { articleService } from "../services/articleService";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [year, setYear] = useState("All");
  const [results, setResults] = useState<Article[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [years, setYears] = useState<(string | number)[]>([]);

  useEffect(() => {
    articleService.getAll().then((arts) => {
      const cats = Array.from(new Set(arts.map((a) => a.category)));
      const yrs = Array.from(
        new Set(arts.map((a) => new Date(a.date).getFullYear()))
      ).sort((a, b) => b - a);
      setCategories(cats);
      setYears(yrs);
      setResults(arts);
    });
  }, []);

  useEffect(() => {
    articleService
      .search({
        query,
        category,
        year,
      })
      .then((res) => setResults(res));
  }, [query, category, year]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-start justify-center pt-10 sm:pt-16 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full border border-gray-200 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles by title, author, keyword, or subject..."
            className="w-full text-base sm:text-lg border-none focus:outline-none focus:ring-0 text-agro-dark placeholder:text-gray-400"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-500 hover:text-agro-dark hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters */}
        <div className="px-5 py-3 bg-gray-50 border-b border-gray-100 flex flex-wrap items-center gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-gray-500 font-semibold">Category:</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 text-xs focus:outline-none"
            >
              <option value="All">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-500 font-semibold">Year:</span>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 text-xs focus:outline-none"
            >
              <option value="All">All Years</option>
              {years.map((y) => (
                <option key={y.toString()} value={y.toString()}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          <span className="text-gray-400 ml-auto font-medium">
            {results.length} {results.length === 1 ? "article" : "articles"} found
          </span>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 sm:p-5 divide-y divide-gray-100 flex-1 space-y-3">
          {results.length === 0 ? (
            <div className="py-12 text-center text-gray-400 space-y-2">
              <BookOpen className="w-10 h-10 mx-auto text-gray-300" />
              <p className="font-serif text-base text-gray-600">No matching articles found</p>
              <p className="text-xs">Try different search terms or clear category filters.</p>
            </div>
          ) : (
            results.map((art) => (
              <div key={art.id} className="pt-3 first:pt-0 group">
                <Link
                  to={`/article/${art.id}`}
                  onClick={onClose}
                  className="block p-3 rounded-xl hover:bg-agro-surface/80 transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs text-agro-leaf mb-1">
                    <span className="font-semibold uppercase tracking-wider text-[11px] bg-agro-tint px-2 py-0.5 rounded">
                      {art.category}
                    </span>
                    <span>•</span>
                    <span className="text-gray-500">{art.date}</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-agro-dark group-hover:text-agro-primary transition-colors leading-snug">
                    {art.title}
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                    {art.abstract}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                    <span className="font-medium">{art.author}</span>
                    <span className="flex items-center gap-1 text-agro-primary font-bold group-hover:translate-x-1 transition-transform">
                      Read article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-500 flex items-center justify-between px-5">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-gray-200 text-gray-700 font-mono text-[10px]">ESC</kbd> to close</span>
          <Link
            to="/archives"
            onClick={onClose}
            className="text-agro-primary hover:underline font-semibold"
          >
            Browse Full Archives →
          </Link>
        </div>
      </div>
    </div>
  );
};
