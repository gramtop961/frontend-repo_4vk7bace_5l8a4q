import React from 'react';
import { MapPin, Clock, Check, X, User as UserIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function getInitials(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join('');
}

function colorClassesFromName(name = '') {
  const palette = [
    { bg: 'bg-emerald-100', text: 'text-emerald-700' },
    { bg: 'bg-sky-100', text: 'text-sky-700' },
    { bg: 'bg-violet-100', text: 'text-violet-700' },
    { bg: 'bg-rose-100', text: 'text-rose-700' },
    { bg: 'bg-amber-100', text: 'text-amber-700' },
    { bg: 'bg-indigo-100', text: 'text-indigo-700' },
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash + name.charCodeAt(i)) % palette.length;
  return palette[hash];
}

export default function ProposalCard({ proposal, onAccept, onDecline }) {
  const personName = proposal?.user?.name || proposal?.person || 'Guest';
  const initials = getInitials(personName);
  const colors = colorClassesFromName(personName);

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
          <div className="min-w-0">
            <h3 className="text-slate-800 font-semibold tracking-tight truncate">{proposal.title}</h3>
            <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1"><MapPin size={16} /> {proposal.location}</span>
              <span className="inline-flex items-center gap-1"><Clock size={16} /> {proposal.time}</span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-slate-700">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${colors.bg} ${colors.text}`}>
                {initials ? (
                  <span className="text-xs font-semibold leading-none">{initials}</span>
                ) : (
                  <UserIcon size={16} />
                )}
              </div>
              <span className="font-medium truncate">{personName}</span>
            </div>
          </div>
          <div className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 whitespace-nowrap">{proposal.timeLeft}</div>
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
