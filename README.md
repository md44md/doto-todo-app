# Doto Todo App

A todo list and important-dates tracker built with React and Firebase. Built as a personal project to learn React fundamentals beyond tutorials — state management, custom hooks, component structure, and working with a real backend (Firebase Auth + Firestore).

## Features

- **Email/password and Google sign-in** via Firebase Authentication
- **Task management** — create, edit, complete, and delete todos with priority levels and optional due date/time
- **Important dates tracker** — separate from tasks, with yearly repeat support and countdown-based sorting
- **Unified "Add" modal** — a single floating action button opens a choice between adding a task or a date
- **Inline editing** — tasks and dates can be edited directly in place, without navigating away
- **Browser notifications** — get notified when a task or date is due, using the Notifications API
- **Responsive layout** — two-column layout on desktop, stacks vertically on mobile
- **Per-user data** — all todos and dates are scoped to the signed-in user via Firestore

## Tech Stack

- **React** (with Vite)
- **Firebase** — Authentication (email/password + Google) and Firestore (database)
- **Browser Notifications API**
- Plain CSS (no framework), organized with CSS variables and a shared `global.css`

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

## Future Improvements

- In-app notification banner alongside browser push notifications
- Further visual polish and possibly a dark mode
