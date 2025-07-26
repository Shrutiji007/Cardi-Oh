"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface HeroSectionProps {
  onGetStarted: () => void
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Left Section */}
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-foreground">
            Cardi-<span className="text-primary">Oh</span>
          </h1>
          <h2 className="text-2xl font-semibold text-muted-foreground">
            Your AI fitness buddy that makes workouts{' '}
            <span className="text-primary font-bold">fun & consistent ✨</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Transform your fitness journey with personalized AI workouts and an adorable virtual pet that grows stronger as you do. Perfect for beginners ready to build lasting habits.
          </p>
          <Button 
            onClick={onGetStarted}
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            🚀 Get Started Free
          </Button>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-foreground">What makes Cardi-Oh special?</h3>
          <p className="text-lg text-muted-foreground">Everything you need to fall in love with fitness</p>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="border-l-4 border-l-blue-500 bg-blue-50 dark:bg-blue-950/20">
              <CardContent className="p-6">
                <span className="text-3xl">🤖</span>
                <h4 className="font-semibold text-foreground mt-2">AI-Powered Plans</h4>
                <p className="text-muted-foreground text-sm">Personalized routines based on your goals</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-pink-500 bg-pink-50 dark:bg-pink-950/20">
              <CardContent className="p-6">
                <span className="text-3xl">🐾</span>
                <h4 className="font-semibold text-foreground mt-2">Virtual Pet Companion</h4>
                <p className="text-muted-foreground text-sm">Pet evolves with your workout streaks</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-yellow-500 bg-yellow-50 dark:bg-yellow-950/20">
              <CardContent className="p-6">
                <span className="text-3xl">🔥</span>
                <h4 className="font-semibold text-foreground mt-2">Streak Tracking</h4>
                <p className="text-muted-foreground text-sm">Visual streaks and achievement badges</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-green-500 bg-green-50 dark:bg-green-950/20">
              <CardContent className="p-6">
                <span className="text-3xl">🎥</span>
                <h4 className="font-semibold text-foreground mt-2">Guided Workouts</h4>
                <p className="text-muted-foreground text-sm">Curated YouTube videos by level</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 