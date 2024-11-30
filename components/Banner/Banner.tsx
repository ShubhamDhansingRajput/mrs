'use client'
import React from 'react'
import { Button } from '../ui/button'
import { DotPatternDemo } from '../magicUi/DotPatternDemo'
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div className='  w-full flex items-center justify-center h-[90vh]  '>

    <DotPatternDemo >
    <div className=' flex flex-col gap-2 items-center  container z-50'>

    <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="    mt-2 text-gray-400 text-xl "
      >
Work with us.    
      </motion.p>
 
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="     bg-gradient-to-br dark:from-slate-300 dark:to-slate-500   from-zinc-700 to-zinc-600  bg-clip-text text-center text-4xl font-medium  text-transparent md:text-5xl"
      >
             Let's Grow Your Business <br />  with us.

             
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" text-xs md:text-[1rem]   bg-gradient-to-br dark:from-slate-300 dark:to-slate-500   from-zinc-700 to-zinc-600  bg-clip-text text-center  font-medium  text-transparent  "
      >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sunt!

             
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="     bg-gradient-to-br dark:from-slate-300 dark:to-slate-500   from-zinc-700 to-zinc-600  bg-clip-text text-center text-5xl font-medium  text-transparent md:text-5xl"
      >
           <Button className='mt-5'>Get Started</Button>
             
      </motion.div>
        {/* <p className=' mt-2 text-gray-400 text-center text-sm md:text-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, dignissimos</p>

        <Button className='mt-5'>Get Started</Button> */}
      </div>
    </DotPatternDemo>
    </div>
  )
}

export default Banner