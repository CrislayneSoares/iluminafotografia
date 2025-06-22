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
  title: "Ilumina Fotografia - Galeria de Retratos",
  description: "Capturando a emoção e a magia em cada retrato. Galeria de fotografia artística focada em retratos que transmitem sentimentos profundos.",
  keywords: "fotografia, retratos, galeria, arte, emoção, magia, ilumina fotografia",
  authors: [{ name: "Ilumina Fotografia" }],
  openGraph: {
    title: "Ilumina Fotografia - Galeria de Retratos",
    description: "Capturando a emoção e a magia em cada retrato",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
