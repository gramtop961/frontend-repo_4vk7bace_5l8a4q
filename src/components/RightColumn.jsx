import React from 'react';
import { User, Calendar, Clock } from 'lucide-react';

function MiniCalendar() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-4">
      <div className="text-sm font-semibold text-slate-800">This week</div>
      <div className="mt-3 grid grid-cols-7 gap-2 text-center">
        {days.map((d) => (
          <div key={d} className="text-xs text-slate-600">{d}</div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-7 gap-2">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="h-16 rounded-xl bg-slate-50 border border-slate-200 relative overflow-hidden"
          >
            {i === 2 && (
              <div className="absolute left-1 right-1 top-1 h-6 rounded-md bg-gradient-to-r from-emerald-200 to-sky-200"></div>
            )}
            {i === 5 && (
              <div className="absolute left-1 right-1 bottom-1 h-6 rounded-md bg-gradient-to-r from-emerald-200 to-sky-200"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function WhatsOn() {
  const items = [
    { id: 1, person: 'Ava Chen', title: 'Community Yoga', day: 'Saturday', time: '9:00 AM' },
    { id: 2, person: 'Jordan Lee', title: 'Board Games Night', day: 'Sunday', time: '6:00 PM' },
    { id: 3, person: 'Sam Patel', title: 'Sunset Run', day: 'Friday', time: '7:00 PM' },
  ];

  return (
    <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-slate-800">What’s On</div>
        <button className="text-xs text-emerald-700 hover:underline">View all</button>
      </div>
      <div className="mt-3 space-y-3">
        {items.map((it) => (
          <div key={it.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <div className="shrink-0 w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <User size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium text-slate-800 truncate">{it.title}</div>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600">
                <span className="inline-flex items-center gap-1"><User size={14} />{it.person}</span>
                <span className="inline-flex items-center gap-1"><Calendar size={14} />{it.day}</span>
                <span className="inline-flex items-center gap-1"><Clock size={14} />{it.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RightColumn() {
  return (
    <div className="space-y-6">
      <MiniCalendar />
      <WhatsOn />
    </div>
  );
}
