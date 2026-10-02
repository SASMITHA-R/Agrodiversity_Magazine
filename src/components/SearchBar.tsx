import React from 'react';
import { Search, X, Filter } from 'lucide-react';

interface SearchBarProps {
  query: string;
  onQueryChange: (q: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  selectedYear: string;
  onYearChange: (yr: string) => void;
  categories: string[];
  years: (string | number)[];
  placeholder?: string;
  onClear?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  query,
  onQueryChange,
  selectedCategory,
  onCategoryChange,
  selectedYear,
  onYearChange,
  categories,
  years,
  placeholder = "Search by article title, author, keyword, or topic...",
  onClear,
}) => {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-lg space-y-4">
      {/* Input row */}
      <div className="relative flex items-center">
        <Search className="w-5 h-5 text-gray-400 absolute left-4 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-agro-emerald/50 focus:border-agro-primary text-sm transition-all"
        />
        {query && (
          <button
            onClick={() => onQueryChange('')}
            className="absolute right-3.5 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            title="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Selectors Row */}
      <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
        <div className="flex items-center gap-1.5 text-gray-500 font-semibold">
          <Filter className="w-3.5 h-3.5 text-agro-leaf" />
          <span>Filters:</span>
        </div>

        {/* Category dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="px-3 py-2 rounded-xl border border-gray-200 bg-agro-surface/60 text-gray-700 focus:outline-none focus:ring-2 focus:ring-agro-emerald/40 text-xs font-medium cursor-pointer"
        >
          <option value="All">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Year dropdown */}
        <select
          value={selectedYear}
          onChange={(e) => onYearChange(e.target.value)}
          className="px-3 py-2 rounded-xl border border-gray-200 bg-agro-surface/60 text-gray-700 focus:outline-none focus:ring-2 focus:ring-agro-emerald/40 text-xs font-medium cursor-pointer"
        >
          <option value="All">All Years</option>
          {years.map((yr) => (
            <option key={yr.toString()} value={yr.toString()}>
              {yr}
            </option>
          ))}
        </select>

        {/* Reset button if active */}
        {(query || selectedCategory !== 'All' || selectedYear !== 'All') && onClear && (
          <button
            onClick={onClear}
            className="px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors ml-auto"
          >
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
};
