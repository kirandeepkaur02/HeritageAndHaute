import React from 'react'
import {Mail, MapPin, Phone} from "lucide-react";

const Footer = () => {
  return (
     <footer  className="bg-black text-[oklch(0.92_0.01_80)] pt-24 pb-10 px-6 lg:px-12">
    <div className="mx-auto max-w-375">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
           <div className="lg:col-span-4">
            <div className="flex flex-col gap-1">
              <span className="serif-display text-3xl tracking-[0.18em]">Heritage</span>
              <span className="text-[0.55rem] tracking-[0.5em] text-[#B08D57]">
                — Haute —
              </span>
            </div>
            <p className="mt-8 text-sm text-white/60 leading-[1.9] max-w-sm">
              A luxury Indian bridal house crafting heirloom couture for the modern bride.
              By appointment only.
            </p>

            <form className="mt-10" onSubmit={(e) => e.preventDefault()}>
              <p className="eyebrow text-[#B08D57] mb-4">Newsletter</p>
              <div className="flex border-b border-white/30 focus-within:border-text-[#B08D57] transition-colors">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent py-3 text-sm placeholder:text-white/40 outline-none"
                />
                <button className="text-text-[#B08D57] hover:text-[#B08D57] text-[0.7rem] tracking-[0.3em] uppercase pl-4">
                  Join →
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <p className="eyebrow text-[#B08D57] mb-6">House</p>
            <ul className="space-y-3 text-sm text-white/70">
              {["Bridal Couture", "Lehengas", "Sarees", "Festive"].map((x) => (
                <li key={x}>
                  <a href="#" className="hover:text-[#B08D57] transition-colors">
                    {x}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-[#B08D57] mb-6">Atelier</p>
            <ul className="space-y-3 text-sm text-white/70">
              {["Brand Story","LookBook","Consulation"].map((x) => (
                <li key={x}>
                  <a href="#" className="hover:text-[#B08D57] transition-colors">
                    {x}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-[#B08D57] mb-6">Visit</p>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#B08D57] shrink-0" strokeWidth={1.3} />
                <span>14 Sundar Nagar, New Delhi 110003, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-(--gold-soft) shrink-0" strokeWidth={1.3} />
                <span>+91 11 4567 8901</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-(--gold-soft) shrink-0" strokeWidth={1.3} />
                <span>HeritageAndHaute@gmail.com</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-8">
              {/* {[Instagram, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-(--gold) hover:text-[var(--gold)] transition-colors"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.3} />
                </a>
              ))} */}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.65rem] tracking-[0.25em] uppercase text-white/40">
          <p>© 2026 Heritage And Haute. All rights reserved.</p>
          <div className="flex gap-8">
            <a  className="hover:text-(--gold-soft)">Privacy</a>
            <a className="hover:text-(--gold-soft)">Terms</a>
            <a  className="hover:text-(--gold-soft)">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
)}
export default Footer 