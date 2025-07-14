import type React from "react"
import type { Metadata } from "next"
import { Lexend } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/src/components/theme-provider"
import { AuthProvider } from "@/src/context/auth-context"

const lexend = Lexend({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HanJaemi - Master Korean & TOPIK",
  description: "AI-powered Korean learning platform with TOPIK exam preparation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lexend.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
