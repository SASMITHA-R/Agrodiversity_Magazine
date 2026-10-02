import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { EditorCard } from '../components/EditorCard';
import { editors } from '../data/editors';
import { Users, Award, ShieldCheck, Mail, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Editors: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const editorInChief = editors.find((e) => e.category === 'Editor-in-Chief');
  const managingEditor = editors.find((e) => e.category === 'Managing Editor');
  const associateEditors = editors.filter((e) => e.category === 'Associate Editors');
  const sectionEditors = editors.filter((e) => e.category === 'Section Editors');
  const technicalEditors = editors.filter((e) => e.category === 'Technical Editors');
  const studentBoard = editors.filter((e) => e.category === 'Student Editorial Board');
  const socialMedia = editors.filter((e) => e.category === 'Social Media Coordinator');

  const categories = [
    'All',
    'Executive Leadership',
    'Section Editors',
    'Technical Editors',
    'Student & Social Outreach'
  ];

  return (
    <div className="space-y-12 lg:space-y-16 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6">
      <Breadcrumb items={[{ label: "Editorial Board" }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-agro-tint text-agro-dark text-xs font-bold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5 text-agro-leaf" />
          <span>Academic Governance</span>
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-agro-dark tracking-tight">
          Editorial Board & Scientific Committee
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Distinguished researchers, agronomists, and agricultural communicators dedicated to upholding double-blind peer review integrity and accelerating global agro-ecosystem knowledge exchange.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-gray-200 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-agro-primary text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 1. EXECUTIVE LEADERSHIP (Editor-in-Chief & Managing Editor) */}
      {(selectedCategory === 'All' || selectedCategory === 'Executive Leadership') && (
        <section className="space-y-6">
          <div className="border-b border-gray-200 pb-3 flex items-center justify-between">
            <h2 className="font-serif font-bold text-2xl text-agro-dark flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-agro-gold"></span>
              <span>Executive Editorial Leadership</span>
            </h2>
            <span className="text-xs text-gray-400 font-mono">Governing Body</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {editorInChief && (
              <EditorCard editor={editorInChief} featured={true} />
            )}
            {managingEditor && (
              <EditorCard editor={managingEditor} featured={true} />
            )}
          </div>
        </section>
      )}

      {/* 2. ASSOCIATE EDITORS */}
      {(selectedCategory === 'All' || selectedCategory === 'Executive Leadership') && (
        <section className="space-y-6">
          <div className="border-b border-gray-200 pb-3">
            <h2 className="font-serif font-bold text-2xl text-agro-dark flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-agro-leaf"></span>
              <span>Associate Editors</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {associateEditors.map((ed) => (
              <EditorCard key={ed.id} editor={ed} />
            ))}
          </div>
        </section>
      )}

      {/* 3. SECTION EDITORS */}
      {(selectedCategory === 'All' || selectedCategory === 'Section Editors') && (
        <section className="space-y-6">
          <div className="border-b border-gray-200 pb-3 flex items-center justify-between">
            <h2 className="font-serif font-bold text-2xl text-agro-dark flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-agro-emerald"></span>
              <span>Section Editors (Subject Specialists)</span>
            </h2>
            <span className="text-xs text-gray-400 font-mono">Disciplinary Leads</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectionEditors.map((ed) => (
              <EditorCard key={ed.id} editor={ed} />
            ))}
          </div>
        </section>
      )}

      {/* 4. TECHNICAL EDITORS */}
      {(selectedCategory === 'All' || selectedCategory === 'Technical Editors') && (
        <section className="space-y-6">
          <div className="border-b border-gray-200 pb-3 flex items-center justify-between">
            <h2 className="font-serif font-bold text-2xl text-agro-dark flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-agro-sage"></span>
              <span>Technical & Production Editors</span>
            </h2>
            <span className="text-xs text-gray-400 font-mono">Typesetting & Media</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalEditors.map((ed) => (
              <EditorCard key={ed.id} editor={ed} />
            ))}
          </div>
        </section>
      )}

      {/* 5. STUDENT EDITORIAL BOARD & OUTREACH */}
      {(selectedCategory === 'All' || selectedCategory === 'Student & Social Outreach') && (
        <section className="space-y-6">
          <div className="border-b border-gray-200 pb-3 flex items-center justify-between">
            <h2 className="font-serif font-bold text-2xl text-agro-dark flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-agro-amber"></span>
              <span>Student Editorial Board & Public Outreach</span>
            </h2>
            <span className="text-xs text-gray-400 font-mono">Scholars & Community</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studentBoard.map((ed) => (
              <EditorCard key={ed.id} editor={ed} />
            ))}
            {socialMedia.map((ed) => (
              <EditorCard key={ed.id} editor={ed} />
            ))}
          </div>
        </section>
      )}

      {/* Editorial Governance Commitment Banner */}
      <div className="bg-gradient-to-r from-agro-dark via-agro-forest to-agro-dark text-white rounded-3xl p-8 sm:p-12 border border-agro-leaf/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-agro-amber font-mono text-xs uppercase tracking-wider font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Commitment to Review Integrity</span>
          </div>
          <h3 className="font-serif font-bold text-2xl text-white">
            Interested in Joining as a Peer Reviewer?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            We welcome experienced professors, scientists, and agricultural specialists to join our referee database for double-blind evaluations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <Link
            to="/editorial-policies"
            className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors text-center"
          >
            Review Policies
          </Link>
          <Link
            to="/contact"
            className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-agro-amber hover:bg-agro-gold text-agro-dark shadow-md transition-colors text-center"
          >
            Express Reviewer Interest
          </Link>
        </div>
      </div>
    </div>
  );
};
