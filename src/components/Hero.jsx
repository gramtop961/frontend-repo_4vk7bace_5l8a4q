import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-emerald-50 via-blue-50 to-amber-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          LinkUp • Smart social scheduling
        </span>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Meet up smarter, not harder
        </h1>
        <p className="mt-3 max-w-2xl text-slate-700 text-base md:text-lg">
          AI-powered proposals based on your Google Calendar, shared interests, and campus connections.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button onClick={onGetStarted} className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-white font-semibold shadow hover:bg-emerald-700 active:scale-[0.98] transition">
            Get Started
          </button>
          <a href="#proposals" className="inline-flex items-center gap-2 rounded-lg bg-white/80 px-5 py-3 text-emerald-700 font-semibold shadow hover:bg-white active:scale-[0.98] transition backdrop-blur">
            See Proposals
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
    </section>
  );
}
