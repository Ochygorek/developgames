import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Develop games',
    default: 'Develop games'
  },
  description: "Wanna make a game, but don't know where to start or you are already a developer and need a free resources? On develop.games you can find information from Jason Thor Hall's +20 years of experience.",
  openGraph: {
    title: {
      template: '%s | Develop games',
      default: 'Develop games'
    },
    url: 'https://developgames.vercel.app/',
    description: "Wanna make a game, but don't know where to start or you are already a developer and need a free resources? On develop.games you can find information from Jason Thor Hall's +20 years of experience.",
    siteName: 'Develop games',
    images: [
      {
        url: '/link.jpg',
        width: 1200,
        height: 630
      }
    ],
    type: 'website',
  },
  keywords: [],
  twitter: {
    card: 'summary_large_image',
    title: 'Develop games',
    description: "Wanna make a game, but don't know where to start or you are already a developer and need a free resources? On develop.games you can find information from Jason Thor Hall's +20 years of experience.",
    creator: '@CodedByCoffeCup',
    images: ['link.jpg'], // Must be an absolute URL
  },
  metadataBase: new URL('https://developgames.vercel.app/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
