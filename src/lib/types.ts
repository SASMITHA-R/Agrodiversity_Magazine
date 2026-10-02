export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  authorAffiliation: string;
  coAuthors?: string[];
  date: string;
  readTime: string;
  abstract: string;
  fullContent?: string;
  tags: string[];
  image: string;
  pdfUrl?: string;
  doi?: string;
  views?: number;
  downloadsCount?: number;
  published: boolean;
  issueId?: string;
  issueTitle?: string;
}

export interface Issue {
  id: string;
  volume: string;
  issueNumber: string;
  month: string;
  year: number;
  title: string;
  theme: string;
  coverImage: string;
  pdfUrl: string;
  editorialMessage: string;
  publishedDate: string;
  articlesCount: number;
  published: boolean;
  featuredArticleIds?: string[];
}

export interface Editor {
  id: string;
  name: string;
  role: string;
  department: string;
  affiliation: string;
  category: 
    | "Editor-in-Chief"
    | "Managing Editor"
    | "Associate Editors"
    | "Section Editors"
    | "Technical Editors"
    | "Student Editorial Board"
    | "Social Media Coordinator";
  subSection?: string;
  email?: string;
  image?: string;
  bio?: string;
}

export type SubmissionStatus = 
  | "Submitted"
  | "Under Review"
  | "Revision"
  | "Accepted"
  | "Payment Pending"
  | "Published"
  | "Rejected";

export interface Submission {
  id: string; // e.g. ADM-2026-XXXX
  authorName: string;
  email: string;
  phone: string;
  institution: string;
  articleTitle: string;
  articleType: "Review Article" | "Short Communication" | "Case Study / Field Report" | "Farmer Innovation / Success Story";
  subjectArea: string;
  coAuthors?: string;
  fileName: string;
  fileSize?: string;
  submittedAt: string;
  status: SubmissionStatus;
  notes?: string;
  declarationAccepted: boolean;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  institution: string;
  membershipType: "Annual Membership" | "Lifetime Membership";
  membershipId: string;
  feePaid: number;
  validUntil: string;
  status: "Active" | "Pending Verification" | "Expired";
  joinedDate: string;
}

export interface SiteSettings {
  publicationFees: {
    annualMember: number;
    coAuthorNonMember: number;
    nonMember: number;
    indianAuthors: number;
    saarcCountries: number;
    otherCountries: number;
  };
  membershipFees: {
    annualMembership: number;
    lifetimeMembership: number;
  };
  contact: {
    editorInChief: string;
    editorialEmail: string;
    submissionEmail: string;
    phone: string;
    publisher: string;
    officeAddress: string;
  };
  schedule: {
    frequency: string;
    releaseWindow: string;
    fastTrackDuration: string;
  };
  discrepancyNotice: string;
}
