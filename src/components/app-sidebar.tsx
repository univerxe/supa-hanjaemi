"use client"

import {
  BookOpen,
  Brain,
  Calendar,
  Home,
  MessageSquare,
  PenTool,
  Target,
  TrendingUp,
  Volume2,
  Youtube,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/src/components/ui/sidebar"
import { Progress } from "@/src/components/ui/progress"
import { useProfile, useStreak } from "@/src/lib/supabase-hooks"

const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Study Session",
    url: "/study/grammar-basics",
    icon: BookOpen,
  },
  {
    title: "K-Content Hub",
    url: "/youtube",
    icon: Youtube,
  },
  {
    title: "Progress Journal",
    url: "/journal",
    icon: PenTool,
  },
]

const topikPractice = [
  {
    title: "Listening",
    url: "/topic/listening",
    icon: Volume2,
  },
  {
    title: "Reading",
    url: "/topic/reading",
    icon: BookOpen,
  },
  {
    title: "Speaking",
    url: "/topic/speaking",
    icon: MessageSquare,
  },
  {
    title: "Writing",
    url: "/topic/writing",
    icon: PenTool,
  },
]

const aiFeatures = [
  {
    title: "Mock Test",
    url: "/mock-test",
    icon: Target,
  },
  {
    title: "Flashcards",
    url: "/flashcards",
    icon: Brain,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: TrendingUp,
  },
]

export function AppSidebar() {
  const { profile } = useProfile()
  const { streak } = useStreak()

  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <div className="px-2 py-2">
          <h2 className="text-lg font-semibold">HanJaemi</h2>
          <p className="text-sm text-muted-foreground">
            {profile?.target_level ? `${profile.target_level.toUpperCase()} Goal` : "Set your goal"}
          </p>
          <div className="mt-2 space-y-1">
            <div className="flex justify-between text-xs">
              <span>Progress</span>
              <span>68%</span>
            </div>
            <Progress value={68} className="h-2" />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>TOPIK Practice</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {topikPractice.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>AI Features</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {aiFeatures.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="px-2 py-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4" />
            <span>{streak}-day streak! 🔥</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
