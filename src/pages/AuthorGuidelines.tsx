import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  FileText,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Download,
  Send,
  Layers,
  BookOpen,
  Info,
  Clock,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AuthorGuidelines: React.FC = () => {
  const articleTypes = [
    {
      title: "Review Articles",
      wordCount: "4,000 – 8,000 words",
      scope: "Critical, comprehensive syntheses of emerging research trends, meta-analyses, and conceptual frameworks in agro-biodiversity and crop science.",
      sections: "Abstract (max 250 words), Introduction, Thematic Sections, Analysis, Future Outlook, Conclusion, References.",
      icon: "📚",
    },
    {
      title: "Short Communications",
      wordCount: "1,500 – 3,000 words",
      scope: "Urgent empirical trial data, novel pest outbreak recordings, or preliminary molecular breeding results of immediate scientific relevance.",
      sections: "Brief Abstract (max 150 words), Background, Empirical Findings, Discussion, References.",
      icon: "⚡",
    },
    {
      title: "Case Studies / Field Reports",
      wordCount: "1,500 – 3,000 words",
      scope: "Empirical evaluations of on-farm participatory trials, community seed bank initiatives, or multi-location agronomic extension interventions.",
      sections: "Abstract, Context & Baseline, Interventions & Methodology, Field Impact, Lessons Learned, References.",
      icon: "🌾",
    },
    {
      title: "Farmer Innovations / Success Stories",
      wordCount: "1,000 – 2,000 words",
      scope: "Documenting field-validated machinery adaptations, low-cost tools, traditional seed conservation, or indigenous agronomic wisdom.",
      sections: "Background of Innovator, Operational Challenge, Technical Innovation & Design, Cost-Benefit Comparison, Field Photos.",
      icon: "🚜",
    },
  ];

  const manuscriptSections = [
    { name: "Title Page", desc: "Concise, informative title without non-standard abbreviations." },
    { name: "Author Details", desc: "Full names, institutional affiliations, and corresponding-author active email." },
    { name: "Abstract", desc: "Structured or non-structured summary, strictly maximum 250 words." },
    { name: "Keywords", desc: "4 to 6 specific keywords for indexing purposes (separated by commas)." },
    { name: "Introduction", desc: "Brief background, problem rationale, and clear study objectives." },
    { name: "Materials & Methods", desc: "Sufficient methodological reproducibility, experimental design, and statistics." },
    { name: "Results", desc: "Empirical findings presented with consecutive numbered tables and figures." },
    { name: "Discussion", desc: "Critical interpretation of findings in relation to existing published literature." },
    { name: "Conclusion", desc: "Clear agronomic implications and practical recommendations for farmers or policy." },
    { name: "Tables & Figures", desc: "Consecutive numbering (Table 1, Figure 1) with informative self-explanatory captions." },
    { name: "References", desc: "Complete citations formatted consistently in APA / standard scientific style." },
  ];

  const handleDownloadTemplate = () => {
    const templateText = `AGRODIVERSITY MAGAZINE — OFFICIAL MANUSCRIPT TEMPLATE\nPublished under SRN Publication (Monthly Peer-Reviewed E-Magazine)\n\n[TITLE OF THE MANUSCRIPT IN TIMES NEW ROMAN 14PT BOLD]\n\nAuthor Name 1¹*, Author Name 2²\n¹ Department, Institution/University, City, State, Country\n² Department, Institution/University, City, State, Country\n* Corresponding Author Email: author@example.com\n\nABSTRACT\n[Insert concise abstract here. Maximum 250 words. Must summarize background, objectives, methodology, key findings, and agricultural significance.]\n\nKeywords: Keyword 1, Keyword 2, Keyword 3, Keyword 4 (Provide 4–6 keywords)\n\n1. INTRODUCTION\n[State the rationale, relevant background, and clear objectives of the study.]\n\n2. MATERIALS AND METHODS\n[Provide adequate experimental details. All units must strictly be SI units.]\n\n3. RESULTS\n[Present findings clearly. Cite tables (e.g., Table 1) and figures (e.g., Figure 1) consecutively.]\n\n4. DISCUSSION\n[Interpret results, highlighting practical farming implications.]\n\n5. CONCLUSION\n[Summarize the primary takeaways and future scope.]\n\nREFERENCES\n[List references in standard APA format.]`;

    const blob = new Blob([templateText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Agrodiversity_Manuscript_Template.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-12 lg:space-y-16 py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-6">
      <Breadcrumb items={[{ label: "Instructions to Authors" }]} />

      {/* Header */}
      <div className="border-b border-gray-200 pb-6 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-agro-leaf flex items-center gap-1.5">
          <FileText className="w-4 h-4 text-agro-gold" />
          <span>Author Guidelines & Preparation</span>
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-agro-dark tracking-tight">
          Instructions to Authors
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed">
          Comprehensive formatting requirements, manuscript preparation guidelines, word count limits, and submission schedules for Agrodiversity Magazine.
        </p>
      </div>

      {/* 1. Publication Schedule Card */}
      <div className="journal-card rounded-2xl p-6 sm:p-8 bg-white border border-gray-200/90 shadow-md space-y-4">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-agro-primary/10 text-agro-primary flex items-center justify-center">
            <Calendar className="w-5 h-5 text-agro-leaf" />
          </div>
          <div>
            <h2 className="font-serif font-bold text-xl text-agro-dark">
              1. Publication Schedule & Deadlines
            </h2>
            <p className="text-xs text-gray-500">Regular monthly cadence</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
          <div className="p-4 rounded-xl bg-agro-surface border border-gray-100 space-y-1">
            <strong className="text-agro-dark font-serif text-sm block">Monthly Release Window</strong>
            <p className="text-gray-600 leading-relaxed">
              Issues are formally released during the <strong>second week of every month</strong>.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-agro-surface border border-gray-100 space-y-1">
            <strong className="text-agro-dark font-serif text-sm block">Submission Deadlines</strong>
            <p className="text-gray-600 leading-relaxed">
              Deadlines are continuously announced on the homepage. Late submissions are automatically scheduled for the subsequent monthly issue.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-agro-surface border border-gray-100 space-y-1 sm:col-span-2">
            <strong className="text-agro-dark font-serif text-sm block">Fast-Track Peer Review Option</strong>
            <p className="text-gray-600 leading-relaxed">
              For urgent empirical findings, rapid seasonal pest evaluations, or time-sensitive field findings, expedited double-blind reviews can be completed within <strong>1–7 working days</strong> upon request.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Manuscript File Format (Strict Notice: Word Only, No PDF) */}
      <div className="rounded-2xl p-6 sm:p-8 bg-amber-50 border-2 border-amber-300 shadow-md space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-6 h-6 text-amber-800" />
          </div>
          <div className="space-y-2">
            <h2 className="font-serif font-bold text-xl text-amber-950">
              2. Mandatory Manuscript File Format
            </h2>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              Manuscripts must be submitted exclusively as <strong>Microsoft Word documents (.doc or .docx)</strong>.
            </p>
            <div className="p-3 bg-white/80 rounded-xl border border-amber-200 text-xs font-semibold text-rose-700 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600"></span>
              <span>IMPORTANT: PDF submissions are strictly NOT accepted for peer review.</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Typography & Formatting Specifications */}
      <div className="journal-card rounded-2xl p-6 sm:p-8 bg-white border border-gray-200/90 shadow-md space-y-6">
        <h2 className="font-serif font-bold text-xl sm:text-2xl text-agro-dark border-b border-gray-100 pb-3">
          3. Technical Formatting Specifications
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-agro-surface border border-gray-100 space-y-1">
            <span className="text-gray-500 font-medium">Language</span>
            <p className="font-bold text-agro-dark text-sm">English</p>
          </div>
          <div className="p-4 rounded-xl bg-agro-surface border border-gray-100 space-y-1">
            <span className="text-gray-500 font-medium">Font Family</span>
            <p className="font-bold text-agro-dark text-sm">Times New Roman</p>
          </div>
          <div className="p-4 rounded-xl bg-agro-surface border border-gray-100 space-y-1">
            <span className="text-gray-500 font-medium">Font Size</span>
            <p className="font-bold text-agro-dark text-sm">12 pt (Main Body)</p>
          </div>
          <div className="p-4 rounded-xl bg-agro-surface border border-gray-100 space-y-1">
            <span className="text-gray-500 font-medium">Line Spacing</span>
            <p className="font-bold text-agro-dark text-sm">1.5 Line Spacing</p>
          </div>
          <div className="p-4 rounded-xl bg-agro-surface border border-gray-100 space-y-1">
            <span className="text-gray-500 font-medium">Page Margins</span>
            <p className="font-bold text-agro-dark text-sm">1 Inch (2.54 cm) all sides</p>
          </div>
          <div className="p-4 rounded-xl bg-agro-surface border border-gray-100 space-y-1">
            <span className="text-gray-500 font-medium">Abstract Limit</span>
            <p className="font-bold text-agro-dark text-sm">Max 250 words</p>
          </div>
          <div className="p-4 rounded-xl bg-agro-surface border border-gray-100 space-y-1">
            <span className="text-gray-500 font-medium">Keywords</span>
            <p className="font-bold text-agro-dark text-sm">4 to 6 Keywords</p>
          </div>
          <div className="p-4 rounded-xl bg-agro-surface border border-gray-100 space-y-1">
            <span className="text-gray-500 font-medium">Measurement Units</span>
            <p className="font-bold text-agro-dark text-sm">Strictly SI Units (kg, ha, mm)</p>
          </div>
        </div>

        {/* Prescribed Manuscript Structure */}
        <div className="space-y-3 pt-2">
          <h3 className="font-serif font-bold text-base text-agro-dark">
            Required Manuscript Section Structure:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {manuscriptSections.map((sec, i) => (
              <div key={i} className="p-3 rounded-xl border border-gray-100 bg-gray-50/70 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-agro-primary text-white font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-bold text-agro-dark">{sec.name}</h4>
                  <p className="text-gray-600 mt-0.5">{sec.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Article Types Cards */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="font-serif font-bold text-2xl text-agro-dark">
            4. Accepted Article Types & Word Counts
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Select the appropriate category for your paper:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articleTypes.map((type, idx) => (
            <div
              key={idx}
              className="journal-card rounded-2xl p-6 bg-white border border-gray-200/90 shadow-md space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{type.icon}</span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold font-mono bg-agro-tint text-agro-dark">
                    {type.wordCount}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-agro-dark">
                  {type.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {type.scope}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-agro-surface border border-gray-100 text-[11px] text-gray-700 space-y-1">
                <strong>Prescribed Layout:</strong> {type.sections}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download Template & CTA Bar */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-agro-dark to-agro-forest text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="font-serif font-bold text-xl text-white">
            Ready to Format Your Manuscript?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300">
            Download our standard author template or proceed directly to the submission portal.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={handleDownloadTemplate}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
          >
            <Download className="w-4 h-4 text-agro-amber" />
            <span>Download Template (.txt)</span>
          </button>
          <Link
            to="/submission"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-agro-amber hover:bg-agro-gold text-agro-dark transition-colors shadow-md"
          >
            <Send className="w-4 h-4 text-agro-dark" />
            <span>Submit Manuscript</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
