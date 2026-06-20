import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Eye, X, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

import colBridal from "../assets/colbridal.jpg";
import colLehenga from "../assets/collehenga.jpg";
import colSaree from "../assets/colsaree.jpg";
import colFestive from "../assets/colfestive.jpg";
import colReception from "../assets/colreception.jpg";
import colCustom from "../assets/colcustom.jpg";

import look1 from "../assets/look1.jpg";
import look2 from "../assets/look2.jpg";
import look3 from "../assets/look3.jpg";
import look4 from "../assets/look4.jpg";
import look5 from "../assets/look5.jpg";
import look6 from "../assets/look6.jpg";

const CATEGORIES = [
    "Bridal Lehengas",
    "Sarees",
    "Suits",
    "Reception Wear",
    "Engagement Wear",
    "Festive Collection",
];

const OCCASIONS = [
    "Wedding",
    "Reception",
    "Engagement",
    "Mehendi",
    "Haldi",
    "Party Wear",
];

const PRICE_BANDS = [
    { label: "Under ₹50,000", min: 0, max: 50000 },
    { label: "₹50,000 – ₹1,00,000", min: 50000, max: 100000 },
    { label: "₹1,00,000 – ₹2,50,000", min: 100000, max: 250000 },
    { label: "₹2,50,000+", min: 250000, max: Infinity },
];

const SORTS = [
    "Featured",
    "New Arrivals",
    "Price Low to High",
    "Price High to Low",
];

const PRODUCTS = [
    {
        id: "p1",
        name: "Mirzapur Heirloom Lehenga",
        category: "Bridal Lehengas",
        occasion: "Wedding",
        price: 285000,
        image: colBridal,
    },
    {
        id: "p2",
        name: "Zarina Crimson Lehenga",
        category: "Bridal Lehengas",
        occasion: "Wedding",
        price: 325000,
        image: colLehenga,
    },
    {
        id: "p3",
        name: "Noor Banarasi Saree",
        category: "Sarees",
        occasion: "Reception",
        price: 145000,
        image: colSaree,
    },
    {
        id: "p4",
        name: "Aabroo Ivory Saree",
        category: "Sarees",
        occasion: "Engagement",
        price: 92000,
        image: look1,
    },
    {
        id: "p5",
        name: "Mehr Chikankari Suit",
        category: "Suits",
        occasion: "Mehendi",
        price: 48000,
        image: look2,
    },
    {
        id: "p6",
        name: "Sehar Pastel Suit",
        category: "Suits",
        occasion: "Haldi",
        price: 42000,
        image: look3,
    },
    {
        id: "p7",
        name: "Mehraab Reception Gown",
        category: "Reception Wear",
        occasion: "Reception",
        price: 185000,
        image: colReception,
    },
    {
        id: "p8",
        name: "Falak Champagne Drape",
        category: "Reception Wear",
        occasion: "Reception",
        price: 215000,
        image: look4,
    },
    {
        id: "p9",
        name: "Rang Mahal Engagement Set",
        category: "Engagement Wear",
        occasion: "Engagement",
        price: 165000,
        image: look5,
    },
    {
        id: "p10",
        name: "Aaina Rose Engagement",
        category: "Engagement Wear",
        occasion: "Engagement",
        price: 138000,
        image: colCustom,
    },
    {
        id: "p11",
        name: "Utsav Festive Anarkali",
        category: "Festive Collection",
        occasion: "Party Wear",
        price: 68000,
        image: colFestive,
    },
    {
        id: "p12",
        name: "Roshni Festive Sharara",
        category: "Festive Collection",
        occasion: "Party Wear",
        price: 55000,
        image: look6,
    },
];

const inr = (n) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(n);


