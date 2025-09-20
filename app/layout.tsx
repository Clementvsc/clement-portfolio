import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Sahaya Clement Vincent Martin | DevOps & Cloud Engineer',
    template: '%s | Sahaya Clement Vincent Martin'
  },
  description: 'DevOps and Cloud Engineer specializing in automation, infrastructure-as-code, and platform engineering. Expert in Terraform, Kubernetes, AWS, Azure, and modern CI/CD practices.',
  keywords: [
    'DevOps Engineer',
    'Cloud Engineer', 
    'Platform Engineer',
    'Terraform',
    'Kubernetes',
    'AWS',
    'Azure',
    'CI/CD',
    'Infrastructure as Code',
    'Python',
    'Docker',
    'GitOps'
  ],
  authors: [{ name: 'Sahaya Clement Vincent Martin' }],
  creator: 'Sahaya Clement Vincent Martin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clementvsc.github.io',
    title: 'Sahaya Clement Vincent Martin | DevOps & Cloud Engineer',
    description: 'DevOps and Cloud Engineer specializing in automation, infrastructure-as-code, and platform engineering.',
    siteName: 'Clement Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahaya Clement Vincent Martin | DevOps & Cloud Engineer',
    description: 'DevOps and Cloud Engineer specializing in automation, infrastructure-as-code, and platform engineering.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 transition-colors duration-500">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <div className="relative min-h-screen flex flex-col">
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -inset-10 opacity-70">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
              </div>
            </div>
            
            {/* Content wrapper with glassmorphism */}
            <div className="relative z-10 flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
