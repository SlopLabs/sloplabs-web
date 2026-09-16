import "@/styles/globals.css";

import { type Metadata, type Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://sloplabs.net"),
  title: {
    default: "SlopLabs, hard systems problems handed to AI agents",
    template: "%s | SlopLabs",
  },
  description:
    "SlopLabs hands hard systems problems to AI agents, then builds the gates that check what comes back. Home of SlopOS and slopcc. Every commit public.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    url: "https://sloplabs.net",
    siteName: "SlopLabs",
    title: "SlopLabs, hard systems problems handed to AI agents",
    description: "Home of SlopOS and slopcc. Every commit public.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SlopLabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SlopLabs, hard systems problems handed to AI agents",
    description: "Home of SlopOS and slopcc. Every commit public.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#08090a",
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
