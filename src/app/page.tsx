'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { HeroSection } from '@/components/sections/hero-section';

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/signup');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <ThemeToggle />
      <HeroSection onGetStarted={handleGetStarted} />
    </div>
  );
}
