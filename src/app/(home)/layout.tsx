import type { Metadata } from 'next'; 
import { HomeLayout } from '@/modules/home/ui/layouts/home-layout';

export const metadata: Metadata = {
  title: 'MeTube App', 
  description: 'A video sharing platform built with Next.js', 
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <HomeLayout>
            {children}
  </HomeLayout>
  );
}