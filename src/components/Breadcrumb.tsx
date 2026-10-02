import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-2.5">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-agro-primary transition-colors text-gray-400 hover:text-gray-700"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
              {isLast || !item.path ? (
                <span className="font-semibold text-agro-dark truncate max-w-xs sm:max-w-md">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-agro-primary hover:underline transition-colors truncate max-w-xs"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
