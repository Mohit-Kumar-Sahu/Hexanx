import React from 'react';

export default function Button({
  children,
  primary = false,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 relative overflow-hidden group shadow-xl flex items-center justify-center gap-2
        ${
          primary
            ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:shadow-blue-500/40'
            : 'bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 hover:border-blue-400 hover:text-blue-600'
        }
        ${disabled ? 'opacity-70 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
