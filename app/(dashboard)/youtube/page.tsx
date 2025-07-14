"use client"

import { MainLayout } from "@/src/components/layout/main-layout"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Input } from "@/src/components/ui/input"
import { Play, Search, Clock, TrendingUp } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "Korean Drama Phrases - Crash Landing on You",
    thumbnail: "/placeholder.svg?height=120&width=200",
    duration: "15:32",
    level: "Intermediate",
    category: "K-Drama",
  },
  {
    id: 2,
    title: "BTS Interview - Advanced Korean Expressions",
    thumbnail: "/placeholder.svg?height=120&width=200",
    duration: "22:18",
    level: "Advanced",
    category: "K-Pop",
  },
  {
    id: 3,
    title: "Korean Street Food Vocabulary",
    thumbnail: "/placeholder.svg?height=120&width=200",
    duration: "12:45",
    level: "Beginner",
    category: "Culture",
  },
  {
    id: 4,
    title: "Business Korean - Job Interview Tips",
    thumbnail: "/placeholder.svg?height=120&width=200",
    duration: "18:20",
    level: "Advanced",
    category: "Business",
  },
]

export default function YouTubePage() {
  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">K-Content Learning Hub</h1>
              <p className="text-muted-foreground">Learn Korean through authentic content</p>
            </div>
            <Button>
              <TrendingUp className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search for K-dramas, K-pop, or topics..." className="pl-10" />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">127</div>
              <p className="text-sm text-muted-foreground">Videos Watched</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">45h</div>
              <p className="text-sm text-muted-foreground">Watch Time</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">89%</div>
              <p className="text-sm text-muted-foreground">Comprehension</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">234</div>
              <p className="text-sm text-muted-foreground">New Words</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recommended for You</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos.map((video) => (
              <Card key={video.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20 rounded-t-lg">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-sm mb-2 line-clamp-2">{video.title}</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {video.level}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {video.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Continue Watching</h2>
          <div className="grid gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <img
                    src="/placeholder.svg?height=80&width=120"
                    alt="Video thumbnail"
                    className="w-30 h-20 object-cover rounded"
                  />
                  <div className="flex-1 space-y-2">
                    <h3 className="font-medium">Korean Grammar Explained - Episode 5</h3>
                    <p className="text-sm text-muted-foreground">Advanced conditional forms and their usage</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Advanced</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>8:32 remaining</span>
                      </div>
                    </div>
                  </div>
                  <Button>Continue</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
