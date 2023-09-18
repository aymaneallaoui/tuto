"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1.1 1.33", "1 1"],
  });

  const PathLenghtAni = useSpring(scrollYProgress, {
    damping: 30,
    restDelta: 0.01,
    stiffness: 120,
  });

  return (
    <main>
      <div className=" flex items-center justify-center bg-white w-screen h-screen">
        <h1 className=" text-black text-2xl text-center  "> SOME TEXT IDK</h1>
      </div>

      <motion.div className=" max-w-screen max-h-screen  bg-slate-400">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="1938"
          height="1274"
          viewBox="0 0 1938 1274"
          fill="none"
          className=" max-w-fit max-h-screen"
          ref={ref}
        >
          <motion.path
            d="M1933.84 4C1696.39 211.673 1042.79 484.676 840.392 484.676C637.989 484.676 568.369 439.795 582.381 342.598C596.394 245.4 691.678 163.56 881.242 262.131C1053.86 351.893 1191.22 516.949 1304.23 673.494C1408.33 817.697 1484.55 986.067 1441.54 1133.72C1395.74 1290.94 1064.93 1290.94 881.242 1176.74C745.905 1092.61 578.692 845.847 706.775 733.512C810.01 642.97 1209.62 733.512 1098.4 1023.51C998.775 1283.3 67.9405 1260.93 1 1268.63"
            stroke="black"
            stroke-width="30"
            style={{ pathLength: PathLenghtAni }}
          />
        </motion.svg>
      </motion.div>

      <div className=" flex items-center justify-center bg-white w-screen h-screen">
        <h1 className=" text-black text-2xl text-center  "> SOME TEXT IDK</h1>
      </div>
    </main>
  );
}
