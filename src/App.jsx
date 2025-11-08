import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProposalList from './components/ProposalList';
import { ToastProvider, useToast } from './components/Toast';

function DashboardView() {
  const { show } = useToast();
  const [proposals, setProposals] = useState(() => [
    {
      id: 'p1',
      title: 'Study Sprint: Algorithms',
      description: 'Quick 45-min focus session before dinner. Bring your problem sets!',
      time: 'Today • 5:15–6:00 PM',
      location: 'Engineering Library, Booth A3',
      attendees: ['You', 'Maya'],
    },
    {
      id: 'p2',
      title: 'Green Smoothie Walk',
      description: 'Stretch your legs and catch up around the quad. 20 minutes.',
      time: 'Tomorrow • 10:40–11:00 AM',
      location: 'Campus Quad',
      attendees: ['You', 'Leo'],
    },
  ]);

  const handleAccept = (proposal) => {
    show('Added to your calendar', { type: 'success' });
    setProposals((list) => list.filter((p) => p.id !== proposal.id));
  };
  const handleDecline = (proposal) => {
    show('Invite declined', { type: 'default' });
    setProposals((list) => list.filter((p) => p.id !== proposal.id));
  };

  return (
    <div className="space-y-6">
      <Hero onGetStarted={() => show('Connected successfully', { type: 'success' })} />
      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight">AI Proposals</h2>
          <button
            onClick={() => show('Connected successfully', { type: 'success' })}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-white text-sm font-medium shadow hover:bg-blue-700"
          >
            Connect Google Calendar
          </button>
        </div>
        <ProposalList proposals={proposals} onAccept={handleAccept} onDecline={handleDecline} />
      </section>
    </div>
  );
}

function Placeholder({ title, description }) {
  return (
    <div className="rounded-xl border bg-white p-8 text-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-slate-600">{description}</p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-28 rounded-lg bg-gradient-to-br from-emerald-50 to-blue-50 border" />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState('dashboard');
  const view = useMemo(() => {
    switch (route) {
      case 'dashboard':
        return <DashboardView />;
      case 'calendar':
        return <Placeholder title="Calendar" description="Browse day/week/month and see busy/free times. (Mocked UI for MVP preview)" />;
      case 'connections':
        return <Placeholder title="Connections" description="Search friends, view requests, and shared activity analytics." />;
      case 'whats-on':
        return <Placeholder title="What’s On" description="Real-time campus activities — join or create on the fly." />;
      case 'settings':
        return <Placeholder title="Settings" description="Update profile, notifications, and account security." />;
      default:
        return <DashboardView />;
    }
  }, [route]);

  return (
    <ToastProvider>
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.10),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.10),transparent_40%)]">
        <Navbar current={route} onNavigate={setRoute} />
        <main className="mx-auto max-w-6xl px-4 py-6">
          {view}
        </main>
        <footer className="mt-10 py-10 text-center text-slate-500">
          © {new Date().getFullYear()} LinkUp — Built for students to meet with ease.
        </footer>
      </div>
    </ToastProvider>
  );
}
