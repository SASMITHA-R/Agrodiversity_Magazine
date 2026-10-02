import React from 'react';
import { Sprout } from 'lucide-react';

interface LoadingProps {
  message?: string;
}

export const Loading: React.FC<LoadingProps> = ({ message = 'Loading academic records...' }) => {
  return (
    <div className="min-h-[300px] flex flex-col items-center justify-center p-8 space-y-4">
      <div className="relative">
        <div className="w-14 h-14 rounded-full border-4 border-agro-tint border-t-agro-primary animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-agro-leaf">
          <Sprout className="w-6 h-6 animate-pulse" />
        </div>
      </div>
      <p className="text-sm font-medium text-gray-600 animate-pulse font-serif">
        {message}
      </p>
    </div>
  );
};
