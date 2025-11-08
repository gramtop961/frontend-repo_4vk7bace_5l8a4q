import React from 'react';
import { Bell, Search } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500" />
            <span className="font-extrabold tracking-tight">LinkUp</span>
            <span className="ml-1 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700">beta</span>
          </div>

          <div className="hidden md:flex flex-1 max-w-xl items-center gap-2 rounded-full border bg-white px-3 py-2 shadow-sm">
            <Search size={16} className="text-slate-500" />
            <input
              type="text"
              placeholder="Search friends, classes, or clubs"
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="relative rounded-full p-2 hover:bg-slate-100 transition" aria-label="Notifications">
              <Bell size={18} />
              <span className="absolute -right-0.5 -top-0.5 inline-block h-2 w-2 rounded-full bg-rose-500" />
            </button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500" />
          </div>
        </div>
      </div>
    </header>
  );
}
