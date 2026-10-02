import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sprout,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Send,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-agro-dark text-white border-t border-agro-leaf/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Magazine Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-agro-primary flex items-center justify-center text-agro-gold border border-agro-gold/30">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white">
                  Agrodiversity Magazine
                </h3>
                <p className="text-xs text-agro-amber font-medium">
                  Connecting Crops, Climate, Culture, and Science
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              An international peer-reviewed agricultural knowledge and research publication published under SRN Publication. Bridging academic laboratories, field extension, and grassroots farmer innovations to build sustainable agro-ecosystems.
            </p>

            <div className="flex items-center gap-2 text-xs text-agro-tint font-mono bg-agro-forest/60 p-2.5 rounded-lg border border-agro-leaf/30 w-fit">
              <ShieldCheck className="w-4 h-4 text-agro-gold flex-shrink-0" />
              <span>Double-Blind Peer Review • Monthly Open Access</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-agro-amber uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-white hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/current-issue" className="hover:text-white hover:underline transition-colors">
                  Current Issue
                </Link>
              </li>
              <li>
                <Link to="/archives" className="hover:text-white hover:underline transition-colors">
                  Archives
                </Link>
              </li>
              <li>
                <Link to="/editors" className="hover:text-white hover:underline transition-colors">
                  Editors & Board
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white hover:underline transition-colors">
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: For Authors */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-agro-amber uppercase tracking-wider">
              For Authors
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link to="/instructions-to-authors" className="hover:text-white hover:underline transition-colors">
                  Author Guidelines
                </Link>
              </li>
              <li>
                <Link to="/submission" className="hover:text-white hover:underline transition-colors">
                  Submission Procedure
                </Link>
              </li>
              <li>
                <Link to="/publication-fee" className="hover:text-white hover:underline transition-colors">
                  Publication Fees (APC)
                </Link>
              </li>
              <li>
                <Link to="/editorial-policies" className="hover:text-white hover:underline transition-colors">
                  Editorial Policies
                </Link>
              </li>
              <li>
                <Link to="/submission" className="text-agro-amber font-semibold hover:underline flex items-center gap-1">
                  <Send className="w-3 h-3" />
                  <span>Submit Manuscript</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-agro-amber uppercase tracking-wider">
              Editorial Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-agro-amber flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:agrodivemagz@gamil.com" className="hover:text-white break-all">
                    agrodivemagz@gamil.com
                  </a>
                  <div className="text-[10px] text-gray-400">Editorial Desk</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-agro-amber flex-shrink-0" />
                <a href="tel:+919790879038" className="hover:text-white">
                  +91 9790879038
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-agro-amber flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  SRN Publication, Agricultural Science Division, Tamil Nadu, India
                </span>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="pt-2">
              <span className="text-xs text-gray-400 block mb-2 font-medium">Connect With Us:</span>
              <div className="flex items-center gap-2.5 text-gray-400">
                <a href="#twitter" aria-label="Twitter" className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-agro-amber transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#linkedin" aria-label="LinkedIn" className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-agro-amber transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#facebook" aria-label="Facebook" className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-agro-amber transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#instagram" aria-label="Instagram" className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-agro-amber transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#youtube" aria-label="YouTube" className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-agro-amber transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} Agrodiversity Magazine. All Rights Reserved. Published by SRN Publication.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link to="/editorial-policies" className="hover:text-white transition-colors">
              Privacy & Ethics
            </Link>
            <span>•</span>
            <Link to="/editorial-policies" className="hover:text-white transition-colors">
              Open Access Terms
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
