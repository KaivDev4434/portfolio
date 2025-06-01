import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClientProviders from "@/components/layout/ClientProviders";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ 
  weight: ["400", "700"], 
  subsets: ["latin"], 
  variable: "--font-roboto" 
});

export const metadata: Metadata = {
  title: "Data Science Portfolio",
  description: "Portfolio website for a graduating MS in Data Science student",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable} light`} style={{colorScheme: "light"}}>
      <body className="bg-background text-text">
        <ClientProviders>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
