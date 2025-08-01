"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { LoadingScreen } from "@/components/ui/loading-screen"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface OnboardingFormProps {
  onBack?: () => void
  onSubmit: (data: FormData) => void
  onLogin?: () => void
  embedded?: boolean
}

interface FormData {
  name: string
  height: string
  weight: string
  fitnessLevel: string
  lastWorkoutTime: string
  maxPushups: string
  maxSquats: string
  workoutPreference: string
  homeEquipment: string
  fitnessGoal: string
}

export function OnboardingForm({ onBack, onSubmit, onLogin, embedded = false }: OnboardingFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    height: '',
    weight: '',
    fitnessLevel: '',
    lastWorkoutTime: '',
    maxPushups: '',
    maxSquats: '',
    workoutPreference: '',
    homeEquipment: '',
    fitnessGoal: ''
  })

  const [loading, setLoading]  = useState(false)
  const router = useRouter()

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

   const handleGeneratePlan = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate AI plan generation delay
    setTimeout(() => {
      setLoading(false)
      router.push("/dashboard")
    }, 2500)
  }

  const showEquipment = formData.workoutPreference === 'home'

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* Personal Information Section */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Personal Information</h3>
        
        <div className="space-y-2">
          <Label htmlFor="name">Your Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
          />
        </div>
      </div>

      {/* Physical Information Section */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Physical Information</h3>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              id="height"
              type="number"
              placeholder="170"
              value={formData.height}
              onChange={(e) => handleInputChange('height', e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              placeholder="70"
              value={formData.weight}
              onChange={(e) => handleInputChange('weight', e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      {/* Fitness Information Section */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Fitness Information</h3>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="fitnessLevel">Fitness Level</Label>
            <Select value={formData.fitnessLevel} onValueChange={(value) => handleInputChange('fitnessLevel', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your fitness level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastWorkoutTime">Last Workout Time</Label>
            <Input
              id="lastWorkoutTime"
              type="text"
              placeholder="e.g., 2 weeks ago"
              value={formData.lastWorkoutTime}
              onChange={(e) => handleInputChange('lastWorkoutTime', e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="maxPushups">Max Pushups</Label>
            <Input
              id="maxPushups"
              type="number"
              placeholder="10"
              value={formData.maxPushups}
              onChange={(e) => handleInputChange('maxPushups', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="maxSquats">Max Squats</Label>
            <Input
              id="maxSquats"
              type="number"
              placeholder="20"
              value={formData.maxSquats}
              onChange={(e) => handleInputChange('maxSquats', e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="workoutPreference">Workout Preference</Label>
            <Select value={formData.workoutPreference} onValueChange={(value) => handleInputChange('workoutPreference', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="gym">Gym</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="fitnessGoal">Fitness Goal</Label>
            <Select value={formData.fitnessGoal} onValueChange={(value) => handleInputChange('fitnessGoal', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your goal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="loseFat">Lose Fat</SelectItem>
                <SelectItem value="gainMuscle">Gain Muscle</SelectItem>
                <SelectItem value="stayConsistent">Stay Consistent</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {showEquipment && (
          <div className="space-y-2">
            <Label htmlFor="homeEquipment">Home Equipment</Label>
            <Input
              id="homeEquipment"
              type="text"
              placeholder="e.g., dumbbells, resistance bands"
              value={formData.homeEquipment}
              onChange={(e) => handleInputChange('homeEquipment', e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="pt-2">
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-3 rounded-lg font-semibold hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
        >
          {embedded ? 'Update Profile' : 'Complete Profile'}
        </Button>
      </div>
      <div className="pt-2">
        <Button 
          type="button" 
          onClick={handleGeneratePlan}
          className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-3 rounded-lg font-semibold hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
        >
          {'Generate New Plan'}
        </Button>
      </div>
    </form>
  )

  // If embedded, return just the form content
  if (embedded) {
    return formContent
  }

  // Otherwise, return the full-screen layout
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="pb-2">
          <div className="flex items-center justify-between">
            <Button 
              onClick={onBack}
              variant="ghost"
              className="text-primary hover:text-primary/80 font-semibold flex items-center"
            >
              ← Back
            </Button>
            <h2 className="text-2xl font-bold text-center flex-1">Complete Your Profile</h2>
            <div className="w-16"></div> {/* Spacer to balance the layout */}
          </div>
        </div>
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          {formContent}
        </div>
      </div>
    </div>
  )
} 