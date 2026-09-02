import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope, Great_Vibes } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Nawaz | Wedding Invitation",
  description:
    "A dreamy wedding invitation celebrating the special day of Muhammad Nawaz. We can't wait to celebrate with you.",
  openGraph: {
    title: "Muhammad Nawaz | Wedding Invitation",
    description: "You are warmly invited to celebrate the wedding of Muhammad Nawaz. See you at the celebration!",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#FDEBE7",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} ${greatVibes.variable}`}
    >
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}