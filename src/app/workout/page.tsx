'use client'
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

const PLAN = [
  { name: "Plank", duration: 60 },
  { name: "Rest", duration: 30 },
  { name: "Plank", duration: 60 },
  { name: "Rest", duration: 30 },
  { name: "Plank", duration: 60 },
]

export default function WorkoutPlan() {
  const router = useRouter()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="max-w-lg w-full space-y-6">
        <h1 className="text-2xl font-bold mb-4">Your AI-Powered Workout Plan</h1>
        <ul className="space-y-2">
          {PLAN.map((item, idx) => (
            <li key={idx} className="flex justify-between">
              <span className="font-semibold">{item.name}</span>
              <span>{item.duration}s</span>
            </li>
          ))}
        </ul>
        <Button className="mt-6 w-full" onClick={() => router.push("/workout/session")}>
          Start Workout
        </Button>
      </div>
    </div>
  )
}