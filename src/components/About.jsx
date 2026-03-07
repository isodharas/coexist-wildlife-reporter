import { motion } from "framer-motion"

const stats = [
    { number: "6", unit: "Days", label: "Field Research in Kekirawa" },
    { number: "150+", unit: "", label: "Families Interviewed" },
    { number: "370+", unit: "", label: "Elephants Lost Yearly" },
    { number: "125+", unit: "", label: "Human Lives Lost Yearly" },
]

export default function About() {
    return (
        <section id="about" className="relative bg-stone-950 py-32 px-6 overflow-hidden">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-950/40 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">Our Story</span>
                    <h2 className="text-5xl md:text-7xl font-black text-white mt-4 mb-6 leading-none">
                        Born from the
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                            Jungle
                        </span>
                    </h2>
                    <p className="text-stone-400 text-xl max-w-2xl mx-auto leading-relaxed">
                        CoExist started as a documentary. It became a mission.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative rounded-3xl overflow-hidden h-80 md:h-auto"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=900&q=80"
                            alt="Sri Lanka Elephants"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-stone-950/80 backdrop-blur-md border border-emerald-900/40 rounded-2xl px-5 py-4">
                                <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-1">Filming Location</p>
                                <p className="text-white font-bold">Kekirawa and Galgamuwa, Sri Lanka</p>
                                <p className="text-stone-400 text-sm">North Central Province — Elephant Corridor</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-8 flex-1">
                            <div className="text-3xl mb-4"></div>
                            <h3 className="text-white font-black text-xl mb-3">Living with Giants</h3>
                            <p className="text-stone-400 leading-relaxed">
                                A documentary filmed across the frontlines of Sri Lanka's human-elephant conflict.
                                Six days. Hundreds of stories. Families who lost crops, homes, and loved ones
                                living side by side with one of nature's greatest creatures.
                            </p>
                        </div>
                        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-8 flex-1">
                            <div className="text-3xl mb-4"></div>
                            <h3 className="text-white font-black text-xl mb-3">The Missing Link</h3>
                            <p className="text-stone-400 leading-relaxed">
                                Communities had no fast, reliable way to report incidents and get help.
                                Wildlife officers had no real-time data. CoExist was built to bridge that gap
                                with technology, empathy, and purpose.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gradient-to-br from-stone-900 to-stone-950 border border-stone-800 hover:border-emerald-800 rounded-2xl p-6 text-center transition-all duration-300"
                        >
                            <div className="text-4xl font-black text-emerald-400">
                                {stat.number}{stat.unit}
                            </div>
                            <div className="text-stone-500 text-sm mt-2 leading-tight">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-emerald-950/60 to-teal-950/60 border border-emerald-900/40 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8"
                >
                    <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-emerald-500/30"><img src="/dinithi.jpg" alt="Dinithi Wijesinghe" className="w-full h-full object-cover object-top" />

                    </div>
                    <div className="text-center md:text-left">
                        <div className="inline-block bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                            Youth Climate Ambassador
                        </div>
                        <h3 className="text-white font-black text-2xl mb-1">Dinithi Wijesinghe</h3>
                        <p className="text-stone-400">BSc Software Engineering — Plymouth University</p>
                        <p className="text-stone-500 text-sm mt-1">NSBM Green University, Sri Lanka</p>
                    </div>
                    <div className="md:ml-auto text-center md:text-right">
                        <p className="text-stone-500 text-sm italic max-w-xs">
                            "Technology should serve people and planet equally. CoExist is my contribution to both."
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}