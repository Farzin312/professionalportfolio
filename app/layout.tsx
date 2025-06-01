import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Primary font: Poppins (professional yet friendly)
const poppins = Poppins({
  variable: "--font-sans",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

// Monospace for code snippets: JetBrains Mono (modern, fun)
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Upstride – Backend & AI Integrations",
  description:
    "Modular AI lead-gen, analytics, auth/security, microservices, and more—built for businesses and engineering teams.",
  openGraph: {
    title: "Upstride – AI & Backend Integrations",
    description:
      "Specializing in SEO, payments, finance automation, analytics, and secure auth modules.",
    url: "https://yourdomain.com", // Update when you purchase your domain
    images: [{ url: "https://yourdomain.com/og-image.jpg", width: 1200, height: 630 }],
    siteName: "Upstride",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Company – AI & Backend Integrations",
    description: "Modular services to supercharge your site, without rebuilding end-to-end.",
    images: ["https://yourdomain.com/twitter-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Custom favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.variable} ${jetBrainsMono.variable} antialiased`}>        
        <Navbar />
        <div className="w-full min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
