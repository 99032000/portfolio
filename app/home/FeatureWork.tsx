import { UpdateFollower } from "@/components/MouseFollower";
import { MouseSettings } from "@/types/mouseFollower";
import { motion } from "framer-motion";
import Image from "next/image";

function FeatureWork() {
  const mouseOptions = (color: string) => {
    return { zIndex: 10, backgroundColor: color, scale: 1 };
  };
  const imgMouseOptions = (color: string) => {
    return {
      zIndex: 10,
      backgroundColor: color,
      scale: 1,
      radius: 30,
      backgroundElement: <FWHover color={color} />,
    };
  };
  const containerVariants = {
    offscreen: {
      opacity: 0,
      y: -200,
    },
    onscreen: (rotate: number) => ({
      opacity: 1,
      y: 0,
      rotate: rotate,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    }),
  };
  return (
    <div className=" max-w-6xl mx-auto p-8">
      <UpdateFollower
        mouseOptions={mouseOptions("pink")}
        className="mb-[10vh] "
      >
        <motion.div
          className="flex justify-center gap-4 flex-wrap md:flex-nowrap md:justify-start opa"
          initial={containerVariants.offscreen}
          whileInView={containerVariants.onscreen(-10)}
          viewport={{ once: true, amount: 0.8 }}
        >
          <UpdateFollower mouseOptions={imgMouseOptions("pink")}>
            <Image
              src="/angelsforest.png"
              width={400}
              height={400}
              alt="angelforest"
              className=" rounded-3xl -z-10 sm:min-w-[400px]"
            />
          </UpdateFollower>
          <div className=" my-auto text-center lg:text-left">
            <h1 className=" md:text-3xl font-bold mb-4 text-2xl">
              Angel Forest Massage
            </h1>
            <h1 className=" md:text-2xl text-xl font-semibold">
              React based display website
            </h1>
            <h2 className=" text-slate-700 md:text-2xl text-xl">
              React Angular Sendgrid Firebase hosting
            </h2>
          </div>
        </motion.div>
      </UpdateFollower>
      <UpdateFollower
        mouseOptions={mouseOptions("#65C3C8")}
        className="mb-[10vh]"
      >
        <motion.div
          className="flex justify-center gap-4 flex-wrap md:flex-nowrap md:justify-end flex-row-reverse"
          initial={containerVariants.offscreen}
          whileInView={containerVariants.onscreen(10)}
          viewport={{ once: true, amount: 0.8 }}
        >
          <UpdateFollower mouseOptions={imgMouseOptions("#65C3C8")}>
            <Image
              src="/funsports.png"
              width={400}
              height={400}
              alt="angelforest"
              className=" rounded-3xl -z-10 sm:min-w-[400px]"
            />
          </UpdateFollower>
          <div className=" my-auto text-center lg:text-left">
            <h1 className=" md:text-3xl font-bold mb-4 text-2xl">Fun sports</h1>
            <h1 className=" md:text-2xl text-xl font-semibold break-words">
              Next JS based online sports booking system
            </h1>
            <h2 className=" text-slate-700 md:text-2xl text-xl break-words">
              NextJs, React, Supabase, Stripe payment, Tailwind CSS, Daisyui,
              AWS S3
            </h2>
          </div>
        </motion.div>
      </UpdateFollower>
      <UpdateFollower
        mouseOptions={mouseOptions("#8CA0F0")}
        className=" mb-[10vh]"
      >
        <motion.div
          className="flex justify-center gap-4 flex-wrap md:flex-nowrap md:justify-start"
          initial={containerVariants.offscreen}
          whileInView={containerVariants.onscreen(-10)}
          viewport={{ once: true, amount: 0.8 }}
        >
          <UpdateFollower mouseOptions={imgMouseOptions("#8CA0F0")}>
            <Image
              src="/tsa.png"
              width={400}
              height={400}
              alt="angelforest"
              className=" rounded-3xl -z-10 sm:min-w-[400px]"
            />
          </UpdateFollower>
          <div className=" my-auto text-center lg:text-left">
            <h1 className=" md:text-3xl font-bold mb-4 text-2xl">
              TSA REALTY INVESTMENT
            </h1>
            <h1 className=" md:text-2xl text-xl font-semibold break-words">
              React base company website
            </h1>
            <h2 className=" text-slate-700 md:text-2xl text-xl break-words">
              React, Sass, Sendgrid, Firebase
            </h2>
          </div>
        </motion.div>
      </UpdateFollower>
    </div>
  );
}

function FWHover({ color }: { color: string }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full text-white font-normal bg-opacity-60 font-[arial] text-sm">
      <p>view</p>
      <p>case</p>
    </div>
  );
}
export default FeatureWork;
