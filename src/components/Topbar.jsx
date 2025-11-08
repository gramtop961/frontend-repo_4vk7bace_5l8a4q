import React from 'react';
import { Search, Bell, User, Sparkles } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-sky-500 grid place-items-center text-white shadow">
            <Sparkles size={18} />
          </div>
          <div className="font-semibold tracking-tight text-slate-800">LinkUp</div>
        </div>

        <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl mx-6">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search activities, people, places..."
              className="w-full h-10 pl-10 pr-3 rounded-full bg-white border border-slate-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 shadow-sm"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="h-10 px-4 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition shadow-sm hidden sm:inline-flex items-center gap-2">
            <span>Discover</span>
          </button>
          <button className="h-10 w-10 rounded-full bg-white border border-slate-200 grid place-items-center text-slate-600 hover:bg-slate-50 transition shadow-sm">
            <Bell size={18} />
          </button>
          <button className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 text-white grid place-items-center shadow">
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
