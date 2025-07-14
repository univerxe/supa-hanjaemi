"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/src/context/auth-context"
import { NoSidebarLayout } from "@/src/components/layout/no-sidebar-layout"

export default function LogoutPage() {
  const { signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const handleLogout = async () => {
      await signOut()
      router.push("/")
    }

    handleLogout()
  }, [signOut, router])

  return (
    <NoSidebarLayout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Signing you out...</p>
        </div>
      </div>
    </NoSidebarLayout>
  )
}
