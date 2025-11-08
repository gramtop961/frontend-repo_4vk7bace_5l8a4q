import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { X } from 'lucide-react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const remove = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const show = useCallback((message, options = {}) => {
    const id = Math.random().toString(36).slice(2);
    const toast = {
      id,
      message,
      type: options.type || 'default',
      duration: options.duration ?? 3000,
    };
    setToasts((prev) => [...prev, toast]);
    if (toast.duration > 0) {
      setTimeout(() => remove(id), toast.duration);
    }
  }, [remove]);

  const value = useMemo(() => ({ show }), [show]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed inset-x-0 top-4 z-50 flex flex-col items-center gap-2 px-4">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`w-full max-w-md rounded-lg border bg-white/90 backdrop-blur px-4 py-3 shadow-lg flex items-start gap-3 ${
              t.type === 'success' ? 'border-emerald-300' : t.type === 'error' ? 'border-rose-300' : 'border-slate-200'
            }`}
          >
            <div className={`h-2 w-2 mt-2 rounded-full ${t.type === 'success' ? 'bg-emerald-500' : t.type === 'error' ? 'bg-rose-500' : 'bg-blue-500'}`} />
            <p className="text-sm text-slate-800 flex-1">{t.message}</p>
            <button
              onClick={() => remove(t.id)}
              className="p-1 rounded hover:bg-slate-100 active:scale-95 transition"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
