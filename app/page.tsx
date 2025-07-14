"use client"
import { MainLayout } from "@/src/components/layout/main-layout"
import { NoSidebarLayout } from "@/src/components/layout/no-sidebar-layout"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Progress } from "@/src/components/ui/progress"
import { Badge } from "@/src/components/ui/badge"
import { Play, BookOpen, Target, TrendingUp, Calendar, Star } from "lucide-react"
import { useAuth } from "@/src/context/auth-context"
import { useProfile, useStreak, useStudySessions } from "@/src/lib/supabase-hooks"
import Link from "next/link"

export default function HomePage() {
  const { user, loading: authLoading } = useAuth()
  const { profile, loading: profileLoading } = useProfile()
  const { streak, loading: streakLoading } = useStreak()
  const { sessions, loading: sessionsLoading } = useStudySessions()

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    // Show landing page for non-authenticated users
    return (
      <NoSidebarLayout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Master Korean with
                  <span className="block text-primary">HanJaemi</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  AI-powered learning platform designed to help you achieve TOPIK success through structured lessons,
                  real K-content, and personalized feedback.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/register">Start Learning Free</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <Card className="border-muted">
                  <CardHeader>
                    <Target className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>TOPIK Focused</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Structured curriculum aligned with TOPIK levels 1-6</p>
                  </CardContent>
                </Card>

                <Card className="border-muted">
                  <CardHeader>
                    <BookOpen className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>K-Content Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Learn through K-dramas, music, and authentic content</p>
                  </CardContent>
                </Card>

                <Card className="border-muted">
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>AI-Powered Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Get personalized corrections and learning insights</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </NoSidebarLayout>
    )
  }

  // Show dashboard for authenticated users
  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Welcome back{user?.user_metadata?.full_name ? `, ${user?.user_metadata?.full_name}` : ""}! 👋</h1>
          <p className="text-muted-foreground">Continue your Korean learning journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Daily Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{streakLoading ? "..." : `${streak} days`}</div>
              <p className="text-sm text-muted-foreground mt-1">Keep it up! 🔥</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                TOPIK Goal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">
                    {profile?.target_level ? `${profile.target_level.toUpperCase()} Progress` : "Set your goal"}
                  </span>
                  <span className="text-sm">68%</span>
                </div>
                <Progress value={68} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156 words</div>
              <p className="text-sm text-muted-foreground">learned</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Week 4: Grammar + Vocabulary</CardTitle>
            <CardDescription>Focus on intermediate grammar patterns and essential vocabulary</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Past Tense Patterns</span>
                  <Badge variant="secondary">Completed</Badge>
                </div>
                <Button variant="ghost" size="sm">
                  Review
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Conditional Forms</span>
                  <Badge>In Progress</Badge>
                </div>
                <Button size="sm" asChild>
                  <Link href="/study/conditional-forms">Continue</Link>
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                  <span>Advanced Vocabulary Set 1</span>
                  <Badge variant="outline">Pending</Badge>
                </div>
                <Button variant="outline" size="sm">
                  Start
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-transparent" variant="outline" asChild>
                <Link href="/study/grammar-basics">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Continue Study Session
                </Link>
              </Button>
              <Button className="w-full justify-start bg-transparent" variant="outline" asChild>
                <Link href="/mock-test">
                  <Target className="mr-2 h-4 w-4" />
                  Take Mock Test
                </Link>
              </Button>
              <Button className="w-full justify-start bg-transparent" variant="outline" asChild>
                <Link href="/youtube">
                  <Play className="mr-2 h-4 w-4" />
                  Watch K-Content
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {sessionsLoading ? (
                <div className="text-sm text-muted-foreground">Loading...</div>
              ) : sessions.length > 0 ? (
                <div className="text-sm space-y-2">
                  {sessions.slice(0, 3).map((session) => (
                    <div key={session.id} className="flex justify-between">
                      <span>{session.session_type.replace("_", " ").toUpperCase()}</span>
                      <span className="text-muted-foreground">{new Date(session.created_at).toLocaleDateString()}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-muted-foreground">No recent activity</div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
