import { Article } from '../types';
import { articles as initialArticles } from '../data/articles';

// In-memory / LocalStorage cache for client-side operations
const STORAGE_KEY = 'agrodiversity_articles';

export const articleService = {
  /**
   * Fetch all published articles
   */
  async getAll(): Promise<Article[]> {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('LocalStorage unavailable, using initial data', e);
    }
    return initialArticles;
  },

  /**
   * Get article by ID or slug
   */
  async getById(idOrSlug: string): Promise<Article | null> {
    const all = await this.getAll();
    return all.find(a => a.id === idOrSlug || a.slug === idOrSlug) || null;
  },

  /**
   * Search articles with multi-field filtering
   */
  async search(params: {
    query?: string;
    category?: string;
    year?: number | string;
    author?: string;
    tag?: string;
  }): Promise<Article[]> {
    const all = await this.getAll();
    return all.filter(art => {
      // Query match (title, abstract, keywords, author)
      if (params.query) {
        const q = params.query.toLowerCase().trim();
        const matchesTitle = art.title.toLowerCase().includes(q);
        const matchesAbstract = art.abstract.toLowerCase().includes(q);
        const matchesAuthor = art.author.toLowerCase().includes(q);
        const matchesTags = art.tags.some(t => t.toLowerCase().includes(q));
        const matchesKeywords = art.keywords?.some(k => k.toLowerCase().includes(q));
        if (!matchesTitle && !matchesAbstract && !matchesAuthor && !matchesTags && !matchesKeywords) {
          return false;
        }
      }

      // Category match
      if (params.category && params.category !== 'All') {
        if (art.category.toLowerCase() !== params.category.toLowerCase()) {
          return false;
        }
      }

      // Year match
      if (params.year && params.year !== 'All') {
        const artYear = new Date(art.date).getFullYear().toString();
        if (!artYear.includes(params.year.toString()) && !art.issueTitle?.includes(params.year.toString())) {
          return false;
        }
      }

      // Author match
      if (params.author) {
        if (!art.author.toLowerCase().includes(params.author.toLowerCase())) {
          return false;
        }
      }

      return true;
    });
  },

  /**
   * Increment view counter
   */
  async incrementViews(id: string): Promise<void> {
    try {
      const all = await this.getAll();
      const updated = all.map(a => a.id === id ? { ...a, views: (a.views || 0) + 1 } : a);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to persist view counter', e);
    }
  }
};
