import { useEffect, useState } from "react"
import { motion } from "framer-motion"


const ANIMAL_COLORS = {
    "Asian Elephant": "#f59e0b",
    "Sri Lanka Leopard": "#ef4444",
    "Sloth Bear": "#8b5cf6",
    "Crocodile": "#06b6d4",
    "Wild Boar": "#84cc16",
    "Sambar Deer": "#fb923c",
    "Other": "#6b7280",
}

// Fallback demo pins so the map always looks populated
// even when the Flask API is offline
const DEMO_REPORTS = [
    { id: "d1", lat: 8.3114, lng: 80.4037, animal: "Asian Elephant", description: "Herd crossed paddy field", location: "Anuradhapura", severity: "High" },
    { id: "d2", lat: 7.9403, lng: 80.7419, animal: "Asian Elephant", description: "Bull near village at night", location: "Polonnaruwa", severity: "High" },
    { id: "d3", lat: 6.9271, lng: 79.8612, animal: "Sri Lanka Leopard", description: "Leopard spotted near school", location: "Colombo", severity: "Medium" },
    { id: "d4", lat: 6.0535, lng: 80.2210, animal: "Crocodile", description: "Crocodile in irrigation canal", location: "Hambantota", severity: "Medium" },
    { id: "d5", lat: 7.2906, lng: 80.6337, animal: "Asian Elephant", description: "Elephant raided crop store", location: "Kandy", severity: "High" },
    { id: "d6", lat: 8.7514, lng: 80.5000, animal: "Sloth Bear", description: "Bear near rubber estate", location: "Vavuniya", severity: "Low" },
    { id: "d7", lat: 6.8219, lng: 81.3384, animal: "Wild Boar", description: "Boars destroyed vegetable garden", location: "Monaragala", severity: "Low" },
    { id: "d8", lat: 7.4818, lng: 80.3609, animal: "Asian Elephant", description: "Elephant broke electric fence", location: "Kurunegala", severity: "High" },
    { id: "d9", lat: 8.5874, lng: 81.2152, animal: "Asian Elephant", description: "Herd of 12 near Trinco road", location: "Trincomalee", severity: "High" },
    { id: "d10", lat: 6.5854, lng: 80.9842, animal: "Sri Lanka Leopard", description: "Leopard tracks near tea estate", location: "Badulla", severity: "Medium" },
]

