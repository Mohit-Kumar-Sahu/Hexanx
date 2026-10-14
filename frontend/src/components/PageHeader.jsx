// Server component — no hooks, no client APIs
export default function PageHeader({ title, subtitle }) {
  return (
    <div className="relative pt-40 sm:pt-48 pb-16 sm:pb-24 overflow-hidden mesh-gradient">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-[80px] animate-float" />
      <div
        className="absolute bottom-10 left-20 w-64 h-64 bg-purple-400/20 rounded-full blur-[80px] animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center animate-slide-in">
        <div className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-white/50 backdrop-blur mb-6 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-600">{subtitle}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">{title}</h1>
        <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
      </div>
    </div>
  );
}
