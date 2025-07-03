import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ilumina Fotografia - Galeria Visual Artística",
  description: "Galeria de fotografia artística que captura a poesia das paisagens, a luz que acaricia e a beleza das estações. Cada imagem é um silêncio que toca, uma luz que revela o que o mundo apressado não nos permite ver.",
  keywords: "fotografia artística, galeria visual, paisagens, natureza, luz, arte fotográfica, ilumina fotografia, fotografia poética, contemplação visual",
  authors: [{ name: "Ilumina Fotografia" }],
  creator: "Ilumina Fotografia",
  publisher: "Ilumina Fotografia",
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
  alternates: {
    canonical: 'https://ilumina-fotografia.vercel.app/',
  },
  icons: {
    icon: [
      { url: '/imgs/imagem4.jpeg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/imgs/imagem4.jpeg', sizes: '16x16', type: 'image/jpeg' },
    ],
    shortcut: '/imgs/imagem4.jpeg',
    apple: '/imgs/imagem4.jpeg',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Ilumina Fotografia - Galeria Visual Artística",
    description: "Galeria de fotografia artística que captura a poesia das paisagens, a luz que acaricia e a beleza das estações.",
    type: "website",
    url: 'https://ilumina-fotografia.vercel.app/',
    siteName: 'Ilumina Fotografia',
    locale: 'pt_BR',
    images: [
      {
        url: '/imgs/imagem4.jpeg',
        width: 1200,
        height: 630,
        alt: 'Ilumina Fotografia - Galeria Visual Artística',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ilumina Fotografia - Galeria Visual Artística',
    description: 'Galeria de fotografia artística que captura a poesia das paisagens e a luz que acaricia.',
    images: ['/imgs/imagem4.jpeg'],
    creator: '@iluminafotografia_',
  },
  verification: {
    google: 'your-google-verification-code', // Adicione seu código quando tiver
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link
          rel="preload"
          href="/imgs/imagem4.jpeg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="dns-prefetch"
          href="//fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
