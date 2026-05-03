import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoice Payment Predictor — Know Who Pays Late',
  description: 'Predict which invoices will be paid late using AI-powered scoring based on customer history, invoice amount, and due date patterns.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="408b3a43-29ad-4749-9eda-8f7e34af4368"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
