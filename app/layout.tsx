import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "bloblob - A liquid asset generator.",
  description: "Generate liquid visuals. Export video, image or code. 100% free. No login required."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} bg-base text-zinc-100 antialiased`}>{children}</body>
    </html>
  );
}
