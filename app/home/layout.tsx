"use client";
import NavBar from "@/components/layout/NavBar";
import { FollowerProvider } from "@/components/MouseFollower";
import { Sono } from "next/font/google";
const inter = Sono({ subsets: ["latin"] });
export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <FollowerProvider visibleScreenWidth={640}>
          <NavBar />
          <section className=" bg-transparent mt-4">{children}</section>
        </FollowerProvider>
      </body>
    </html>
  );
}
