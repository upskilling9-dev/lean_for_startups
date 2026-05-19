import PageHeader from '../components/PageHeader.jsx'
import StatCard from '../components/StatCard.jsx'
import Card from '../components/ui/Card.jsx'
import { dashboardStats, recentActivity } from '../services/mockData.js'

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Overview of your team's operations at a glance."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <Card className="mt-6">
        <h2 className="text-sm font-semibold text-slate-900">Recent activity</h2>
        <ul className="mt-4 divide-y divide-slate-100">
          {recentActivity.map((item) => (
            <li key={item.id} className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0">
              <div>
                <p className="text-sm font-medium text-slate-900">{item.action}</p>
                <p className="text-sm text-slate-500">{item.detail}</p>
              </div>
              <span className="shrink-0 text-xs text-slate-400">{item.time}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
