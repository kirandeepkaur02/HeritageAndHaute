import React from 'react'
import consultation from "../assets/Consultation.jpg"
import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const ConsulationBanner = () => {

  const navigate = useNavigate()

  return (
    <div className="relative min-h-190  py-32 lg:py-44 px-6 overflow-hidden">
      <img
        src={consultation}
        alt="Aanya bridal consultation suite"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-br from-[oklch(0.18_0.005_60)]/85 via-[oklch(0.18_0.005_60)]/70 to-[oklch(0.18_0.005_60)]/85" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl mx-auto text-center text-[oklch(0.99_0.005_85)]"
      >
        <p className="eyebrow text-(--gold-soft)!">
          <span className="gold-line">Private Appointments</span>
        </p>
        <h2 className="serif-display mt-8 text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
          Begin your bridal journey
          <br />
          <em className="not-italic text-(--gold-soft)">with a personal consultation.</em>
        </h2>
        <p className="mt-8 text-white/75 leading-[1.9] max-w-xl mx-auto text-sm">
          Two unhurried hours with our head couturier. A glass of chai, your mood
          board, and the beginning of something that will be only yours.
        </p>
        <button onClick={()=>navigate("/BookPage")}
          className="btn-gold mt-12">
          <Calendar className="w-3.5 h-3.5" />
          Schedule Appointment
        </button>
      </motion.div>
    </div>
  )
}
export default ConsulationBanner