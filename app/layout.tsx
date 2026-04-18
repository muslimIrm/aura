import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { AuroraBackgroundDemo } from "./background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Aura | AI Model Directory',
    template: '%s | Aura'
  },
  description: 'Aura is your premier destination to explore and discover the world’s most advanced AI models. Browse our extensive library and check out our specialized section for the smartest AI technologies.',
  keywords: ['AI Models', 'Artificial Intelligence', 'Aura AI', 'Smartest AI', 'AI Directory', 'Machine Learning'],
  openGraph: {
    title: 'Aura | Explore AI Models',
    description: 'Discover the future of AI with Aura’s curated model library.',
    url: 'https://your-aura-link.com',
    siteName: 'Aura',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <AuroraBackgroundDemo>

          <div className="z-20">
            {children}
          </div>
        </AuroraBackgroundDemo>
      </body>
    </html>
  );
}
