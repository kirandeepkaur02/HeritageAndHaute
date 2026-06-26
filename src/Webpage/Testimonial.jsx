import React from 'react'
import { motion } from "motion/react";
import { Quote } from "lucide-react";


const Testimonial = () => {

    const testimonials = [
        {
            quote:
                "My lehenga felt like an heirloom from the very first fitting. Every motif told a story I could not have imagined for myself.",
            name: "Ananya Mehra",
            role: "Bride, Udaipur 2025",
        },
        {
            quote:
                "Aanya understood the weight of tradition while letting me feel entirely modern. The craftsmanship is breathtaking.",
            name: "Riya Kapoor",
            role: "Bride, Mumbai 2024",
        },
        {
            quote:
                "The consultation felt less like shopping and more like being read. They saw the woman I wanted to be on that day.",
            name: "Sanya Bhatia",
            role: "Bride, Delhi 2025",
        },
    ];

    return (
         <section className="py-28 lg:py-36 px-6 lg:px-12 bg-[#F9F5ED]">
      <div className="mx-auto max-w-325">
        <div className="text-center mb-20">
          <p className="eyebrow text-[#B08D57]"><span className="gold-line">Brides of Heritage And Haute</span></p>
          <h2 className="serif-display mt-6 text-4xl sm:text-5xl">Words from our brides...</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-red-200/10 p-10 lg:p-12 flex flex-col"
            > 
              <Quote className="w-6 h-6 text-[#B08D57]" strokeWidth={1.2} />
              <blockquote className="serif-display mt-6 text-xl leading-[1.55] flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-10 pt-6 border-t border-[#B08D57]">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground mt-1">
                  {t.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
    )
}

export default Testimonial 