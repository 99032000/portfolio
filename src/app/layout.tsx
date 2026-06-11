import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Damon | Full Stack Developer & AI Engineer",
  description:
    "Portfolio of Damon — full stack developer specialising in Next.js, AI agents, RAG and e-commerce. Chat with my AI assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
