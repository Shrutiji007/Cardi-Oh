'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

function isValidYouTubeUrl(url: string) {
  return /^https:\/\/(www\.)?youtube\.com\/watch\?v=/.test(url) || /^https:\/\/youtu\.be\//.test(url)
}

export default function PasteYouTube() {
  const [url, setUrl] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleNext = () => {
    if (!isValidYouTubeUrl(url)) {
      setError("Please enter a valid YouTube URL")
      return
    }
    // Save URL to localStorage or context if needed
    localStorage.setItem("workout_youtube_url", url)
    router.push("/workout/session")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="max-w-lg w-full space-y-6">
        <h1 className="text-2xl font-bold">Paste YouTube Link</h1>
        <Input
          placeholder="https://youtube.com/watch?v=..."
          value={url}
          onChange={e => { setUrl(e.target.value); setError("") }}
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  )
}