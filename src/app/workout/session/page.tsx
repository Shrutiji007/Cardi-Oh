'use client'
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const PLAN = [
  { name: "Plank", duration: 60 },
  { name: "Rest", duration: 30 },
  { name: "Plank", duration: 60 },
  { name: "Rest", duration: 30 },
  { name: "Plank", duration: 60 },
]

export default function WorkoutSession() {
  const [step, setStep] = useState(0)
  const [timeLeft, setTimeLeft] = useState(PLAN[0].duration)
  const [paused, setPaused] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [youtubeUrl, setYoutubeUrl] = useState("")
  const router = useRouter()
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") {
      setYoutubeUrl(localStorage.getItem("workout_youtube_url") || "")
    }
  }, [])

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(intervalRef.current!)
          if (step < PLAN.length - 1) {
            setStep(s => s + 1)
            setTimeLeft(PLAN[step + 1].duration)
          } else {
            router.push("/workout/congratulation")
          }
          return PLAN[step]?.duration || 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current!)
  }, [step, paused])

  // Helper to convert YouTube URL to embed
  function getEmbedUrl(url: string) {
    if (!url) return ""
    if (url.includes("youtube.com/watch?v=")) {
      return url.replace("watch?v=", "embed/")
    }
    if (url.includes("youtu.be/")) {
      return url.replace("youtu.be/", "youtube.com/embed/")
    }
    return url
  }

   return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="max-w-lg w-full space-y-6">
        <h1 className="text-2xl font-bold">{PLAN[step].name}</h1>
        <div className="text-5xl font-mono">{timeLeft}s</div>
        <div>Set {Math.floor(step / 2) + 1} of 3</div>
        {/* Only render iframe after mounted and youtubeUrl is set */}
        {mounted && youtubeUrl && PLAN[step].name === "Plank" && (
          <iframe
            width="100%"
            height="315"
            src={getEmbedUrl(youtubeUrl)}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => setPaused(p => !p)}>
            {paused ? "Resume" : "Pause"}
          </Button>
          <Button variant="outline" onClick={() => setStep(s => Math.min(s + 1, PLAN.length - 1))}>
            Skip
          </Button>
        </div>
      </div>
    </div>
  )
}