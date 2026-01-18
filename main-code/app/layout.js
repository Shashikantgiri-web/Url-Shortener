import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bitlink - URL Shortener",
  description: "The most straightforward URL shortener in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-[98%] min-h-[180vh] max-h-[210vh] flex flex-col justify-start items-center overflow-hidden bg-[#e8ad61] text-[#441306] px-1.5">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
