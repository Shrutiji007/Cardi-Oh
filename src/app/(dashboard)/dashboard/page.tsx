'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from '@/components/theme-toggle';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth/AuthContext';

export default function DashboardPage() {
  const [showProfilePrompt, setShowProfilePrompt] = useState(true);
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleCompleteProfile = () => {
    router.push('/settings');
  };

  const handleDismissPrompt = () => {
    setShowProfilePrompt(false);
  };

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <ThemeToggle />
      
      {/* Header with user info and logout */}
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {user?.name}! 🏃‍♂️</h1>
            <p className="text-muted-foreground mt-2">Your personalized fitness journey continues</p>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={() => router.push('/settings')}
              variant="outline"
            >
              Settings
            </Button>
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Prompt */}
          {showProfilePrompt && (
            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Complete Your Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  To provide you with the best personalized workout plans, we need to know a bit more about your fitness goals and current level.
                </p>
                <div className="flex gap-3">
                  <Button 
                    onClick={handleCompleteProfile}
                    className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70"
                  >
                    Complete Profile
                  </Button>
                  <Button 
                    onClick={handleDismissPrompt}
                    variant="outline"
                  >
                    Maybe Later
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Workouts This Week</span>
                    <span className="font-semibold">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Workouts</span>
                    <span className="font-semibold">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current Streak</span>
                    <span className="font-semibold">0 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Today's Workout */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Today's Workout</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">No workout planned yet</p>
                  <Button 
                    onClick={handleCompleteProfile}
                    variant="outline"
                    className="w-full"
                  >
                    Generate Plan
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">Complete your profile to see your progress</p>
                  <Button 
                    onClick={handleCompleteProfile}
                    variant="outline"
                    className="w-full"
                  >
                    Complete Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground">No recent activity</p>
                <p className="text-sm text-muted-foreground mt-2">Complete your first workout to see your activity here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 