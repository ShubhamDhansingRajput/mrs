'use client'
import { LampContainer } from "../ui/lamp";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
 
export function LampDemo() {
  return (
    <LampContainer className="        ">
       
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="  mt-[18rem]   bg-gradient-to-br dark:from-slate-300 dark:to-slate-500   from-zinc-700 to-zinc-600  bg-clip-text text-center text-5xl font-medium  text-transparent md:text-6xl"
      >
             Let's Grow Your Business <br />  with us.

             
      </motion.h1>
     
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 bg-gradient-to-br  md:text-xl  dark:from-slate-300 dark:to-slate-500   from-zinc-700 to-zinc-600  pt-2 bg-clip-text text-center       text-transparent  "
      >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ut.
             
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" mt-4 bg-gradient-to-br text-xl from-white to-slate-500 pt-2 bg-clip-text text-center       text-transparent  "
      >
         <Button>Get Started</Button>
             
      </motion.div>
    </LampContainer>
  );
}