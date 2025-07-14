"use client"

import { MainLayout } from "@/src/components/layout/main-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Progress } from "@/src/components/ui/progress"
import { TrendingUp, Calendar, Target, Brain, Clock } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Learning Analytics</h1>
            <p className="text-muted-foreground">Track your Korean learning progress</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">Export Data</Button>
            <Button>
              <TrendingUp className="mr-2 h-4 w-4" />
              View Insights
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium">Study Streak</span>
              </div>
              <div className="text-2xl font-bold">7 days</div>
              <p className="text-xs text-muted-foreground">+2 from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium">Study Time</span>
              </div>
              <div className="text-2xl font-bold">12.5h</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium">Words Learned</span>
              </div>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">Total vocabulary</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium">TOPIK Level</span>
              </div>
              <div className="text-2xl font-bold">Level 4</div>
              <p className="text-xs text-muted-foreground">68% progress</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-48 bg-muted/20 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <TrendingUp className="h-8 w-8 mx-auto text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Chart visualization would go here</p>
                    <p className="text-xs text-muted-foreground">Study time, test scores, vocabulary growth</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skill Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Listening</span>
                    <span>82%</span>
                  </div>
                  <Progress value={82} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Reading</span>
                    <span>74%</span>
                  </div>
                  <Progress value={74} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Speaking</span>
                    <span>68%</span>
                  </div>
                  <Progress value={68} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Writing</span>
                    <span>71%</span>
                  </div>
                  <Progress value={71} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Goal Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <h3 className="font-medium">TOPIK Level 4 in 6 Months</h3>
                  <p className="text-sm text-muted-foreground">Target: June 2024</p>
                </div>
                <div className="text-right space-y-1">
                  <div className="text-2xl font-bold">68%</div>
                  <Badge variant="secondary">On Track</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Weekly Study Goal (10 hours)</span>
                  <span>12.5h / 10h</span>
                </div>
                <Progress value={125} className="h-2" />

                <div className="flex justify-between text-sm">
                  <span>Monthly Vocabulary Goal (200 words)</span>
                  <span>156 / 200</span>
                </div>
                <Progress value={78} className="h-2" />

                <div className="flex justify-between text-sm">
                  <span>Practice Tests This Month (4 tests)</span>
                  <span>3 / 4</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">🏆</div>
                <div>
                  <p className="font-medium text-sm">7-Day Streak!</p>
                  <p className="text-xs text-muted-foreground">Completed daily study goals</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">📚</div>
                <div>
                  <p className="font-medium text-sm">Grammar Master</p>
                  <p className="text-xs text-muted-foreground">Completed intermediate grammar</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">🧠</div>
                <div>
                  <p className="font-medium text-sm">Vocabulary Milestone</p>
                  <p className="text-xs text-muted-foreground">Learned 1,000+ words</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Study Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm mb-1">Focus on Writing Practice</p>
                <p className="text-xs text-muted-foreground">
                  Your writing score is below your target. Try daily journal exercises.
                </p>
              </div>

              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm mb-1">Review Conditional Forms</p>
                <p className="text-xs text-muted-foreground">
                  You struggled with these in recent tests. Revisit grammar lessons.
                </p>
              </div>

              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm mb-1">Increase Listening Practice</p>
                <p className="text-xs text-muted-foreground">Watch more K-content to improve comprehension speed.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
