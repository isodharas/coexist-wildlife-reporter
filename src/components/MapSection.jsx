import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const mockReports = [
    { id: 1, lat: 8.3114, lng: 80.4037, animal: " Elephant", location: "Kekirawa", type: "Crop Damage", time: "2 hours ago", severity: "high" },
    { id: 2, lat: 7.9403, lng: 80.7718, animal: " Leopard", location: "Kandy", type: "Wildlife Sighting", time: "4 hours ago", severity: "low" },
    { id: 3, lat: 8.5874, lng: 81.2152, animal: " Elephant", location: "Trincomalee", type: "Property Damage", time: "6 hours ago", severity: "high" },
    { id: 4, lat: 6.9271, lng: 79.8612, animal: " Snake", location: "Colombo", type: "Human Injury", time: "1 day ago", severity: "medium" },
    { id: 5, lat: 6.0535, lng: 80.2210, animal: " Crocodile", location: "Galle", type: "Wildlife Sighting", time: "1 day ago", severity: "medium" },
    { id: 6, lat: 7.2906, lng: 80.6337, animal: " Bear", location: "Ratnapura", type: "Crop Damage", time: "2 days ago", severity: "high" },
]

const severityColor = {
    high: "bg-red-500",
    medium: "bg-yellow-500",
    low: "bg-emerald-500",
}

export default function MapSection() {
    const mapRef = useRef(null)
    const mapInstanceRef = useRef(null)

    useEffect(() => {
        if (mapInstanceRef.current) return

        const loadMap = async () => {
            const L = await import("leaflet")
            await import("leaflet/dist/leaflet.css")

            const map = L.map(mapRef.current).setView([8.5, 80.7], 7)
            mapInstanceRef.current = map

            L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
                attribution: "©OpenStreetMap ©CartoDB",
            }).addTo(map)

            mockReports.forEach((report) => {
                const color = report.severity === "high" ? "#ef4444" : report.severity === "medium" ? "#eab308" : "#22c55e"

                const icon = L.divIcon({
                    html: `<div style="background:${color};width:12px;height:12px;border-radius:50%;border:2px solid white;box-shadow:0 0 8px ${color}"></div>`,
                    className: "",
                    iconSize: [12, 12],
                })

                L.marker([report.lat, report.lng], { icon })
                    .addTo(map)
                    .bindPopup(`
            <div style="background:#1c1917;color:white;padding:12px;border-radius:12px;min-width:180px;font-family:sans-serif">
              <div style="font-size:18px">${report.animal}</div>
              <div style="font-weight:bold;margin-top:4px">${report.location}</div>
              <div style="color:#a8a29e;font-size:12px">${report.type}</div>
              <div style="color:#6b7280;font-size:11px;margin-top:4px">${report.time}</div>
            </div>
          `)
            })
        }

        loadMap()
    }, [])

    return (
        <section id="map" className="bg-stone-950 py-24 px-6">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">
                        Live Data
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
                        Conflict Hotspot Map
                    </h2>
                    <p className="text-stone-400 text-lg max-w-xl mx-auto">
                        Real-time reports from communities across Sri Lanka.
                    </p>
                </motion.div>

                {/* Legend */}
                <div className="flex items-center justify-center gap-6 mb-6">
                    {[
                        { color: "bg-red-500", label: "High Severity" },
                        { color: "bg-yellow-500", label: "Medium Severity" },
                        { color: "bg-emerald-500", label: "Low Severity" },
                    ].map((item) => (
                        <div key={item.label} className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${item.color}`} />
                            <span className="text-stone-400 text-sm">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Map */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="rounded-3xl overflow-hidden border border-stone-800 shadow-2xl"
                    style={{ height: "500px" }}
                >
                    <div ref={mapRef} style={{ height: "100%", width: "100%" }} />
                </motion.div>

                {/* Recent Reports List */}
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                    {mockReports.slice(0, 3).map((report, i) => (
                        <motion.div
                            key={report.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-stone-900 border border-stone-800 rounded-2xl p-4 flex items-start gap-3"
                        >
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${severityColor[report.severity]}`} />
                            <div>
                                <div className="text-white font-semibold text-sm">{report.animal} — {report.location}</div>
                                <div className="text-stone-500 text-xs mt-1">{report.type}</div>
                                <div className="text-stone-600 text-xs mt-1">{report.time}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}