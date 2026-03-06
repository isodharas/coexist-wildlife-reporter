import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"
import { GiElephant } from "react-icons/gi"

const navLinks = [
    { label: "Mission", href: "#mission" },
    { label: "Report", href: "#report" },
    { label: "Live Map", href: "#map" },
    { label: "Safety", href: "#safety" },
    { label: "About", href: "#about" },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-stone-950/90 backdrop-blur-xl border-b border-emerald-900/30 shadow-2xl"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    <motion.a
                        href="#"
                        className="flex items-center gap-2 group"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center group-hover:bg-emerald-500/30 transition-all">
                            <GiElephant className="text-emerald-400 text-lg" />
                        </div>
                        <div>
                            <span className="text-white font-bold text-lg tracking-tight">Co</span>
                            <span className="text-emerald-400 font-bold text-lg tracking-tight">Exist</span>
                        </div>
                    </motion.a>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i + 0.3 }}
                                className="text-stone-400 hover:text-emerald-400 text-sm font-medium tracking-wide transition-colors duration-200 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-400 group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                    </div>

                    <motion.a
                        href="#report"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-stone-950 text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25"
                    >
                        Report Incident
                    </motion.a>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-white p-2"
                    >
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-16 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-xl border-b border-emerald-900/30 p-6 flex flex-col gap-4 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-stone-300 hover:text-emerald-400 text-lg font-medium py-2 border-b border-stone-800 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#report"
                            onClick={() => setMenuOpen(false)}
                            className="bg-emerald-500 text-stone-950 font-bold px-5 py-3 rounded-xl text-center mt-2"
                        >
                            Report Incident
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
