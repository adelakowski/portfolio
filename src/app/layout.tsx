import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClickSpark from "@/components/ClickSpark";
import Beams from "@/components/Beams";
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
  title: "Axel Delakowski",
  description: "A creative portfolio built with Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col text-gray-900 dark:text-gray-100 selection:bg-accent selection:text-white relative`}
      >
        <Navbar />
        <ClickSpark />
        <Beams />
        <main className="flex-grow pt-20 flex flex-col relative z-10">
          {children}
        </main>
        <Footer className="relative z-10" />
      </body>
    </html>
  );
}
