import React from 'react'
import Herobride from '../../public/Herobride.jpg'
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();
  return (
    <div className="   relative h-svh min-h-180 w-full overflow-hidden">
      <img
        src={Herobride}
        alt="Indian bride in maroon and gold hand-embroidered bridal lehenga"
        className="absolute inset-0 w-full h-full object-cover object-center"
        width={1600}
        height={1920}
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/35 to-black/70" />
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/40" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-[oklch(0.99_0.005_85)]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="serif-display mt-1 text-5xl sm:text-6xl lg:text-8xl leading-[1.02] max-w-5xl"
        >
          Where Tradition Meets
          <br />
          <em className="not-italic text-(--gold-soft) font-normal">Timeless Elegance</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 max-w-xl text-sm sm:text-base text-white/80 leading-relaxed font-light"
        >
          Handcrafted bridal & ethnic wear designed for the modern Indian woman —
          woven, embroidered and tailored entirely by hand in our Delhi atelier.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <button onClick={() => navigate("/Products")}
            className="inline-flex
items-center
justify-center
gap-2
px-8
py-[0.95rem]
text-[0.72rem]
font-medium
tracking-[0.28em]
uppercase
bg-[#B08D57]
text-[oklch(0.99_0.005_85)]
 border
 border-transparent
hover:border-[#B08D57]
transition-all
duration-400
hover:bg-transparent

">
            Explore Collection
          </button>
          <button onClick={() => navigate("/BookPage")}
            className="inline-flex
items-center
justify-center
gap-2
px-8
py-[0.95rem] 
text-[0.72rem]
font-medium
tracking-[0.28em]
uppercase
bg-(--gold)
text-[oklch(0.99_0.005_85)]
border
border-(--gold)
transition-all
duration-400
hover:bg-transparent
hover:text-(--gold) ">
            Book Consultation
          </button>
        </motion.div>
      </div>
    </div>
  )
}
export default Hero