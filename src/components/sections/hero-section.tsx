"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface HeroSectionProps {
  onGetStarted: () => void
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Left Section */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <motion.h1 
            className="text-6xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Cardi-<span className="text-primary">Oh</span>
          </motion.h1>
          <motion.h2 
            className="text-2xl font-semibold text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Your AI fitness buddy that makes workouts{' '}
            <span className="text-primary font-bold">fun & consistent ✨</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Transform your fitness journey with personalized AI workouts and an adorable virtual pet that grows stronger as you do. Perfect for beginners ready to build lasting habits.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Button 
              onClick={onGetStarted}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started For Free
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <motion.h3 
            className="text-3xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            What makes Cardi-Oh special?
          </motion.h3>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Everything you need to fall in love with fitness
          </motion.p>
          
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="border-l-4 border-l-blue-500 bg-blue-50 dark:bg-blue-950/20 cursor-pointer">
                <CardContent className="p-6">
                  <span className="text-3xl">🤖</span>
                  <h4 className="font-semibold text-foreground mt-2">AI-Powered Plans</h4>
                  <p className="text-muted-foreground text-sm">Personalized routines based on your goals</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="border-l-4 border-l-pink-500 bg-pink-50 dark:bg-pink-950/20 cursor-pointer">
                <CardContent className="p-6">
                  <span className="text-3xl">🐾</span>
                  <h4 className="font-semibold text-foreground mt-2">Virtual Pet Companion</h4>
                  <p className="text-muted-foreground text-sm">Pet evolves with your workout streaks</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="border-l-4 border-l-yellow-500 bg-yellow-50 dark:bg-yellow-950/20 cursor-pointer">
                <CardContent className="p-6">
                  <span className="text-3xl">🔥</span>
                  <h4 className="font-semibold text-foreground mt-2">Streak Tracking</h4>
                  <p className="text-muted-foreground text-sm">Visual streaks and achievement badges</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="border-l-4 border-l-green-500 bg-green-50 dark:bg-green-950/20 cursor-pointer">
                <CardContent className="p-6">
                  <span className="text-3xl">🎥</span>
                  <h4 className="font-semibold text-foreground mt-2">Guided Workouts</h4>
                  <p className="text-muted-foreground text-sm">Curated YouTube videos by level</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
} 