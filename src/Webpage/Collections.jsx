import React from 'react'
import { motion } from "motion/react";
import ColBridal from "../../src/assets/colbridal.jpg"
import ColLehenga from "../../src/assets/collehenga.jpg"
import ColSaree from "../../src/assets/colsaree.jpg"
import ColFestive from "../../src/assets/colfestive.jpg"
import ColReception from "../../src/assets/colreception.jpg"
import ColCustom from "../../src/assets/colcustom.jpg"
import {
  ArrowUpRight
 
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Collections = () => {

  

  const collections = [
    { title: "Bridal Couture", caption: "The Heirloom Edit", image:ColBridal },
    { title: "Designer Lehengas", caption: "Sculpted Silhouettes", image: ColLehenga },
    { title: "Wedding Sarees", caption: "Woven Heritage", image: ColSaree },
    { title: "Festive Collection", caption: "Celebration Edit", image:ColFestive  },
    { title: "Reception Wear", caption: "Modern Ceremony", image:ColReception },
    { title: "Custom Designs", caption: "Atelier Bespoke", image: ColCustom },
  ]
  return (
    <div id="collections" className="py-28  bg-[#F9F5ED] lg:py-40 px-6 lg:px-12">
      <div className="mx-auto max-w-375">
        <div className="text-center mb-20">
          <p className='font-display text-[0.7rem] font-medium tracking-[0.32em] uppercase text-gold'><span className="gold-line">The Edit</span></p>
          <h2 className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl">
            Shop By Collection
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-sm text-muted-foreground leading-relaxed">
            From ceremonial bridal couture to quiet festive luxury — six curated
            worlds, each one rooted in heritage craftsmanship.
          </p>
        </div>

      

        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {collections.map((c, i) => (
             <motion.a 
               key={c.title}
                href="#"
               initial={{opacity:0,y:30}}
               whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
               transition={{ duration: 0.8, delay: i * 0.06 }}
              className="group block"
            >
                <div className="relative overflow-hidden aspect-4/5 bg-muted">
                 <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1400 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-3 border border-transparent group-hover:border-(--gold-soft)/80 transition-all duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
            
 <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="eyebrow text-muted-foreground! text-[0.6rem]!">{c.caption}</p>
                  <h3 className="serif-display text-2xl mt-2">{c.title}</h3>
                </div>
                <span className="text-(--gold) inline-flex items-center gap-1 text-[0.68rem] tracking-[0.25em] uppercase pb-1 group-hover:gap-2 transition-all">
                  Discover <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.a>

          ))}
        </div>
      
    </div>
    </div>
  )}
export default Collections