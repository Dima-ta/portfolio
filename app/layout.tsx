import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTransition } from "@/components/PageTransition";
import { BackgroundManager } from "@/components/BackgroundManager";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"], weight: ["600", "800"], variable: "--font-poppins"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dima-tallaa.vercel.app"),
  title: "Dima TALLAA _ Software Engineer / Full-stack Developer",
  description: "Professional portfolio built with Next.js and TailwindCSS.",
  openGraph: {
    title: "Dima TALLAA _ Software Engineer / Full-stack Developer",
    description: "Professional portfolio built with Next.js and TailwindCSS.",
    url: "https://dima-tallaa.vercel.app",
    siteName: "Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: "/DT Logo/DT_logo.svg",
    apple: "/DT Logo/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning={true} className={`${inter.className} ${poppins.variable} flex min-h-screen flex-col bg-transparent overflow-x-hidden`}>
        <div className="pointer-events-none fixed inset-0 -z-20">
          <BackgroundManager />
        </div>
        <Header />
        <main className="flex-1 bg-transparent">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
