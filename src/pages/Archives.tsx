import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Calendar,
  Filter,
  Layers,
  BookOpen,
  Download,
  FileText,
  Search,
  Sparkles
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { IssueCard } from '../components/IssueCard';
import { ArticleCard } from '../components/ArticleCard';
import { PDFViewerModal } from '../components/PDFViewerModal';
import { ArticleReaderModal } from '../components/ArticleReaderModal';
import { Issue, Article } from '../types';
import { issueService } from '../services/issueService';
import { articleService } from '../services/articleService';

export const Archives: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';
  const yearParam = searchParams.get('year') || 'All';

  const [activeTab, setActiveTab] = useState<'issues' | 'articles'>('issues');
  const [issues, setIssues] = useState<Issue[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>(yearParam);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [pdfIssue, setPdfIssue] = useState<Issue | null>(null);
  const [readerArticle, setReaderArticle] = useState<Article | null>(null);

  useEffect(() => {
    async function load() {
      const allIssues = await issueService.getAll();
      const allArticles = await articleService.getAll();
      setIssues(allIssues);
      setArticles(allArticles);
    }
    load();
  }, []);

  // Sync state with URL params
  useEffect(() => {
    if (categoryParam !== 'All') {
      setSelectedCategory(categoryParam);
      setActiveTab('articles');
    }
    if (yearParam !== 'All') {
      setSelectedYear(yearParam);
    }
  }, [categoryParam, yearParam]);

  const years = Array.from(new Set(issues.map((i) => i.year))).sort((a, b) => b - a);
  const categories = Array.from(new Set(articles.map((a) => a.category)));

  // Filtered issues
  const filteredIssues = issues.filter((iss) => {
    if (selectedYear !== 'All' && iss.year.toString() !== selectedYear) {
      return false;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        iss.title.toLowerCase().includes(q) ||
        iss.theme.toLowerCase().includes(q) ||
        iss.volume.toLowerCase().includes(q) ||
        iss.issueNumber.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // Filtered articles
  const filteredArticles = articles.filter((art) => {
    if (selectedYear !== 'All') {
      const artYear = new Date(art.date).getFullYear().toString();
      if (!artYear.includes(selectedYear) && !art.issueTitle?.includes(selectedYear)) {
        return false;
      }
    }
    if (selectedCategory !== 'All' && art.category !== selectedCategory) {
      return false;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchesTitle = art.title.toLowerCase().includes(q);
      const matchesAuthor = art.author.toLowerCase().includes(q);
      const matchesAbstract = art.abstract.toLowerCase().includes(q);
      const matchesKeywords = art.keywords?.some((k) => k.toLowerCase().includes(q));
      if (!matchesTitle && !matchesAuthor && !matchesAbstract && !matchesKeywords) {
        return false;
      }
    }
    return true;
  });

  // Group issues by year for the hierarchical view
  const issuesByYear = years.reduce<Record<number, Issue[]>>((acc, yr) => {
    const yrIssues = filteredIssues.filter((i) => i.year === yr);
    if (yrIssues.length > 0) {
      acc[yr] = yrIssues;
    }
    return acc;
  }, {});

  const handleYearFilter = (yr: string) => {
    setSelectedYear(yr);
    setSearchParams((prev) => {
      const p = new URLSearchParams(prev);
      if (yr === 'All') p.delete('year');
      else p.set('year', yr);
      return p;
    });
  };

  const handleCategoryFilter = (cat: string) => {
    setSelectedCategory(cat);
    setSearchParams((prev) => {
      const p = new URLSearchParams(prev);
      if (cat === 'All') p.delete('category');
      else p.set('category', cat);
      return p;
    });
  };

  return (
    <div className="space-y-10 lg:space-y-14 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6">
      <Breadcrumb items={[{ label: "Archives & Past Issues" }]} />

      {/* Page Title & Intro */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-agro-leaf flex items-center gap-1.5">
          <Layers className="w-4 h-4 text-agro-gold" />
          <span>Historical Repository</span>
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-agro-dark tracking-tight">
          Publication Archives
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed">
          Explore past volumes, issues, and peer-reviewed articles of Agrodiversity Magazine. Browse by publication year, volume issue, academic category, or keyword search.
        </p>
      </div>

      {/* Filter and Mode Switcher */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200/90 shadow-md space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* View Mode Tabs: Issues vs Articles */}
          <div className="flex items-center p-1 bg-gray-100 rounded-xl w-fit">
            <button
              onClick={() => setActiveTab('issues')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'issues'
                  ? 'bg-white text-agro-dark shadow-sm'
                  : 'text-gray-600 hover:text-agro-dark'
              }`}
            >
              Browse Issues by Year
            </button>
            <button
              onClick={() => setActiveTab('articles')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'articles'
                  ? 'bg-white text-agro-dark shadow-sm'
                  : 'text-gray-600 hover:text-agro-dark'
              }`}
            >
              Browse Individual Articles ({filteredArticles.length})
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter archives..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-agro-emerald/40"
            />
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-gray-100 text-xs">
          <div className="flex items-center gap-1.5 text-gray-500 font-semibold">
            <Filter className="w-3.5 h-3.5 text-agro-leaf" />
            <span>Filter By:</span>
          </div>

          {/* Year Buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => handleYearFilter('All')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedYear === 'All'
                  ? 'bg-agro-primary text-white font-bold'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Years
            </button>
            {years.map((yr) => (
              <button
                key={yr}
                onClick={() => handleYearFilter(yr.toString())}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  selectedYear === yr.toString()
                    ? 'bg-agro-primary text-white font-bold'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>

          {/* Category Dropdown (especially for article view) */}
          {activeTab === 'articles' && (
            <div className="flex items-center gap-1.5 ml-auto">
              <span className="text-gray-500">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryFilter(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-gray-200 bg-agro-surface text-gray-700 text-xs focus:outline-none cursor-pointer"
              >
                <option value="All">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          )}

          {(selectedYear !== 'All' || selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedYear('All');
                setSelectedCategory('All');
                setSearchQuery('');
                setSearchParams({});
              }}
              className="px-2.5 py-1 text-rose-600 hover:bg-rose-50 rounded-lg font-semibold ml-auto"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* VIEW 1: ISSUES BY YEAR HIERARCHY */}
      {activeTab === 'issues' && (
        <div className="space-y-12">
          {Object.keys(issuesByYear).length === 0 ? (
            <div className="py-16 text-center text-gray-400 bg-white rounded-2xl border border-gray-200 space-y-2">
              <Layers className="w-10 h-10 mx-auto text-gray-300" />
              <p className="font-serif text-base text-gray-700">No issues found matching your selection.</p>
              <p className="text-xs text-gray-500">Try selecting "All Years" or clearing the search text.</p>
            </div>
          ) : (
            Object.keys(issuesByYear)
              .map(Number)
              .sort((a, b) => b - a)
              .map((yr) => (
                <section key={yr} className="space-y-6">
                  {/* Year Header Badge */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-agro-dark text-white font-serif font-bold text-lg shadow-sm">
                      <Calendar className="w-4 h-4 text-agro-amber" />
                      <span>Year {yr}</span>
                    </div>
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <span className="text-xs text-gray-400 font-mono">
                      {issuesByYear[yr].length} {issuesByYear[yr].length === 1 ? 'Issue' : 'Issues'}
                    </span>
                  </div>

                  {/* Issue Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {issuesByYear[yr].map((issue) => (
                      <IssueCard
                        key={issue.id}
                        issue={issue}
                        onOpenPdf={(iss) => setPdfIssue(iss)}
                      />
                    ))}
                  </div>
                </section>
              ))
          )}
        </div>
      )}

      {/* VIEW 2: INDIVIDUAL ARTICLES */}
      {activeTab === 'articles' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>
              Showing {filteredArticles.length} peer-reviewed articles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onQuickRead={(art) => setReaderArticle(art)}
              />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="py-16 text-center text-gray-400 bg-white rounded-2xl border border-gray-200 space-y-2">
              <FileText className="w-10 h-10 mx-auto text-gray-300" />
              <p className="font-serif text-base text-gray-700">No articles matched your filters.</p>
              <p className="text-xs text-gray-500">Adjust the category or year selection to see more results.</p>
            </div>
          )}
        </div>
      )}

      {/* Modals */}
      {pdfIssue && (
        <PDFViewerModal
          issue={pdfIssue}
          articles={articles}
          onClose={() => setPdfIssue(null)}
        />
      )}

      {readerArticle && (
        <ArticleReaderModal
          article={readerArticle}
          onClose={() => setReaderArticle(null)}
        />
      )}
    </div>
  );
};
