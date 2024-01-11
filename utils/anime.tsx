import React, { useEffect, useRef } from "react";
import { delay, motion, useAnimation, useInView } from "framer-motion";

export const AnimateComp = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isView = useInView(ref, { once: false });

  const MainAnime = useAnimation();
  const SlideAnime = useAnimation();

  useEffect(() => {
    if (isView) {
      MainAnime.start("visible");
      SlideAnime.start("visible");
    } else {
      MainAnime.start("hidden");
      SlideAnime.start("hidden");
    }
  }, [isView, MainAnime, SlideAnime]);
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        transition={{ delay: 0.25, duration: 0.5 }}
        animate={MainAnime}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        animate={SlideAnime}
        initial="hidden"
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "red",
          zIndex: 20,
        }}
      />
    </div>
  );
};
