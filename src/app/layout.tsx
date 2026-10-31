import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rashida Akther | Full-Stack Software Engineer",
  description: "Passionate Full-Stack Developer creating modern and responsive web experiences with clean design and smooth performance.",
  keywords: ["Frontend Developer", "React", "Tailwind CSS", "Web Development", "UI/UX"],
  authors: [{ name: "Rashida Akther" }],
  openGraph: {
    title: "Rashida Akther | Full-Stack Software Engineer",
    description: "Passionate Frontend Developer creating modern and responsive web experiences.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f1a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#0b0f1a] min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}