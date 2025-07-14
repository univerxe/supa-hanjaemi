"use client"

import type React from "react"
import Link from "next/link"

import { SidebarProvider } from "@/src/components/ui/sidebar"
import { AppSidebar } from "@/src/components/app-sidebar"
import { SidebarInset, SidebarTrigger } from "@/src/components/ui/sidebar"
import { ThemeToggle } from "@/src/components/theme-toggle"
import { Button } from "@/src/components/ui/button"
import { User } from "lucide-react"
import { useAuth } from "@/src/context/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu"
import { LogOut, Settings } from "lucide-react"

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { user, signOut } = useAuth()

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between border-b px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <div className="h-6 w-px bg-border" />
            <h1 className="text-lg font-semibold text-foreground">HanJaemi</h1>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{user?.user_metadata?.full_name || user?.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <Settings className="mr-2 h-4 w-4" />
                    Profile Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex-1 overflow-auto">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
