import React from 'react'
import look1 from "../assets/look1.jpg"
import look2 from "../assets/look2.jpg"
import look3 from "../assets/look3.jpg"
import look4 from "../assets/look4.jpg"
import look5 from "../assets/look5.jpg"
import look6 from "../assets/look6.jpg"
import {
  ArrowUpRight

} from "lucide-react";

 import { motion } from "motion/react";
const LookBook = () => {
    const items = [
    { src: look1, h: "row-span-2" },
    { src: look3, h: "" },
    { src: look2, h: "row-span-2" },
    { src: look4, h: "" },
    { src: look5, h: "" },
    { src: look6, h: "row-span-2" },
  ];
  return (
    <div  id="lookbook" className="py-28 lg:py-40 px-6 lg:px-12  bg-[oklch(0.95_0.018_82)]">
         <div className="mx-auto   max-w-375 ">
             <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
                <div>
            <p className="eyebrow"><span className="gold-line">Lookbook</span></p>
            <h2 className="serif-display mt-6 text-4xl sm:text-5xl lg:text-6xl">
              The Bridal Diaries...
            </h2>
          </div>
           <a
           
            className="text-(--gold) inline-flex items-center gap-2 text-[0.7rem] tracking-[0.3em] uppercase border-b border-(--gold) pb-1 w-fit"
          >
            View Full Lookbook <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
             </div>
         </div>
        
        


        <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[220px] lg:auto-rows-[300px] gap-4 lg:gap-6">
            {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className={`relative overflow-hidden group cursor-pointer ${it.h}`}
            >
              <img
                src={it.src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1400 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </motion.div>
          ))}
            </div>
    </div>
  )
}

export default LookBook