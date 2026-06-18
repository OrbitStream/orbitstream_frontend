export default function Home() {
  const FEATURES = [
    { icon: "⚡", title: "5-Second Settlement", desc: "Payments confirm on Stellar in under 5 seconds. No waiting for block confirmations." },
    { icon: "💰", title: "$0.00001 Fees", desc: "The cheapest transaction fees of any major blockchain. Keep more of your revenue." },
    { icon: "🌍", title: "Multi-Asset Support", desc: "Accept USDC, EURC, or XLM. Display prices in your preferred fiat currency." },
    { icon: "🔔", title: "Webhook Notifications", desc: "Get instant payment.confirmed events delivered to your server. No polling required." },
    { icon: "🧩", title: "JS SDK & Widgets", desc: "Drop a checkout widget on any page or redirect to a hosted payment link. 10-minute integration." },
    { icon: "🏦", title: "Fiat Settlement", desc: "Settle to USD/EUR via Stellar anchors. Cash out at 350K+ MoneyGram locations worldwide." },
  ];

  const STEPS = [
    { n: "01", title: "Sign Up", desc: "Connect your Stellar wallet. Get an API key instantly. No paperwork." },
    { n: "02", title: "Integrate", desc: "Add our JS SDK or use hosted checkout links. Three lines of code." },
    { n: "03", title: "Accept Payments", desc: "Customers pay with USDC or XLM. You get notified via webhooks in real time." },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center">
              <span className="text-xs font-black text-white">O</span>
            </div>
            <span className="text-sm font-bold text-white">OrbitStream</span>
          </div>
          <div className="hidden md:flex items-center gap-0.5">
            {["Features", "How It Works", "Docs"].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`}
                className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/60 rounded-md transition-colors">
                {l}
              </a>
            ))}
          </div>
          <a href="/merchant"
            className="px-3.5 py-1.5 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors">
            Dashboard
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
            Accept Stellar payments.<br />
            <span className="text-indigo-400">In minutes.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto mb-9 leading-relaxed">
            Stripe-like checkout for the Stellar network. Drop a payment widget on your site,
            get instant webhooks, and settle to fiat — with 5-second finality and near-zero fees.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
            <a href="/merchant"
              className="px-7 py-3 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors min-h-[44px] flex items-center justify-center">
              Get Started →
            </a>
            <a href="#how-it-works"
              className="px-7 py-3 text-sm font-semibold text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg transition-colors min-h-[44px] flex items-center justify-center">
              How It Works
            </a>
          </div>

          <div className="inline-block bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-5 text-left">
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Integration preview</p>
            <pre className="text-sm font-mono text-zinc-300">
              <span className="text-indigo-400">const</span> session = <span className="text-indigo-400">await</span> checkout.<span className="text-emerald-400">createSession</span>({'{\n'}
              {'  '}amount: <span className="text-amber-300">25.00</span>,{'\n'}
              {'  '}asset: <span className="text-emerald-300">{`"USDC"`}</span>,{'\n'}
              {'  '}successUrl: <span className="text-emerald-300">{`"https://example.com/success"`}</span>{'\n'}
              {'}'});
            </pre>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[{n:"~5s",l:"Settlement Time"},{n:"$0.00001",l:"Transaction Fee"},{n:"$83M+",l:"USDC on Stellar"},{n:"350K+",l:"MoneyGram Locations"}].map(s => (
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">Everything you need to accept Stellar payments.</h2>
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

      {/* How It Works */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <p className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-3">How It Works</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">Start accepting payments in three steps.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
          <div className="hidden sm:block absolute top-5 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px bg-zinc-800" />
          {STEPS.map(s => (
            <div key={s.n} className="flex flex-row sm:flex-col gap-4 sm:gap-0">
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-xl border border-zinc-700 bg-zinc-800 flex items-center justify-center sm:mb-5 z-10 relative">
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
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Ready to accept Stellar payments?</h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
            Connect your wallet, get an API key, and start accepting USDC payments in under 10 minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="/merchant"
              className="px-8 py-3 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors min-h-[44px] flex items-center justify-center">
              Get Started →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-4 sm:px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-indigo-600 flex items-center justify-center">
              <span className="text-[10px] font-black text-white">O</span>
            </div>
            <span className="text-sm font-bold text-white">OrbitStream</span>
          </div>
          <p className="text-xs text-zinc-700">Built on Stellar</p>
        </div>
      </footer>
    </div>
  );
}
