import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { districts, conflictColors } from "./districtData"

const UNSPLASH_KEY = "LeyWqJ14fGhW648Ysk-8WVwFgg2Ejvlv1VWh4hBke5Q"

async function fetchPhotos(queries) {
  // Fetch one photo per query, all in parallel
  const results = await Promise.all(
    queries.map(async (query) => {
      try {
        const res = await fetch(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=2&orientation=landscape`,
          { headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` } }
        )
        const data = await res.json()
        return data.results?.map((r) => r.urls.regular) || []
      } catch {
        return []
      }
    })
  )
  // Flatten all photos into one array
  return results.flat()
}

export default function DistrictPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const district = districts.find((d) => d.slug === slug)

  const [heroPhoto, setHeroPhoto] = useState(null)
  const [galleryPhotos, setGalleryPhotos] = useState([])
  const [loading, setLoading] = useState(true)

  // Scroll to top whenever the district changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // Fetch all photos when district loads
  useEffect(() => {
    if (!district) return
    setLoading(true)
    setHeroPhoto(null)
    setGalleryPhotos([])

    fetchPhotos(district.galleryQueries).then((photos) => {
      if (photos.length > 0) setHeroPhoto(photos[0])
      if (photos.length > 1) setGalleryPhotos(photos.slice(1))
      setLoading(false)
    })
  }, [slug])

  if (!district) {
    return (
      <div className="min-h-screen bg-stone-950 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-2xl font-bold mb-4">District not found</h2>
          <button onClick={() => navigate("/")} className="text-emerald-400 hover:underline">
            ← Back to home
          </button>
        </div>
      </div>
    )
  }

  const colors = conflictColors[district.conflictLevel]

  return (
    <div className="min-h-screen bg-stone-950">

      {/* ── HERO ── */}
      <div className="relative h-screen overflow-hidden bg-stone-900">
        {heroPhoto ? (
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={heroPhoto}
            alt={district.name}
            className="w-full h-full object-cover"
          />
        ) : (
          // Shimmer while loading
          <div className="w-full h-full bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 animate-pulse" />
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/20" />

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col justify-end pb-24 px-8 max-w-6xl mx-auto left-0 right-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <button
              onClick={() => {
                navigate("/")
                setTimeout(() => document.getElementById("districts")?.scrollIntoView({ behavior: "smooth" }), 200)
              }}
              className="flex items-center gap-2 text-stone-400 hover:text-white text-sm mb-8 transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
              Back to all districts
            </button>

            <p className="text-emerald-400 text-sm font-bold tracking-widest uppercase mb-3">
              {district.province} Province · Sri Lanka
            </p>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 leading-none drop-shadow-2xl">
              {district.name}
            </h1>
            <p className="text-stone-300 text-xl italic mb-6 drop-shadow">"{district.tagline}"</p>
            <span className={`inline-block px-4 py-2 rounded-xl border text-sm font-bold ${colors.bg} ${colors.text} ${colors.border}`}>
              {district.conflictLevel} Conflict Zone
            </span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-stone-500 text-xs"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-stone-500 mb-2" />
          scroll
        </motion.div>
      </div>

      {/* ── BODY ── */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { label: "Elephants Lost (2022)", value: district.elephantsLost, color: "text-red-400" },
            { label: "Humans Lost (2022)",    value: district.humansLost,    color: "text-orange-400" },
            { label: "Area",                  value: district.area,          color: "text-emerald-400" },
            { label: "Population",            value: district.population,    color: "text-blue-400" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-stone-900 border border-stone-800 rounded-2xl p-6 text-center"
            >
              <p className={`text-3xl font-black ${s.color}`}>{s.value}</p>
              <p className="text-stone-500 text-xs mt-2">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* About + Wildlife */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <div>
            <h2 className="text-white text-3xl font-black mb-6">About {district.name}</h2>
            <p className="text-stone-400 leading-relaxed text-lg">{district.description}</p>
            <h3 className="text-white text-xl font-bold mt-10 mb-4">Protected Areas</h3>
            <ul className="space-y-3">
              {district.nationalParks.map((park) => (
                <li key={park} className="flex items-center gap-3 text-stone-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                  {park}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-bold mb-4">Wildlife Species</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {district.wildlife.map((animal) => (
                <span key={animal} className="px-3 py-1.5 bg-stone-900 border border-stone-700 rounded-xl text-stone-300 text-sm">
                  {animal}
                </span>
              ))}
            </div>
            <div className={`p-6 rounded-2xl border ${colors.bg} ${colors.border}`}>
              <h4 className={`font-bold text-lg mb-3 ${colors.text}`}>Conflict Status: {district.conflictLevel}</h4>
              <p className="text-stone-400 text-sm leading-relaxed">
                {district.conflictLevel === "Critical"  && "Highest priority for conservation intervention. Urgent action needed to protect both communities and elephants."}
                {district.conflictLevel === "High"      && "Frequent and deadly encounters. Active conservation measures underway but more resources are urgently needed."}
                {district.conflictLevel === "Moderate"  && "Conflict is present but manageable. Community awareness and electric fencing are making a difference."}
                {district.conflictLevel === "Low"       && "Incidents are relatively rare. Continued monitoring and habitat protection is essential."}
                {district.conflictLevel === "Minimal"   && "Wildlife conflict is not a significant issue here. Focus is on habitat preservation and marine ecosystems."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-white text-3xl font-black mb-8">Photo Gallery</h2>
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`rounded-xl bg-stone-800 animate-pulse ${i === 0 ? "col-span-2 row-span-2 h-80" : "h-36"}`} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {galleryPhotos.map((url, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`overflow-hidden rounded-xl bg-stone-800 ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                  style={{ height: i === 0 ? "320px" : "155px" }}
                >
                  <img
                    src={url}
                    alt={`${district.name} ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-900 border border-stone-800 rounded-3xl p-12 text-center"
        >
          <h3 className="text-white text-3xl font-black mb-3">Spotted wildlife in {district.name}?</h3>
          <p className="text-stone-400 text-lg mb-8">Help protect both communities and wildlife by reporting what you see.</p>
          <button
            onClick={() => {
              navigate("/")
              setTimeout(() => document.getElementById("report")?.scrollIntoView({ behavior: "smooth" }), 200)
            }}
            className="bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-black px-10 py-4 rounded-2xl transition-all text-lg"
          >
            Report an Incident
          </button>
        </motion.div>

      </div>
    </div>
  )
}
