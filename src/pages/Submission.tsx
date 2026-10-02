import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Upload,
  FileText,
  Clock,
  ShieldCheck,
  CreditCard,
  BookOpen,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Copy,
  Check,
  Search
} from 'lucide-react';
import { submissionService } from '../services/submissionService';
import { Submission as SubmissionType } from '../types';

export const Submission: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    authorName: '',
    email: '',
    phone: '',
    institution: '',
    articleType: 'Review Article' as SubmissionType['articleType'],
    subjectArea: 'Climate Change Adaptation',
    articleTitle: '',
    coAuthors: '',
    keywords: '',
    declarationAccepted: false,
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successModalData, setSuccessModalData] = useState<SubmissionType | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  // Tracker State
  const [trackingQuery, setTrackingQuery] = useState('');
  const [trackedSubmission, setTrackedSubmission] = useState<SubmissionType | null>(null);
  const [trackError, setTrackError] = useState('');

  const workflowSteps = [
    { number: 1, title: "Prepare Manuscript", desc: "Write research in accordance with scope and IMRAD standards." },
    { number: 2, title: "Check Formatting", desc: "Verify MS Word format, Times New Roman 12pt, 1.5 spacing, SI units." },
    { number: 3, title: "Submit Manuscript", desc: "Submit through this portal or email directly to balramagri@gmail.com." },
    { number: 4, title: "Receive Manuscript ID", desc: "Automated generation of unique identifier code (e.g., AGRO-2026-0001)." },
    { number: 5, title: "Peer Review", desc: "Double-blind evaluation conducted by at least two independent expert referees." },
    { number: 6, title: "Acceptance / Rejection", desc: "Author notified of editorial verdict with referee comments and revision guidance." },
    { number: 7, title: "Payment After Acceptance", desc: "Publication processing fees collected strictly following formal acceptance." },
    { number: 8, title: "Publication", desc: "Typesetting, DOI registration, and inclusion in the monthly open-access edition." },
  ];

  const subjectAreas = [
    "Agro-biodiversity Conservation",
    "Climate Change Adaptation",
    "Sustainable Crop Production",
    "Soil and Water Management",
    "Plant Biotechnology and Breeding",
    "Farmer-Centric Innovations",
    "Natural & Organic Farming",
    "Horticulture and Vegetable Science",
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (ext !== 'doc' && ext !== 'docx') {
        setErrorMsg('Invalid file format. Please upload only MS Word (.doc or .docx) files. PDFs are not accepted.');
        setSelectedFile(null);
        return;
      }
      setErrorMsg('');
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.authorName || !formData.email || !formData.institution || !formData.articleTitle) {
      setErrorMsg('Please fill in all required fields marked with *.');
      return;
    }

    if (!formData.declarationAccepted) {
      setErrorMsg('Please accept the declaration stating this work is original and not under consideration elsewhere.');
      return;
    }

    setIsSubmitting(true);

    try {
      const newSubmission = await submissionService.submitManuscript({
        authorName: formData.authorName,
        email: formData.email,
        phone: formData.phone || '+91 9000000000',
        institution: formData.institution,
        articleTitle: formData.articleTitle,
        articleType: formData.articleType,
        subjectArea: formData.subjectArea,
        coAuthors: formData.coAuthors,
        keywords: formData.keywords,
        fileName: selectedFile ? selectedFile.name : `${formData.authorName.replace(/\s+/g, '_')}_Manuscript.docx`,
        fileSize: selectedFile ? `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB` : '1.8 MB',
        declarationAccepted: formData.declarationAccepted,
      });

      setSuccessModalData(newSubmission);
      // Reset form
      setFormData({
        authorName: '',
        email: '',
        phone: '',
        institution: '',
        articleType: 'Review Article',
        subjectArea: 'Climate Change Adaptation',
        articleTitle: '',
        coAuthors: '',
        keywords: '',
        declarationAccepted: false,
      });
      setSelectedFile(null);
    } catch (err) {
      setErrorMsg('An error occurred while submitting your manuscript. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setTrackError('');
    if (!trackingQuery.trim()) return;

    const result = await submissionService.trackSubmission(trackingQuery);
    if (result) {
      setTrackedSubmission(result);
    } else {
      setTrackError('No submission found with this ID or Email. Please verify your reference code.');
      setTrackedSubmission(null);
    }
  };

  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <div className="space-y-12 lg:space-y-16 py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-6">
      <Breadcrumb items={[{ label: "Submission Procedure & Portal" }]} />

      {/* Page Header */}
      <div className="space-y-3 border-b border-gray-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-agro-leaf flex items-center gap-1.5">
          <Send className="w-4 h-4 text-agro-gold" />
          <span>Author Submission Portal</span>
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-agro-dark tracking-tight">
          Manuscript Submission Procedure
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed">
          Welcome to the Agrodiversity Magazine submission portal. Please review the 8-step editorial workflow below and complete the online submission form.
        </p>
      </div>

      {/* 8-STEP WORKFLOW TIMELINE */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-agro-dark">
            Step-by-Step Submission & Publication Workflow
          </h2>
          <span className="text-xs text-gray-400 font-mono">8 Milestones</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {workflowSteps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-5 border border-gray-200/90 shadow-sm hover:border-agro-leaf/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-xl bg-agro-primary text-white font-bold text-xs flex items-center justify-center font-mono shadow-sm">
                  0{step.number}
                </div>
                <h3 className="font-serif font-bold text-sm text-agro-dark leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUBMISSION FORM CONTAINER */}
      <section className="journal-card rounded-3xl p-6 sm:p-10 bg-white border border-gray-200/90 shadow-xl space-y-8">
        <div className="border-b border-gray-100 pb-4 space-y-1">
          <h2 className="font-serif font-bold text-2xl text-agro-dark">
            Submit Your Manuscript
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Submit your article for double-blind peer review. No fee is required at submission.
          </p>
        </div>

        {errorMsg && (
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center gap-2.5">
            <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Primary Author & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                Author Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.authorName}
                onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                placeholder="e.g. Dr. K. Senthilkumar"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. senthil.agri@tnau.ac.in"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50"
              />
            </div>
          </div>

          {/* Row 2: Phone & Affiliation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                Phone / WhatsApp Number
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. +91 94432 11890"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                Institutional Affiliation <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                placeholder="e.g. Tamil Nadu Agricultural University (TNAU), Coimbatore"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50"
              />
            </div>
          </div>

          {/* Row 3: Article Type & Subject Area */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                Article Type <span className="text-rose-500">*</span>
              </label>
              <select
                value={formData.articleType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    articleType: e.target.value as SubmissionType['articleType'],
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50 bg-white"
              >
                <option value="Review Article">Review Article (4000–8000 words)</option>
                <option value="Short Communication">Short Communication (1500–3000 words)</option>
                <option value="Case Study / Field Report">Case Study / Field Report (1500–3000 words)</option>
                <option value="Farmer Innovation / Success Story">Farmer Innovation / Success Story (1000–2000 words)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                Subject Area / Section <span className="text-rose-500">*</span>
              </label>
              <select
                value={formData.subjectArea}
                onChange={(e) => setFormData({ ...formData, subjectArea: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50 bg-white"
              >
                {subjectAreas.map((sa) => (
                  <option key={sa} value={sa}>
                    {sa}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Manuscript Title */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
              Manuscript Title <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.articleTitle}
              onChange={(e) => setFormData({ ...formData, articleTitle: e.target.value })}
              placeholder="e.g. Climate-Smart Farming Techniques: Enhancing Crop Resilience Under Thermal Stress"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50"
            />
          </div>

          {/* Co-Authors & Keywords */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                Co-Authors (comma-separated, optional)
              </label>
              <input
                type="text"
                value={formData.coAuthors}
                onChange={(e) => setFormData({ ...formData, coAuthors: e.target.value })}
                placeholder="e.g. Dr. T. Sanker, R. Manivel"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                Keywords (4 to 6 keywords) <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.keywords}
                onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                placeholder="e.g. Climate Resilience, Agronomy, Micro-Irrigation, Thermal Stress"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50"
              />
            </div>
          </div>

          {/* Manuscript File Upload */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
              Manuscript File (MS Word .doc / .docx only)
            </label>
            <div className="border-2 border-dashed border-gray-300 hover:border-agro-leaf rounded-2xl p-6 text-center transition-colors bg-agro-surface/50">
              <input
                type="file"
                id="file-upload"
                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleFileChange}
                className="hidden"
              />
              <label htmlFor="file-upload" className="cursor-pointer space-y-2 block">
                <Upload className="w-8 h-8 text-agro-leaf mx-auto" />
                <p className="text-xs sm:text-sm font-semibold text-agro-dark">
                  {selectedFile ? (
                    <span className="text-agro-primary font-bold">
                      Selected: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(0)} KB)
                    </span>
                  ) : (
                    <span>Click to browse and upload your manuscript Word document</span>
                  )}
                </p>
                <p className="text-[11px] text-gray-500">
                  Accepted format: .doc, .docx (Max 25MB) • PDF files strictly rejected
                </p>
              </label>
            </div>
          </div>

          {/* Declaration Checkbox */}
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
            <label className="flex items-start gap-3 cursor-pointer text-xs sm:text-sm text-gray-700">
              <input
                type="checkbox"
                required
                checked={formData.declarationAccepted}
                onChange={(e) => setFormData({ ...formData, declarationAccepted: e.target.checked })}
                className="mt-1 rounded text-agro-primary focus:ring-agro-emerald h-4 w-4"
              />
              <span className="leading-relaxed">
                <strong>Declaration:</strong> I hereby declare that this manuscript is original, has not been published elsewhere, is not currently under consideration by any other journal or magazine, and all co-authors have consented to submission.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-agro-primary hover:bg-agro-forest text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
            >
              <Send className="w-4 h-4 text-agro-amber" />
              <span>{isSubmitting ? "Generating Manuscript ID..." : "Submit Manuscript"}</span>
            </button>
          </div>
        </form>
      </section>

      {/* TRACK SUBMISSION STATUS SECTION */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-md space-y-6">
        <div className="space-y-1">
          <h3 className="font-serif font-bold text-xl text-agro-dark">
            Track Submitted Manuscript Status
          </h3>
          <p className="text-xs text-gray-500">
            Enter your unique manuscript ID (e.g., AGRO-2026-0001) or corresponding author email to review your evaluation stage.
          </p>
        </div>

        <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={trackingQuery}
              onChange={(e) => setTrackingQuery(e.target.value)}
              placeholder="e.g. AGRO-2026-0001 or senthil.agri@tnau.ac.in"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/40 uppercase"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gray-800 hover:bg-black text-white transition-colors"
          >
            Check Status
          </button>
        </form>

        {trackError && (
          <p className="text-xs text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-200">
            {trackError}
          </p>
        )}

        {trackedSubmission && (
          <div className="p-5 rounded-2xl bg-agro-surface border border-agro-leaf/30 space-y-3 animate-fade-in">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 pb-2">
              <span className="font-mono font-bold text-base text-agro-primary">
                {trackedSubmission.id}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-agro-tint text-agro-dark">
                {trackedSubmission.status}
              </span>
            </div>

            <div className="space-y-1 text-xs text-gray-700">
              <p><strong>Title:</strong> {trackedSubmission.articleTitle}</p>
              <p><strong>Author:</strong> {trackedSubmission.authorName} ({trackedSubmission.institution})</p>
              <p><strong>Submitted:</strong> {trackedSubmission.submittedAt}</p>
              {trackedSubmission.notes && (
                <p className="p-2.5 rounded-lg bg-white border border-gray-200 text-gray-600 mt-2 italic">
                  <strong>Editorial Note:</strong> {trackedSubmission.notes}
                </p>
              )}
            </div>
          </div>
        )}
      </section>

      {/* SUCCESS MODAL GENERATING MOCK MANUSCRIPT ID */}
      {successModalData && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-gray-200 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-agro-tint text-agro-dark flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10 text-agro-leaf" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-agro-leaf">
                Confirmation Notice
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-agro-dark">
                Submission Successful!
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Your manuscript has been safely received by the Agrodiversity Magazine editorial desk.
              </p>
            </div>

            {/* Generated Manuscript ID Box */}
            <div className="p-4 rounded-2xl bg-agro-surface border border-agro-leaf/40 space-y-2 text-left">
              <span className="text-[11px] uppercase font-bold text-gray-500 block">
                Your Unique Manuscript ID:
              </span>
              <div className="flex items-center justify-between">
                <span className="font-mono font-black text-xl sm:text-2xl text-agro-dark tracking-wide">
                  {successModalData.id}
                </span>
                <button
                  onClick={() => handleCopyId(successModalData.id)}
                  className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 text-gray-600 transition-colors flex items-center gap-1 text-xs"
                  title="Copy Manuscript ID"
                >
                  {copiedId ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-agro-leaf" />
                      <span className="font-semibold text-agro-leaf">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="text-left text-xs text-gray-600 space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-200/80">
              <p><strong>Next Steps:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Editorial compliance check within 48 hours.</li>
                <li>Assignment to 2 independent double-blind peer reviewers.</li>
                <li>Notification of acceptance or revision remarks via email.</li>
                <li>No fees are payable until official acceptance is granted.</li>
              </ul>
            </div>

            <button
              onClick={() => setSuccessModalData(null)}
              className="w-full py-3.5 rounded-xl font-bold text-sm bg-agro-primary hover:bg-agro-forest text-white transition-colors"
            >
              Done & Return to Portal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
