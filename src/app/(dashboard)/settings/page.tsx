'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from '@/components/theme-toggle';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth/AuthContext';
import { OnboardingForm } from '@/components/sections/onboarding-form';
import { User, Settings, Shield, Bell } from 'lucide-react';

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

type SettingsTab = 'profile' | 'account' | 'preferences';

const tabConfig = {
  profile: {
    title: 'Profile',
    icon: User,
    description: 'Manage your fitness profile and preferences'
  },
  account: {
    title: 'Account',
    icon: Shield,
    description: 'Account settings and security'
  },
  preferences: {
    title: 'Preferences',
    icon: Bell,
    description: 'App notifications and settings'
  }
};

export default function SettingsPage() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<SettingsTab>('profile');

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const handleBackToDashboard = () => {
    router.push('/dashboard');
  };

  const handleFormSubmit = (data: FormData) => {
    console.log('Profile updated:', data);
    // Here you would typically save the profile data
    alert('Profile updated successfully! 🎉');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <ThemeToggle />
      
      {/* Header */}
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground mt-2">Manage your account and preferences</p>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={handleBackToDashboard}
              variant="outline"
            >
              Back to Dashboard
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
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-6">
            {/* Sidebar Navigation */}
            <div className="w-64 flex-shrink-0">
              <Card>
                <CardContent className="p-4">
                  <nav className="space-y-2">
                    {Object.entries(tabConfig).map(([key, config]) => {
                      const Icon = config.icon;
                      const isActive = activeTab === key;
                      
                      return (
                        <button
                          key={key}
                          onClick={() => setActiveTab(key as SettingsTab)}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
                            isActive 
                              ? 'bg-primary text-primary-foreground' 
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          <div>
                            <div className="font-medium">{config.title}</div>
                            <div className={`text-xs ${isActive ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                              {config.description}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Fitness Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <OnboardingForm 
                      onSubmit={handleFormSubmit} 
                      embedded={true}
                    />
                  </CardContent>
                </Card>
              )}

              {/* Account Tab */}
              {activeTab === 'account' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Account Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Account Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Name</label>
                          <p className="text-lg">{user?.name}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Email</label>
                          <p className="text-lg">{user?.email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Account Actions</h3>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start">
                          Change Password
                        </Button>
                        <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Preferences Tab */}
              {activeTab === 'preferences' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      App Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span>Workout Reminders</span>
                          <Button variant="outline" size="sm">Enable</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Progress Updates</span>
                          <Button variant="outline" size="sm">Enable</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Weekly Reports</span>
                          <Button variant="outline" size="sm">Enable</Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Privacy</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span>Share Progress</span>
                          <Button variant="outline" size="sm">Private</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Data Collection</span>
                          <Button variant="outline" size="sm">Enabled</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 