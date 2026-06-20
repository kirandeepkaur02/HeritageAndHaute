import React from 'react'
import look1 from "../assets/look1.jpg"
import look2 from "../assets/look2.jpg"
import look3 from "../assets/look3.jpg"
import look4 from "../assets/look4.jpg"
import look5 from "../assets/look5.jpg"
import look6 from "../assets/look6.jpg"
// import {Instagram } from "react-icons";


const InstagramShowcase = () => {


    const instagramGrid = [look1, look5, look3, look4, look6, look2];

    return (
         <section className="py-28 lg:py-36 px-6 lg:px-12">
      <div className="mx-auto max-w-375">
        <div className="text-center mb-16">
          <p className="eyebrow"><span className="gold-line">@Heritage And Haute</span></p>
          <h2 className="serif-display mt-6 text-4xl sm:text-5xl">Follow the Heritage</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3">
          {instagramGrid.map((src, i) => (
            <a
              key={i}
             
              className="relative aspect-square overflow-hidden group"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-(--ink)/0 group-hover:bg-(--ink)/60 transition-all duration-500 flex items-center justify-center">
                {/* <Instagram
                  className="w-6 h-6 text-(--gold-soft) opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  strokeWidth={1.2}
                /> */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
    )
}
export default InstagramShowcase