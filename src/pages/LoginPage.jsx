import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import Input from '../components/ui/Input.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import AuthLayout from '../layouts/AuthLayout.jsx'

export default function LoginPage() {
  const { isAuthenticated, login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('you@lean.app')

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login(email)
    navigate('/dashboard')
  }

  return (
    <AuthLayout>
      <Card className="shadow-md">
        <div className="mb-6 lg:hidden">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-lg font-bold text-white">
            L
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">Sign in to Lean</h2>
        </div>

        <div className="mb-6 hidden lg:block">
          <h2 className="text-2xl font-semibold text-slate-900">Welcome back</h2>
          <p className="mt-1 text-sm text-slate-500">Sign in to your workspace</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Work email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
          />
          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="••••••••"
            defaultValue="demo"
          />
          <Button type="submit" className="w-full">
            Continue
          </Button>
        </form>

        <p className="mt-4 text-center text-xs text-slate-400">
          Demo only — no backend connected yet.
        </p>
      </Card>
    </AuthLayout>
  )
}
