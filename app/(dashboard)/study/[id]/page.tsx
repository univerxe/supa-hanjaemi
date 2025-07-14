"use client"

import { useState } from "react"
import { MainLayout } from "@/src/components/layout/main-layout"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Textarea } from "@/src/components/ui/textarea"
import { BookOpen, PenTool, ChevronLeft, ChevronRight } from "lucide-react"

export default function StudySessionPage() {
  const [mode, setMode] = useState<"read" | "note">("read")
  const [notes, setNotes] = useState("")

  return (
    <MainLayout>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">Conditional Forms (으면/면)</h1>
            <div className="flex items-center gap-2">
              <Badge>Grammar</Badge>
              <Badge variant="outline">Intermediate</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant={mode === "read" ? "default" : "outline"} size="sm" onClick={() => setMode("read")}>
              <BookOpen className="mr-2 h-4 w-4" />
              Read Mode
            </Button>
            <Button variant={mode === "note" ? "default" : "outline"} size="sm" onClick={() => setMode("note")}>
              <PenTool className="mr-2 h-4 w-4" />
              Note Mode
            </Button>
          </div>
        </div>

        {mode === "read" ? (
          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Understanding Conditional Forms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The conditional form (으)면 is used to express "if" conditions in Korean. It's attached to verb stems
                  to create conditional statements.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Formation Rules</h3>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <p>
                    <strong>Verb stem ending in consonant:</strong> + 으면
                  </p>
                  <p>
                    <strong>Verb stem ending in vowel:</strong> + 면
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Examples</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-medium">비가 오면 집에 있을 거예요.</p>
                    <p className="text-sm text-muted-foreground">If it rains, I will stay home.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-medium">시간이 있으면 영화를 봅시다.</p>
                    <p className="text-sm text-muted-foreground">If we have time, let's watch a movie.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                <h4 className="font-medium mb-2">💡 K-Drama Example</h4>
                <p className="text-sm">
                  In "Crash Landing on You", Yoon Se-ri says: "당신이 없으면 안 돼요" (I can't do without you) - a
                  perfect example of conditional form expressing necessity.
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Your Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Write your notes, thoughts, or practice sentences here..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="min-h-[400px] resize-none"
              />
              <div className="mt-4 flex justify-end">
                <Button>Save Notes</Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex justify-between">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous Lesson
          </Button>
          <Button>
            Next Lesson
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </MainLayout>
  )
}
