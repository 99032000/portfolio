import { UpdateFollower } from "@/components/MouseFollower";
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
        <AiOutlineLike className=" text-blue-700 text-xs" />
      </motion.div>
    ),
  };
  return (
    <UpdateFollower mouseOptions={mouseOptions}>
      <div className="flex flex-col gap-4 cursor-pointer bg-transparent sm:py-40 py-60 items-center relative w-full rounded-none">
        <video
          autoPlay
          muted
          loop
          className=" absolute top-0 left-0 w-[100vw] h-full -z-10 opacity-50 object-cover "
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <motion.p
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className=" text-xl font-semibold sm:text-3xl  bg-transparent "
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="text-5xl font-bold sm:text-7xl text-center text-white bg-transparent text-stroke-1 mix-blend-color-burn z-10"
          initial={{ scale: 0.3 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span>Damon</span> <span>Chen</span>{" "}
        </motion.h1>
      </div>
    </UpdateFollower>
  );
}

export default Banner;
