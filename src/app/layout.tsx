import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kushank Garg — Software Engineer",
  description:
    "Kushank Garg — CS undergraduate at LNMIIT building production AI and full-stack systems with React, Next.js, TypeScript, Node.js, and AWS.",
  keywords: [
    "Kushank Garg",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "LNMIIT",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Kushank Garg" }],
  openGraph: {
    title: "Kushank Garg — Software Engineer",
    description:
      "CS undergraduate building production AI and full-stack systems with React, Next.js, TypeScript, Node.js, and AWS.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-text">{children}</body>
    </html>
  );
}
