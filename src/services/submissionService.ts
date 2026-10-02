import { Submission } from '../types';

const SUBMISSION_STORAGE_KEY = 'agrodiversity_submissions';

export const submissionService = {
  /**
   * Retrieve all submissions (mock database in localStorage)
   */
  async getAll(): Promise<Submission[]> {
    try {
      const stored = localStorage.getItem(SUBMISSION_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('LocalStorage error reading submissions', e);
    }
    return [
      {
        id: "AGRO-2026-0001",
        authorName: "Dr. K. Senthilkumar",
        email: "senthil.agri@tnau.ac.in",
        phone: "+91 94432 11890",
        institution: "Tamil Nadu Agricultural University (TNAU), Coimbatore",
        articleTitle: "Evaluation of Seaweed Bio-Extracts (Kappaphycus alvarezii) on Groundnut Pod Yield and Oil Content",
        articleType: "Case Study / Field Report",
        subjectArea: "Natural Farming",
        coAuthors: "M. Anuradha, P. Devaraj",
        keywords: "Seaweed Extracts, Groundnut, Biostimulants, Pod Yield",
        fileName: "Senthilkumar_Seaweed_Groundnut_Study.docx",
        fileSize: "1.4 MB",
        submittedAt: "2026-02-14 11:30 AM",
        status: "Under Review",
        declarationAccepted: true,
        notes: "Assigned to Dr. P. Sathiyapriya for peer review."
      },
      {
        id: "AGRO-2026-0002",
        authorName: "Prof. Priya Nandhini",
        email: "priya.nandhini@agri-uni.org",
        phone: "+91 98840 55672",
        institution: "Central Agricultural University, Imphal",
        articleTitle: "Systematic Review of CRISPR/Cas9 Genome Editing in Pulses for Drought Tolerance",
        articleType: "Review Article",
        subjectArea: "Plant Biotechnology and Breeding",
        coAuthors: "Dr. Rajeshwar Sharma",
        keywords: "CRISPR/Cas9, Pulses, Drought Resistance, Gene Editing",
        fileName: "CRISPR_Pulses_Review_2026.docx",
        fileSize: "2.1 MB",
        submittedAt: "2026-02-08 04:15 PM",
        status: "Revision",
        declarationAccepted: true,
        notes: "Reviewer requested minor citation additions for non-homologous end joining mechanisms."
      }
    ];
  },

  /**
   * Submit a new manuscript and generate a unique AGRO-2026-XXXX ID
   */
  async submitManuscript(data: Omit<Submission, 'id' | 'submittedAt' | 'status'>): Promise<Submission> {
    const existing = await this.getAll();
    const currentYear = new Date().getFullYear();
    const nextSeq = (existing.length + 1).toString().padStart(4, '0');
    const newId = `AGRO-${currentYear}-${nextSeq}`;

    const newSubmission: Submission = {
      ...data,
      id: newId,
      submittedAt: new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
      }),
      status: "Submitted",
      notes: "Manuscript successfully received. Initial editorial compliance check in progress."
    };

    const updated = [newSubmission, ...existing];
    try {
      localStorage.setItem(SUBMISSION_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to save to localStorage', e);
    }

    return newSubmission;
  },

  /**
   * Track submission status by ID or Email
   */
  async trackSubmission(query: string): Promise<Submission | null> {
    const all = await this.getAll();
    const q = query.trim().toUpperCase();
    return all.find(s => s.id.toUpperCase() === q || s.email.toUpperCase() === q) || null;
  }
};
