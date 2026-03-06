import { motion } from "framer-motion"

const stats = [
    { icon: "", number: "370+", label: "Elephants Lost Yearly", color: "emerald" },
    { icon: "", number: "125+", label: "Human Lives Lost", color: "red" },
    { icon: "", number: "16%", label: "Forest Coverage Remaining", color: "yellow" },
    { icon: "", number: "2,400+", label: "Conflict Zones Mapped", color: "blue" },
]

export default function Stats() {
    return (
        <section id="mission" className="bg-stone-950 py-24 px-6">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">
                        The Crisis
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-6">
                        Why This Matters
                    </h2>
                    <p className="text-stone-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Human-wildlife conflict is one of Sri Lanka's most urgent conservation crises,
                        driven by habitat loss, climate change, and expanding human settlements.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-stone-900 border border-stone-800 hover:border-emerald-800 rounded-2xl p-6 text-center transition-all duration-300"
                        >
                            <div className="text-4xl mb-4">{stat.icon}</div>
                            <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                            <div className="text-stone-500 text-sm leading-tight">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 bg-gradient-to-r from-emerald-950/50 to-teal-950/50 border border-emerald-900/40 rounded-3xl p-10 text-center"
                >
                    <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                        "Every report submitted brings us one step closer to a Sri Lanka where{" "}
                        <span className="text-emerald-400">humans and wildlife thrive together.</span>"
                    </p>
                    <p className="text-stone-500 mt-4 text-sm">
                        — Inspired by Living with Giants Documentary, Kekirawa & Galgamuwa, Sri Lanka
                    </p>
                </motion.div>
            </div>
        </section>
    )
}