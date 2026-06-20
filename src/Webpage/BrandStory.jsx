import React from 'react'
import {motion } from  "motion/react";
import atelier from "../assets/atelier.jpg"

const BrandStory = () => {
  return (
    <div id="about"
    className="py-28 lg:py-40 px-6 lg:px-12">
          <div className="mx-auto max-w-350 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
            <p className="eyebrow"><span className="gold-line">Our Story</span></p>
             <h2 className="serif-display mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Crafting bridal dreams since generations.
          </h2>

          <p className="mt-8 text-muted-foreground leading-[1.95] text-[15px]">
            Founded in 1978 by master craftsman Vikram Aanya, our atelier was built
            on a single belief — that a bridal garment should outlive a lifetime, and
            the memory of it should outlive the garment.
          </p>
          <p className="mt-5 text-muted-foreground leading-[1.95] text-[15px]">
            Three generations later, we remain a small house. Every piece is sketched
            by hand, embroidered by our karigars in Jaipur and Kolkata, and finished
            in our Delhi flagship — where every bride is welcomed by name.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["46+", "Years of craft"],
              ["3,200", "Brides dressed"],
              ["120+", "Master karigars"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="serif-display text-3xl text-[var(--gold)]">{n}</p>
                <p className="mt-2 text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </motion.div>
            

             <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="aspect-4/5 overflow-hidden"
        >
          <img
            src={atelier}
            alt="Aanya atelier workshop"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>
          </div>
    </div>
  )
}

export default BrandStory