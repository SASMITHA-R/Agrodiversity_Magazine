import React, { useState } from "react";
import { X, Download, BookOpen, ChevronLeft, ChevronRight, FileText, CheckCircle2 } from "lucide-react";
import { Issue, Article } from "../types";

interface PDFViewerModalProps {
  issue: Issue | null;
  onClose: () => void;
  articles?: Article[];
}

export const PDFViewerModal: React.FC<PDFViewerModalProps> = ({
  issue,
  onClose,
  articles = [],
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!issue) return null;

  const totalPages = 5;

  const handleSimulateDownload = () => {
    setDownloadSuccess(true);
    const content = `AGRODIVERSITY MAGAZINE\n${issue.volume} ${issue.issueNumber} (${issue.month} ${issue.year})\nPublished by SRN Publication\nWebsite: Agrodiversity Magazine\n\nEditorial Message:\n${issue.editorialMessage}\n\nContents & Articles:\n` + 
      articles.map((a, i) => `${i + 1}. ${a.title} - ${a.author} (${a.category})`).join("\n\n");
    
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Agrodiversity_Magazine_${issue.volume.replace(/\s+/g, "_")}_${issue.issueNumber.replace(/\s+/g, "_")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="bg-agro-surface rounded-2xl shadow-2xl max-w-4xl w-full border border-gray-300 overflow-hidden flex flex-col max-h-[92vh]">
        {/* PDF Reader Header Bar */}
        <div className="bg-agro-dark text-white px-5 py-3.5 flex items-center justify-between border-b border-agro-forest">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-agro-amber" />
            <div>
              <p className="font-serif font-bold text-sm leading-tight text-white">
                {issue.title}
              </p>
              <p className="text-[11px] text-agro-tint/70">
                {issue.volume} • {issue.issueNumber} ({issue.month} {issue.year}) • Published Monthly
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleSimulateDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-agro-leaf hover:bg-agro-emerald text-white text-xs font-semibold shadow transition-colors"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-agro-amber" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Issue</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-agro-tint hover:text-white hover:bg-agro-forest transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Interactive E-Journal Viewer Canvas */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#e8ebe8] flex justify-center">
          <div className="bg-white max-w-2xl w-full shadow-2xl rounded-sm p-6 sm:p-10 min-h-[520px] border border-gray-300 flex flex-col justify-between">
            {currentPage === 1 && (
              <div className="space-y-6 text-center animate-fade-in my-auto">
                <div className="border-4 border-agro-primary p-6 sm:p-8 rounded-sm bg-gradient-to-b from-white to-agro-surface">
                  <div className="inline-block px-3 py-1 bg-agro-dark text-agro-amber text-xs font-bold uppercase tracking-widest mb-4">
                    SRN PUBLICATION
                  </div>
                  <h1 className="font-serif font-black text-3xl sm:text-4xl text-agro-dark tracking-tight">
                    AGRODIVERSITY MAGAZINE
                  </h1>
                  <p className="font-serif italic text-sm sm:text-base text-agro-leaf mt-1">
                    An International Agricultural Science & Knowledge-Sharing E-Magazine
                  </p>

                  <div className="w-16 h-0.5 bg-agro-gold mx-auto my-5"></div>

                  <div className="space-y-1 text-xs text-gray-700 font-mono">
                    <p className="font-bold text-sm text-agro-dark">{issue.volume} • {issue.issueNumber}</p>
                    <p>{issue.month} {issue.year}</p>
                    <p className="text-gray-500 font-sans mt-3 italic max-w-md mx-auto">
                      "{issue.theme}"
                    </p>
                  </div>
                </div>

                <div className="text-[11px] text-gray-500 space-y-1">
                  <p>Editor-in-Chief: Dr. B. Ramya | Managing Editor: Mr. B. Sathiyaraja</p>
                  <p>Published Monthly • Double-Blind Peer-Reviewed • Open Access</p>
                </div>
              </div>
            )}

            {currentPage === 2 && (
              <div className="space-y-4 animate-fade-in text-left">
                <div className="border-b-2 border-agro-primary pb-2 flex items-center justify-between">
                  <h2 className="font-serif font-bold text-lg text-agro-dark">Editorial Foreword</h2>
                  <span className="text-xs font-mono text-gray-400">Page 2</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-3 font-serif">
                  <p className="first-letter:text-3xl first-letter:font-bold first-letter:text-agro-primary first-letter:mr-1">
                    {issue.editorialMessage}
                  </p>
                  <p>
                    As we navigate the dual crises of climatic shifts and biodiversity depletion, collaborative science emerges as our foremost ally. This edition brings together pioneering field trials, molecular breeding insights, and indigenous wisdom that collectively pave the way toward resilient farming futures.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 text-right">
                  <p className="font-serif font-bold text-xs text-agro-dark">Dr. B. Ramya</p>
                  <p className="text-[10px] text-gray-500">Editor-in-Chief, Department of Crop Improvement</p>
                </div>
              </div>
            )}

            {currentPage === 3 && (
              <div className="space-y-4 animate-fade-in text-left">
                <div className="border-b-2 border-agro-primary pb-2 flex items-center justify-between">
                  <h2 className="font-serif font-bold text-lg text-agro-dark">Table of Contents</h2>
                  <span className="text-xs font-mono text-gray-400">Page 3</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm divide-y divide-gray-100">
                  {articles.slice(0, 5).map((art, idx) => (
                    <div key={art.id} className="pt-2.5 first:pt-0 flex justify-between gap-4">
                      <div>
                        <p className="font-serif font-bold text-agro-dark hover:text-agro-primary">
                          {idx + 1}. {art.title}
                        </p>
                        <p className="text-[11px] text-gray-500">
                          {art.author} — <span className="text-agro-emerald font-medium">{art.category}</span>
                        </p>
                      </div>
                      <span className="font-mono text-gray-400 text-xs self-start">pp. {idx * 6 + 4}-{idx * 6 + 9}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentPage >= 4 && (
              <div className="space-y-4 animate-fade-in text-left">
                {articles[currentPage - 4] ? (
                  <>
                    <div className="border-b-2 border-agro-primary pb-2 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-agro-leaf">
                        {articles[currentPage - 4].category}
                      </span>
                      <span className="text-xs font-mono text-gray-400">Page {currentPage}</span>
                    </div>
                    <h2 className="font-serif font-bold text-lg text-agro-dark">
                      {articles[currentPage - 4].title}
                    </h2>
                    <p className="text-xs text-gray-500">
                      <strong>Authors:</strong> {articles[currentPage - 4].author}
                      {articles[currentPage - 4].coAuthors && `, ${articles[currentPage - 4].coAuthors?.join(", ")}`}
                    </p>
                    <div className="bg-agro-surface p-3 rounded text-xs text-gray-700 italic border-l-4 border-agro-primary">
                      <strong>Abstract:</strong> {articles[currentPage - 4].abstract}
                    </div>
                    <div className="text-xs text-gray-600 leading-relaxed">
                      {articles[currentPage - 4].sections?.introduction || articles[currentPage - 4].fullContent}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12 text-gray-500 text-sm">
                    Additional articles available in the full downloadable edition.
                  </div>
                )}
              </div>
            )}

            {/* Viewer Footer Pagination Bar */}
            <div className="pt-4 mt-6 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
              <span className="font-mono text-[11px]">Agrodiversity Magazine — ISSN: E-MAGZ-2021</span>
              <span>Page {currentPage} of {totalPages}</span>
            </div>
          </div>
        </div>

        {/* Navigation Toolbar */}
        <div className="bg-white px-6 py-3 border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-100 disabled:opacity-40 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Page</span>
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-7 h-7 rounded-lg text-xs font-mono font-semibold transition-colors ${
                  currentPage === i + 1
                    ? 'bg-agro-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-100 disabled:opacity-40 transition-colors"
          >
            <span>Next Page</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
