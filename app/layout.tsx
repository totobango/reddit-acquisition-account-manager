import type { Metadata, Viewport } from "next";
import { Reddit_Sans, Reddit_Mono } from "next/font/google";
import "./globals.css";

/* Reddit Sans and Reddit Mono are Reddit's own commissioned typefaces (2023),
   and what the current product actually renders. More authentic than the
   IBM Plex Sans of the 2018 redesign era, which stays in the fallback stack. */
const redditSans = Reddit_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-reddit-sans",
});

const redditMono = Reddit_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-reddit-mono",
});

const SITE_URL = "https://reddit-acquisition-account-manager.vercel.app";

const description =
  "A pitch by Thomas Germain for the Acquisition Account Manager role at Reddit, Amsterdam. Built as a subreddit, because the medium is the message.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "r/FRITES · Acquisition Account Manager, Mid-Market Southern Europe",
  description,
  applicationName: "r/FRITES",
  authors: [{ name: "Thomas Germain" }],
  creator: "Thomas Germain",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "r/FRITES",
    title: "r/FRITES · Acquisition Account Manager, Mid-Market Southern Europe",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "r/FRITES · Acquisition Account Manager, Mid-Market Southern Europe",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${redditSans.variable} ${redditMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
