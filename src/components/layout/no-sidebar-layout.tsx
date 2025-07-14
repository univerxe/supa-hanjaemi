import type React from "react"
import { ThemeToggle } from "@/src/components/theme-toggle"

export function NoSidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </header>
      <main className="min-h-screen">{children}</main>
    </div>
  )
}