export default function MapSection() {
    const [reports, setReports] = useState([])
    const [loading, setLoading] = useState(true)
    const [usingDemo, setUsingDemo] = useState(false)
    const [mapReady, setMapReady] = useState(false)

    // ── Step 1: Fetch real reports from Flask API ──────────────
    useEffect(() => {
        // Replace this URL with your current Cloudflare tunnel URL
        // when Flask is running locally
        const API_URL = "https://drinking-uses-combines-alert.trycloudflare.com/api/reports"

        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                const items = data.reports || data || []
                if (items.length > 0) {
                    setReports(items)
                } else {
                    // API returned empty — show demo data
                    setReports(DEMO_REPORTS)
                    setUsingDemo(true)
                }
                setLoading(false)
            })
            .catch(() => {
                // API offline — show demo data so map always works
                setReports(DEMO_REPORTS)
                setUsingDemo(true)
                setLoading(false)
            })
    }, [])

    // ── Step 2: Load Leaflet and render map once data ready ────
    useEffect(() => {
        if (loading || mapReady) return

        // Dynamically inject Leaflet CSS
        if (!document.getElementById("leaflet-css")) {
            const link = document.createElement("link")
            link.id = "leaflet-css"
            link.rel = "stylesheet"
            link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            document.head.appendChild(link)
        }

        // Dynamically inject Leaflet JS
        const script = document.createElement("script")
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        script.onload = () => {
            const L = window.L

            // Fix broken default marker icons in Leaflet + Vite
            delete L.Icon.Default.prototype._getIconUrl
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
                iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
                shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
            })

            // Create map centred on Sri Lanka
            const map = L.map("coexist-map", {
                center: [7.8731, 80.7718],
                zoom: 7,
                zoomControl: true,
                scrollWheelZoom: false, // disable accidental scroll zoom
            })

            // Dark tile layer matching the site theme
            L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/">CARTO</a>',
                maxZoom: 19,
            }).addTo(map)

            // Place a circle marker for each report
            reports.forEach(report => {
                const lat = parseFloat(report.lat || report.latitude)
                const lng = parseFloat(report.lng || report.longitude)
                if (isNaN(lat) || isNaN(lng)) return

                const color = ANIMAL_COLORS[report.animal] || ANIMAL_COLORS["Other"]

                // Outer pulse ring
                L.circleMarker([lat, lng], {
                    radius: 14,
                    color: color,
                    fillColor: color,
                    fillOpacity: 0.12,
                    weight: 1,
                }).addTo(map)

                // Inner solid dot
                const marker = L.circleMarker([lat, lng], {
                    radius: 7,
                    color: color,
                    fillColor: color,
                    fillOpacity: 0.9,
                    weight: 2,
                }).addTo(map)

                // Popup on click
                marker.bindPopup(`
          <div style="font-family:sans-serif;min-width:180px">
            <div style="font-weight:bold;font-size:13px;margin-bottom:4px;color:#${color.slice(1)}">${report.animal || "Unknown"}</div>
            <div style="font-size:12px;color:#ccc;margin-bottom:6px">📍 ${report.location || "Sri Lanka"}</div>
            <div style="font-size:12px;color:#aaa">${report.description || "No description"}</div>
            ${report.severity ? `<div style="margin-top:6px;font-size:11px;color:#888">Severity: <b>${report.severity}</b></div>` : ""}
          </div>
        `, { className: "coexist-popup" })
            })

            setMapReady(true)
        }
        document.head.appendChild(script)
    }, [loading, reports])

    // ── Severity counts for the legend ─────────────────────────
    const counts = {
        total: reports.length,
        high: reports.filter(r => r.severity === "High").length,
        medium: reports.filter(r => r.severity === "Medium").length,
        low: reports.filter(r => r.severity === "Low").length,
    }

    return (
        <section id="map" className="bg-stone-950 py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Section header */}
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
                        Conflict Map
                    </h2>
                    <p className="text-stone-400 text-lg max-w-2xl mx-auto">
                        Real-time reports from communities across Sri Lanka. Every pin is a story.
                    </p>

                    {/* Demo mode warning */}
                    {usingDemo && (
                        <div className="mt-4 inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-2">
                            <span className="w-2 h-2 rounded-full bg-amber-400" />
                            <span className="text-amber-400 text-xs font-medium">
                                Showing demo data — Flask API offline. Start Flask to see live reports.
                            </span>
                        </div>
                    )}
                </motion.div>

                {/* Stats row above map */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-4 gap-3 mb-4"
                >
                    {[
                        { label: "Total Reports", value: counts.total, color: "text-white" },
                        { label: "High Severity", value: counts.high, color: "text-red-400" },
                        { label: "Medium", value: counts.medium, color: "text-amber-400" },
                        { label: "Low", value: counts.low, color: "text-emerald-400" },
                    ].map(s => (
                        <div key={s.label} className="bg-stone-900 border border-stone-800 rounded-xl p-4 text-center">
                            <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
                            <p className="text-stone-600 text-xs mt-1">{s.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Map container */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl overflow-hidden border border-stone-800"
                    style={{ height: "520px" }}
                >
                    {/* Loading overlay */}
                    {loading && (
                        <div className="absolute inset-0 bg-stone-900 flex items-center justify-center z-10">
                            <div className="text-center">
                                <div className="w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                                <p className="text-stone-400 text-sm">Loading map data...</p>
                            </div>
                        </div>
                    )}

                    {/* Leaflet renders into this div */}
                    <div id="coexist-map" className="w-full h-full" />
                </motion.div>

                {/* Legend */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-4 flex flex-wrap gap-3 justify-center"
                >
                    {Object.entries(ANIMAL_COLORS).map(([animal, color]) => (
                        <div key={animal} className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                            <span className="text-stone-500 text-xs">{animal}</span>
                        </div>
                    ))}
                </motion.div>

            </div>

            {/* Custom popup styles */}
            <style>{`
        .coexist-popup .leaflet-popup-content-wrapper {
          background: #1c2b20;
          border: 1px solid #1f4d2a;
          border-radius: 12px;
          color: #ccc;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6);
        }
        .coexist-popup .leaflet-popup-tip {
          background: #1c2b20;
        }
        .leaflet-container {
          background: #0a120c !important;
        }
      `}</style>
        </section>
    )
}
