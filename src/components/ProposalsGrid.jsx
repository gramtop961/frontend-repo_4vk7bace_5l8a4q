import React from 'react';
import ProposalCard from './ProposalCard.jsx';

export default function ProposalsGrid({ proposals, onAccept, onDecline }) {
  if (!proposals?.length) {
    return (
      <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-10 text-center">
        <p className="text-slate-600">No proposals right now. Check back later!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {proposals.map((p) => (
        <ProposalCard key={p.id} proposal={p} onAccept={onAccept} onDecline={onDecline} />
      ))}
    </div>
  );
}
