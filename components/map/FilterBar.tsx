'use client';

import { Zap, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FilterBarProps {
  filters: {
    powerRequired: boolean;
    openLate: boolean;
  };
  onFilterChange: (filter: 'powerRequired' | 'openLate', value: boolean) => void;
}

export default function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
      <button
        onClick={() => onFilterChange('powerRequired', !filters.powerRequired)}
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all shadow-lg',
          filters.powerRequired
            ? 'bg-green-600 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        )}
      >
        <Zap className="w-4 h-4" />
        <span>콘센트 필수</span>
      </button>

      <button
        onClick={() => onFilterChange('openLate', !filters.openLate)}
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all shadow-lg',
          filters.openLate
            ? 'bg-green-600 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        )}
      >
        <Moon className="w-4 h-4" />
        <span>늦게까지 영업</span>
      </button>
    </div>
  );
}



