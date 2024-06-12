import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { SiCodingninjas } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const workData = [
  {
    title: "Frontend developer internship",
    company: "iShare Incubator Corporation",
    date: "May 2020 - AUG 2020",
  },
  {
    title: "Frontend developer",
    company: "Aqtiv",
    date: "AUG 2020- OCT 2021",
  },
  {
    title: "Backend developer",
    company: "Joidea",
    date: "OCT 2022 - Present",
  },
  {
    title: "Freelancer developer",
    company: "Fun tech",
    date: "May 2023 - Present",
  },
];

function Timeline() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div
      ref={container}
      className=" max-w-6xl mx-auto mt-[10vh] relative flex flex-col"
    >
      <h1 className=" font-bold mb-8 text-center md:text-6xl text-5xl">
        Working experience
      </h1>
      <VerticalTimeline lineColor="black">
        {workData.map((exp, i) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: `7px solid black` }}
              date={exp.date}
              iconStyle={{ background: "black", color: "white" }}
              textClassName="border border-black shadow-lg"
              icon={<SiCodingninjas />}
              key={i}
            >
              <h1 className="font-sono font-semibold text-2xl">{exp.title}</h1>
              <h1 className="font-sono font-medium text-lg">{exp.company}</h1>
              {/* <p className="text-lg">{exp.description}</p>
              <p>
                <span className="font-semibold">Skills -</span> {exp.tech}
              </p> */}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <motion.div style={{ height }} className=" bg-red-500 relative mt-28">
        <div className=" h-[1550%] w-[120%] left-[-10%] rounded-b-full bg-white z-10 absolute shadow-2xl top-0 "></div>
      </motion.div>
    </div>
  );
}

export default Timeline;
