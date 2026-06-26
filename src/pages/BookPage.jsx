import React from 'react'
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft, Clock, MapPin, Phone, Mail } from "lucide-react";
import Consultation from "../assets/consultation.jpg"
import { motion } from "motion/react";
import { useState } from 'react';



const BookPage = () => {

    const [submitted, setSubmitted] = useState(false);


    return (
        <div className="min-h-screen">

            {/* Minimal Header */}
            <header className="absolute top-0 left-0 right-0 z-50">
                <div className="mx-auto max-w-375 px-6 lg:px-12 py-6 flex items-center justify-between">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.25em] uppercase text-[oklch(0.99_0.005_85)] hover:text-[#B08D57] transition-colors"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
                        Back to Home
                    </Link>
                    <div className="flex flex-col items-center gap-1">
                        <span className="serif-display text-xl lg:text-2xl tracking-[0.18em] text-[oklch(0.99_0.005_85)]">Heritaze And Haute</span>
                        <span className="text-[0.5rem] tracking-[0.5em] text-[#B08D57]">
                            — COUTURE —
                        </span>
                    </div>
                    <div className="w-24" />
                </div>
            </header>
            {/* Hero */}
            <section className="relative h-[50svh] min-h-100 w-full overflow-hidden">
                <img
                    src={Consultation}
                    alt="ConsultationRoom"
                    className='absolute inset-0   w-full h-full object-cover'
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/40 to-black/70" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-[oklch(0.99_0.005_85)]">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="eyebrow text-[#B08D57]"
                    >
                        <span className="gold-line">Private Appointments</span>
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="serif-display mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
                    >
                        Book Your Consultation
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-6 max-w-md text-sm text-white/75 leading-relaxed"
                    >
                        <span className="gold-line">Two unhurried hours with our head couturier. A glass of chai, your mood board, and the beginning of something that will be only yours.</span>
                    </motion.p>

                </div>
            </section>

            {/* Form + Info */}
            <section className="py-20 lg:py-28 px-6 lg:px-12">
                <div className="mx-auto max-w-300 grid lg:grid-cols-12 gap-16 lg:gap-20">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >{submitted ? (
                        <div className="bg-[oklch(0.95_0.018_82)] p-12 lg:p-16 text-center">
                            <div className="w-12 h-12 mx-auto flex items-center justify-center border border-[#B08D57] text-[#B08D57]">
                                <Calendar className="w-5 h-5" strokeWidth={1.2} />
                            </div>
                            <h2 className="serif-display mt-8 text-3xl">Request Received</h2>
                            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                                Thank you. Our atelier team will reach out within 24 hours to
                                confirm your appointment and discuss your vision.
                            </p>
                            <Link to="/" className="btn-gold mt-10">
                                Return to Home
                            </Link>           onSubmit={handleSubmit}
                        </div>
                    ) : (
                        <form className="space-y-8">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="eyebrow text-[#B08D57]">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full bg-transparent border-b border-border py-3 text-sm placeholder:text-muted-foreground outline-none focus:border-[#B08D57] transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="eyebrow text-[#B08D57]">Email</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full bg-transparent border-b border-border py-3 text-sm placeholder:text-muted-foreground outline-none focus:border-[#B08D57] transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="eyebrow text-[#B08D57]">Phone</label>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="+91 ..."
                                        className="w-full bg-transparent border-b border-border py-3 text-sm placeholder:text-muted-foreground outline-none focus:border-[#B08D57] transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="eyebrow text-[#B08D57]">Preferred Date</label>
                                    <input
                                        required
                                        type="date"
                                        className="w-full bg-transparent border-b border-border py-3 text-sm placeholder:text-muted-foreground outline-none focus:border-[#B08D57] transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="eyebrow text-[#B08D57]">Appointment Type</label>
                                <select
                                    required
                                    className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground outline-none focus:border-[#B08D57] transition-colors cursor-pointer"
                                    defaultValue=""
                                >
                                    <option value="" disabled className="text-muted-foreground">
                                        Select an option
                                    </option>
                                    <option value="bridal-couture">Bridal Couture Consultation</option>
                                    <option value="lehenga">Designer Lehenga Fitting</option>
                                    <option value="saree">Wedding Saree Selection</option>
                                    <option value="custom">Custom Design Atelier</option>
                                    <option value="festive">Festive Collection Preview</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="eyebrow text-[#B08D57]">Your Vision</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your wedding date, colour preferences, and any inspiration you have in mind..."
                                    className="w-full bg-transparent border-b border-border py-3 text-sm placeholder:text-muted-foreground outline-none focus:border-[#B08D57] transition-colors resize-none"
                                />
                            </div>

                            <button type="submit" className="btn-gold mt-4">
                                <Calendar className="w-3.5 h-3.5" />
                                Request Appointment
                            </button>
                        </form>
                  )} </motion.div>
                  {/* Info Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="lg:col-span-5"
                        >
                            <div className="bg-[oklch(0.95_0.018_82)] p-10 lg:p-12">
                                <p className="eyebrow mb-8"><span className="gold-line">Atelier</span></p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <Clock className="w-4 h-4 mt-0.5 text-(--gold) shrink-0" strokeWidth={1.3} />
                                        <div>
                                            <p className="text-sm font-medium">Timing</p>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                Tuesday — Saturday<br />11:00 AM — 7:00 PM IST
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-4 h-4 mt-0.5 text-(--gold) shrink-0" strokeWidth={1.3} />
                                        <div>
                                            <p className="text-sm font-medium">Address</p>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                14 Sundar Nagar<br />New Delhi 110003, India
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Phone className="w-4 h-4 mt-0.5 text-(--gold) shrink-0" strokeWidth={1.3} />
                                        <div>
                                            <p className="text-sm font-medium">Phone</p>
                                            <p className="text-sm text-muted-foreground mt-1">+91 11 4567 8901</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Mail className="w-4 h-4 mt-0.5 text-(--gold) shrink-0" strokeWidth={1.3} />
                                        <div>
                                            <p className="text-sm font-medium">Email</p>
                                            <p className="text-sm text-muted-foreground mt-1">info@HeritageAndHaute.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 pt-8 border-t border-border">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Each consultation is private and by appointment only. We recommend
                                        booking at least two weeks ahead of your visit, and four to six
                                        months before your wedding date for couture orders.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                </div>
            </section>
             {/* Footer */}
      <footer className="bg-[oklch(0.16_0.005_60)] text-[oklch(0.92_0.01_80)] py-10 px-6 lg:px-12">
        <div className="mx-auto max-w-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.65rem] tracking-[0.25em] uppercase text-white/40">
          <p>© 2026 Heritage And Haute. All rights reserved.</p>
          <Link to="/" className="hover:text-(--gold-soft) transition-colors">
            Return to Home
          </Link>
        </div>
      </footer>
    </div>
        
    )
}
export default BookPage