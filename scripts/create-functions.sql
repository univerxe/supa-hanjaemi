-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, current_level, target_level)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.email,
    NEW.raw_user_meta_data->>'current_level',
    NEW.raw_user_meta_data->>'target_level'
  );
  
  -- Create default goals for new user
  INSERT INTO public.user_goals (user_id, goal_type, target_value, target_date)
  VALUES 
    (NEW.id, 'daily_study', '30', CURRENT_DATE + INTERVAL '1 year'),
    (NEW.id, 'weekly_study', '300', CURRENT_DATE + INTERVAL '1 year'),
    (NEW.id, 'streak', '7', CURRENT_DATE + INTERVAL '1 month');
    
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at triggers
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_learning_progress_updated_at BEFORE UPDATE ON public.learning_progress
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_flashcards_updated_at BEFORE UPDATE ON public.flashcards
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_user_goals_updated_at BEFORE UPDATE ON public.user_goals
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Function to get user's current streak
CREATE OR REPLACE FUNCTION public.get_user_streak(user_uuid UUID)
RETURNS INTEGER AS $$
DECLARE
  current_streak INTEGER := 0;
  check_date DATE := CURRENT_DATE;
BEGIN
  -- Check if user studied today or yesterday to start counting
  IF NOT EXISTS (
    SELECT 1 FROM public.daily_streaks 
    WHERE user_id = user_uuid 
    AND streak_date IN (CURRENT_DATE, CURRENT_DATE - INTERVAL '1 day')
  ) THEN
    RETURN 0;
  END IF;
  
  -- Count consecutive days backwards from today
  LOOP
    IF EXISTS (
      SELECT 1 FROM public.daily_streaks 
      WHERE user_id = user_uuid 
      AND streak_date = check_date
    ) THEN
      current_streak := current_streak + 1;
      check_date := check_date - INTERVAL '1 day';
    ELSE
      EXIT;
    END IF;
  END LOOP;
  
  RETURN current_streak;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to update daily streak
CREATE OR REPLACE FUNCTION public.update_daily_streak(user_uuid UUID, study_minutes INTEGER DEFAULT 0)
RETURNS VOID AS $$
BEGIN
  INSERT INTO public.daily_streaks (user_id, streak_date, activities_completed, study_time)
  VALUES (user_uuid, CURRENT_DATE, 1, study_minutes * 60)
  ON CONFLICT (user_id, streak_date)
  DO UPDATE SET
    activities_completed = daily_streaks.activities_completed + 1,
    study_time = daily_streaks.study_time + (study_minutes * 60);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
