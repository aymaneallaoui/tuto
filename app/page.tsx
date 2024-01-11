"use client";

import { AnimateComp } from "@/utils/anime";

export default function Home() {
  return (
    <main>
      <div className=" flex items-center justify-center bg-white w-screen h-screen">
        <h1 className=" text-black text-2xl text-center  "> SOME TEXT IDK</h1>
      </div>

      <div className=" flex items-center justify-center bg-white w-screen h-screen">
        <AnimateComp>
          <h1 className=" text-black text-2xl text-center  "> SOME TEXT IDK</h1>
        </AnimateComp>
      </div>
    </main>
  );
}
