"use client"

import { useState } from "react"
import { MainLayout } from "@/src/components/layout/main-layout"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Progress } from "@/src/components/ui/progress"
import { RotateCcw, Check, X, Brain } from "lucide-react"

const flashcards = [
  {
    id: 1,
    korean: "안녕하세요",
    english: "Hello (formal)",
    difficulty: "Beginner",
    nextReview: "Today",
  },
  {
    id: 2,
    korean: "감사합니다",
    english: "Thank you",
    difficulty: "Beginner",
    nextReview: "Tomorrow",
  },
  {
    id: 3,
    korean: "죄송합니다",
    english: "I'm sorry (formal)",
    difficulty: "Intermediate",
    nextReview: "In 3 days",
  },
]

export default function FlashcardsPage() {
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [reviewedCards, setReviewedCards] = useState(0)

  const handleAnswer = (difficulty: "easy" | "medium" | "hard") => {
    setReviewedCards((prev) => prev + 1)
    setIsFlipped(false)

    if (currentCard < flashcards.length - 1) {
      setCurrentCard((prev) => prev + 1)
    } else {
      // Reset or show completion
      setCurrentCard(0)
    }
  }

  const card = flashcards[currentCard]

  return (
    <MainLayout>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Flashcard Review</h1>
            <p className="text-muted-foreground">Spaced Repetition System</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm">
              <span className="font-medium">{reviewedCards}</span> / {flashcards.length} reviewed
            </div>
            <Progress value={(reviewedCards / flashcards.length) * 100} className="w-32" />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <Card
              className={`cursor-pointer transition-transform duration-500 ${isFlipped ? "rotate-y-180" : ""}`}
              onClick={() => setIsFlipped(!isFlipped)}
              style={{ transformStyle: "preserve-3d", minHeight: "300px" }}
            >
              <CardContent className="flex flex-col items-center justify-center h-full p-8 space-y-4">
                {!isFlipped ? (
                  <>
                    <Badge variant="outline">{card.difficulty}</Badge>
                    <div className="text-center space-y-4">
                      <div className="text-3xl font-bold">{card.korean}</div>
                      <p className="text-muted-foreground">Click to reveal answer</p>
                    </div>
                  </>
                ) : (
                  <>
                    <Badge variant="outline">{card.difficulty}</Badge>
                    <div className="text-center space-y-4">
                      <div className="text-2xl text-muted-foreground">{card.korean}</div>
                      <div className="text-2xl font-bold">{card.english}</div>
                      <p className="text-sm text-muted-foreground">Next review: {card.nextReview}</p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {isFlipped && (
          <div className="flex justify-center gap-4">
            <Button variant="destructive" onClick={() => handleAnswer("hard")} className="flex items-center gap-2">
              <X className="h-4 w-4" />
              Hard
            </Button>
            <Button variant="outline" onClick={() => handleAnswer("medium")} className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4" />
              Medium
            </Button>
            <Button onClick={() => handleAnswer("easy")} className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              Easy
            </Button>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="h-5 w-5" />
                <h3 className="font-semibold">Today's Stats</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Cards reviewed</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex justify-between">
                  <span>New cards</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span>Accuracy</span>
                  <span className="font-medium">87%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Upcoming Reviews</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Due today</span>
                  <Badge>12</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Due tomorrow</span>
                  <Badge variant="outline">8</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Due this week</span>
                  <Badge variant="outline">23</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
