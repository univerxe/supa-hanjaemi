"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/src/lib/supabase/client"
import type { Database } from "./database.types"
import { useAuth } from "../context/auth-context"

type Profile = Database["public"]["Tables"]["profiles"]["Row"]
type StudySession = Database["public"]["Tables"]["study_sessions"]["Row"]
type Flashcard = Database["public"]["Tables"]["flashcards"]["Row"]
type MockTest = Database["public"]["Tables"]["mock_tests"]["Row"]
type DailyStreak = Database["public"]["Tables"]["daily_streaks"]["Row"]

export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()
  const supabase = createClient()

  useEffect(() => {
    if (!user) {
      setProfile(null)
      setLoading(false)
      return
    }

    const fetchProfile = async () => {
      try {
        const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).single()

        if (error && error.code !== "PGRST116") {
          console.error("Error fetching profile:", error)
        } else {
          setProfile(data)
        }
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [user, supabase])

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return

    try {
      const { error } = await supabase.from("profiles").update(updates).eq("id", user.id)

      if (error) {
        console.error("Error updating profile:", error)
        return false
      }

      setProfile((prev) => (prev ? { ...prev, ...updates } : null))
      return true
    } catch (error) {
      console.error("Error:", error)
      return false
    }
  }

  return { profile, loading, updateProfile }
}

export function useStudySessions() {
  const [sessions, setSessions] = useState<StudySession[]>([])
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()
  const supabase = createClient()

  useEffect(() => {
    if (!user) {
      setSessions([])
      setLoading(false)
      return
    }

    const fetchSessions = async () => {
      try {
        const { data, error } = await supabase
          .from("study_sessions")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false })
          .limit(10)

        if (error) {
          console.error("Error fetching sessions:", error)
        } else {
          setSessions(data || [])
        }
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchSessions()
  }, [user, supabase])

  const addSession = async (session: Omit<StudySession, "id" | "user_id" | "created_at">) => {
    if (!user) return

    try {
      const { data, error } = await supabase
        .from("study_sessions")
        .insert([{ ...session, user_id: user.id }])
        .select()
        .single()

      if (error) {
        console.error("Error adding session:", error)
        return false
      }

      setSessions((prev) => [data, ...prev.slice(0, 9)])
      return true
    } catch (error) {
      console.error("Error:", error)
      return false
    }
  }

  return { sessions, loading, addSession }
}

export function useFlashcards() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([])
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()
  const supabase = createClient()

  useEffect(() => {
    if (!user) {
      setFlashcards([])
      setLoading(false)
      return
    }

    const fetchFlashcards = async () => {
      try {
        const { data, error } = await supabase
          .from("flashcards")
          .select("*")
          .eq("user_id", user.id)
          .order("next_review", { ascending: true })

        if (error) {
          console.error("Error fetching flashcards:", error)
        } else {
          setFlashcards(data || [])
        }
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchFlashcards()
  }, [user, supabase])

  const addFlashcard = async (flashcard: Omit<Flashcard, "id" | "user_id" | "created_at" | "updated_at">) => {
    if (!user) return

    try {
      const { data, error } = await supabase
        .from("flashcards")
        .insert([{ ...flashcard, user_id: user.id }])
        .select()
        .single()

      if (error) {
        console.error("Error adding flashcard:", error)
        return false
      }

      setFlashcards((prev) => [...prev, data])
      return true
    } catch (error) {
      console.error("Error:", error)
      return false
    }
  }

  const updateFlashcard = async (id: string, updates: Partial<Flashcard>) => {
    if (!user) return

    try {
      const { error } = await supabase.from("flashcards").update(updates).eq("id", id).eq("user_id", user.id)

      if (error) {
        console.error("Error updating flashcard:", error)
        return false
      }

      setFlashcards((prev) => prev.map((card) => (card.id === id ? { ...card, ...updates } : card)))
      return true
    } catch (error) {
      console.error("Error:", error)
      return false
    }
  }

  return { flashcards, loading, addFlashcard, updateFlashcard }
}

export function useStreak() {
  const [streak, setStreak] = useState(0)
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()
  const supabase = createClient()

  useEffect(() => {
    if (!user) {
      setStreak(0)
      setLoading(false)
      return
    }

    const fetchStreak = async () => {
      try {
        const { data, error } = await supabase.rpc("get_user_streak", {
          user_uuid: user.id,
        })

        if (error) {
          console.error("Error fetching streak:", error)
        } else {
          setStreak(data || 0)
        }
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStreak()
  }, [user, supabase])

  const updateStreak = async (studyMinutes = 0) => {
    if (!user) return

    try {
      const { error } = await supabase.rpc("update_daily_streak", {
        user_uuid: user.id,
        study_minutes: studyMinutes,
      })

      if (error) {
        console.error("Error updating streak:", error)
        return false
      }

      // Refresh streak count
      const { data } = await supabase.rpc("get_user_streak", {
        user_uuid: user.id,
      })
      setStreak(data || 0)
      return true
    } catch (error) {
      console.error("Error:", error)
      return false
    }
  }

  return { streak, loading, updateStreak }
}
