'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { cafes } from '@/lib/data';
import { Cafe } from '@/lib/types';
import CafeDrawer from '@/components/map/CafeDrawer';
import FilterBar from '@/components/map/FilterBar';

// Leaflet 지도 컴포넌트를 dynamic import로 처리 (SSR 이슈 해결)
const CafeMap = dynamic(() => import('@/components/map/CafeMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <div className="text-gray-600">지도를 불러오는 중...</div>
    </div>
  ),
});

export default function Home() {
  const [selectedCafe, setSelectedCafe] = useState<Cafe | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [filters, setFilters] = useState({
    powerRequired: false,
    openLate: false,
  });

  const handleCafeClick = (cafe: Cafe) => {
    setSelectedCafe(cafe);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    // 약간의 딜레이 후 selectedCafe를 null로 설정 (애니메이션 완료 대기)
    setTimeout(() => {
      setSelectedCafe(null);
    }, 300);
  };

  const handleFilterChange = (
    filter: 'powerRequired' | 'openLate',
    value: boolean
  ) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: value,
    }));
  };

  return (
    <main className="w-full h-screen relative overflow-hidden">
      <CafeMap
        cafes={cafes}
        selectedCafe={selectedCafe}
        onCafeClick={handleCafeClick}
        filters={filters}
      />
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      <CafeDrawer
        cafe={selectedCafe}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />
    </main>
  );
}



