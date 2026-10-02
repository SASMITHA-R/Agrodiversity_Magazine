import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  ChevronDown,
  ShieldCheck,
  EyeOff,
  Users,
  AlertTriangle,
  Lock,
  RotateCcw,
  Send,
  Copyright,
  Globe2,
  Calendar,
  Award,
  Sparkles,
  BookOpen,
  Mail,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const EditorialPolicies: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(2); // Peer Review Policy default open

  const policies = [
    {
      title: "1. Editorial Scope",
      icon: BookOpen,
      content:
        "Agrodiversity Magazine publishes original contributions encompassing agro-biodiversity preservation, climate-resilient cropping regimes, plant breeding and genetics, soil microbial health, precision irrigation, grassroots farmer machinery, and agricultural biotechnology. All manuscripts must demonstrate tangible value to agricultural science, farmers, or agrarian policy.",
    },
    {
      title: "2. Types of Articles Accepted",
      icon: Award,
      content:
        "We welcome four distinct categories of manuscripts: (1) Review Articles (4000–8000 words), providing comprehensive critical appraisals of ongoing research themes; (2) Short Communications (1500–3000 words), presenting novel empirical findings of urgent importance; (3) Case Studies / Field Reports (1500–3000 words), detailing on-farm trials and participatory extension; and (4) Grassroots Farmer Innovations (1000–2000 words), documenting farm-level adaptations and farmer-inventor technologies.",
    },
    {
      title: "3. Peer Review Policy (Double-Blind Review)",
      icon: EyeOff,
      highlight: true,
      content:
        "Submissions undergo a rigorous double-blind peer review process. Neither the author nor the reviewer is made aware of the other's identity during the evaluation cycle. Every manuscript is evaluated by at least two independent subject-matter expert reviewers appointed by the respective Section Editor and Editor-in-Chief. Reviewer recommendations (Accept, Minor Revisions, Major Revisions, or Reject) must be grounded in methodological rigor, statistical integrity, and clarity of agricultural implications.",
    },
    {
      title: "4. Authorship Criteria",
      icon: Users,
      content:
        "Authorship credit requires substantial contributions to: (a) conception and design, acquisition of field data, or analysis and interpretation; (b) drafting or critically revising the manuscript for important intellectual content; and (c) final approval of the version to be published. All co-authors must agree to be accountable for all aspects of the research accuracy.",
    },
    {
      title: "5. Publication Ethics (COPE Compliance)",
      icon: ShieldCheck,
      content:
        "Agrodiversity Magazine adheres to international standards of publication ethics set forth by the Committee on Publication Ethics (COPE). Any instance of fabrication, falsification of field trial data, duplicate publication, or misleading attribution will result in immediate disqualification and notification of the affiliated academic institution.",
    },
    {
      title: "6. Plagiarism Policy",
      icon: AlertTriangle,
      content:
        "We maintain zero tolerance for intellectual plagiarism. All submitted manuscripts are screened using standard plagiarism detection software. Manuscripts showing similarity indices exceeding 10% (excluding references and standard terminology) are rejected outright or returned for immediate reformulation.",
    },
    {
      title: "7. Confidentiality",
      icon: Lock,
      content:
        "Editors and reviewers are bound to treat all submitted manuscripts as strictly confidential documents. No unpublished material disclosed in a submitted paper may be utilized in an editor's or reviewer's own investigations without the express written consent of the submitting author.",
    },
    {
      title: "8. Corrections and Retractions",
      icon: RotateCcw,
      content:
        "Should significant errors or inaccuracies be discovered following publication, the editorial board will promptly release an Erratum or Corrigendum. In proven instances of scientific misconduct, invalid data, or copyright violation, the paper will be retracted with an explicit editorial statement.",
    },
    {
      title: "9. Submission Policy",
      icon: Send,
      content:
        "Manuscripts must be submitted exclusively through our official online submission portal or directly via email to balramagri@gmail.com. Submissions must be formatted exclusively as Microsoft Word (.doc/.docx) files; PDF submissions are strictly rejected. Submissions must not be concurrently under consideration elsewhere.",
    },
    {
      title: "10. Copyright Policy",
      icon: Copyright,
      content:
        "Authors retain copyright of their scholarly works while granting Agrodiversity Magazine an exclusive license to publish the work in the first instance. Articles are published under the Creative Commons Attribution 4.0 International License (CC BY 4.0), permitting open redistribution with proper attribution.",
    },
    {
      title: "11. Open Access Policy",
      icon: Globe2,
      content:
        "Agrodiversity Magazine promotes barrier-free open access to scientific information. All published papers and monthly issues are immediately and perpetually available online without subscription fees, paywalls, or institutional access gates.",
    },
    {
      title: "12. Publication Frequency",
      icon: Calendar,
      content:
        "Agrodiversity Magazine is published on a strictly monthly frequency. Each monthly issue is formally released in the second week of every month. Submission deadlines are announced continuously on the home portal. Fast-track reviews are completed within 1–7 working days in urgent circumstances.",
    },
    {
      title: "13. Editorial Independence",
      icon: Sparkles,
      content:
        "Decisions regarding manuscript acceptance or rejection are made entirely on academic and scientific merit by the Editor-in-Chief, Section Editors, and peer reviewers. Commercial, advertising, or organizational affiliations of SRN Publication exert zero influence on editorial determinations.",
    },
    {
      title: "14. Editorial Contact",
      icon: Mail,
      content:
        "For policy clarifications, ethical grievances, or appeals, authors may contact the Editorial Secretariat directly at agrodivemagz@gamil.com or phone +91 9790879038. All appeals are investigated by an independent ad-hoc review committee.",
    },
  ];

  return (
    <div className="space-y-10 lg:space-y-14 py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-6">
      <Breadcrumb items={[{ label: "Editorial Policies" }]} />

      {/* Header */}
      <div className="space-y-3 border-b border-gray-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-agro-leaf flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-agro-gold" />
          <span>Publishing Integrity & Ethics</span>
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-agro-dark tracking-tight">
          Editorial Policies & Standards
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed">
          Comprehensive editorial governance guidelines ensuring transparency, rigorous double-blind peer review, and academic ethics for all publications under Agrodiversity Magazine and SRN Publication.
        </p>
      </div>

      {/* Double-Blind Peer Review Banner Callout */}
      <div className="rounded-2xl bg-gradient-to-r from-agro-dark to-agro-forest text-white p-6 sm:p-8 shadow-xl border border-agro-leaf/30 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agro-amber text-agro-dark font-bold text-xs uppercase tracking-wider">
          <EyeOff className="w-3.5 h-3.5" />
          <span>Core Quality Standard</span>
        </div>
        <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">
          Mandatory Double-Blind Peer Review
        </h2>
        <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-3xl">
          Every manuscript submitted to Agrodiversity Magazine is evaluated by <strong>at least two independent, anonymous subject-matter reviewers</strong>. Both reviewer identities and author affiliations remain strictly concealed throughout the review lifecycle to guarantee impartial scientific evaluation.
        </p>
      </div>

      {/* Accordion / Cards List */}
      <div className="space-y-3">
        {policies.map((policy, index) => {
          const isOpen = openIndex === index;
          const Icon = policy.icon;

          return (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-200 border ${
                isOpen
                  ? "bg-white border-agro-leaf shadow-md"
                  : "bg-white hover:bg-agro-surface/60 border-gray-200 shadow-sm"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      policy.highlight
                        ? "bg-agro-primary text-agro-amber"
                        : isOpen
                        ? "bg-agro-tint text-agro-dark"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className={`font-serif font-bold text-base sm:text-lg transition-colors ${
                        isOpen ? "text-agro-primary" : "text-agro-dark"
                      }`}
                    >
                      {policy.title}
                    </h3>
                  </div>
                </div>

                <div
                  className={`p-1.5 rounded-full bg-gray-100 text-gray-500 transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-agro-tint text-agro-dark" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-gray-100 text-xs sm:text-sm text-gray-700 leading-relaxed font-serif pl-14 sm:pl-20 animate-fade-in">
                  <p>{policy.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Support Notice */}
      <div className="p-6 rounded-2xl bg-agro-surface border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-agro-leaf flex-shrink-0" />
          <span>
            Questions regarding editorial ethics? Contact: <strong>agrodivemagz@gamil.com</strong>
          </span>
        </div>
        <Link
          to="/instructions-to-authors"
          className="font-bold text-agro-primary hover:underline flex items-center gap-1"
        >
          <span>View Formatting Guidelines →</span>
        </Link>
      </div>
    </div>
  );
};
