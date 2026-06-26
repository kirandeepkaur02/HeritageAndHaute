import React from 'react'
import { motion } from "motion/react";
import signature from "../assets/Signature.jpg"
import { useNavigate } from 'react-router-dom';


const Signature = () => {
  const naviagte = useNavigate();
  return (
    <div className="py-28 lg:py-40 px-6 lg:px-12 bg-[oklch(0.95_0.018_82)]">
      <div className="mx-auto max-w-350 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-7 relative"
        >

          <div className=" aspect-4/5  overflow-hidden">
            <img
              src={signature}
              alt="Signature ivory and gold bridal couture detail"
              loading="lazy"
              className="w-full h-full  object-cover"
            />
          </div>
          <div className="absolute  -bottom-6 -right-6 hidden md:block border border-orange-200  px-8 py-6 bg-amber-50">
            <p className="eyebrow">Signature</p>
            <p className="serif-display text-xl mt-1">No. 07 · Mehr</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-5"
        >

          <p className="eyebrow"><span className="gold-line">Signature Collection</span></p>
          <h2 className="serif-display mt-6 text-4xl sm:text-5xl leading-[1.05]">
            The Mehr Edit — a study in restraint and gold.
          </h2>

          <p className="mt-6 text-muted-foreground leading-[1.9] text-[15px]">
            An eighteen-piece capsule reimagining bridal ivory through hand-embroidered
            dabka, antique sequin and gota work. Each piece begins as a sketch in our
            Delhi atelier and lives, on average, four hundred hours on the embroidery frame.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              "Premium craftsmanship across 400+ atelier hours",
              "Hand embroidery in zardozi, dabka and gota",
              "Heritage-inspired motifs from Mughal miniatures",
            ].map((line) => (
              <li key={line} className="flex items-start gap-4 text-sm">
                <span className="mt-2 w-6 h-px bg-(--gold) shrink-0" />
                <span className="text-foreground/85">{line}</span>
              </li>
            ))}
          </ul>
          <button onClick={() => naviagte("/Products")}

            className=' '> View The Collection</button>
        </motion.div>


      </div>
    </div>
  )
}

export default Signature