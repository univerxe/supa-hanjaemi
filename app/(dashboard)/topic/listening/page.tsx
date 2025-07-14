"use client"

import { useState } from "react"
import { MainLayout } from "@/src/components/layout/main-layout"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Progress } from "@/src/components/ui/progress"
import { Badge } from "@/src/components/ui/badge"
import { Volume2, Play, Pause, RotateCcw } from "lucide-react"

export default function ListeningPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration] = useState(120) // 2 minutes

  return (
    <MainLayout>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">TOPIK Listening Practice</h1>
          <p className="text-muted-foreground">Improve your listening comprehension skills</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">Level 4</div>
              <p className="text-sm text-muted-foreground">Current Level</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">78%</div>
              <p className="text-sm text-muted-foreground">Accuracy</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">24</div>
              <p className="text-sm text-muted-foreground">Completed</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5" />
                Listening Exercise 1
              </CardTitle>
              <Badge>Intermediate</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/50 p-6 rounded-lg text-center space-y-4">
              <div className="text-lg font-medium">Audio Player</div>
              <div className="flex items-center justify-center gap-4">
                <Button variant="outline" size="icon" onClick={() => setCurrentTime(0)}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button size="icon" onClick={() => setIsPlaying(!isPlaying)} className="h-12 w-12">
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>
              </div>
              <div className="space-y-2">
                <Progress value={(currentTime / duration) * 100} />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>
                    {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, "0")}
                  </span>
                  <span>
                    {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Question</h3>
              <p>다음 대화를 듣고 남자가 여자에게 제안하는 것은 무엇입니까?</p>

              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  ① 영화를 보러 가자
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  ② 식당에서 식사하자
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  ③ 공원에서 산책하자
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  ④ 집에서 쉬자
                </Button>
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline">Previous</Button>
              <Button>Next Question</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Practice Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-2">
                <p>• Listen for key words and context clues</p>
                <p>• Pay attention to tone and intonation</p>
                <p>• Don't worry if you don't understand every word</p>
                <p>• Practice active listening daily</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Beginner Level</span>
                  <span>100%</span>
                </div>
                <Progress value={100} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Intermediate Level</span>
                  <span>78%</span>
                </div>
                <Progress value={78} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Advanced Level</span>
                  <span>23%</span>
                </div>
                <Progress value={23} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
