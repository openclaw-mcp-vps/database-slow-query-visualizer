export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Tool
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Visualize Database{' '}
          <span className="text-[#58a6ff]">Performance Bottlenecks</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect Postgres or MySQL, instantly surface slow queries, explore execution plans visually, and receive AI-powered index recommendations — all in one dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start for $25/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '⚡', title: 'Slow Query Detection', desc: 'Automatically flags queries exceeding your threshold with full context.' },
            { icon: '🗺️', title: 'Execution Plan Viewer', desc: 'Interactive tree visualization of EXPLAIN ANALYZE output.' },
            { icon: '🤖', title: 'AI Index Suggestions', desc: 'GPT-powered recommendations for missing or redundant indexes.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-4">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-2">$25<span className="text-xl text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] mb-8">Everything you need to keep your database fast</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited database connections',
              'Real-time slow query alerts',
              'Execution plan visualizer',
              'AI index optimization suggestions',
              'Background metric collection',
              'Email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Which databases are supported?',
              a: 'PostgreSQL (v12+) and MySQL (v8+) are fully supported. Connection is made via a secure connection string — your credentials are encrypted at rest.'
            },
            {
              q: 'How does the AI index suggestion work?',
              a: 'We send anonymized query patterns and table schemas to GPT-4. No actual data rows are ever transmitted — only structural metadata.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period with no questions asked.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} SlowQuery. Built for backend developers.
      </footer>
    </main>
  )
}
