import { motion } from "framer-motion"
import { useState } from "react"

const tips = [
    {
        animal: " Elephant",
        color: "emerald",
        rules: [
            "Never get between a mother and her calf",
            "If charged, run in a zigzag pattern",
            "Climb a tree if possible — elephants can't climb",
            "Never shine lights directly at elephants at night",
            "Stay downwind to avoid detection",
            "Never approach a lone bull elephant",
        ],
    },
    {
        animal: " Leopard",
        color: "yellow",
        rules: [
            "Never run — it triggers their chase instinct",
            "Make yourself appear larger by raising arms",
            "Maintain eye contact and back away slowly",
            "Make loud noises to deter the animal",
            "Never corner a leopard — always leave an escape route",
            "Travel in groups in leopard territory",
        ],
    },
    {
        animal: " Crocodile",
        color: "blue",
        rules: [
            "Never swim in unfamiliar rivers or lakes",
            "Keep 5+ metres from water edges at dawn/dusk",
            "Never clean fish or meat near water",
            "If attacked, strike the eyes and nose",
            "Avoid areas with warning signs",
            "Never feed crocodiles — it removes their fear of humans",
        ],
    },
    {
        animal: " Snake",
        color: "red",
        rules: [
            "Wear thick boots and long trousers in jungle",
            "Never put hands in holes or under rocks",
            "If bitten, immobilise the limb and seek help immediately",
            "Never try to suck out venom — it doesn't work",
            "Keep grass short around your home",
            "Use a torch when walking at night",
        ],
    },
]

export default function SafetyTips() {
    const [active, setActive] = useState(0)

    return (
        <section id="safety" className="bg-stone-900 py-24 px-6">
            <div className="max-w-5xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">
                        Stay Safe
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
                        Wildlife Safety Guide
                    </h2>
                    <p className="text-stone-400 text-lg max-w-xl mx-auto">
                        Know what to do when you encounter wildlife. This knowledge saves lives.
                    </p>
                </motion.div>

                {/* Animal Tabs */}
                <div className="flex flex-wrap gap-3 justify-center mb-10">
                    {tips.map((tip, i) => (
                        <motion.button
                            key={tip.animal}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActive(i)}
                            className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${active === i
                                ? "bg-emerald-500 text-stone-950"
                                : "bg-stone-800 text-stone-400 hover:bg-stone-700"
                                }`}
                        >
                            {tip.animal}
                        </motion.button>
                    ))}
                </div>

                {/* Tips Card */}
                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-stone-950 border border-stone-800 rounded-3xl p-8 md:p-12"
                >
                    <h3 className="text-2xl font-black text-white mb-8">
                        {tips[active].animal} — Safety Rules
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {tips[active].rules.map((rule, i) => (
                            <motion.div
                                key={rule}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="flex items-start gap-3 bg-stone-900 rounded-2xl p-4"
                            >
                                <span className="text-emerald-400 font-black text-lg mt-0.5">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="text-stone-300 text-sm leading-relaxed">{rule}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 bg-red-500/10 border border-red-500/30 rounded-2xl p-4 flex items-start gap-3">
                        <span className="text-2xl"></span>
                        <div>
                            <div className="text-red-400 font-bold text-sm">Emergency Contact</div>
                            <div className="text-stone-400 text-sm mt-1">
                                Sri Lanka Wildlife Conservation Department: <span className="text-white font-bold">+94 11 288 6592</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}