export const dashboardStats = [
  { label: 'Open tasks', value: '12', change: '+3 this week' },
  { label: 'Active agents', value: '4', change: '2 running now' },
  { label: 'Team members', value: '6', change: 'All online' },
  { label: 'Ops health', value: '94%', change: 'Stable' },
]

export const recentActivity = [
  { id: 1, action: 'Task assigned', detail: 'Review Q2 roadmap', time: '2h ago' },
  { id: 2, action: 'Agent updated', detail: 'Support triage playbook', time: '4h ago' },
  { id: 3, action: 'Team invite sent', detail: 'alex@startup.io', time: 'Yesterday' },
  { id: 4, action: 'Task completed', detail: 'Ship onboarding copy', time: 'Yesterday' },
]

export const tasks = [
  { id: 1, title: 'Draft weekly ops summary', status: 'in_progress', priority: 'high', assignee: 'You' },
  { id: 2, title: 'Review agent runbooks', status: 'todo', priority: 'medium', assignee: 'Sam' },
  { id: 3, title: 'Update team onboarding checklist', status: 'todo', priority: 'low', assignee: 'Jordan' },
  { id: 4, title: 'Sync vendor contracts', status: 'done', priority: 'medium', assignee: 'You' },
  { id: 5, title: 'Prepare board metrics pack', status: 'in_progress', priority: 'high', assignee: 'Alex' },
]

export const agents = [
  { id: 1, name: 'Ops Coordinator', description: 'Routes tasks and summarizes team updates.', status: 'active', runs: 128 },
  { id: 2, name: 'Support Triage', description: 'Classifies inbound requests and suggests replies.', status: 'active', runs: 86 },
  { id: 3, name: 'Docs Assistant', description: 'Keeps internal playbooks organized.', status: 'idle', runs: 42 },
  { id: 4, name: 'Hiring Scout', description: 'Screens applicants against role criteria.', status: 'paused', runs: 19 },
]

export const teamMembers = [
  { id: 1, name: 'Alex Rivera', role: 'Founder', email: 'alex@lean.app', status: 'online' },
  { id: 2, name: 'Sam Chen', role: 'Operations', email: 'sam@lean.app', status: 'online' },
  { id: 3, name: 'Jordan Lee', role: 'Product', email: 'jordan@lean.app', status: 'away' },
  { id: 4, name: 'Morgan Patel', role: 'Engineering', email: 'morgan@lean.app', status: 'offline' },
  { id: 5, name: 'Riley Kim', role: 'Customer Success', email: 'riley@lean.app', status: 'online' },
  { id: 6, name: 'You', role: 'Admin', email: 'you@lean.app', status: 'online' },
]

export const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
  { label: 'Tasks', path: '/tasks', icon: 'tasks' },
  { label: 'Agents', path: '/agents', icon: 'agents' },
  { label: 'Team', path: '/team', icon: 'team' },
  { label: 'Settings', path: '/settings', icon: 'settings' },
]
