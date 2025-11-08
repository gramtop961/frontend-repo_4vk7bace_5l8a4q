import React from 'react';
import { Home, CalendarDays, Users, Activity, Settings } from 'lucide-react';

export default function Sidebar({ current, onNavigate, onAddInterests }) {
  const items = [
    { key: 'dashboard', label: 'Dashboard', icon: Home },
    { key: 'calendar', label: 'Calendar', icon: CalendarDays },
    { key: 'connections', label: 'Connections', icon: Users },
    { key: 'whats-on', label: "What's On", icon: Activity },
    { key: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="hidden md:block w-64 shrink-0">
      <div className="sticky top-16 space-y-4">
        <div className="rounded-2xl border bg-white p-2 shadow-sm" style={{ background: 'linear-gradient(180deg, rgba(16,185,129,0.08) 0%, rgba(59,130,246,0.08) 100%)' }}>
          {items.map((item) => (
            <button
              key={item.key}
              onClick={() => onNavigate?.(item.key)}
              className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-white ${
                current === item.key ? 'bg-white text-emerald-700 shadow-inner' : 'text-slate-700'
              }`}
            >
              <item.icon size={16} />
              {item.label}
            </button>
          ))}
        </div>

        <div className="rounded-2xl border bg-white p-4 shadow-sm">
          <h4 className="font-semibold">Boost your week</h4>
          <p className="mt-1 text-sm text-slate-600">Add interests to get smarter meetup suggestions.</p>
          <button onClick={onAddInterests} className="mt-3 inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
            Add interests
          </button>
        </div>
      </div>
    </aside>
  );
}
