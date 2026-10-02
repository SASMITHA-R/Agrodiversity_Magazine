import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Clock,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulate contact dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <div className="space-y-12 lg:space-y-16 py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6">
      <Breadcrumb items={[{ label: "Contact Us" }]} />

      {/* Header */}
      <div className="space-y-3 border-b border-gray-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-agro-leaf flex items-center gap-1.5">
          <Mail className="w-4 h-4 text-agro-gold" />
          <span>Get in Touch</span>
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-agro-dark tracking-tight">
          Editorial Office & Inquiries
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed">
          Contact the Agrodiversity Magazine editorial secretariat for manuscript inquiries, peer review opportunities, membership assistance, or institutional collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info & Details (Left Column) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="journal-card rounded-3xl p-6 sm:p-8 bg-white border border-gray-200/90 shadow-lg space-y-6">
            <div className="space-y-1">
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-agro-dark">
                Agrodiversity Magazine
              </h2>
              <p className="text-xs text-agro-leaf font-semibold">
                SRN Publication — Agricultural Science Division
              </p>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-gray-700">
              {/* Email */}
              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-agro-surface border border-gray-100">
                <Mail className="w-5 h-5 text-agro-leaf flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">
                    Official Editorial Email
                  </span>
                  <a
                    href="mailto:agrodivemagz@gamil.com"
                    className="font-bold text-agro-dark hover:text-agro-primary hover:underline break-all"
                  >
                    agrodivemagz@gamil.com
                  </a>
                  <p className="text-[11px] text-gray-500">
                    Manuscripts & Queries: balramagri@gmail.com
                  </p>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-agro-surface border border-gray-100">
                <Phone className="w-5 h-5 text-agro-leaf flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">
                    Phone & WhatsApp Coordinator
                  </span>
                  <a
                    href="tel:+919790879038"
                    className="font-bold text-agro-dark hover:text-agro-primary hover:underline text-sm font-mono"
                  >
                    +91 9790879038
                  </a>
                  <p className="text-[11px] text-gray-500">
                    Available Monday – Saturday, 9:00 AM – 6:00 PM IST
                  </p>
                </div>
              </li>

              {/* Location */}
              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-agro-surface border border-gray-100">
                <MapPin className="w-5 h-5 text-agro-leaf flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">
                    Editorial Office Address
                  </span>
                  <p className="font-semibold text-agro-dark leading-relaxed">
                    SRN Publication Editorial Office, Agricultural Science Division, Tamil Nadu, India
                  </p>
                </div>
              </li>
            </ul>

            <div className="pt-2 border-t border-gray-100 text-xs text-gray-500 space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>Standard Review Turnaround: 1–7 working days for fast-track</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gray-400" />
                <span>Publisher: SRN Publication</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form (Right Column) */}
        <div className="lg:col-span-7">
          <div className="journal-card rounded-3xl p-6 sm:p-10 bg-white border border-gray-200/90 shadow-xl space-y-6">
            <div className="space-y-1">
              <h2 className="font-serif font-bold text-2xl text-agro-dark">
                Send a Message to Editorial Desk
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                Have a query regarding submissions, memberships, or review timelines? Fill out the form below.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-agro-tint/60 border border-agro-leaf/40 text-center space-y-4 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-agro-primary text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8 text-agro-amber" />
                </div>
                <h3 className="font-serif font-bold text-xl text-agro-dark">
                  Message Sent Successfully
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Agrodiversity Magazine. Our editorial coordinator will review your inquiry and respond within 24–48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs bg-agro-primary text-white hover:bg-agro-forest transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    Subject / Topic <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Manuscript Query / Membership Inquiry / Peer Review Volunteering"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your query or proposal..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-agro-primary hover:bg-agro-forest text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-agro-amber" />
                  <span>{loading ? "Transmitting..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* MAP PLACEHOLDER COMPONENT (Ready for Google Maps) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-serif font-bold text-xl text-agro-dark">
              Editorial Office Location
            </h3>
            <p className="text-xs text-gray-500">
              SRN Publication Secretariat, Tamil Nadu, India
            </p>
          </div>
          <span className="text-xs font-mono text-gray-400">11.0168° N, 76.9558° E</span>
        </div>

        {/* Map Canvas / Interactive Placeholder */}
        <div className="relative aspect-[21/8] min-h-[300px] rounded-3xl overflow-hidden border border-gray-300 shadow-md bg-[#e4e8e4] flex items-center justify-center group">
          {/* Subtle Map Graphic Background */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#1b4332_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="relative z-10 text-center p-6 space-y-3 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg max-w-md mx-4">
            <div className="w-12 h-12 rounded-2xl bg-agro-primary text-white flex items-center justify-center mx-auto shadow-md">
              <MapPin className="w-6 h-6 text-agro-amber animate-bounce" />
            </div>
            <h4 className="font-serif font-bold text-base text-agro-dark">
              SRN Publication Secretariat
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Agricultural Science Division, Tamil Nadu, India
            </p>
            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Tamil+Nadu+Agricultural+University+Coimbatore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-agro-primary text-white hover:bg-agro-forest transition-colors shadow-sm"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
