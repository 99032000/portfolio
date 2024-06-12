"use client";
import Banner from "../../components/Banner";
import "./home.css";
import FeatureWork from "../../components/FeatureWork.ts";
import Skill from "../../components/Skill";
import Timeline from "../../components/Timeline";
import Contact from "../../components/Contact";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../../components/Preloader";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Banner />
      <FeatureWork />
      <Skill />
      <Timeline />
      <Contact />
    </main>
  );
}
