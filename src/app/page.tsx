'use client';

import { useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { HeroSection } from '@/components/sections/hero-section';
import { OnboardingForm } from '@/components/sections/onboarding-form';

interface FormData {
  name: string;
  height: string;
  weight: string;
  fitnessLevel: string;
  lastWorkoutTime: string;
  maxPushups: string;
  maxSquats: string;
  workoutPreference: string;
  homeEquipment: string;
  fitnessGoal: string;
}

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const handleGetStarted = () => {
    setShowForm(true);
  };

  const handleBack = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your API
    // For now, we'll just log it and show a success message
    alert('Plan generated successfully! 🎉');
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <ThemeToggle />
      
      {!showForm ? (
        <HeroSection onGetStarted={handleGetStarted} />
      ) : (
        <OnboardingForm onBack={handleBack} onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}
