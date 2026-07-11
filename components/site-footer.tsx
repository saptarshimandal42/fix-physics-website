import { Atom } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6">
        <a href="#home" className="flex items-center gap-2">
        {/* এখানে আপনার নতুন লোগোর ছবি বসানো হলো */}
        <img src="/logo.png" alt="Fix Physics Logo" className="h-8 w-auto" />
  
        <span className="font-serif text-lg font-semibold text-foreground">
        Fix Physics
        </span>
        </a>

        <p className="text-center text-sm text-muted-foreground">
          Copyright © 2026. All Rights reserved to Fix Physics.
        </p>
      </div>
    </footer>
  )
}
