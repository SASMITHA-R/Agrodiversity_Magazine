import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Award,
  BookOpen,
  Send,
  Users,
  CheckCircle2,
  Leaf,
  Sprout,
  ShieldCheck,
  Globe2,
  HeartHandshake,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

export const About: React.FC = () => {
  const coverageAreas = [
    {
      title: "Agro-biodiversity",
      desc: "Documenting, safeguarding, and utilizing diverse gene pools, endangered wild landraces, and indigenous germplasms.",
      icon: "🌾",
    },
    {
      title: "Climate-Resilient Agriculture",
      desc: "Agronomic interventions that insulate food crops from drought, heat stress, monsoonal shifts, and extreme weather.",
      icon: "🌦",
    },
    {
      title: "Crop Improvement",
      desc: "Marker-assisted selection, quality enhancement, disease resistance breeding, and yield stability in staple grains.",
      icon: "🌱",
    },
    {
      title: "Plant Breeding",
      desc: "Conventional hybridization, QTL introgression from wild relatives, and molecular breeding frameworks.",
      icon: "🧬",
    },
    {
      title: "Soil Health",
      desc: "Microbial consortia, active organic matter dynamics, bio-char enrichment, and regenerating degraded soil structures.",
      icon: "🪴",
    },
    {
      title: "Water Management",
      desc: "Precision drip scheduling, Alternate Wetting and Drying (AWD) in rice systems, and farm aquifer replenishment.",
      icon: "💧",
    },
    {
      title: "Agricultural Biotechnology",
      desc: "Endophytic microbiology, bio-stimulants, metabolomics, and non-transgenic biotechnology breakthroughs.",
      icon: "🔬",
    },
    {
      title: "Traditional Knowledge",
      desc: "Validating centuries-old tribal agronomic techniques, ethnoveterinary cures, and heritage calendar systems.",
      icon: "📜",
    },
    {
      title: "Farmer Innovations",
      desc: "Peer-reviewing and documenting grassroots equipment designs, low-cost modifications, and field successes.",
      icon: "🚜",
    },
  ];

  return (
    <div className="space-y-12 lg:space-y-16 py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6">
      <Breadcrumb items={[{ label: "About Us" }]} />

      {/* Hero Header */}
      <div className="relative rounded-3xl overflow-hidden bg-agro-dark text-white p-8 sm:p-12 lg:p-16 shadow-xl border border-agro-leaf/30">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600"
            alt="Agrodiversity farmlands"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-agro-primary/80 border border-agro-gold/30 text-agro-amber text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>SRN Publication</span>
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Connecting Crops, Climate, Culture, and Science
          </h1>
          <p className="text-sm sm:text-lg text-agro-tint font-light leading-relaxed">
            Agrodiversity Magazine is an international peer-reviewed academic and practitioner platform dedicated to advancing sustainable agro-ecosystems and empowering farming communities worldwide.
          </p>
        </div>
      </div>

      {/* Vision & Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision Card */}
        <div className="journal-card rounded-2xl p-8 bg-white border border-gray-200/90 shadow-lg space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-agro-tint text-agro-dark flex items-center justify-center font-serif font-bold text-xl border border-agro-leaf/20">
              🔭
            </div>
            <h2 className="font-serif font-bold text-2xl text-agro-dark">
              Our Vision
            </h2>
            <div className="h-1 w-12 bg-agro-gold"></div>
            <blockquote className="font-serif italic text-base sm:text-lg text-agro-leaf font-medium pt-2 leading-relaxed">
              “To create a globally recognized platform that promotes sustainable agro-ecosystems through knowledge sharing, innovation, and collaboration.”
            </blockquote>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-4 border-t border-gray-100">
            We envision an equitable agrarian future where biological diversity, climate resilience, and localized farmer knowledge thrive harmoniously alongside modern scientific methodologies.
          </p>
        </div>

        {/* Mission Card */}
        <div className="journal-card rounded-2xl p-8 bg-white border border-gray-200/90 shadow-lg space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-agro-tint text-agro-dark flex items-center justify-center font-serif font-bold text-xl border border-agro-leaf/20">
              🎯
            </div>
            <h2 className="font-serif font-bold text-2xl text-agro-dark">
              Our Mission
            </h2>
            <div className="h-1 w-12 bg-agro-gold"></div>
          </div>

          <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-agro-leaf flex-shrink-0 mt-0.5" />
              <span>
                <strong>Disseminate high-quality research:</strong> Publish peer-reviewed articles, case studies, and critical reviews across agriculture and allied sciences.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-agro-leaf flex-shrink-0 mt-0.5" />
              <span>
                <strong>Promote climate-smart farming:</strong> Document actionable adaptations that shield farm productivity from climate unpredictability.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-agro-leaf flex-shrink-0 mt-0.5" />
              <span>
                <strong>Empower farmers and young researchers:</strong> Provide an accessible, supportive publishing forum for early-career scientists and grassroots innovators.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-agro-leaf flex-shrink-0 mt-0.5" />
              <span>
                <strong>Preserve agro-biodiversity & indigenous wisdom:</strong> Catalog heirloom germplasm, community seed systems, and traditional ecological practices before they disappear.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* The Magazine as a Bridge Section */}
      <div className="bg-gradient-to-r from-agro-surface via-agro-tint/20 to-agro-surface rounded-3xl p-8 sm:p-12 border border-agro-leaf/20 space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-agro-leaf">
            Core Philosophy
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-agro-dark">
            The Bridge Between Agricultural Research & Practical Farming
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            In traditional scientific publishing, a profound disconnect often persists between high-level laboratory research and the immediate realities confronting farmers in the field. Agrodiversity Magazine was founded explicitly to bridge this gap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-agro-primary/10 text-agro-primary flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h3 className="font-serif font-bold text-base text-agro-dark">
              From Lab to Field
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Translating technical molecular genetics and agronomic statistical trials into actionable field recommendations accessible to farm extension agents and progressive farmers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-agro-primary/10 text-agro-primary flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h3 className="font-serif font-bold text-base text-agro-dark">
              From Field to Lab
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Encouraging formal researchers to study, validate, and scientifically explain empirical observations, herbal pest concoctions, and tool modifications discovered by practicing farmers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-agro-primary/10 text-agro-primary flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h3 className="font-serif font-bold text-base text-agro-dark">
              Open Access Dissemination
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Eliminating subscription paywalls so that researchers in developing nations, students, and agrarian field workers have unrestricted access to peer-reviewed scientific advancements.
            </p>
          </div>
        </div>
      </div>

      {/* Thematic Coverage Areas Grid */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-agro-dark">
            Comprehensive Thematic Coverage
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Our editorial board oversees nine interconnected domains of agricultural science.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coverageAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:border-agro-leaf/50 transition-all flex items-start gap-4"
            >
              <span className="text-2xl p-2.5 rounded-xl bg-agro-surface border border-gray-100 flex-shrink-0">
                {area.icon}
              </span>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-sm text-agro-dark">
                  {area.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Publishing Framework Notice */}
      <div className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-serif font-bold text-base text-agro-dark">
            SRN Publication Editorial Standard
          </h3>
          <p className="text-xs text-gray-600 max-w-xl">
            Agrodiversity Magazine publishes monthly under strict double-blind peer review protocols. Fast-track reviews are completed within 1–7 working days for urgent field research findings.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            to="/editorial-policies"
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors"
          >
            Editorial Policies
          </Link>
          <Link
            to="/submission"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-agro-primary hover:bg-agro-forest text-white transition-colors"
          >
            Submit Manuscript
          </Link>
        </div>
      </div>
    </div>
  );
};
