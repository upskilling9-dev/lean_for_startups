# Lean

AI operations assistant for small startup teams — frontend shell built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Use any email on the login page (demo auth, no backend).

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
