export default function Home() {
  const FEATURES = [
    { icon: "⚡", title: "Per-Second Precision", desc: "Tokens flow every second, not every month. Recipients see earnings accrue in real time." },
    { icon: "🔒", title: "Non-Custodial", desc: "Funds stay in Soroban smart contracts. No intermediary ever holds your tokens." },
    { icon: "⏸️", title: "Pause & Resume", desc: "Senders can pause streams at any time. Clocked time stops; recipients keep what they earned." },
    { icon: "💸", title: "Cancel & Settle", desc: "Cancel anytime. Recipients receive earned tokens instantly; unearned funds return to sender." },
    { icon: "🌍", title: "Any Stellar Asset", desc: "Stream XLM, USDC, or any Stellar-based token. No wrapping, no bridging." },
    { icon: "📊", title: "On-Chain History", desc: "Every stream creation, claim, and cancellation is recorded on the Stellar blockchain." },
  ];

  const STEPS = [
    { n: "01", title: "Connect Wallet",   desc: "Link your Stellar wallet via Freighter. No sign-up, no email." },
    { n: "02", title: "Create a Stream",  desc: "Set a recipient, token, rate per second, and deposit amount." },
    { n: "03", title: "Tokens Flow Live", desc: "The contract streams tokens continuously from the first second." },
    { n: "04", title: "Claim Any Time",   desc: "Recipients withdraw accrued tokens whenever they want — one click." },
  ];

  const USECASES = [
    { icon: "💼", title: "Payroll",       desc: "Pay employees per second. No more waiting for month-end payroll cycles." },
    { icon: "📱", title: "Subscriptions", desc: "Charge users per second of usage. Stop overpaying for services you barely use." },
    { icon: "🎓", title: "Grants",        desc: "Stream grant funding to builders. Milestone-free, trust-minimised disbursement." },
    { icon: "🤝", title: "Vesting",       desc: "Stream token vesting to team members. Automatic, transparent, unstoppable." },
  ];

  const TICKS = [
    "GAXYZ...3A4B streamed +0.035 XLM",
    "GBCD...7E2F claimed 12.4 USDC",
    "GCDE...1F9C created stream 0.001 XLM/sec",
    "GDEF...5F1C paused stream #1042",
    "GHIJ...9B3D top-up 500 XLM",
    "GKLM...4C3E claimed 8.9 XLM",
    "GNOP...2D7F new stream 0.05 USDC/sec",
    "GQRS...6E1G cancelled — 34 XLM refunded",
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center">
              <span className="text-xs font-black text-white">⚡</span>
            </div>
            <span className="text-sm font-bold text-white">OrbitStream</span>
          </div>
          <div className="hidden md:flex items-center gap-0.5">
            {["Features", "Use Cases", "Docs"].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`}
                className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/60 rounded-md transition-colors">
                {l}
              </a>
            ))}
          </div>
          <a href="https://github.com/OrbitStream"
            className="px-3.5 py-1.5 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors">
            Launch App
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-4 sm:px-6 pt-20 sm:pt-28 pb-16 sm:pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/svg%3E\")" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-indigo-600/15 blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950 border border-indigo-800 mb-7">
            <div className="w-2 h-2 rounded-full bg-indigo-400 pulse" />
            <span className="text-xs font-medium text-indigo-300">Live on Stellar Testnet</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white mb-5">
            Stream tokens.<br />
            <span className="text-indigo-400">Every second.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto mb-9 leading-relaxed">
            OrbitStream lets you send continuous token flows on Stellar. Pay salaries, subscriptions,
            and grants per-second — all secured by Soroban smart contracts.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
            <a href="https://github.com/OrbitStream"
              className="px-7 py-3 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors min-h-[44px] flex items-center justify-center">
              Launch App →
            </a>
            <a href="https://github.com/OrbitStream/orbitstream-contracts" target="_blank" rel="noopener noreferrer"
              className="px-7 py-3 text-sm font-semibold text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg transition-colors min-h-[44px] flex items-center justify-center">
              View Contracts
            </a>
          </div>

          <div className="inline-block bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-5 text-left">
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Live stream demo</p>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-black font-mono text-indigo-400 tabular-nums">0.0347</span>
              <span className="text-sm font-bold text-zinc-500">XLM/sec</span>
            </div>
            <div className="w-64 h-[3px] bg-zinc-800 rounded-full overflow-hidden">
              <div className="stream-bar" />
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="relative overflow-hidden py-3 border-y border-zinc-800 bg-zinc-900/40">
        <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="marquee">
          {[...TICKS, ...TICKS].map((t, i) => (
            <div key={i} className="flex items-center gap-2.5 px-6 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
              <span className="text-xs text-zinc-400">{t}</span>
              <span className="text-zinc-700 mx-2">·</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[{n:"∞",l:"Streams/sec"},{n:"$0",l:"Protocol Fees"},{n:"5s",l:"Stellar Finality"},{n:"100%",l:"Non-Custodial"}].map(s => (
            <div key={s.l} className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-5 text-center">
              <div className="text-2xl sm:text-3xl font-black font-mono text-white mb-0.5">{s.n}</div>
              <div className="text-xs text-zinc-500">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <section id="features" className="border-t border-zinc-800 bg-zinc-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <p className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-3">Features</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">Built for continuous value transfer.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map(f => (
              <div key={f.title} className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 hover:border-indigo-500/40 transition-colors">
                <span className="text-2xl mb-3 block">{f.icon}</span>
                <h3 className="font-semibold text-white mb-1.5 text-sm sm:text-base">{f.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <p className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-3">Use Cases</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">One protocol, many use cases.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {USECASES.map(u => (
            <div key={u.title} className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 flex gap-4 hover:border-indigo-500/40 transition-colors">
              <span className="text-2xl shrink-0">{u.icon}</span>
              <div>
                <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">{u.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{u.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-zinc-800 bg-zinc-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <p className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-3">How It Works</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">Start streaming in four steps.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-5 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-zinc-800" />
            {STEPS.map(s => (
              <div key={s.n} className="flex flex-row lg:flex-col gap-4 lg:gap-0">
                <div className="relative shrink-0">
                  <div className="w-10 h-10 rounded-xl border border-zinc-700 bg-zinc-800 flex items-center justify-center lg:mb-5 z-10 relative">
                    <span className="text-xs font-black text-indigo-400">{s.n}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1.5 text-sm">{s.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Start streaming today.</h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
            Connect your Freighter wallet and launch your first token stream in under a minute.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="https://github.com/OrbitStream"
              className="px-8 py-3 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors min-h-[44px] flex items-center justify-center">
              Launch App →
            </a>
            <a href="https://github.com/OrbitStream/orbitstream-docs" target="_blank" rel="noopener noreferrer"
              className="px-8 py-3 text-sm font-semibold text-zinc-300 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-colors min-h-[44px] flex items-center justify-center">
              Read the Docs
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-4 sm:px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-indigo-600 flex items-center justify-center">
              <span className="text-[10px] font-black text-white">⚡</span>
            </div>
            <span className="text-sm font-bold text-white">OrbitStream</span>
          </div>
          <div className="flex items-center gap-4">
            {[["GitHub","https://github.com/OrbitStream"],["Contracts","https://github.com/OrbitStream/orbitstream-contracts"],["Backend","https://github.com/OrbitStream/OrbitStream_backend"]].map(([l,h]) => (
              <a key={l} href={h} target="_blank" rel="noopener noreferrer"
                className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">{l}</a>
            ))}
          </div>
          <p className="text-xs text-zinc-700">© 2026 OrbitStream Protocol</p>
        </div>
      </footer>
    </div>
  );
}
