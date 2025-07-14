"use client"

import { useState, useEffect } from "react"
import { MainLayout } from "@/src/components/layout/main-layout"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Progress } from "@/src/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group"
import { Label } from "@/src/components/ui/label"
import { Clock, Flag, CheckCircle } from "lucide-react"

export default function MockTestPage() {
  const [timeLeft, setTimeLeft] = useState(3600) // 60 minutes
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [markedForReview, setMarkedForReview] = useState<number[]>([])
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const toggleMarkForReview = () => {
    setMarkedForReview((prev) =>
      prev.includes(currentQuestion) ? prev.filter((q) => q !== currentQuestion) : [...prev, currentQuestion],
    )
  }

  const submitTest = () => {
    setShowResults(true)
  }

  if (showResults) {
    return (
      <MainLayout>
        <div className="p-6 max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                Test Completed!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">78%</div>
                  <p className="text-sm text-muted-foreground">Overall Score</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">156/200</div>
                  <p className="text-sm text-muted-foreground">Points Earned</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">Level 4</div>
                  <p className="text-sm text-muted-foreground">Estimated Level</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Section Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Listening</span>
                    <div className="flex items-center gap-2">
                      <Progress value={82} className="w-24" />
                      <span className="text-sm">82%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Reading</span>
                    <div className="flex items-center gap-2">
                      <Progress value={74} className="w-24" />
                      <span className="text-sm">74%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                <h4 className="font-medium mb-2">🎯 AI Recommendations</h4>
                <ul className="text-sm space-y-1">
                  <li>• Focus on advanced grammar patterns (conditional forms)</li>
                  <li>• Practice reading comprehension with longer texts</li>
                  <li>• Review vocabulary related to social issues</li>
                </ul>
              </div>

              <div className="flex gap-4">
                <Button>Review Answers</Button>
                <Button variant="outline">Take Another Test</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">TOPIK Mock Test</h1>
            <p className="text-muted-foreground">Reading Section</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
            </div>
            <Button onClick={submitTest} variant="destructive">
              Submit Test
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Question {currentQuestion} of 50</CardTitle>
                  <Button
                    variant={markedForReview.includes(currentQuestion) ? "default" : "outline"}
                    size="sm"
                    onClick={toggleMarkForReview}
                  >
                    <Flag className="mr-2 h-4 w-4" />
                    {markedForReview.includes(currentQuestion) ? "Marked" : "Mark for Review"}
                  </Button>
                </div>
                <Progress value={(currentQuestion / 50) * 100} />
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Read the following passage:</p>
                  <p className="leading-relaxed">
                    한국의 전통 음식인 김치는 세계적으로 유명한 발효 식품입니다. 김치는 배추, 무, 오이 등의 채소를
                    소금에 절인 후 고춧가루, 마늘, 생강 등의 양념을 넣어 만듭니다. 김치는 유산균이 풍부하여 건강에 매우
                    좋으며, 한국인의 식탁에서 빠질 수 없는 음식입니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="font-medium">다음 중 김치에 대한 설명으로 옳은 것은?</p>
                  <RadioGroup
                    value={answers[currentQuestion]}
                    onValueChange={(value) => setAnswers({ ...answers, [currentQuestion]: value })}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="option1" />
                      <Label htmlFor="option1">김치는 한국의 현대 음식이다.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2" id="option2" />
                      <Label htmlFor="option2">김치는 발효 식품이 아니다.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3" id="option3" />
                      <Label htmlFor="option3">김치는 유산균이 풍부하다.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="4" id="option4" />
                      <Label htmlFor="option4">김치는 한국인이 잘 먹지 않는다.</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentQuestion(Math.max(1, currentQuestion - 1))}
                    disabled={currentQuestion === 1}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => setCurrentQuestion(Math.min(50, currentQuestion + 1))}
                    disabled={currentQuestion === 50}
                  >
                    Next
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Question Navigator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-2">
                  {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => (
                    <Button
                      key={num}
                      variant={num === currentQuestion ? "default" : answers[num] ? "secondary" : "outline"}
                      size="sm"
                      className="h-8 w-8 p-0 relative"
                      onClick={() => setCurrentQuestion(num)}
                    >
                      {num}
                      {markedForReview.includes(num) && (
                        <Flag className="absolute -top-1 -right-1 h-3 w-3 text-orange-500" />
                      )}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Answered</span>
                  <span>{Object.keys(answers).length}/50</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Marked for Review</span>
                  <span>{markedForReview.length}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
