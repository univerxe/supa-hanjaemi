export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          email: string | null
          current_level: string | null
          target_level: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          email?: string | null
          current_level?: string | null
          target_level?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          email?: string | null
          current_level?: string | null
          target_level?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      learning_progress: {
        Row: {
          id: string
          user_id: string
          lesson_id: string
          lesson_type: string
          status: string
          score: number | null
          time_spent: number
          completed_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          lesson_id: string
          lesson_type: string
          status?: string
          score?: number | null
          time_spent?: number
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          lesson_id?: string
          lesson_type?: string
          status?: string
          score?: number | null
          time_spent?: number
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      study_sessions: {
        Row: {
          id: string
          user_id: string
          session_type: string
          duration: number
          topics_covered: string[]
          score: number | null
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          session_type: string
          duration: number
          topics_covered: string[]
          score?: number | null
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          session_type?: string
          duration?: number
          topics_covered?: string[]
          score?: number | null
          notes?: string | null
          created_at?: string
        }
      }
      flashcards: {
        Row: {
          id: string
          user_id: string
          korean_text: string
          english_text: string
          difficulty: string
          category: string | null
          next_review: string
          review_count: number
          ease_factor: number
          interval_days: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          korean_text: string
          english_text: string
          difficulty?: string
          category?: string | null
          next_review?: string
          review_count?: number
          ease_factor?: number
          interval_days?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          korean_text?: string
          english_text?: string
          difficulty?: string
          category?: string | null
          next_review?: string
          review_count?: number
          ease_factor?: number
          interval_days?: number
          created_at?: string
          updated_at?: string
        }
      }
      flashcard_reviews: {
        Row: {
          id: string
          user_id: string
          flashcard_id: string
          quality: number
          response_time: number | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          flashcard_id: string
          quality: number
          response_time?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          flashcard_id?: string
          quality?: number
          response_time?: number | null
          created_at?: string
        }
      }
      mock_tests: {
        Row: {
          id: string
          user_id: string
          test_type: string
          total_questions: number
          correct_answers: number
          score: number
          time_taken: number | null
          answers: Json | null
          detailed_results: Json | null
          completed_at: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          test_type: string
          total_questions: number
          correct_answers: number
          score: number
          time_taken?: number | null
          answers?: Json | null
          detailed_results?: Json | null
          completed_at?: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          test_type?: string
          total_questions?: number
          correct_answers?: number
          score?: number
          time_taken?: number | null
          answers?: Json | null
          detailed_results?: Json | null
          completed_at?: string
          created_at?: string
        }
      }
      daily_streaks: {
        Row: {
          id: string
          user_id: string
          streak_date: string
          activities_completed: number
          study_time: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          streak_date: string
          activities_completed?: number
          study_time?: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          streak_date?: string
          activities_completed?: number
          study_time?: number
          created_at?: string
        }
      }
      user_goals: {
        Row: {
          id: string
          user_id: string
          goal_type: string
          target_value: string
          current_value: string
          target_date: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          goal_type: string
          target_value: string
          current_value?: string
          target_date?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          goal_type?: string
          target_value?: string
          current_value?: string
          target_date?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      vocabulary_words: {
        Row: {
          id: string
          user_id: string
          korean_word: string
          english_translation: string
          pronunciation: string | null
          part_of_speech: string | null
          difficulty_level: string | null
          example_sentence: string | null
          learned_at: string
          mastery_level: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          korean_word: string
          english_translation: string
          pronunciation?: string | null
          part_of_speech?: string | null
          difficulty_level?: string | null
          example_sentence?: string | null
          learned_at?: string
          mastery_level?: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          korean_word?: string
          english_translation?: string
          pronunciation?: string | null
          part_of_speech?: string | null
          difficulty_level?: string | null
          example_sentence?: string | null
          learned_at?: string
          mastery_level?: number
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_streak: {
        Args: {
          user_uuid: string
        }
        Returns: number
      }
      update_daily_streak: {
        Args: {
          user_uuid: string
          study_minutes?: number
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
