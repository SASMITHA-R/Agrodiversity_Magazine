import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  GraduationCap,
  Download,
  Share2,
  Copy,
  Check,
  BookOpen,
  Eye,
  FileText,
  Tag,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArticleCard } from '../components/ArticleCard';
import { Article } from '../types';
import { articleService } from '../services/articleService';

export const ArticleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedCitation, setCopiedCitation] = useState<string | null>(null);
  const [citationFormat, setCitationFormat] = useState<'APA' | 'MLA' | 'BibTeX'>('APA');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    async function fetchArticle() {
      if (!id) return;
      setLoading(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const found = await articleService.getById(id);
      if (found) {
        setArticle(found);
        await articleService.incrementViews(found.id);
        const all = await articleService.getAll();
        const related = all
          .filter((a) => a.id !== found.id && a.category === found.category)
          .slice(0, 3);
        setRelatedArticles(related.length > 0 ? related : all.filter(a => a.id !== found.id).slice(0, 3));
      }
      setLoading(false);
    }
    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="py-24 text-center text-gray-500 font-serif">
        Loading peer-reviewed article record...
      </div>
    );
  }

  if (!article) {
    return (
      <div className="py-24 text-center space-y-4 max-w-md mx-auto px-4">
        <h2 className="font-serif font-bold text-2xl text-agro-dark">Article Not Found</h2>
        <p className="text-sm text-gray-600">The requested article could not be located in our repository.</p>
        <Link
          to="/archives"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-agro-primary text-white text-xs font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Archives</span>
        </Link>
      </div>
    );
  }

  const citations = {
    APA: `${article.author}${article.coAuthors ? ` et al.` : ''} (${new Date(article.date).getFullYear()}). ${article.title}. Agrodiversity Magazine, 6(1). https://doi.org/${article.doi || '10.5281/agrodiversity'}`,
    MLA: `${article.author}, et al. "${article.title}." Agrodiversity Magazine, vol. 6, no. 1, ${new Date(article.date).getFullYear()}.`,
    BibTeX: `@article{agrodiversity_${article.id},\n  author = {${article.author}},\n  title = {${article.title}},\n  journal = {Agrodiversity Magazine},\n  year = {${new Date(article.date).getFullYear()}},\n  publisher = {SRN Publication},\n  doi = {${article.doi || '10.5281/agrodiversity'}}\n}`
  };

  const handleCopyCitation = (fmt: 'APA' | 'MLA' | 'BibTeX') => {
    navigator.clipboard.writeText(citations[fmt]);
    setCopiedCitation(fmt);
    setTimeout(() => setCopiedCitation(null), 2500);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleDownloadArticleText = () => {
    const text = `AGRODIVERSITY MAGAZINE — SRN PUBLICATION\n\nTitle: ${article.title}\nAuthor: ${article.author}\nAffiliation: ${article.authorAffiliation}\nCo-Authors: ${article.coAuthors?.join(', ') || 'None'}\nDate: ${article.date}\nDOI: ${article.doi || 'N/A'}\nCategory: ${article.category}\n\nABSTRACT:\n${article.abstract}\n\nKEYWORDS:\n${article.keywords?.join(', ')}\n\nINTRODUCTION:\n${article.sections?.introduction || article.fullContent}\n\nMETHODOLOGY:\n${article.sections?.methodology || 'Full empirical protocol documented in field trial repository.'}\n\nRESULTS:\n${article.sections?.results || 'Data verified through randomized block design trials.'}\n\nDISCUSSION:\n${article.sections?.discussion || 'Findings align with agro-biodiversity conservation paradigms.'}\n\nCONCLUSION:\n${article.sections?.conclusion || 'Recommended for field extension and smallholder adoption.'}\n\nREFERENCES:\n${article.references?.map(r => `[${r.id}] ${r.text}`).join('\n') || 'Available on online repository.'}`;
    
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${article.slug || 'agrodiversity_article'}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-10 lg:space-y-14 py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-6">
      <Breadcrumb
        items={[
          { label: "Articles", path: "/archives?category=" + encodeURIComponent(article.category) },
          { label: article.category, path: "/archives?category=" + encodeURIComponent(article.category) },
          { label: article.title },
        ]}
      />

      {/* Main Paper Header */}
      <header className="space-y-6 border-b border-gray-200 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-agro-primary text-white">
            {article.category}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-agro-tint text-agro-dark">
            Peer-Reviewed Original Contribution
          </span>
          {article.issueTitle && (
            <span className="text-xs text-gray-500 font-medium">
              Included in: <Link to="/current-issue" className="text-agro-primary underline">{article.issueTitle}</Link>
            </span>
          )}
        </div>

        <h1 className="font-serif font-bold text-2xl sm:text-4xl lg:text-5xl text-agro-dark tracking-tight leading-tight">
          {article.title}
        </h1>

        {/* Authors & Affiliations */}
        <div className="p-5 rounded-2xl bg-agro-surface border border-gray-200 space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-semibold text-agro-primary">
            <User className="w-4 h-4 text-agro-leaf flex-shrink-0" />
            <span>{article.author}</span>
            {article.coAuthors && article.coAuthors.length > 0 && (
              <span className="text-gray-700 font-normal">
                , {article.coAuthors.join(", ")}
              </span>
            )}
          </div>

          <div className="flex items-start gap-2 text-xs text-gray-600">
            <GraduationCap className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
            <p className="italic">{article.authorAffiliation}</p>
          </div>
        </div>

        {/* Publication Metadata & Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-gray-500">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              <span>Published: {article.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              <span>{article.readTime}</span>
            </span>
            <span>•</span>
            <span className="font-mono text-agro-leaf font-semibold">
              DOI: {article.doi || "10.5281/agrodiversity.2026.0601"}
            </span>
          </div>

          {/* Download & Share Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadArticleText}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-agro-primary hover:bg-agro-forest transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-agro-amber" />
              <span>Download PDF / Text</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="p-2 rounded-xl border border-gray-200 hover:bg-gray-100 text-gray-600 transition-colors"
              title="Copy share link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-agro-leaf" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      {article.image && (
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Abstract Section */}
      <section className="bg-agro-surface/80 rounded-2xl p-6 sm:p-8 border-l-4 border-agro-primary shadow-sm space-y-3">
        <h2 className="font-serif font-bold text-lg text-agro-dark uppercase tracking-wider flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-agro-leaf" />
          <span>Abstract</span>
        </h2>
        <p className="font-serif text-sm sm:text-base text-gray-800 leading-relaxed">
          {article.abstract}
        </p>

        {/* Keywords */}
        {article.keywords && article.keywords.length > 0 && (
          <div className="pt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-gray-600 flex items-center gap-1">
              <Tag className="w-3 h-3 text-agro-leaf" />
              <span>Keywords:</span>
            </span>
            {article.keywords.map((kw, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-gray-700 font-medium"
              >
                {kw}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* Main Academic Content (IMRAD Structure) */}
      <article className="prose prose-emerald max-w-none space-y-8 font-serif text-gray-800 text-sm sm:text-base leading-relaxed">
        {/* Introduction */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-agro-dark border-b border-gray-100 pb-2">
            1. Introduction
          </h2>
          <p>
            {article.sections?.introduction || article.fullContent}
          </p>
        </section>

        {/* Methodology */}
        {article.sections?.methodology && (
          <section className="space-y-3">
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-agro-dark border-b border-gray-100 pb-2">
              2. Materials and Methods
            </h2>
            <p>{article.sections.methodology}</p>
          </section>
        )}

        {/* Figures (if any) */}
        {article.figures && article.figures.length > 0 && (
          <div className="my-8 space-y-4">
            {article.figures.map((fig) => (
              <figure key={fig.id} className="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-center">
                <img
                  src={fig.imageUrl}
                  alt={fig.caption}
                  className="rounded-xl mx-auto max-h-[420px] object-cover shadow"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 italic mt-3 text-center">
                  {fig.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {/* Results */}
        {article.sections?.results && (
          <section className="space-y-3">
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-agro-dark border-b border-gray-100 pb-2">
              3. Results
            </h2>
            <p>{article.sections.results}</p>
          </section>
        )}

        {/* Tables (if any) */}
        {article.tables && article.tables.length > 0 && (
          <div className="my-8 space-y-4 not-prose">
            {article.tables.map((table) => (
              <div key={table.id} className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm p-4">
                <h4 className="font-serif font-bold text-xs sm:text-sm text-agro-dark mb-3">
                  {table.title}
                </h4>
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-agro-surface border-y border-gray-200 text-gray-700 font-bold">
                      {table.headers.map((h, i) => (
                        <th key={i} className="py-2 px-3">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-gray-50">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="py-2.5 px-3 text-gray-700">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}

        {/* Discussion */}
        {article.sections?.discussion && (
          <section className="space-y-3">
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-agro-dark border-b border-gray-100 pb-2">
              4. Discussion
            </h2>
            <p>{article.sections.discussion}</p>
          </section>
        )}

        {/* Conclusion */}
        {article.sections?.conclusion && (
          <section className="space-y-3">
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-agro-dark border-b border-gray-100 pb-2">
              5. Conclusion & Agronomic Recommendations
            </h2>
            <p>{article.sections.conclusion}</p>
          </section>
        )}

        {/* References */}
        {article.references && article.references.length > 0 && (
          <section className="pt-6 border-t border-gray-200 space-y-3 not-prose">
            <h3 className="font-serif font-bold text-lg text-agro-dark uppercase tracking-wider">
              References
            </h3>
            <ol className="space-y-2 text-xs sm:text-sm text-gray-600 list-decimal list-inside leading-relaxed">
              {article.references.map((ref) => (
                <li key={ref.id} className="pl-1">
                  {ref.text}
                </li>
              ))}
            </ol>
          </section>
        )}
      </article>

      {/* Citation Box */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-serif font-bold text-base text-agro-dark">
              How to Cite this Paper
            </h3>
            <p className="text-xs text-gray-500">
              Select your citation standard to copy formatted metadata:
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-xl">
            {(["APA", "MLA", "BibTeX"] as const).map((fmt) => (
              <button
                key={fmt}
                onClick={() => setCitationFormat(fmt)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                  citationFormat === fmt
                    ? "bg-white text-agro-dark shadow-sm font-bold"
                    : "text-gray-600 hover:text-agro-dark"
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        <div className="relative p-4 rounded-xl bg-gray-900 text-gray-200 font-mono text-xs overflow-x-auto">
          <code>{citations[citationFormat]}</code>
          <button
            onClick={() => handleCopyCitation(citationFormat)}
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors"
            title="Copy to clipboard"
          >
            {copiedCitation === citationFormat ? (
              <Check className="w-4 h-4 text-agro-amber" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      </section>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="font-serif font-bold text-2xl text-agro-dark">
              Related Articles
            </h2>
            <Link
              to="/archives"
              className="text-xs font-bold text-agro-primary hover:underline"
            >
              View More in Archives →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.id} article={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
