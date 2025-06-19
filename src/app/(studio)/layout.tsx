import type { Metadata } from 'next'; 
import { StudioLayout } from '@/modules/studio/ui/layouts/studio-layout';

export const metadata: Metadata = {
  title: 'MeTube App', 
  description: 'A video sharing platform built with Next.js', 
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <StudioLayout>
            {children}
  </StudioLayout>
  );
}