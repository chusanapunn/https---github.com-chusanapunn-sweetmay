import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import Header from "./components/Header";
// import Image from "next/image";
import Footer from './components/Footer';
import SessionProviderWrapper from './session-provide-wrapper';
import { Analytics } from "@vercel/analytics/react"
import Snowfall from "./components/snowFall";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "sweetmay",
  description: "homemade pastry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`divide-y h-dvh sm:h-full divide-black text-xs ${geistSans.variable} ${geistMono.variable}`} 
      >
      <Analytics></Analytics>
      <SessionProviderWrapper key="unique">

          <Header></Header>
          {children}
          <Footer></Footer>
      </SessionProviderWrapper>
      </body>
    </html>
  );
}
