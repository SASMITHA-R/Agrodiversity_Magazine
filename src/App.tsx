import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CurrentIssue } from './pages/CurrentIssue';
import { Archives } from './pages/Archives';
import { ArticleDetails } from './pages/ArticleDetails';
import { Editors } from './pages/Editors';
import { EditorialPolicies } from './pages/EditorialPolicies';
import { AuthorGuidelines } from './pages/AuthorGuidelines';
import { Submission } from './pages/Submission';
import { PublicationFees } from './pages/PublicationFees';
import { News } from './pages/News';
import { Contact } from './pages/Contact';

// Scroll restoration component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#fbfbf9] text-[#1a2e22]">
        {/* Navigation Header */}
        <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

        {/* Main Routed Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/current-issue" element={<CurrentIssue />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/article/:id" element={<ArticleDetails />} />
            <Route path="/editors" element={<Editors />} />
            <Route path="/editorial-policies" element={<EditorialPolicies />} />
            <Route path="/instructions-to-authors" element={<AuthorGuidelines />} />
            <Route path="/author-guidelines" element={<AuthorGuidelines />} />
            <Route path="/submission" element={<Submission />} />
            <Route path="/publication-fee" element={<PublicationFees />} />
            <Route path="/publication-fees" element={<PublicationFees />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Article Search Modal */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;
