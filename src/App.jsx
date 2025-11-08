import React, { useState, useMemo } from 'react';
import Topbar from './components/Topbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import ProposalsGrid from './components/ProposalsGrid.jsx';
import RightColumn from './components/RightColumn.jsx';

export default function App() {
  const [proposals, setProposals] = useState([
    {
      id: 'p1',
      title: 'Pick-up Basketball at the Park',
      location: 'Mission Dolores Park',
      time: 'Today, 6:30 PM',
      tags: ['sports', 'outdoors', 'casual'],
      timeLeft: '2h left',
    },
    {
      id: 'p2',
      title: 'Third-Wave Coffee Tasting',
      location: 'Blue Bottle, Hayes Valley',
      time: 'Tomorrow, 10:00 AM',
      tags: ['coffee', 'social', 'chill'],
      timeLeft: '18h left',
    },
    {
      id: 'p3',
      title: 'Sunset Run on the Embarcadero',
      location: 'Pier 7 Meetup Point',
      time: 'Fri, 7:00 PM',
      tags: ['running', 'health', 'outdoors'],
      timeLeft: '2d left',
    },
  ]);

  const handleAccept = (id) => {
    setProposals((prev) => prev.filter((p) => p.id !== id));
  };

  const handleDecline = (id) => {
    setProposals((prev) => prev.filter((p) => p.id !== id));
  };

  const layoutClass = useMemo(
    () =>
      'min-h-screen bg-gradient-to-br from-emerald-50 via-sky-50 to-indigo-50 text-slate-800',
    []
  );

  return (
    <div className={layoutClass}>
      <Topbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-12 lg:col-span-6 space-y-6">
          {/* Hero removed as requested; focus on proposals feed */}
          <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6">
            <h2 className="text-xl font-semibold tracking-tight text-slate-800">Welcome to LinkUp</h2>
            <p className="mt-1 text-slate-500">Smart suggestions to meet, move, and make memories.</p>
          </div>
          <ProposalsGrid proposals={proposals} onAccept={handleAccept} onDecline={handleDecline} />
        </div>
        <div className="col-span-12 lg:col-span-3">
          <RightColumn />
        </div>
      </div>
    </div>
  );
}
