import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "City Doctor - Healthcare At Your Doorstep",
  description: "Premier healthcare services at your doorstep in Dubai. Doctor home visits, IV vitamin drips, physiotherapy, and lab tests delivered to your home in 30-45 minutes.",
  keywords: "doctor home visit dubai, iv drip dubai, physiotherapy at home dubai, lab tests at home dubai, healthcare dubai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
