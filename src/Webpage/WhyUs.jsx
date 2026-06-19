import React from 'react'
import {
  Gem,
  Scissors,
  Sparkles,
 
  Crown,
} from "lucide-react";
import { motion } from "motion/react";
const WhyUs = () => {

const features = [
  {
    icon: Sparkles,
    title: "Handcrafted Embroidery",
    text: "Zardozi, gota patti and resham, worked by master karigars over 400+ hours.",
  },
  {
    icon: Gem,
    title: "Premium Fabrics",
    text: "Pure mulberry silks, raw tussar, organza and chanderi sourced from heritage looms.",
  },
  {
    icon: Scissors,
    title: "Bespoke Tailoring",
    text: "Three personal fittings in our atelier for couture that moves as you do.",
  },
  {
    icon: Crown,
    title: "Exclusive Designs",
    text: "Limited-edition pieces — no two brides ever wear the same silhouette.",
  },
];

  return (
    <div className="py-28 lg:py-36 px-6 lg:px-12 bg-[oklch(0.95_0.018_82)]">
             <div className="mx-auto max-w-350">
                 <div className="text-center mb-20">
                    <p className="eyebrow">Heritage Haute</p>
                     <h2 className="serif-display mt-6 text-4xl sm:text-5xl">Why brides choose us</h2>
                 </div>

                 
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px ">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="bg-[oklch(0.95_0.018_82)] p-10 lg:p-12 group hover:bg-amber-50 transition-colors duration-500     "
            >
              <div className="w-12 h-12 flex items-center justify-center border border-amber-800 text-(--gold) mb-8 group-hover:bg-amber-800       group-hover:text-[oklch(0.99_0.005_85)] transition-colors duration-500">
                <f.icon className="w-5 h-5" strokeWidth={1.2} />
              </div>
              <h3 className="serif-display text-2xl mb-4">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-[1.85]">{f.text}</p>
            </motion.div>
          ))}
        </div>
                  </div>
             </div>


   
  )
}

export default WhyUs