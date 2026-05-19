const styles = {
  todo: 'bg-slate-100 text-slate-700',
  in_progress: 'bg-sky-50 text-sky-700',
  done: 'bg-emerald-50 text-emerald-700',
  active: 'bg-emerald-50 text-emerald-700',
  idle: 'bg-slate-100 text-slate-600',
  paused: 'bg-amber-50 text-amber-700',
  online: 'bg-emerald-50 text-emerald-700',
  away: 'bg-amber-50 text-amber-700',
  offline: 'bg-slate-100 text-slate-500',
  high: 'bg-rose-50 text-rose-700',
  medium: 'bg-amber-50 text-amber-700',
  low: 'bg-slate-100 text-slate-600',
}

export default function Badge({ children, tone = 'todo' }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${styles[tone] ?? styles.todo}`}>
      {children}
    </span>
  )
}
