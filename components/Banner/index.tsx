import { UpdateFollower } from "@/lib/MouseFollower";
import { motion } from "framer-motion";
import { AiOutlineLike } from "react-icons/ai";
function Banner() {
  const mouseOptions = {
    zIndex: 2,
    backgroundColor: "transparent",
    scale: 4,
    mixBlendMode: "difference",
    radius: 50,
    backgroundElement: (
      <motion.div
        className=""
        animate={{
          scale: [1, 2, 1, 2, 1],
          rotate: [0, 45, 0, -45, 0],
        }}
        transition={{
          duration: 3,
          times: [0, 0.2, 0.4, 0.6, 0.8],
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <AiOutlineLike className=" text-orange-600 opacity-60 text-xs" />
      </motion.div>
    ),
  };
  return (
    <UpdateFollower mouseOptions={mouseOptions}>
      <div className="flex flex-col gap-4 cursor-pointer bg-transparent sm:py-40 py-60 items-center relative w-full max-w-[1920px] mx-auto rounded-none">
        <img
          alt=""
          src="/background.png"
          className=" absolute top-0 left-0 w-[100vw] h-full -z-10 opacity-75 object-cover "
        />
        <motion.p
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className=" text-xl font-semibold sm:text-3xl  bg-transparent "
        >
          Hi, I am
        </motion.p>

        <motion.h1
          className="text-5xl font-bold sm:text-7xl text-center text-gray-200 bg-transparent text-stroke-1 mix-blend-difference z-10"
          initial={{ scale: 0.3 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span>Damon</span> <span>Chen</span>{" "}
        </motion.h1>
        <div className=" mx-auto max-w-4xl text-center pt-[60px] pb-40 font-normal lg:flex items-center md:text-2xl text-xl sm:text-left px-4">
          <p className=" text-center mix-blend-lighten text-white">
            A skilled software developer, having a copious amount of experience
            in creating robust digital solutions. With professionalism, loves to
            bring ideas to life.
          </p>
        </div>
      </div>
    </UpdateFollower>
  );
}

export default Banner;
