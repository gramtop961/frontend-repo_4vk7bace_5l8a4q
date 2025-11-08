import React from 'react';
import { MapPin, Clock, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProposalCard({ proposal, onAccept, onDecline }) {
  return (
    <AnimatePresence>
      <motion.div
        key={proposal.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
        className="rounded-2xl bg-white shadow-sm border border-slate-100 p-5"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-slate-800 font-semibold tracking-tight">{proposal.title}</h3>
            <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1"><MapPin size={16} /> {proposal.location}</span>
              <span className="inline-flex items-center gap-1"><Clock size={16} /> {proposal.time}</span>
            </div>
          </div>
          <div className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">{proposal.timeLeft}</div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {proposal.tags?.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => onAccept(proposal.id)}
            className="inline-flex items-center gap-2 h-9 px-3 rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 text-white shadow hover:opacity-95 transition"
          >
            <Check size={16} /> Accept
          </button>
          <button
            onClick={() => onDecline(proposal.id)}
            className="inline-flex items-center gap-2 h-9 px-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition shadow-sm"
          >
            <X size={16} /> Decline
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
