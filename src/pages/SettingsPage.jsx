import PageHeader from '../components/PageHeader.jsx'
import Card from '../components/ui/Card.jsx'
import Input from '../components/ui/Input.jsx'
import Button from '../components/ui/Button.jsx'

export default function SettingsPage() {
  return (
    <div>
      <PageHeader
        title="Settings"
        description="Manage workspace preferences."
      />

      <div className="max-w-xl space-y-6">
        <Card>
          <h2 className="text-sm font-semibold text-slate-900">Workspace</h2>
          <div className="mt-4 space-y-4">
            <Input label="Workspace name" defaultValue="Acme Startup" />
            <Input label="Timezone" defaultValue="America/New_York" />
          </div>
          <Button className="mt-4">Save changes</Button>
        </Card>

        <Card>
          <h2 className="text-sm font-semibold text-slate-900">Notifications</h2>
          <p className="mt-1 text-sm text-slate-500">
            Email digests and task reminders (coming soon).
          </p>
        </Card>
      </div>
    </div>
  )
}
