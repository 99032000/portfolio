"use client";
import Banner from "../../components/Banner";
import "./home.css";
import FeatureWork from "../../components/FeatureWork.ts";
import Skill from "../../components/Skill";
import Timeline from "./Timeline";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from '../../components/Preloader';
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect( () => {
    (
      async () => {
          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])
  return (
    <main className="min-h-screen">
       <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Banner />
      <div className=" mx-auto max-w-4xl text-center pt-[60px] pb-40 font-normal lg:flex items-center md:text-2xl text-xl sm:text-left px-4">
        <p className=" text-center">
          A skilled software developer, having a copious amount of experience in
          creating robust digital solutions. With professionalism, loves to
          bring ideas to life.
        </p>
      </div>
      <div className="flex flex-col gap-6 mb-20 items-center">
        <div className="text-5xl font-semibold flex flex-col gap-3 lg:text-6xl">
          <h2>Featured</h2>
          <h2 className="main-skills-head tracking-tighter">Projects</h2>
        </div>
      </div>
      <FeatureWork />
      <Skill />
      <Timeline />
    </main>
  );
}
