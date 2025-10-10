import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Converso",
  description: "AI-powered learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased mb-8`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
