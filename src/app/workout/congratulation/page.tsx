'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import confetti from "canvas-confetti"
import { useEffect } from "react"

export default function CongratsPage() {
  const router = useRouter()
  useEffect(() => {
    confetti()
    // Optionally play audio here
  }, [])
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <h1 className="text-3xl font-bold mb-4">🎉 Congratulations!</h1>
      <p className="text-lg mb-6">You finished your workout!</p>
      <Button onClick={() => router.push("/dashboard")}>Back to Dashboard</Button>
    </div>
  )
}