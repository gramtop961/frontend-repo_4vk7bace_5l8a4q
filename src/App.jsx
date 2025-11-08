import React, { useState } from 'react';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import ProposalCard from './components/ProposalCard';
import RightColumn from './components/RightColumn';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function App() {
  const [route, setRoute] = useState('dashboard');
  const [proposals, setProposals] = useState([
    {
      id: '1',
      title: 'Lunch with Maya',
      time: '12:30–1:15 PM',
      location: 'Student Center',
      tags: ['Lunch', 'Catch up'],
      timeLeft: '23h left',
    },
    {
      id: '2',
      title: 'Study for CS Midterm with Alex',
      time: '7–8 PM',
      location: 'Gates 5th floor',
      tags: ['Study', 'CS 15210'],
      timeLeft: '19h left',
    },
  ]);

  const onAccept = (p) => {
    setProposals((list) => list.filter((x) => x.id !== p.id));
  };
  const onDecline = (p) => {
    setProposals((list) => list.filter((x) => x.id !== p.id));
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.10),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.10),transparent_40%)]">
      <Topbar />
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex gap-6">
          <Sidebar current={route} onNavigate={setRoute} onAddInterests={() => {}} />

          <main className="flex-1 space-y-6">
            <section className="relative overflow-hidden rounded-3xl border p-0" style={{ background: 'linear-gradient(135deg, rgba(126,215,193,0.12) 0%, rgba(97,160,255,0.12) 100%)' }}>
              <div className="absolute inset-0">
                <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="relative z-10 p-6 md:p-8">
                <p className="text-sm font-semibold text-emerald-700">Calendly for Friendships</p>
                <h1 className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">Let AI find 30–60 minute windows to link up</h1>
                <p className="mt-2 max-w-2xl text-slate-700">Grab lunch, study for midterms, or hit the gym with friends based on free-busy from your calendars.</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <button className="rounded-full bg-blue-600 text-white px-5 py-2.5 text-sm font-semibold hover:bg-blue-700">Connect Google Calendar</button>
                  <button className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50">Add interests</button>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
            </section>

            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">AI Proposals</h2>
                <button className="text-sm font-medium text-blue-700 hover:underline">View all</button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {proposals.map((p) => (
                  <ProposalCard key={p.id} proposal={p} onAccept={onAccept} onDecline={onDecline} />
                ))}
              </div>
            </section>
          </main>

          <div className="w-full md:w-72 shrink-0">
            <RightColumn />
          </div>
        </div>
      </div>
    </div>
  );
}
