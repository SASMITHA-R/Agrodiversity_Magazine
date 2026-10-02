import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Send,
  BookOpen,
  Search,
  Sprout,
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Current Issue', path: '/current-issue' },
    { name: 'Archives', path: '/archives' },
    { name: 'Editors', path: '/editors' },
    { name: 'Editorial Policies', path: '/editorial-policies' },
    { name: 'Instructions to Authors', path: '/instructions-to-authors' },
    { name: 'Submission Procedure', path: '/submission' },
    { name: 'Publication Fee', path: '/publication-fee' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Banner with Journal Identity */}
      <div className="bg-agro-dark text-agro-tint/90 py-1.5 px-4 sm:px-6 text-xs border-b border-agro-leaf/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-agro-amber tracking-wider uppercase text-[11px]">
              SRN Publication
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300 font-light">
              Monthly Peer-Reviewed Agricultural Knowledge & Research E-Magazine
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-gray-300">
            <span>Fast-Track Review: 1–7 Days</span>
            <span className="hidden md:inline text-gray-500">|</span>
            <span className="hidden md:inline">Open Access Monthly Edition</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-white/95 backdrop-blur-md transition-shadow duration-200 border-b border-gray-200/80 ${
          scrolled ? 'shadow-md py-2.5' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo & Magazine Name */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-agro-primary to-agro-dark flex items-center justify-center text-agro-gold shadow-md group-hover:scale-105 transition-transform duration-200 border border-agro-gold/30">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif font-extrabold text-lg sm:text-xl text-agro-dark tracking-tight leading-none group-hover:text-agro-primary transition-colors">
                Agrodiversity Magazine
              </div>
              <div className="text-[11px] text-gray-500 font-medium tracking-normal mt-0.5 hidden xs:block">
                Connecting Crops, Climate, Culture, and Science
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1 text-[13px] font-medium text-gray-700">
            {navLinks.slice(0, 6).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-2.5 py-1.5 rounded-lg transition-colors duration-150 ${
                    isActive
                      ? 'bg-agro-tint/70 text-agro-dark font-semibold'
                      : 'hover:text-agro-primary hover:bg-gray-100/70'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Author & Publishing Dropdown for clean space */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:text-agro-primary hover:bg-gray-100/70 text-gray-700 font-medium">
                <span>For Authors</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 top-full pt-2 w-56 hidden group-hover:block animate-fade-in">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                  {navLinks.slice(6, 9).map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-xs transition-colors ${
                          isActive
                            ? 'bg-agro-tint text-agro-dark font-semibold'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-agro-primary'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(9).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-2.5 py-1.5 rounded-lg transition-colors duration-150 ${
                    isActive
                      ? 'bg-agro-tint/70 text-agro-dark font-semibold'
                      : 'hover:text-agro-primary hover:bg-gray-100/70'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                aria-label="Search articles"
                className="p-2 sm:px-3 sm:py-2 rounded-xl text-gray-600 hover:text-agro-primary hover:bg-gray-100 transition-colors flex items-center gap-1.5 text-xs font-medium"
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Search</span>
              </button>
            )}

            {/* Prominent Submit Manuscript CTA */}
            <Link
              to="/submission"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-agro-primary hover:bg-agro-forest text-white shadow-md hover:shadow-lg transition-all duration-150 transform hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5 text-agro-amber" />
              <span>Submit Manuscript</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-gray-700 hover:text-agro-primary hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="py-2 px-3 border-b border-gray-100 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-agro-leaf">
                Navigation Menu
              </span>
            </div>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-agro-tint text-agro-dark font-bold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-agro-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-4 mt-2 border-t border-gray-100">
              <Link
                to="/submission"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm bg-agro-primary text-white shadow-md"
              >
                <Send className="w-4 h-4 text-agro-amber" />
                <span>Submit Manuscript</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
