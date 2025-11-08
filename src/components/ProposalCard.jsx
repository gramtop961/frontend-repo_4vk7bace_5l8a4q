import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Users, CalendarDays, Check, X } from 'lucide-react';

export default function ProposalCard({ proposal, onAccept, onDecline }) {
  const [status, setStatus] = useState('idle');
  const [hidden, setHidden] = useState(false);

  const handleAccept = async () => {
    setStatus('accept');
    await new Promise((r) => setTimeout(r, 450));
    onAccept?.(proposal);
    setHidden(true);
  };

  const handleDecline = async () => {
    setStatus('decline');
    await new Promise((r) => setTimeout(r, 350));
    onDecline?.(proposal);
    setHidden(true);
  };

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={status === 'accept' ? { scale: [1, 1.05, 0.6, 0.2], opacity: [1, 0.9, 0.6, 0], rotate: [0, 5, -8, 0] } : { opacity: 0, height: 0, marginBottom: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold">
              {proposal.title?.[0] ?? 'L'}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-semibold text-slate-900">{proposal.title}</h3>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-1"><CalendarDays size={16} />{proposal.time}</span>
                  <span className="inline-flex items-center gap-1"><MapPin size={16} />{proposal.location}</span>
                  <span className="inline-flex items-center gap-1"><Users size={16} />{proposal.attendees?.length ?? 0}</span>
                </div>
              </div>
              <p className="mt-1 text-slate-700 text-sm">{proposal.description}</p>
              <div className="mt-3 flex items-center gap-2">
                <button onClick={handleAccept} className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-white text-sm font-medium shadow hover:bg-emerald-700 active:scale-[0.98]">
                  <Check size={16} /> Accept
                </button>
                <button onClick={handleDecline} className="inline-flex items-center gap-2 rounded-lg bg-rose-50 px-3 py-2 text-rose-700 text-sm font-medium hover:bg-rose-100 active:scale-[0.98]">
                  <X size={16} /> Decline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
