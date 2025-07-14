# HanJaemi - Korean Learning Platform

AI-powered Korean learning platform with TOPIK exam preparation, K-content integration, and KakaoTalk authentication.

## Features

- 🎯 TOPIK-focused curriculum (Levels 1-6)
- 🎬 K-content learning (K-dramas, K-pop)
- 🤖 AI-powered feedback and recommendations
- 📱 Mobile-responsive design
- 🔐 Multiple authentication options (Google, KakaoTalk)
- 📊 Progress tracking and analytics

## Authentication Setup

### KakaoTalk OAuth Configuration

1. **Create KakaoTalk Developer Account**
   - Visit [Kakao Developers](https://developers.kakao.com/)
   - Create a new application
   - Note your `Client ID` and `Client Secret`

2. **Configure Supabase**
   - Go to your Supabase dashboard
   - Navigate to Authentication > Providers
   - Enable KakaoTalk provider
   - Add your Kakao Client ID and Client Secret
   - Set redirect URL: `https://your-project.supabase.co/auth/v1/callback`

3. **Environment Variables**
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd supa-hanjaemi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.local.example` to `.env.local`
   - Fill in your Supabase and OAuth credentials

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Set up database**
   - Run the SQL scripts in the `scripts/` folder in your Supabase SQL editor

## Project Structure

```
app/
├── (auth)/
│   ├── login/
│   └── register/
├── study/
├── mock-test/
├── flashcards/
├── youtube/
├── analytics/
└── profile/

components/
├── ui/           # Reusable UI components
├── layout/       # Layout components
└── theme/        # Theme-related components

lib/
├── auth-context.tsx      # Authentication context
├── supabase-hooks.ts     # Custom Supabase hooks
├── database.types.ts     # Database type definitions
└── utils.ts             # Utility functions

utils/supabase/
├── client.ts    # Client-side Supabase client
└── server.ts    # Server-side Supabase client
```

## Technologies Used

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **Authentication**: Supabase Auth (Google, KakaoTalk)
- **Deployment**: Vercel

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details
