import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Deep Focus - 작업하기 좋은 숨은 카페 찾기',
  description: '카공족을 위한 콘센트, 소음, 눈치 정보를 제공하는 지도 서비스',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}



