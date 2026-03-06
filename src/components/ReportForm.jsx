import { useState } from "react"
import { motion } from "framer-motion"

const animalTypes = [
    { emoji: "", name: "Elephant" },
    { emoji: "", name: "Leopard" },
    { emoji: "", name: "Crocodile" },
    { emoji: "", name: "Bear" },
    { emoji: "", name: "Snake" },
    { emoji: "", name: "Deer" },
    { emoji: "", name: "Wild Boar" },
    { emoji: "", name: "Other" },
]

const incidentTypes = [
    "Crop Damage",
    "Property Damage",
    "Human Injury",
    "Animal Injury",
    "Wildlife Sighting",
    "Road Crossing",
    "Other",
]

export default function ReportForm() {
    const [selectedAnimal, setSelectedAnimal] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const [form, setForm] = useState({
        location: "",
        district: "",
        incidentType: "",
        description: "",
        contact: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
    }

    return (
        <section id="report" className="bg-stone-900 py-24 px-6">
            <div className="max-w-4xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">
                        Take Action
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
                        Report an Incident
                    </h2>
                    <p className="text-stone-400 text-lg max-w-xl mx-auto">
                        Your report reaches wildlife officers within minutes. Every sighting counts.
                    </p>
                </motion.div>

                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-emerald-500/10 border border-emerald-500/40 rounded-3xl p-16 text-center"
                    >
                        <div className="text-6xl mb-4">✅</div>
                        <h3 className="text-2xl font-bold text-white mb-2">Report Submitted!</h3>
                        <p className="text-stone-400">Wildlife officers have been notified. Thank you for helping protect Sri Lanka's wildlife.</p>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="bg-stone-950 border border-stone-800 rounded-3xl p-8 md:p-12 space-y-8"
                    >

                        {/* Animal Type */}
                        <div>
                            <label className="text-white font-bold text-lg mb-4 block">
                                What animal did you encounter?
                            </label>
                            <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                                {animalTypes.map((animal) => (
                                    <motion.button
                                        type="button"
                                        key={animal.name}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedAnimal(animal.name)}
                                        className={`flex flex-col items-center gap-1 p-3 rounded-xl border transition-all ${selectedAnimal === animal.name
                                            ? "border-emerald-500 bg-emerald-500/20 text-emerald-400"
                                            : "border-stone-700 bg-stone-900 text-stone-400 hover:border-stone-500"
                                            }`}
                                    >
                                        <span className="text-2xl">{animal.emoji}</span>
                                        <span className="text-xs font-medium">{animal.name}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Location + District */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-stone-300 font-semibold mb-2 block">
                                    Location / Village
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Kekirawa, Anuradhapura"
                                    value={form.location}
                                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                                    className="w-full bg-stone-900 border border-stone-700 focus:border-emerald-500 text-white placeholder-stone-600 rounded-xl px-4 py-3 outline-none transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-stone-300 font-semibold mb-2 block">
                                    District
                                </label>
                                <select
                                    value={form.district}
                                    onChange={(e) => setForm({ ...form, district: e.target.value })}
                                    className="w-full bg-stone-900 border border-stone-700 focus:border-emerald-500 text-white rounded-xl px-4 py-3 outline-none transition-colors"
                                    required
                                >
                                    <option value="">Select district</option>
                                    {["Anuradhapura", "Polonnaruwa", "Ampara", "Trincomalee", "Kurunegala", "Matale", "Kandy", "Ratnapura", "Monaragala", "Hambantota"].map(d => (
                                        <option key={d} value={d}>{d}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Incident Type */}
                        <div>
                            <label className="text-stone-300 font-semibold mb-3 block">
                                Incident Type
                            </label>
                            <div className="flex flex-wrap gap-3">
                                {incidentTypes.map((type) => (
                                    <button
                                        type="button"
                                        key={type}
                                        onClick={() => setForm({ ...form, incidentType: type })}
                                        className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${form.incidentType === type
                                            ? "border-emerald-500 bg-emerald-500/20 text-emerald-400"
                                            : "border-stone-700 text-stone-400 hover:border-stone-500"
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="text-stone-300 font-semibold mb-2 block">
                                Description
                            </label>
                            <textarea
                                placeholder="Describe what happened in detail..."
                                rows={4}
                                value={form.description}
                                onChange={(e) => setForm({ ...form, description: e.target.value })}
                                className="w-full bg-stone-900 border border-stone-700 focus:border-emerald-500 text-white placeholder-stone-600 rounded-xl px-4 py-3 outline-none transition-colors resize-none"
                                required
                            />
                        </div>

                        {/* Contact */}
                        <div>
                            <label className="text-stone-300 font-semibold mb-2 block">
                                Contact Number (optional)
                            </label>
                            <input
                                type="tel"
                                placeholder="Your phone number for follow-up"
                                value={form.contact}
                                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                                className="w-full bg-stone-900 border border-stone-700 focus:border-emerald-500 text-white placeholder-stone-600 rounded-xl px-4 py-3 outline-none transition-colors"
                            />
                        </div>

                        {/* Submit */}
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-black text-lg py-4 rounded-2xl transition-all shadow-2xl shadow-emerald-500/20"
                        >
                            Submit Report to Wildlife Officers
                        </motion.button>

                        <p className="text-stone-600 text-xs text-center">
                            Reports are reviewed by certified wildlife officers within 30 minutes during daylight hours.
                        </p>
                    </motion.form>
                )}
            </div>
        </section>
    )
}