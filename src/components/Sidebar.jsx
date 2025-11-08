import React from 'react';
import { Home, Calendar, Users, Settings, Plus } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active }) => (
  <button
    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition border ${
      active
        ? 'bg-gradient-to-r from-emerald-50 to-sky-50 text-emerald-700 border-emerald-100'
        : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
    } shadow-sm`}
  >
    <Icon size={18} />
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default function Sidebar() {
  return (
    <div className="space-y-6">
      <div className="grid gap-2">
        <NavItem icon={Home} label="Home" active />
        <NavItem icon={Calendar} label="Calendar" />
        <NavItem icon={Users} label="Friends" />
        <NavItem icon={Settings} label="Settings" />
      </div>

      <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-4">
        <div className="text-sm font-semibold text-slate-800">Boost your week</div>
        <p className="text-sm text-slate-500 mt-1">Add interests to improve your AI proposals.</p>
        <button className="mt-3 inline-flex items-center gap-2 px-3 h-9 rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 text-white shadow hover:opacity-95 transition">
          <Plus size={16} />
          <span className="text-sm">Add interests</span>
        </button>
      </div>
    </div>
  );
}
