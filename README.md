# Doto Todo App
**Current version:** 1.3.0

A to-do list and important-dates tracker built with React and Firebase. Built as a personal project to learn React fundamentals beyond tutorials — state management, custom hooks, component structure, and working with a real backend (Firebase Auth + Firestore).

**Live demo:** [md44md.github.io/doto-todo-app](https://md44md.github.io/doto-todo-app/)

## Features

- **Email/password and Google sign-in** via Firebase Authentication
- **Task management** — create, edit, complete, and delete todos with priority levels and optional due date/time
- **Important dates tracker** — separate from tasks, with yearly repeat support and countdown-based sorting
- **Unified "Add" modal** — a single floating action button opens a choice between adding a task or a date
- **Inline editing** — tasks and dates can be edited directly in place, without navigating away
- **Browser notifications** — get notified when a task or date is due, using the Notifications API
- **Responsive layout** — two-column layout on desktop, stacks vertically on mobile
- **Per-user data** — all todos and dates are scoped to the signed-in user via Firestore
- **Date/time clear buttons** — small (×) buttons next to date and time fields to clear a value, working around the lack of a native clear affordance on mobile date/time pickers

## Tech Stack

- **React** (with Vite)
- **Firebase** — Authentication (email/password + Google) and Firestore (database)
- **Browser Notifications API**
- Plain CSS (no framework), organized with CSS variables and a shared `global.css`
- **GitHub Pages** (`gh-pages` package) for deployment

## Usage

1. Sign up or sign in (email/password or Google)
2. Tap the floating **+** button to add a new task or important date
3. Tasks can be checked off, edited inline, or deleted from their card
4. Important dates support a yearly repeat option, useful for birthdays or anniversaries
5. If notifications are enabled, you'll get a browser notification when a task or date is due

### Notifications on iOS

Browser notifications work out of the box on Android and desktop browsers. **On iOS, Apple only allows web notifications for sites added to the Home Screen** (Safari → Share → "Add to Home Screen"), regardless of which browser you're using — this is a platform restriction, not specific to this app. Opening the link directly in a Safari or Chrome tab on iPhone will not show notifications, but the rest of the app works normally either way.

## Project Structure

```
src/
├── components/
│   ├── todos/        # TodoItem, TodoForm, TodoList
│   └── dates/        # DateItem, DateForm, DateList
├── hooks/             # useTodos, useDates, useNotifications
├── lib/               # firebase.js, AuthContext, notifications.js
├── pages/             # AuthPage, HomePage
├── validators/        # validator.js — input validation for forms
└── styles/            # global.css
```

## Getting Started

### Prerequisites
- Node.js installed
- A Firebase project with **Authentication** (Email/Password + Google providers enabled) and **Firestore** set up

### Setup

1. Clone the repo:
   ```bash
   git clone <repo-url>
   cd "todo app"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the project root with your Firebase config:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. Run the dev server:
   ```bash
   npm run dev
   ```

## What I Learned

- How React re-renders and why stabilizing references with `useCallback`/`useMemo` matters for avoiding unnecessary effect re-runs
- Structuring a React app with conventional folders (`components`, `hooks`, `pages`, `lib`) rather than over-engineering with patterns like MVC
- Designing a Firestore schema that minimizes conversion logic at form boundaries (e.g. consistent empty-string defaults instead of mixing `null`)
- The difference between plain CSS and CSS Modules, and when global class names are "good enough" vs. when scoping matters
- Debugging real layout issues (flexbox stretch behavior, `#root` sizing) by inspecting computed styles rather than guessing
- Building a notification system with a self-resetting schema (date-string tracking fields) instead of writing explicit reset logic
- Debugging a real cross-device bug (a white-screen crash on iPhone) by reading an actual stack trace instead of guessing, and discovering it was caused by a platform limitation (`Notification` API not existing in iOS Safari) rather than a logic bug — fixed with a feature-detection guard (`"Notification" in window`)
- Why overlapping a custom button inside a native `<input type="date">` is fragile across browsers (the internal layout is OS-rendered, not CSS you control) — solved by placing a clear button in the same flex row instead, which is more robust even though it costs a bit of horizontal space

## Future Improvements

- Explored Firebase Cloud Messaging and Periodic Background Sync for true background notifications — concluded this isn't achievable for free: FCM's actual push delivery requires a server-side trigger (Cloud Functions, which need the paid Blaze plan), and iOS Safari doesn't support Background Sync or silent push at all regardless of plan. Revisit if upgrading to Blaze.
- In-app notification banner
- Further visual polish and possibly a dark mode
