# Cardi-Oh - Your AI Fitness Buddy

Transform your fitness journey with personalized AI workouts and an adorable virtual pet that grows stronger as you do.

## About

Cardi-Oh is a fitness application that combines personalized workout plans with gamification elements. Users can create accounts, complete fitness profiles, and receive tailored workout recommendations.

## Features

- **User Authentication** - Secure login and signup system
- **Fitness Profile** - Comprehensive onboarding to understand your fitness level and goals
- **Personalized Dashboard** - Track your progress and view workout recommendations
- **Settings Management** - Update profile, account settings, and preferences
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Dark/Light Theme** - Toggle between themes for your preference

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Test Credentials

For development and testing purposes, you can use these test credentials:

**Email:** `test@cardioh.com`  
**Password:** `test123`

### How to Test:
1. Navigate to the login page (`/login`)
2. Enter the test credentials above
3. Click "Log In" to access the dashboard
4. Use the settings page to complete your fitness profile

## User Flow

1. **Home Page** (`/`) - Landing page with "Get Started" button
2. **Signup** (`/signup`) - Quick account creation (name, email, password)
3. **Dashboard** (`/dashboard`) - Main user interface with profile completion prompt
4. **Settings** (`/settings`) - Profile management, account settings, and preferences
5. **Login** (`/login`) - User authentication

## Project Structure

```
src/
├── app/
│   ├── (auth)/          # Authentication pages
│   │   ├── login/       # Login page
│   │   └── signup/      # Signup page
│   ├── (dashboard)/     # Protected dashboard pages
│   │   ├── dashboard/   # Main dashboard
│   │   └── settings/    # Settings page
│   └── page.tsx         # Home page
├── components/
│   ├── sections/        # Page sections
│   │   ├── hero-section.tsx
│   │   └── onboarding-form.tsx
│   └── ui/              # Reusable UI components
└── lib/
    └── auth/            # Authentication context
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
