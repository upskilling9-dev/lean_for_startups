import PageHeader from '../components/PageHeader.jsx'
import Badge from '../components/ui/Badge.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import { agents } from '../services/mockData.js'

export default function AgentsPage() {
  return (
    <div>
      <PageHeader
        title="Agents"
        description="Configure operational assistants for your team."
        action={<Button variant="secondary">Add agent</Button>}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {agents.map((agent) => (
          <Card key={agent.id}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-slate-900">{agent.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{agent.description}</p>
              </div>
              <Badge tone={agent.status}>{agent.status}</Badge>
            </div>
            <p className="mt-4 text-xs text-slate-400">{agent.runs} runs total</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
