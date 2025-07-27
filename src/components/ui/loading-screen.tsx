import { Loader2 } from "lucide-react"

export function LoadingScreen({ message = "Generating your AI-powered plan..." }: { message?: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <Loader2 className="animate-spin text-primary mb-6" size={48} />
      <p className="text-lg font-semibold text-muted-foreground">{message}</p>
    </div>
  )
}