-- Insert sample flashcards for new users
INSERT INTO public.flashcards (user_id, korean_text, english_text, difficulty, category) VALUES
-- These will be inserted via the application when users sign up
-- Adding some common Korean words that can be used as defaults

-- Sample vocabulary for beginners
('00000000-0000-0000-0000-000000000000', '안녕하세요', 'Hello (formal)', 'beginner', 'greetings'),
('00000000-0000-0000-0000-000000000000', '감사합니다', 'Thank you', 'beginner', 'greetings'),
('00000000-0000-0000-0000-000000000000', '죄송합니다', 'I''m sorry', 'beginner', 'greetings'),
('00000000-0000-0000-0000-000000000000', '네', 'Yes', 'beginner', 'basic'),
('00000000-0000-0000-0000-000000000000', '아니요', 'No', 'beginner', 'basic'),
('00000000-0000-0000-0000-000000000000', '물', 'Water', 'beginner', 'food'),
('00000000-0000-0000-0000-000000000000', '밥', 'Rice/Food', 'beginner', 'food'),
('00000000-0000-0000-0000-000000000000', '학교', 'School', 'beginner', 'places'),
('00000000-0000-0000-0000-000000000000', '집', 'House/Home', 'beginner', 'places'),
('00000000-0000-0000-0000-000000000000', '친구', 'Friend', 'beginner', 'people');

-- Note: The user_id above is a placeholder. In the actual application,
-- we'll create default flashcards for each new user when they sign up.
