import "@/styles/globals.css";

import { type Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";

export const metadata: Metadata = {
  title: "SlopLabs",
  description:
    "SlopLabs is a collective building programs and operating systems with AI.",
  metadataBase: new URL("https://sloplabs.net"),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${fraunces.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
