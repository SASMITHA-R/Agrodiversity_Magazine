import { Issue } from '../types';
import { issues, currentIssue } from '../data/issues';

export const issueService = {
  async getAll(): Promise<Issue[]> {
    return issues;
  },

  async getCurrentIssue(): Promise<Issue> {
    return currentIssue;
  },

  async getById(id: string): Promise<Issue | null> {
    return issues.find(i => i.id === id) || null;
  },

  async getByYear(year: number): Promise<Issue[]> {
    return issues.filter(i => i.year === year);
  },

  async getYears(): Promise<number[]> {
    const yearsSet = new Set(issues.map(i => i.year));
    return Array.from(yearsSet).sort((a, b) => b - a);
  }
};
