"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Banner from "./banner";
import "./home.css";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <div className=" mx-auto max-w-4xl text-center pt-[60px] pb-40 font-normal lg:flex items-center text-2xl sm:text-left">
        <p className=" text-center">
          A skilled software developer, having a copious amount of experience in
          creating robust digital solutions. With professionalism, loves to
          bring ideas to life.
        </p>
      </div>
      <div className="flex flex-col gap-6 mb-20 items-center">
        <div className="text-6xl font-semibold flex flex-col gap-3 lg:text-5xl">
          <h2>Featured</h2>
          <h2 className="main-skills-head tracking-tighter">Projects</h2>
        </div>
      </div>
    </main>
  );
}
