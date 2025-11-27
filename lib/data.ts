import { Cafe } from './types';

// 서울 마포구 망원동 일대 좌표로 가상의 카페 데이터
export const cafes: Cafe[] = [
  {
    id: '1',
    name: '망원동 카페 A',
    location: {
      lat: 37.5563,
      lng: 126.9054,
      address: '서울 마포구 망원동 123-45',
    },
    wsiScore: 8.5,
    specs: {
      wifi: 'Fast',
      power: 'High',
      desk: 'Good',
    },
    noiseLevel: '잔잔한 재즈',
    ownerRule: '3시간 이용 시 재주문 필수',
    isOpenLate: true,
  },
  {
    id: '2',
    name: '망원동 카페 B',
    location: {
      lat: 37.5575,
      lng: 126.9065,
      address: '서울 마포구 망원동 234-56',
    },
    wsiScore: 6.0,
    specs: {
      wifi: 'Normal',
      power: 'Medium',
      desk: 'Bad',
    },
    noiseLevel: '보통 수준의 대화',
    ownerRule: '2시간 이용 시 재주문 권장',
    isOpenLate: false,
  },
  {
    id: '3',
    name: '망원동 카페 C',
    location: {
      lat: 37.5550,
      lng: 126.9040,
      address: '서울 마포구 망원동 345-67',
    },
    wsiScore: 9.0,
    specs: {
      wifi: 'Fast',
      power: 'High',
      desk: 'Good',
    },
    noiseLevel: '조용함',
    ownerRule: '무제한 이용 가능',
    isOpenLate: true,
  },
  {
    id: '4',
    name: '망원동 카페 D',
    location: {
      lat: 37.5580,
      lng: 126.9075,
      address: '서울 마포구 망원동 456-78',
    },
    wsiScore: 5.5,
    specs: {
      wifi: 'Slow',
      power: 'Low',
      desk: 'Bad',
    },
    noiseLevel: '시끄러움',
    ownerRule: '1시간 이용 시 재주문 필수',
    isOpenLate: false,
  },
  {
    id: '5',
    name: '망원동 카페 E',
    location: {
      lat: 37.5545,
      lng: 126.9030,
      address: '서울 마포구 망원동 567-89',
    },
    wsiScore: 7.5,
    specs: {
      wifi: 'Normal',
      power: 'High',
      desk: 'Good',
    },
    noiseLevel: '조용한 배경음악',
    ownerRule: '2.5시간 이용 시 재주문 권장',
    isOpenLate: true,
  },
];



