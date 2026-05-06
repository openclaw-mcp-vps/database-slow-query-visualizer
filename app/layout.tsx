import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SlowQuery — Visualize Database Performance Bottlenecks',
  description: 'Connect to Postgres or MySQL, identify slow queries, visualize execution plans, and get AI-powered index optimization suggestions.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a6b82de2-a8a8-4b34-9fc6-ef530c0e748b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
