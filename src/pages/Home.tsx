import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sprout,
  CloudSun,
  Leaf,
  Droplets,
  Dna,
  Wrench,
  ShieldCheck,
  Award,
  ArrowRight,
  BookOpen,
  Send,
  Users,
  Compass,
  TrendingUp,
  Globe,
  Sparkles,
  CheckCircle2,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { ArticleCard } from '../components/ArticleCard';
import { Article, Issue } from '../types';
import { articleService } from '../services/articleService';
import { issueService } from '../services/issueService';
import { PDFViewerModal } from '../components/PDFViewerModal';
import { ArticleReaderModal } from '../components/ArticleReaderModal';

export const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentIssue, setCurrentIssue] = useState<Issue | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [showIssuePdf, setShowIssuePdf] = useState(false);

  useEffect(() => {
    articleService.getAll().then((data) => setArticles(data));
    issueService.getCurrentIssue().then((data) => setCurrentIssue(data));
  }, []);

  const latestArticles = articles.slice(0, 6);

  const focusAreas = [
    {
      id: 1,
      title: "Agro-biodiversity Conservation",
      description: "Preserving heritage landraces, wild crop relatives, and traditional seed-saving systems to safeguard agrarian genetic resilience.",
      icon: Sprout,
      color: "from-emerald-500 to-green-700",
      accent: "bg-emerald-50 text-emerald-800 border-emerald-200"
    },
    {
      id: 2,
      title: "Climate Change Adaptation",
      description: "Equipping farming systems with drought-resilient crops, canopy microclimate management, and flood-tolerant cultivation regimes.",
      icon: CloudSun,
      color: "from-amber-500 to-orange-600",
      accent: "bg-amber-50 text-amber-800 border-amber-200"
    },
    {
      id: 3,
      title: "Sustainable Crop Production",
      description: "Integrating ecological crop rotations, integrated pest management (IPM), and biological agro-ecosystems to optimize long-term yields.",
      icon: Leaf,
      color: "from-green-600 to-teal-800",
      accent: "bg-green-50 text-green-800 border-green-200"
    },
    {
      id: 4,
      title: "Soil and Water Management",
      description: "Restoring active organic carbon, microbial consortia, and precision water stewardship like Alternate Wetting and Drying (AWD).",
      icon: Droplets,
      color: "from-blue-500 to-cyan-700",
      accent: "bg-blue-50 text-blue-800 border-blue-200"
    },
    {
      id: 5,
      title: "Plant Biotechnology and Breeding",
      description: "Leveraging molecular markers, QTL introgression, and non-transgenic endophytic bioprospecting for biotic and abiotic tolerance.",
      icon: Dna,
      color: "from-purple-500 to-indigo-700",
      accent: "bg-purple-50 text-purple-800 border-purple-200"
    },
    {
      id: 6,
      title: "Farmer-Centric Innovations",
      description: "Validating grassroots inventions, farmer-engineered tools, and indigenous agronomic wisdom through participatory science.",
      icon: Wrench,
      color: "from-amber-600 to-red-600",
      accent: "bg-orange-50 text-orange-800 border-orange-200"
    }
  ];

  const stakeholders = [
    { name: "Researchers", desc: "Publishing peer-reviewed discoveries" },
    { name: "Farmers", desc: "Sharing field innovations & traditional methods" },
    { name: "Academicians", desc: "Guiding rigorous scientific methodology" },
    { name: "Students", desc: "Empowering next-gen agricultural minds" },
    { name: "Policymakers", desc: "Translating research into agrarian policy" },
    { name: "Innovators", desc: "Deploying appropriate farm engineering" },
  ];

  const impactPillars = [
    {
      title: "Food Security",
      desc: "Diverse cropping systems insulate communities from monoculture crop failures, ensuring continuous nutritional availability across seasons.",
      metric: "80%+",
      metricLabel: "Caloric stability through diverse germplasm",
      icon: Layers
    },
    {
      title: "Climate Resilience",
      desc: "Indigenous landraces and wild relatives provide critical genetic traits for drought evasion, heat tolerance, and water efficiency.",
      metric: "3.2°C",
      metricLabel: "Canopy temperature moderation with agroforestry",
      icon: CloudSun
    },
    {
      title: "Ecosystem Stability",
      desc: "Rich microbial and insect biodiversity suppresses pest outbreaks naturally and prevents acute agricultural chemical runoff.",
      metric: "34%",
      metricLabel: "Increase in microbial biomass carbon",
      icon: Sprout
    },
    {
      title: "Sustainable Livelihoods",
      desc: "Reducing reliance on costly external inputs allows smallholder farm families to maximize net margins and achieve economic sovereignty.",
      metric: "48%",
      metricLabel: "Average input cost reduction in natural farming",
      icon: TrendingUp
    }
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pb-20">
      {/* 1. HERO SECTION */}
      <Hero onExploreIssue={() => currentIssue && setShowIssuePdf(true)} />

      {/* 2. ABOUT SECTION — CONNECTING STAKEHOLDERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-200/90 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-agro-tint/40 rounded-full blur-3xl -z-0 pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-agro-tint text-agro-dark text-xs font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-agro-leaf" />
                <span>About Agrodiversity Magazine</span>
              </div>

              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-agro-dark tracking-tight leading-tight">
                Bridging Agricultural Research and Real-World Farming Practices
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Agrodiversity Magazine serves as an open-access, collaborative knowledge conduit connecting academic laboratories directly with the soil. Too often, groundbreaking research remains confined to institutional archives while practicing farmers develop ingenious grassroots solutions that go undocumented.
              </p>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Published under <strong>SRN Publication</strong>, we bring together researchers, farmers, academicians, students, policymakers, and innovators into one unified platform dedicated to sustainable agricultural ecosystems.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-agro-primary hover:bg-agro-forest text-white transition-all shadow-md"
                >
                  <span>Learn More About Our Mission</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/editors"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 transition-all"
                >
                  <Users className="w-4 h-4 text-agro-leaf" />
                  <span>Meet Our Editorial Board</span>
                </Link>
              </div>
            </div>

            {/* Stakeholder Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
              {stakeholders.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-agro-surface border border-agro-leaf/20 hover:border-agro-leaf/50 transition-all hover:shadow-md"
                >
                  <div className="w-8 h-8 rounded-lg bg-agro-primary/10 text-agro-primary flex items-center justify-center font-bold text-xs mb-2">
                    ✓
                  </div>
                  <h4 className="font-serif font-bold text-sm text-agro-dark">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-gray-600 mt-1 leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY FOCUS AREAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-agro-leaf">
            Scientific Scope & Themes
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-agro-dark tracking-tight">
            Key Focus Areas
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Dedicated research tracks addressing the most pressing ecological and agronomic frontiers of contemporary agriculture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.id}
                className="journal-card rounded-2xl p-6 sm:p-8 bg-white border border-gray-200/90 hover:border-agro-leaf/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-agro-primary to-agro-forest text-agro-amber flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif font-bold text-lg sm:text-xl text-agro-dark group-hover:text-agro-primary transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-agro-primary">
                  <Link
                    to={`/archives?category=${encodeURIComponent(area.title)}`}
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    <span>View track articles</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-gray-400 font-mono text-[11px]">Track 0{area.id}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. LATEST ARTICLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-gray-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-agro-leaf">
              Recent Contributions
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-agro-dark tracking-tight mt-1">
              Latest Peer-Reviewed Articles
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl">
              Original research papers, review articles, and grassroots farmer field trials published in Agrodiversity Magazine.
            </p>
          </div>

          <Link
            to="/archives"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-agro-primary hover:bg-agro-tint transition-colors self-start sm:self-auto"
          >
            <span>Browse Full Archives</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {latestArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onQuickRead={(art) => setSelectedArticle(art)}
            />
          ))}
        </div>
      </section>

      {/* 5. WHY AGRODIVERSITY MATTERS — INFOGRAPHIC SECTION */}
      <section className="bg-gradient-to-b from-agro-surface via-agro-tint/20 to-agro-surface py-16 sm:py-24 border-y border-agro-leaf/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-agro-leaf flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-agro-gold" />
              <span>Core Ecological Imperative</span>
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-agro-dark tracking-tight">
              Why Agrodiversity Matters
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Agricultural biodiversity is not a luxury—it is the foundational prerequisite for sustaining life, buffering climate turbulence, and eliminating hunger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-agro-primary/10 text-agro-primary flex items-center justify-center group-hover:bg-agro-primary group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-serif font-bold text-xl text-agro-dark">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-gray-100">
                    <div className="font-serif font-black text-2xl sm:text-3xl text-agro-primary">
                      {pillar.metric}
                    </div>
                    <div className="text-[11px] text-gray-500 font-medium">
                      {pillar.metricLabel}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. COMMUNITY SECTION — JOIN OUR COMMUNITY CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-gradient-to-r from-agro-dark via-agro-forest to-agro-dark text-white p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden border border-agro-leaf/30 text-center">
          {/* Background image overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200"
              alt="Farmers and scientists in field"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-agro-amber text-xs font-semibold backdrop-blur-md">
              <Users className="w-3.5 h-3.5" />
              <span>Open Collaborative Network</span>
            </div>

            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Join Our Community
            </h2>

            <p className="font-serif italic text-base sm:text-xl text-agro-amber font-light">
              Farmers | Scientists | Students | Innovators
            </p>

            <p className="text-xs sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Whether you are an agricultural researcher with groundbreaking trial data, a student scholar, or a practicing farmer with a validated backyard tool innovation—your knowledge belongs here.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/submission"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-agro-amber via-agro-gold to-agro-amber hover:from-agro-gold-dark hover:to-agro-gold text-agro-dark shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
              >
                <HeartHandshake className="w-4 h-4 text-agro-dark" />
                <span>Become a Contributor</span>
              </Link>
              <Link
                to="/instructions-to-authors"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 transition-all"
              >
                <BookOpen className="w-4 h-4 text-agro-amber" />
                <span>View Author Guidelines</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modals for Quick Reader & Issue PDF */}
      {selectedArticle && (
        <ArticleReaderModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          onOpenPdf={() => {
            setSelectedArticle(null);
            setShowIssuePdf(true);
          }}
        />
      )}

      {showIssuePdf && currentIssue && (
        <PDFViewerModal
          issue={currentIssue}
          articles={articles}
          onClose={() => setShowIssuePdf(false)}
        />
      )}
    </div>
  );
};
