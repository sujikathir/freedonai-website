import type { Metadata } from "next";
import { Nunito, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FreeDon AI — Your AI tutor for real conversation",
  description:
    "Learn by speaking. FreeDon AI is an AI language tutor that focuses on speaking—real conversations, real practice, so you can actually use the language.",
  openGraph: {
    title: "FreeDon AI — Your AI tutor for real conversation",
    description:
      "Learn by speaking. Real conversations with an AI tutor. Practice when you want, at your level.",
    url: "https://freedonai.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${dmSans.variable}`}>
      <body className="font-body min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
