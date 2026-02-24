export default function AppShell({ children }) {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      <div className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-200px] right-[-200px] h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[48px_48px]" />

      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}
