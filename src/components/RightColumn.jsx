import React from 'react';

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
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-slate-800">What’s On</div>
        <button className="text-xs text-emerald-700 hover:underline">View all</button>
      </div>
      <div className="mt-3 space-y-3">
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
          <div className="text-sm font-medium text-slate-800">Community Yoga</div>
          <div className="text-xs text-slate-500">Saturday • 9:00 AM</div>
        </div>
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
          <div className="text-sm font-medium text-slate-800">Board Games Night</div>
          <div className="text-xs text-slate-500">Sunday • 6:00 PM</div>
        </div>
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
