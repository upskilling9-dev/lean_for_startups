export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden flex-1 flex-col justify-between bg-slate-900 p-12 text-white lg:flex">
        <div>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500 text-lg font-bold">
            L
          </div>
          <h1 className="mt-8 text-3xl font-semibold tracking-tight">Lean</h1>
          <p className="mt-3 max-w-sm text-slate-300">
            Your AI operations assistant for small startup teams. Stay aligned, move faster.
          </p>
        </div>
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} Lean</p>
      </div>

      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  )
}
