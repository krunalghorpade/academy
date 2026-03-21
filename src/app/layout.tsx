import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Footer from "@/components/layout/Footer";
import Tracking from "@/components/Tracking";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kratex Music Academy | Build For The Stage",
  description: "From listener to performer. Join Kratex Music Academy in Pune for a premium DJing and Music Production curriculum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body className="font-sans min-h-full flex flex-col bg-background text-foreground">
        <Tracking />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
