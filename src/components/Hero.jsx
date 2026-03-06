import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=1920&q=80')`,
                }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/50 to-stone-950" />

            {/* Green tint overlay */}
            <div className="absolute inset-0 bg-emerald-950/30" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
                        Sri Lanka Wildlife Protection Network
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-black text-white mb-6 leading-none tracking-tight"
                >
                    Humans &
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                        Wildlife
                    </span>
                    <br />
                    Can CoExist.
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    Sri Lanka loses <span className="text-red-400 font-bold">370 elephants</span> and{" "}
                    <span className="text-red-400 font-bold">125 humans</span> every year to human-wildlife
                    conflict. Report incidents. Save lives. Protect nature.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.a
                        href="#report"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold px-8 py-4 rounded-2xl text-lg transition-all shadow-2xl shadow-emerald-500/30 flex items-center gap-2"
                    >
                        Report an Incident
                    </motion.a>
                    <motion.a
                        href="#map"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border border-stone-600 hover:border-emerald-500 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all backdrop-blur-sm flex items-center gap-2"
                    >
                        View Live Map
                    </motion.a>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
                >
                    {[
                        { number: "370+", label: "Elephants lost yearly" },
                        { number: "125+", label: "Human lives lost" },
                        { number: "16%", label: "Forest coverage left" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl font-black text-emerald-400">{stat.number}</div>
                            <div className="text-stone-500 text-xs mt-1 leading-tight">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-stone-500 text-xs tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-px h-8 bg-gradient-to-b from-emerald-500 to-transparent"
                />
            </motion.div>
        </section>
    )
}