'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function WorkoutInstructions() {
  const router = useRouter()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="max-w-lg w-full space-y-6">
        <h1 className="text-2xl font-bold">How the YouTube Timer Works</h1>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Paste your favorite YouTube video link</li>
          <li>Video will act as a workout timer</li>
          <li>During rest, you’ll see the next exercise preview</li>
        </ul>
        <Button onClick={() => router.push("/workout/youtube")}>Next</Button>
      </div>
    </div>
  )
}