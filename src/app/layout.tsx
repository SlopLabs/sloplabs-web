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
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    url: "https://sloplabs.net",
    siteName: "SlopLabs",
    title: "SlopLabs, hard systems problems handed to AI agents",
    description: "Home of SlopOS and slopcc. Every commit public.",
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
