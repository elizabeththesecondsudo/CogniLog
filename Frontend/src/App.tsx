export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.15),transparent_60%)]" />

      {/* Animated glow blobs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl animate-pulse" />

      <div className="relative flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_0_60px_rgba(56,189,248,0.15)] backdrop-blur-xl">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-300">
              Tailwind UI Flex
            </span>
            <span className="text-xs text-slate-500">v1.0 (you tried)</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl">
            This actually
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              looks impressive
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Soft lighting, layered depth, subtle animation. Honestly, this is dangerously close to looking like you know what you're doing.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="group relative overflow-hidden rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-900 shadow-lg transition">
              <span className="relative z-10">Launch Something</span>
              <span className="absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
            </button>

            <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Pretend You Understand
            </button>
          </div>

          {/* Feature cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { title: "Design", desc: "Suspiciously clean" },
              { title: "Code", desc: "Barely chaotic" },
              { title: "Effort", desc: "Minimum viable genius" },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-cyan-400/40 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">{item.title}</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  {item.desc}
                </p>
                <div className="mt-3 h-1 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}