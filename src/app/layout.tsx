import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import SkipLink from "@/components/SkipLink";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Axel Delakowski | Biomedical & Software Engineer",
  description:
    "Portfolio of Axel Delakowski — biomedical engineer and software engineer building clinical AI systems, production ML infrastructure, and healthcare software.",
  openGraph: {
    title: "Axel Delakowski | Biomedical & Software Engineer",
    description:
      "Building clinical AI systems and production ML infrastructure. MAS-CS (AI Concentration) at UPenn.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} antialiased min-h-dvh flex flex-col text-gray-100 selection:bg-accent selection:text-white relative`}
      >
        <SkipLink />
        <Navbar />
        <BackgroundEffects />
        <main id="main-content" className="flex-grow pt-20 flex flex-col relative z-10">
          {children}
        </main>
        <Footer className="relative z-10" />
      </body>
    </html>
  );
}
