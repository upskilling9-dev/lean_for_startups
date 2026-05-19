import PageHeader from '../components/PageHeader.jsx'
import Badge from '../components/ui/Badge.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import { teamMembers } from '../services/mockData.js'

export default function TeamPage() {
  return (
    <div>
      <PageHeader
        title="Team"
        description="People in your Lean workspace."
        action={<Button variant="secondary">Invite member</Button>}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.id}>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
                {member.name.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="truncate font-semibold text-slate-900">{member.name}</h3>
                  <Badge tone={member.status}>{member.status}</Badge>
                </div>
                <p className="text-sm text-slate-500">{member.role}</p>
                <p className="mt-1 truncate text-xs text-slate-400">{member.email}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
