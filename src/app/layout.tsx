import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeRegistry } from '@/components/ThemeRegistry'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OTT Device Matrix',
  description: 'A comprehensive matrix of OTT device compatibility information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
