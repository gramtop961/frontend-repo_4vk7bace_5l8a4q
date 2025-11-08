import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Tag, Clock, Check, X } from 'lucide-react';

export default function ProposalCard({ proposal, onAccept, onDecline }) {
  const [state, setState] = useState('idle');
  const [hidden, setHidden] = useState(false);

  const accept = async () => {
    setState('accept');
    await new Promise((r) => setTimeout(r, 420));
    onAccept?.(proposal);
    setHidden(true);
  };
  const decline = async () => {
    setState('decline');
    await new Promise((r) => setTimeout(r, 280));
    onDecline?.(proposal);
    setHidden(true);
  };

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={
            state === 'accept'
              ? { scale: [1, 1.05, 0.6, 0.2], opacity: [1, 0.95, 0.6, 0], rotate: [0, 4, -6, 0] }
              : { opacity: [1, 0.8, 0], height: 0, margin: 0, transition: { duration: 0.28 } }
          }
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="rounded-2xl bg-white p-4 shadow-sm border"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold text-slate-900">{proposal.title}</h3>
              <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="inline-flex items-center gap-1"><Clock size={16} /> {proposal.time}</span>
                <span className="inline-flex items-center gap-1"><MapPin size={16} /> {proposal.location}</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {proposal.tags?.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 border">
                    <Tag size={12} /> {t}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <button onClick={accept} className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                  <Check size={16} /> Accept
                </button>
                <button onClick={decline} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                  <X size={16} /> Decline
                </button>
                <span className="ml-2 inline-flex items-center gap-1 text-xs text-slate-500">
                  <Clock size={14} /> {proposal.timeLeft}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
