// src/app/layout.tsx
import './globals.css'; // Import your global CSS file
import type { Metadata } from 'next'; // Optional: for defining metadata
import { HomeNavbar } from '@/modules/home/ui/components/home-navbar'; // Import your HomeNavbar component
import { SidebarProvider } from "@/components/ui/sidebar"; // <--- ADD THIS IMPORT! (Adjust path if necessary)
import { HomeSidebar } from '@/modules/home/ui/components/home-sidebar';
// Define metadata for your entire application
export const metadata: Metadata = {
  title: 'MeTube App', // Your app's title
  description: 'A video sharing platform built with Next.js', // Your app's description
  // You can add more metadata here, e.g., openGraph, twitter, etc.
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {/*
          Wrap your entire application's content (including HomeNavbar and anything else
          that uses the sidebar context) with the SidebarProvider.
        */}
        <SidebarProvider> {/* <--- WRAP CONTENT WITH SIDEBARPROVIDER */}
          <HomeNavbar />
          <HomeSidebar />
          <main>
            {children}
          </main>
          {/* Optional: Add a global footer here */}
        </SidebarProvider> {/* <--- CLOSE SIDEBARPROVIDER */}
      </body>
    </html>
  );
}