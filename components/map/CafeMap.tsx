'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Cafe } from '@/lib/types';
import { cn } from '@/lib/utils';

// Leaflet 마커 아이콘 설정 (SSR 이슈 해결)
const createCustomIcon = (score: number) => {
  const color = score >= 8 ? '#22c55e' : score >= 5 ? '#eab308' : '#ef4444';
  
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: ${color};
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 14px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        border: 3px solid white;
      ">
        ${score.toFixed(1)}
      </div>
    `,
    iconSize: [48, 48],
    iconAnchor: [24, 24],
  });
};

interface CafeMapProps {
  cafes: Cafe[];
  selectedCafe: Cafe | null;
  onCafeClick: (cafe: Cafe) => void;
  filters: {
    powerRequired: boolean;
    openLate: boolean;
  };
}

function MapController({ center }: { center: [number, number] }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, 15);
  }, [map, center]);

  return null;
}

export default function CafeMap({ cafes, selectedCafe, onCafeClick, filters }: CafeMapProps) {
  // 필터링된 카페 목록
  const filteredCafes = cafes.filter((cafe) => {
    if (filters.powerRequired && cafe.specs.power === 'Low') return false;
    if (filters.openLate && !cafe.isOpenLate) return false;
    return true;
  });

  // 망원동 중심 좌표
  const center: [number, number] = [37.5563, 126.9054];

  return (
    <div className="w-full h-full relative">
      <MapContainer
        center={center}
        zoom={15}
        style={{ height: '100%', width: '100%', zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController center={center} />
        {filteredCafes.map((cafe) => (
          <Marker
            key={cafe.id}
            position={[cafe.location.lat, cafe.location.lng]}
            icon={createCustomIcon(cafe.wsiScore)}
            eventHandlers={{
              click: () => {
                onCafeClick(cafe);
              },
            }}
          >
            <Popup>
              <div className="text-sm font-semibold">{cafe.name}</div>
              <div className="text-xs text-gray-600">WSI: {cafe.wsiScore.toFixed(1)}</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

