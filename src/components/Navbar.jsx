import React from 'react';
import { Home, CalendarDays, Users, Activity, Settings } from 'lucide-react';

export default function Navbar({ current, onNavigate }) {
  const items = [
    { key: 'dashboard', label: 'Dashboard', icon: Home },
    { key: 'calendar', label: 'Calendar', icon: CalendarDays },
    { key: 'connections', label: 'Connections', icon: Users },
    { key: 'whats-on', label: "What's On", icon: Activity },
    { key: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-600" />
            <span className="font-extrabold text-lg tracking-tight">LinkUp</span>
          </div>
          <ul className="hidden md:flex items-center gap-1">
            {items.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => onNavigate(item.key)}
                  className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
                    current === item.key ? 'bg-emerald-50 text-emerald-700' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <item.icon size={16} /> {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button onClick={() => onNavigate('settings')} className="rounded-lg bg-slate-900 text-white px-3 py-2 text-sm font-medium">
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden border-t bg-white">
        <div className="mx-auto max-w-6xl px-2 py-2 flex items-center justify-between">
          {items.map((item) => (
            <button key={item.key} onClick={() => onNavigate(item.key)} className={`flex flex-col items-center gap-1 text-xs px-3 py-1 rounded ${current === item.key ? 'text-emerald-700' : 'text-slate-600'}`}>
              <item.icon size={18} />
              {item.label.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
