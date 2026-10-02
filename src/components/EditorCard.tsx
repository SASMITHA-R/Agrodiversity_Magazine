import React from 'react';
import { Editor } from '../types';
import { Mail, GraduationCap, Building2, BookOpen } from 'lucide-react';

interface EditorCardProps {
  editor: Editor;
  featured?: boolean;
}

export const EditorCard: React.FC<EditorCardProps> = ({ editor, featured = false }) => {
  return (
    <div
      className={`journal-card rounded-2xl overflow-hidden bg-white border border-gray-200/90 hover:border-agro-leaf/40 transition-all duration-200 flex flex-col justify-between ${
        featured ? 'ring-2 ring-agro-gold/50 shadow-lg' : 'shadow-md'
      }`}
    >
      <div className="p-6 space-y-4">
        {/* Top Header: Image & Badges */}
        <div className="flex items-start gap-4">
          <div className="relative flex-shrink-0">
            <img
              src={editor.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'}
              alt={editor.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-white shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-agro-primary text-agro-gold flex items-center justify-center text-[10px] shadow">
              🌱
            </div>
          </div>

          <div className="space-y-1 min-w-0">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-agro-tint text-agro-dark border border-agro-leaf/20">
              {editor.role}
            </span>
            <h3 className="font-serif font-bold text-base sm:text-lg text-agro-dark leading-tight truncate">
              {editor.name}
            </h3>
            {editor.subSection && (
              <p className="text-xs font-semibold text-agro-emerald">
                {editor.subSection}
              </p>
            )}
            <p className="text-xs text-gray-500 line-clamp-1 flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              <span className="truncate">{editor.department}</span>
            </p>
          </div>
        </div>

        {/* Affiliation */}
        <div className="text-xs text-gray-700 bg-agro-surface p-3 rounded-xl border border-gray-100 flex items-start gap-2">
          <GraduationCap className="w-4 h-4 text-agro-leaf flex-shrink-0 mt-0.5" />
          <span className="leading-relaxed font-medium">{editor.affiliation}</span>
        </div>

        {/* Biography */}
        {editor.bio && (
          <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
            {editor.bio}
          </p>
        )}
      </div>

      {/* Card Footer */}
      <div className="px-6 py-3 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <span className="text-[11px] font-medium text-gray-400">SRN Editorial Board</span>
        {editor.email && (
          <a
            href={`mailto:${editor.email}`}
            className="inline-flex items-center gap-1.5 text-agro-primary hover:text-agro-forest font-semibold hover:underline"
            title={`Contact ${editor.name}`}
          >
            <Mail className="w-3.5 h-3.5 text-agro-leaf" />
            <span>Email</span>
          </a>
        )}
      </div>
    </div>
  );
};
