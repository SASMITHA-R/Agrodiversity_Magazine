import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  CreditCard,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  DollarSign,
  Globe,
  Users,
  Send,
  HelpCircle,
  Sparkles,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const PublicationFees: React.FC = () => {
  return (
    <div className="space-y-12 lg:space-y-16 py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-6">
      <Breadcrumb items={[{ label: "Publication Fees (APC)" }]} />

      {/* Page Header */}
      <div className="border-b border-gray-200 pb-6 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-agro-leaf flex items-center gap-1.5">
          <CreditCard className="w-4 h-4 text-agro-gold" />
          <span>Financial Transparency & APC</span>
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-agro-dark tracking-tight">
          Publication Fees & Membership Charges
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed">
          Transparent Article Processing Charges (APC) and subscription matrix for Agrodiversity Magazine under SRN Publication. Fees are payable strictly following formal double-blind peer review acceptance.
        </p>
      </div>

      {/* Critical Zero Submission Fee Banner */}
      <div className="rounded-2xl p-6 bg-gradient-to-r from-emerald-800 to-agro-dark text-white shadow-lg space-y-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-agro-amber flex-shrink-0" />
          <h2 className="font-serif font-bold text-lg sm:text-xl text-white">
            Zero Charge at Submission
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-agro-tint leading-relaxed pl-7">
          In strict accordance with the official <strong>Instructions to Authors</strong> document, <strong>no fee is charged at the time of manuscript submission</strong>. Processing fees are collected solely after a manuscript has been formally accepted for publication by the editorial board.
        </p>
      </div>

      {/* Discrepancy & Document Context Transparency Notice */}
      <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-2 text-xs text-amber-900 shadow-sm">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
          <h3 className="font-bold text-amber-950 text-sm">
            Editorial Notice on Document Variations
          </h3>
        </div>
        <p className="text-amber-800 leading-relaxed pl-6">
          The supplied source documents contain distinct fee schedules across different sections (e.g., Annual Membership fee stated as <strong>₹650</strong> in one record versus Annual Member article publication fee stated as <strong>₹700</strong> in author guidelines; similarly Non-member fees appear as <strong>₹300</strong> for co-authors or <strong>₹700</strong> for standard Indian non-members). Rather than silently reconciling these figures, both sources are transparently detailed below and marked with source context. Exact invoice figures are confirmed upon official manuscript acceptance.
        </p>
      </div>

      {/* 1. Article Publication Fees Table (From Instructions to Authors) */}
      <div className="journal-card rounded-2xl p-6 sm:p-8 bg-white border border-gray-200/90 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
          <div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-agro-dark">
              1. Article Publication Fees (Payable Only After Acceptance)
            </h2>
            <p className="text-xs text-gray-500">
              Source: Official Instructions to Authors & Editorial Policy Schedule
            </p>
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-agro-tint text-agro-dark text-xs font-bold uppercase tracking-wider self-start sm:self-auto">
            Standard Rates
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-agro-surface border-y border-gray-200 text-gray-600 font-bold uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4">Author Classification / Country</th>
                <th className="py-3.5 px-4">Eligibility Criteria</th>
                <th className="py-3.5 px-4 text-right">Applicable Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-agro-surface/50 transition-colors">
                <td className="py-4 px-4 font-semibold text-agro-dark flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-agro-leaf"></span>
                  Annual Member (India)
                </td>
                <td className="py-4 px-4 text-gray-600">
                  Registered active annual member with valid Member ID
                </td>
                <td className="py-4 px-4 text-right font-mono font-bold text-base text-agro-primary">
                  ₹700 INR
                </td>
              </tr>

              <tr className="hover:bg-agro-surface/50 transition-colors">
                <td className="py-4 px-4 font-semibold text-agro-dark flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                  Non-Member (India)
                </td>
                <td className="py-4 px-4 text-gray-600">
                  Authors submitting without prior annual society membership
                </td>
                <td className="py-4 px-4 text-right font-mono font-bold text-base text-gray-800">
                  ₹700 INR
                  <span className="block text-[10px] text-amber-700 font-sans font-normal">
                    (₹300 in secondary doc context — to be confirmed by editorial office)
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-agro-surface/50 transition-colors">
                <td className="py-4 px-4 font-semibold text-agro-dark flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  Co-Author (Non-Member)
                </td>
                <td className="py-4 px-4 text-gray-600">
                  Non-member secondary co-authors listed on accepted paper
                </td>
                <td className="py-4 px-4 text-right font-mono font-bold text-base text-amber-800">
                  ₹200 INR
                </td>
              </tr>

              <tr className="hover:bg-agro-surface/50 transition-colors">
                <td className="py-4 px-4 font-semibold text-agro-dark flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  SAARC Countries
                </td>
                <td className="py-4 px-4 text-gray-600">
                  Authors affiliated with institutions in SAARC nations
                </td>
                <td className="py-4 px-4 text-right font-mono font-bold text-base text-blue-800">
                  $20 USD
                </td>
              </tr>

              <tr className="hover:bg-agro-surface/50 transition-colors">
                <td className="py-4 px-4 font-semibold text-agro-dark flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  Other Foreign Countries
                </td>
                <td className="py-4 px-4 text-gray-600">
                  Authors affiliated with international institutions outside SAARC
                </td>
                <td className="py-4 px-4 text-right font-mono font-bold text-base text-purple-800">
                  $25 USD
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Magazine Membership Options */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-agro-dark">
            2. Society & Author Membership Tiers
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Membership confers priority review, author fee subsidies, and invitations to agricultural symposiums.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Annual Membership */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/90 shadow-md space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-agro-tint text-agro-dark">
                12 Months
              </span>
              <h3 className="font-serif font-bold text-2xl text-agro-dark">
                Annual Membership
              </h3>
              <div className="font-serif font-black text-3xl text-agro-primary">
                ₹650 INR{" "}
                <span className="text-xs font-sans text-gray-500 font-normal">
                  / year (or ₹700 per author schedule)
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Ideal for research scholars, assistant professors, and agricultural extension officers.
              </p>
              <ul className="space-y-2 text-xs text-gray-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-agro-leaf flex-shrink-0" />
                  <span>Subsidized article publication rates throughout the active year</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-agro-leaf flex-shrink-0" />
                  <span>Direct monthly digital PDF magazine copies delivered via email</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-agro-leaf flex-shrink-0" />
                  <span>Eligibility to review manuscripts for peer review credit</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center py-2.5 rounded-xl text-xs font-bold bg-agro-primary text-white hover:bg-agro-forest transition-colors"
              >
                Inquire for Annual Membership
              </Link>
            </div>
          </div>

          {/* Lifetime Membership */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-agro-gold/50 shadow-md space-y-4 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-agro-gold text-agro-dark font-bold text-[10px] uppercase tracking-widest px-4 py-1 rounded-bl-xl">
              Recommended
            </div>

            <div className="space-y-3">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900">
                Permanent Tenure
              </span>
              <h3 className="font-serif font-bold text-2xl text-agro-dark">
                Lifetime Membership
              </h3>
              <div className="font-serif font-black text-3xl text-agro-gold-dark">
                ₹1,500 INR{" "}
                <span className="text-xs font-sans text-gray-500 font-normal">
                  (one-time)
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                For senior academicians, faculty members, and institutional directors.
              </p>
              <ul className="space-y-2 text-xs text-gray-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-agro-leaf flex-shrink-0" />
                  <span>Permanent member registry status and verified digital credentials</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-agro-leaf flex-shrink-0" />
                  <span>Priority consideration for editorial board and guest editor positions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-agro-leaf flex-shrink-0" />
                  <span>Maximum fee waivers for multiple annual paper submissions</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center py-2.5 rounded-xl text-xs font-bold bg-agro-dark text-agro-amber hover:bg-black transition-colors"
              >
                Inquire for Lifetime Membership
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modes & Wire Information Notice */}
      <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3 text-xs text-gray-600">
        <h4 className="font-serif font-bold text-sm text-agro-dark flex items-center gap-2">
          <Info className="w-4 h-4 text-agro-leaf" />
          <span>Payment Processing Protocol</span>
        </h4>
        <p className="leading-relaxed">
          Following formal acceptance of your manuscript, the editorial desk transmits an official acceptance letter accompanied by secure electronic payment instructions (UPI, NEFT/RTGS wire transfer for Indian authors, or PayPal/SWIFT for international authors). Please do NOT transmit payments before receiving an official manuscript acceptance letter and reference ID.
        </p>
      </div>
    </div>
  );
};
