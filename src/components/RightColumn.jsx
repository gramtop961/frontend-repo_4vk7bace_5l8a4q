import React from 'react';

function MiniCalendar() {
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const today = new Date().getDay(); // 0 Sun..6 Sat
  const idx = (d) => (d === 0 ? 6 : d - 1);
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <h4 className="font-semibold">This week</h4>
      <div className="mt-3 grid grid-cols-7 gap-2">
        {days.map((d, i) => (
          <div key={d} className={`flex flex-col items-center gap-2 rounded-xl p-2 ${i === idx(today) ? 'bg-emerald-50 border' : 'bg-slate-50 border'}`}>
            <span className="text-xs font-semibold text-slate-700">{d}</span>
            <div className="h-16 w-full rounded-lg bg-gradient-to-b from-emerald-100 to-blue-100 relative overflow-hidden">
              <div className="absolute left-1 right-1 top-2 h-2 rounded bg-emerald-300/80" />
              <div className="absolute left-1 right-1 top-6 h-2 rounded bg-blue-300/80" />
              <div className="absolute left-1 right-1 top-10 h-2 rounded bg-amber-300/80" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhatsOn() {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <h4 className="font-semibold">What’s on</h4>
      <div className="mt-3 rounded-xl border p-3 bg-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Jamie</p>
            <p className="text-sm text-slate-600">Pick-up basketball • 6 PM • Rec Center</p>
          </div>
          <button className="rounded-full bg-blue-600 text-white text-sm font-semibold px-3 py-2 hover:bg-blue-700">Join</button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {['Sports','Social','Quick break'].map((tag) => (
            <span key={tag} className="text-xs rounded-full bg-slate-50 border px-2 py-1 text-slate-700">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RightColumn() {
  return (
    <div className="space-y-4">
      <MiniCalendar />
      <WhatsOn />
    </div>
  );
}
