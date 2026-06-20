import React from 'react'
import { Calendar } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

   const navigate = useNavigate();

    const navLinks = [
        { label: "Home", href: "#top" },
        { label: "Collections", href: "#collections" },
        { label: "Bridal Couture", href: "#signature" },
        { label: "Lookbook", href: "#lookbook" },
        { label: "About", href: "#about" },
        // { label: "Contact", href: "#contact" },

    ]


    return (
        <div className="absolute top-0 left-0 right-0 z-50">
            <div className="mx-auto max-w-375 px-6 lg:px-12 py-6 flex items-center justify-between text-[oklch(0.99_0.005_85)]">
                <nav className="hidden lg:flex items-center gap-9 text-[0.72rem] tracking-[0.22em] uppercase font-medium flex-1">
                    {navLinks.slice(0, 3).map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            className="hover:text-(--gold-soft) transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>
                <a
                    href="#top"
                    className="flex flex-col items-center gap-1 mx-auto lg:mx-0"
                />

                <span className="serif-display text-2xl lg:text-3xl tracking-[0.18em]">
                    HERITAGE
                </span>
                <span className="text-[0.55rem] tracking-[0.5em] text-(--gold-soft)">
                    — HAUTE —
                </span>


                <nav className="hidden lg:flex items-center gap-9 text-[0.72rem] tracking-[0.22em] uppercase font-medium flex-1 justify-end">
                    {navLinks.slice(3).map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            className="hover:text-(--gold-soft) transition-colors"
                        >
                            {l.label}
                        </a>))}
                    <button onClick={()=>navigate("/BookPage")}
                        
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
transition-all
duration-400
hover:bg-transparent
hover:text-(--gold)"
                    >
                        <Calendar className="w-3.5 h-3.5 " />
                        Book Appointment
                    </button>
                </nav>
            </div>
        </div>
    )
}
export default Navbar