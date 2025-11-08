import React from 'react';
import ProposalCard from './ProposalCard';

export default function ProposalList({ proposals, onAccept, onDecline }) {
  if (!proposals?.length) {
    return (
      <div className="rounded-xl border border-dashed p-8 text-center text-slate-600">
        No proposals yet — connect your calendar to get smart suggestions.
      </div>
    );
  }
  return (
    <div id="proposals" className="grid grid-cols-1 gap-4">
      {proposals.map((p) => (
        <ProposalCard key={p.id} proposal={p} onAccept={onAccept} onDecline={onDecline} />
      ))}
    </div>
  );
}
