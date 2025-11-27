'use client';

import { Cafe } from '@/lib/types';
import { X, Wifi, Zap, Monitor, Volume2, Clock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CafeDrawerProps {
  cafe: Cafe | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CafeDrawer({ cafe, isOpen, onClose }: CafeDrawerProps) {
  if (!cafe) return null;

  const getWifiColor = (wifi: string) => {
    if (wifi === 'Fast') return 'text-green-600';
    if (wifi === 'Normal') return 'text-yellow-600';
    return 'text-red-600';
  };

  const getPowerColor = (power: string) => {
    if (power === 'High') return 'text-green-600';
    if (power === 'Medium') return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'bg-green-500';
    if (score >= 5) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          'fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 transition-transform duration-300 ease-out',
          isOpen ? 'translate-y-0' : 'translate-y-full'
        )}
        style={{ maxHeight: '80vh' }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Content */}
        <div className="px-6 pb-6 overflow-y-auto" style={{ maxHeight: 'calc(80vh - 60px)' }}>
          {/* Header */}
          <div className="pt-4 pb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 pr-10">{cafe.name}</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{cafe.location.address}</span>
            </div>
          </div>

          {/* WSI Score */}
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  'w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl',
                  getScoreColor(cafe.wsiScore)
                )}
              >
                {cafe.wsiScore.toFixed(1)}
              </div>
              <div>
                <div className="text-sm text-gray-600">WSI 점수</div>
                <div className="text-lg font-semibold text-gray-900">
                  {cafe.wsiScore >= 8
                    ? '우수'
                    : cafe.wsiScore >= 5
                    ? '보통'
                    : '낮음'}
                </div>
              </div>
            </div>
          </div>

          {/* Specs */}
          <div className="mb-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">시설 정보</h3>
            
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Wifi className={cn('w-5 h-5', getWifiColor(cafe.specs.wifi))} />
              <div className="flex-1">
                <div className="text-sm text-gray-600">와이파이</div>
                <div className={cn('font-semibold', getWifiColor(cafe.specs.wifi))}>
                  {cafe.specs.wifi === 'Fast' ? '빠름' : cafe.specs.wifi === 'Normal' ? '보통' : '느림'}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Zap className={cn('w-5 h-5', getPowerColor(cafe.specs.power))} />
              <div className="flex-1">
                <div className="text-sm text-gray-600">콘센트</div>
                <div className={cn('font-semibold', getPowerColor(cafe.specs.power))}>
                  {cafe.specs.power === 'High' ? '많음' : cafe.specs.power === 'Medium' ? '보통' : '적음'}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Monitor className="w-5 h-5 text-gray-700" />
              <div className="flex-1">
                <div className="text-sm text-gray-600">책상</div>
                <div className="font-semibold text-gray-900">
                  {cafe.specs.desk === 'Good' ? '좋음' : '나쁨'}
                </div>
              </div>
            </div>
          </div>

          {/* Noise Level */}
          <div className="mb-6">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Volume2 className="w-5 h-5 text-gray-700" />
              <div className="flex-1">
                <div className="text-sm text-gray-600">소음 수준</div>
                <div className="font-semibold text-gray-900">{cafe.noiseLevel}</div>
              </div>
            </div>
          </div>

          {/* Owner Rule */}
          <div className="mb-6">
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
              <Clock className="w-5 h-5 text-amber-700 mt-0.5" />
              <div className="flex-1">
                <div className="text-sm text-amber-800 font-semibold mb-1">사장님 공지</div>
                <div className="text-sm text-amber-900">{cafe.ownerRule}</div>
              </div>
            </div>
          </div>

          {/* Open Late */}
          {cafe.isOpenLate && (
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4" />
                <span>22시 이후 영업</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}