const Products = () => {

    const [category, setCategory] = useState("All");
    const [occasion, setOccasion] = useState("All");
    const [priceIdx, setPriceIdx] = useState("All");
    const [sort, setSort] = useState("Featured");
    const [mobileOpen, setMobileOpen] = useState(false);
    const [quickView, setQuickView] = useState(null);

    const filtered = useMemo(() => {
        let list = PRODUCTS.filter((p) => {
            if (category !== "All" && p.category !== category) return false;
            if (occasion !== "All" && p.occasion !== occasion) return false;

            if (priceIdx !== "All") {
                const b = PRICE_BANDS[priceIdx];
                if (p.price < b.min || p.price >= b.max) return false;
            }

            return true;
        });

        if (sort === "Price Low to High") {
            list = [...list].sort((a, b) => a.price - b.price);
        }

        if (sort === "Price High to Low") {
            list = [...list].sort((a, b) => b.price - a.price);
        }

        if (sort === "New Arrivals") {
            list = [...list].reverse();
        }

        return list;
    }, [category, occasion, priceIdx, sort]);

    const reset = () => {
        setCategory("All");
        setOccasion("All");
        setPriceIdx("All");
        setSort("Featured");
    };

return (
        <div className="min-h-screen bg-[#FAF7F2] text-[#1C1C1C]">

            {/* Header */}
            <header className="border-b border-[#B08D57]/20 bg-[#FAF7F2]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center  justify-between">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase hover:text-[#B08D57] transition"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                    </Link>

                    <Link
                        to="/"
                        className="serif-display text-lg tracking-[0.4em]"
                    >
                       Hertiage And Haute
                    </Link>

                    <Link
                        to="/consultation"
                        className="hidden sm:inline text-xs tracking-[0.3em] uppercase hover:text-[#B08D57] transition"
                    >
                        Consultation
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="eyebrow text-[#B08D57]"
                >
                    The Atelier
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="serif-display text-5xl md:text-7xl mt-6 leading-[1.05]"
                >
                    Our Collections
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="mt-6 max-w-xl mx-auto text-sm md:text-base text-[#1C1C1C]/70 leading-relaxed"
                >
                    Discover handcrafted bridal and ethnic wear designed for every celebration.
                </motion.p>
            </section>

            {/* Sticky Filter Bar */}
            <div className="sticky top-0 z-30 bg-[#FAF7F2]/95 backdrop-blur border-y border-[#B08D57]/20">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">

                    {/* Mobile Filters */}
                    <div className="flex items-center justify-between lg:hidden">
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase border border-[#B08D57]/40 px-4 py-2"
                        >
                            <SlidersHorizontal className="h-4 w-4" />
                            Filters
                        </button>

                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="bg-transparent text-xs tracking-[0.2em] uppercase border border-[#B08D57]/40 px-3 py-2"
                        >
                            {SORTS.map((s) => (
                                <option key={s}>{s}</option>
                            ))}
                        </select>
                    </div>

                    {/* Desktop Filters */}
                    <div className="hidden lg:grid grid-cols-[1fr_1fr_1fr_auto_auto] gap-6 items-end">
                        <FilterSelect
                            label="Category"
                            value={category}
                            onChange={setCategory}
                            options={CATEGORIES}
                        />

                        <FilterSelect
                            label="Occasion"
                            value={occasion}
                            onChange={setOccasion}
                            options={OCCASIONS}
                        />

                        <div>
                            <p className="eyebrow text-[#1C1C1C]/50 mb-2">
                                Price
                            </p>

                            <select
                                value={priceIdx === "All" ? "All" : String(priceIdx)}
                                onChange={(e) =>
                                    setPriceIdx(
                                        e.target.value === "All"
                                            ? "All"
                                            : Number(e.target.value)
                                    )
                                }
                                className="w-full bg-transparent border-b border-[#1C1C1C]/30 focus:border-[#B08D57] py-2 text-sm outline-none"
                            >
                                <option value="All">All Prices</option>

                                {PRICE_BANDS.map((b, i) => (
                                    <option key={b.label} value={i}>
                                        {b.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <p className="eyebrow text-[#1C1C1C]/50 mb-2">
                                Sort By
                            </p>

                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                className="bg-transparent border-b border-[#1C1C1C]/30 focus:border-[#B08D57] py-2 text-sm outline-none"
                            >
                                {SORTS.map((s) => (
                                    <option key={s}>{s}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            onClick={reset}
                            className="text-xs tracking-[0.25em] uppercase text-[#B08D57] hover:text-[#1C1C1C] transition pb-2"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            {/* Result Count */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-6 flex items-center justify-between">
                {/* <p className="text-xs tracking-[0.3em] uppercase text-[#1C1C1C]/60">
                    {filtered.length}{" "}
                    {filtered.length === 1 ? "Piece" : "Pieces"}
                </p> */}
            </div>

            {/* Product Grid */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
                {filtered.length === 0 ? (
                    <div className="py-32 text-center">
                        <p className="serif-display text-2xl">
                            No pieces match your edit
                        </p>

                        <button
                            onClick={reset}
                            className="mt-6 text-xs tracking-[0.3em] uppercase text-[#B08D57] hover:text-[#1C1C1C]"
                        >
                            Clear Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((p, i) => (
                                <motion.article
                                    key={p.id}
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: Math.min(i * 0.04, 0.3),
                                    }}
                                    className="group"
                                >
                                    <div className="relative overflow-hidden bg-[#1C1C1C]/5 aspect-[3/4]">

                                       

                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                                        />
 <div className="absolute inset-0 ring-1 ring-transparent group-hover:ring-[#B08D57] transition-all duration-500 z-10 pointer-events-none" />

                                        <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            <button
                                                onClick={() => setQuickView(p)}
                                                className="w-full inline-flex items-center justify-center gap-2 bg-[#FAF7F2]/95 text-[#1C1C1C] text-xs tracking-[0.3em] uppercase py-3 hover:bg-[#B08D57] hover:text-[#FAF7F2] transition"
                                            >
                                                <Eye className="h-3.5 w-3.5" />
                                                Quick View
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-5 flex items-start justify-between gap-4">
                                        <div className="min-w-0">
                                            <p className="eyebrow text-[#B08D57]">
                                                {p.category}
                                            </p>

                                            <h3 className="serif-display text-xl mt-2 truncate">
                                                {p.name}
                                            </h3>
                                        </div>

                                        <p className="text-sm tracking-wider whitespace-nowrap pt-1">
                                            {inr(p.price)}
                                        </p>
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </section>

            {/* Footer */}
            <footer className="border-t border-[#B08D57]/20 py-10 text-center">
                <p className="text-xs tracking-[0.3em] uppercase text-[#1C1C1C]/60">
                    © Hertiage And Haute — Crafted in India
                </p>
            </footer>

            {/* Mobile Filter Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-[#1C1C1C]/40 lg:hidden"
                        onClick={() => setMobileOpen(false)}
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.35 }}
                            className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#FAF7F2] p-6 overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between mb-8">
                                <p className="serif-display text-xl">
                                    Refine
                                </p>

                                <button onClick={() => setMobileOpen(false)}>
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="space-y-6">

                                <FilterSelect
                                    label="Category"
                                    value={category}
                                    onChange={setCategory}
                                    options={CATEGORIES}
                                />

                                <FilterSelect
                                    label="Occasion"
                                    value={occasion}
                                    onChange={setOccasion}
                                    options={OCCASIONS}
                                />

                                <div>
                                    <p className="eyebrow text-[#1C1C1C]/50 mb-2">
                                        Price
                                    </p>

                                    <select
                                        value={priceIdx === "All" ? "All" : String(priceIdx)}
                                        onChange={(e) =>
                                            setPriceIdx(
                                                e.target.value === "All"
                                                    ? "All"
                                                    : Number(e.target.value)
                                            )
                                        }
                                        className="w-full bg-transparent border-b border-[#1C1C1C]/30 py-2 text-sm outline-none"
                                    >
                                        <option value="All">All Prices</option>

                                        {PRICE_BANDS.map((b, i) => (
                                            <option key={b.label} value={i}>
                                                {b.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    onClick={() => {
                                        reset();
                                        setMobileOpen(false);
                                    }}
                                    className="w-full border border-[#B08D57]/40 py-3 text-xs tracking-[0.3em] uppercase text-[#B08D57]"
                                >
                                    Reset Filters
                                </button>

                                <button
                                    onClick={() => setMobileOpen(false)}
                                    className="w-full bg-[#1C1C1C] text-[#FAF7F2] py-3 text-xs tracking-[0.3em] uppercase"
                                >
                                    View {filtered.length} Pieces
                                </button>

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Quick View Modal */}
            <AnimatePresence>
                {quickView && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-[#1C1C1C]/60 flex items-center justify-center p-4"
                        onClick={() => setQuickView(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="relative bg-[#FAF7F2] max-w-3xl w-full grid md:grid-cols-2 overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setQuickView(null)}
                                className="absolute top-4 right-4 z-10 h-9 w-9 grid place-items-center bg-[#FAF7F2]/90 hover:bg-[#B08D57] hover:text-[#FAF7F2] transition"
                            >
                                <X className="h-4 w-4" />
                            </button>

                            <div className="aspect-[3/4] md:aspect-auto bg-[#1C1C1C]/5">
                                <img
                                    src={quickView.image}
                                    alt={quickView.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-8 md:p-10 flex flex-col">
                                <p className="eyebrow text-[#B08D57]">
                                    {quickView.category}
                                </p>

                                <h2 className="serif-display text-3xl mt-3">
                                    {quickView.name}
                                </h2>

                                <p className="text-sm text-[#1C1C1C]/60 mt-2 tracking-wider">
                                    For {quickView.occasion}
                                </p>

                                <p className="serif-display text-2xl mt-6">
                                    {inr(quickView.price)}
                                </p>

                                <p className="mt-6 text-sm leading-relaxed text-[#1C1C1C]/70">
                                    Hand-embroidered by master artisans over months of
                                    patient craft. Pure silks, antique zardozi, and
                                    heirloom finishing — made to be worn, remembered,
                                    and passed on.
                                </p>

                                <div className="mt-auto pt-8 flex flex-col gap-3">

                                    <Link
                                        to="/consultation"
                                        className="text-center bg-[#1C1C1C] text-[#FAF7F2] py-3 text-xs tracking-[0.3em] uppercase hover:bg-[#B08D57] transition"
                                    >
                                        Book a Fitting
                                    </Link>

                                    <button
                                        onClick={() => setQuickView(null)}
                                        className="text-xs tracking-[0.3em] uppercase text-[#1C1C1C]/60 hover:text-[#B08D57] transition"
                                    >
                                        Continue Browsing
                                    </button>

                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
/* Filter Select Component */

function FilterSelect({
    label,
    value,
    onChange,
    options,
}) {
    return (
        <div>
            <p className="eyebrow text-[#1C1C1C]/50 mb-2">
                {label}
            </p>

            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-transparent border-b border-[#1C1C1C]/30 focus:border-[#B08D57] py-2 text-sm outline-none transition"
            >
                <option value="All">
                    All{" "}
                    {label === "Category"
                        ? "Categories"
                        : label === "Occasion"
                            ? "Occasions"
                            : ""}
                </option>

                {options.map((o) => (
                    <option key={o} value={o}>
                        {o}
                    </option>
                ))}
            </select>
        </div>
    );
}
export default Products