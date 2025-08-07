import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Soumyadip Sarkar - Software Engineer',
  description: 'Backend engineer specializing in high-scale distributed systems. 4+ years at Salesforce, Flipkart, ShareChat, Myntra. Currently pursuing MS at Texas A&M.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
