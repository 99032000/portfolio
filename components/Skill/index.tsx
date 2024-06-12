import { SkillData } from "@/components/Skill/SkillData";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

function Skill() {
  const skillCategories = useMemo(
    () => SkillData.map((skill) => skill.category),
    []
  );
  const [tab, setTab] = useState<number>(0);
  return (
    <div className=" mt-8 max-w-6xl mx-auto">
      <h1 className=" font-bold mb-8 text-center md:text-6xl text-5xl">
        My Skills
      </h1>
      <div className="flex gap-3 justify-center items-center flex-wrap">
        {skillCategories.map((skill, i) => {
          return (
            <p
              key={i}
              className={`px-4 py-2 text-base md:text-2xl font-semibold rounded-xl cursor-pointer hover:bg-black hover:text-white transition-colors ${
                tab === i ? "text-white bg-black" : ""
              }`}
              onClick={() => {
                setTab(i);
              }}
            >
              {skill}
            </p>
          );
        })}
      </div>
      <div className="grid grid-cols-2 justify-items-center items-center gap-8 md:grid-cols-4 sm:grid-cols-3 mt-8 p-4">
        {SkillData[tab].skills.map((skill, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 + 0.1 }}
              viewport={{ once: true, amount: 1 }}
              key={`${skillCategories[tab]}-${skill.name}`}
              className="px-10 py-4 bg-neutral-100 border border-neutral-700 rounded-xl w-full flex justify-center gap-2 items-center"
            >
              <p className="min-w-[20px]">{skill.icon}</p>
              <p>{skill.name}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Skill;
