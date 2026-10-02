import { NewsItem } from '../types';
import { newsItems } from '../data/news';

export const newsService = {
  async getAll(): Promise<NewsItem[]> {
    return newsItems;
  },

  async getById(id: string): Promise<NewsItem | null> {
    return newsItems.find(n => n.id === id) || null;
  },

  async getFeatured(): Promise<NewsItem[]> {
    return newsItems.filter(n => n.featured);
  }
};
