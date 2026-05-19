import Card from './ui/Card.jsx'

export default function StatCard({ label, value, change }) {
  return (
    <Card>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{value}</p>
      <p className="mt-1 text-xs text-slate-400">{change}</p>
    </Card>
  )
}
