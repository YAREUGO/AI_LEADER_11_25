export type Cafe = {
  id: string;
  name: string;
  location: { lat: number; lng: number; address: string };
  wsiScore: number; // 10점 만점 (8점 이상 녹색, 5-7점 노란색)
  specs: {
    wifi: "Fast" | "Normal" | "Slow";
    power: "High" | "Medium" | "Low"; // 콘센트
    desk: "Good" | "Bad";
  };
  noiseLevel: string; // 예: "잔잔한 재즈"
  ownerRule: string; // 예: "3시간 이용 시 재주문 필수"
  isOpenLate: boolean; // 22시 이후 영업 여부
};


