"use client";
import NavBar from "@/components/Layout/NavBar";
import { FollowerProvider } from "@/lib/MouseFollower";
import { Sono } from "next/font/google";
const inter = Sono({ subsets: ["latin"] });
export default function HomeLayout({
  children, // will be a page or nested layout
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FollowerProvider visibleScreenWidth={640}>
          <NavBar />
          <section className=" bg-transparent mt-4">{children}</section>
        </FollowerProvider>
      </body>
    </html>
  );
}
