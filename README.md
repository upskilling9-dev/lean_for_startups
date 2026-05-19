# Lean

AI operations assistant for small startup teams — frontend shell built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Firebase Authentication

1. Create a Firebase project and enable **Email/Password** in Authentication → Sign-in method.
2. Register a web app and copy the config values.
3. Copy `.env.example` to `.env` and fill in `VITE_FIREBASE_*` variables.
4. Run `npm install` and `npm run dev`.

Routes: `/login`, `/signup`, and protected app routes under `/dashboard`, etc.

## Routes

| Path | Page |
|------|------|
| `/login` | Sign in |
| `/dashboard` | Overview |
| `/tasks` | Task list |
| `/agents` | Agent cards |
| `/team` | Team members |
| `/settings` | Workspace settings |

## Structure

```
src/
  components/   # UI primitives, Sidebar, Navbar
  pages/        # Route-level views
  layouts/      # AppLayout, AuthLayout
  hooks/        # useMediaQuery
  services/     # mockData placeholders
  context/      # AuthContext (client-only)
```
