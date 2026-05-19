import PageHeader from '../components/PageHeader.jsx'
import Badge from '../components/ui/Badge.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import { tasks } from '../services/mockData.js'

export default function TasksPage() {
  return (
    <div>
      <PageHeader
        title="Tasks"
        description="Track operational work across your startup."
        action={<Button variant="secondary">New task</Button>}
      />

      <Card className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs font-medium uppercase tracking-wide text-slate-500">
                <th className="px-5 py-3">Task</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Priority</th>
                <th className="px-5 py-3">Assignee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-slate-50/80">
                  <td className="px-5 py-4 font-medium text-slate-900">{task.title}</td>
                  <td className="px-5 py-4">
                    <Badge tone={task.status}>{task.status.replace('_', ' ')}</Badge>
                  </td>
                  <td className="px-5 py-4">
                    <Badge tone={task.priority}>{task.priority}</Badge>
                  </td>
                  <td className="px-5 py-4 text-slate-600">{task.assignee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
