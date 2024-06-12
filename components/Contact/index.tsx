import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../../common/Magnetic";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div
      style={{ y }}
      ref={container}
      className=" mt-[500px] text-white flex flex-col items-center justify-center bg-slate-900 relative"
    >
      <div className=" py-[200px] w-full max-w-[1920px] bg-slate-900 text-xl">
        <div className=" md:hidden w-full pl-8 font-semibold text-2xl ">
          <h1>Contact Me :)</h1>
        </div>
        <div className=" rounded-b-sm pt-24 mx-52 relative hidden md:flex">
          <span className="flex items-center text-2xl font-semibold ">
            <h2>Contact me</h2>
          </span>
          <h2>:)</h2>
          <motion.div
            style={{ x }}
            className=" absolute left-[calc(100%-100px)] top-[calc(100%-35px) md:left-[calc(100%-400px)] md:top-[calc(100%-75px)]"
          >
            <Rounded
              backgroundColor={"#334BD3"}
              className=" w-32 h-32 bg-blue-700 text-white rounded-full absolute flex justify-center items-center cursor-pointer"
            >
              <p className=" m-0 font-light z-10 relative text-center">
                Get in touch
              </p>
            </Rounded>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" absolute top-[30%] left-8"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-24 px-8 mx-auto w-full">
          <Rounded>
            <p className=" text-base md:text-xl">damon.pengyu.chen@gmail.com</p>
          </Rounded>
          <Rounded>
            <p>+61420464124</p>
          </Rounded>
        </div>
      </div>
    </motion.div>
  );
}
