"use client"

import type React from "react"

import { useState } from "react"
import { MainLayout } from "@/src/components/layout/main-layout"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Alert, AlertDescription } from "@/src/components/ui/alert"
import { useProfile } from "@/src/lib/supabase-hooks"
import { Loader2, User, Target, Calendar } from "lucide-react"

export default function ProfilePage() {
  const { profile, loading, updateProfile } = useProfile()
  const [formData, setFormData] = useState({
    full_name: "",
    current_level: "",
    target_level: "",
  })
  const [updating, setUpdating] = useState(false)
  const [message, setMessage] = useState("")

  // Initialize form data when profile loads
  useState(() => {
    if (profile) {
      setFormData({
        full_name: profile.full_name || "",
        current_level: profile.current_level || "",
        target_level: profile.target_level || "",
      })
    }
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUpdating(true)
    setMessage("")

    const success = await updateProfile(formData)

    if (success) {
      setMessage("Profile updated successfully!")
    } else {
      setMessage("Failed to update profile. Please try again.")
    }

    setUpdating(false)
    setTimeout(() => setMessage(""), 3000)
  }

  if (loading) {
    return (
      <MainLayout>
        <div className="p-6 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="p-6 max-w-2xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Profile Settings</h1>
          <p className="text-muted-foreground">Manage your learning preferences and goals</p>
        </div>

        {message && (
          <Alert>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
              <CardDescription>Update your basic profile information</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="full_name">Full Name</Label>
                  <Input
                    id="full_name"
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Current Level</Label>
                    <Select
                      value={formData.current_level}
                      onValueChange={(value) => setFormData({ ...formData, current_level: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select current level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="topik1">TOPIK 1</SelectItem>
                        <SelectItem value="topik2">TOPIK 2</SelectItem>
                        <SelectItem value="topik3">TOPIK 3</SelectItem>
                        <SelectItem value="topik4">TOPIK 4</SelectItem>
                        <SelectItem value="topik5">TOPIK 5</SelectItem>
                        <SelectItem value="topik6">TOPIK 6</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Target Level</Label>
                    <Select
                      value={formData.target_level}
                      onValueChange={(value) => setFormData({ ...formData, target_level: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select target level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="topik1">TOPIK 1</SelectItem>
                        <SelectItem value="topik2">TOPIK 2</SelectItem>
                        <SelectItem value="topik3">TOPIK 3</SelectItem>
                        <SelectItem value="topik4">TOPIK 4</SelectItem>
                        <SelectItem value="topik5">TOPIK 5</SelectItem>
                        <SelectItem value="topik6">TOPIK 6</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" disabled={updating}>
                  {updating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Update Profile
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Learning Goals
              </CardTitle>
              <CardDescription>Set and track your Korean learning objectives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Daily Study Goal</p>
                    <p className="text-sm text-muted-foreground">Study for 30 minutes daily</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Weekly Vocabulary Goal</p>
                    <p className="text-sm text-muted-foreground">Learn 50 new words per week</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">TOPIK Test Date</p>
                    <p className="text-sm text-muted-foreground">Target: June 2024</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Account Information
              </CardTitle>
              <CardDescription>Your account details and statistics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                <div className="flex justify-between">
                  <span className="text-sm">Email</span>
                  <span className="text-sm text-muted-foreground">{profile?.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Member since</span>
                  <span className="text-sm text-muted-foreground">
                    {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : "N/A"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Current Level</span>
                  <span className="text-sm text-muted-foreground">
                    {profile?.current_level?.toUpperCase() || "Not set"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Target Level</span>
                  <span className="text-sm text-muted-foreground">
                    {profile?.target_level?.toUpperCase() || "Not set"}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
