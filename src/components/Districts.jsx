import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { districts, conflictColors } from "./districtData"

const UNSPLASH_KEY = "LeyWqJ14fGhW648Ysk-8WVwFgg2Ejvlv1VWh4hBke5Q"

// Global cache so photos don't re-fetch if you scroll up/down
const imageCache = {}

// Fetch ONE cover photo for a district card
async function fetchCoverPhoto(query) {
  if (imageCache[query]) return imageCache[query]
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
      { headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` } }
    )
    const data = await res.json()
    const url = data.results?.[0]?.urls?.regular || null
    imageCache[query] = url
    return url
  } catch {
    return null
  }
}

// This component handles ONE card — it watches if it's visible on screen
// and only fetches its photo when it scrolls into view
function DistrictCard({ district, index }) {
  const navigate = useNavigate()
  const [photoUrl, setPhotoUrl] = useState(null)
  const [hasTriggered, setHasTriggered] = useState(false)
  const cardRef = useRef(null)

  // IntersectionObserver — fires when card enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // entries[0].isIntersecting = true means the card is now visible
        if (entries[0].isIntersecting && !hasTriggered) {
          setHasTriggered(true) // only fetch once
          fetchCoverPhoto(district.coverQuery).then((url) => {
            if (url) setPhotoUrl(url)
          })
        }
      },
      { threshold: 0.1 } // triggers when 10% of card is visible
    )

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect() // cleanup when card unmounts
  }, [district.coverQuery, hasTriggered])

  const colors = conflictColors[district.conflictLevel]

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => {
        navigate(`/district/${district.slug}`)
        window.scrollTo({ top: 0, behavior: "smooth" })
      }}
      className="cursor-pointer group overflow-hidden rounded-2xl border border-stone-800 hover:border-emerald-500/40 transition-all"
    >
      {/* Card image area */}
      <div className="relative h-40 overflow-hidden bg-stone-800">
        {photoUrl ? (
          // Real photo loaded — show it with a zoom on hover
          <img
            src={photoUrl}
            alt={district.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          // Still loading — show a shimmer animation
          <div className="w-full h-full bg-gradient-to-r from-stone-800 via-stone-700 to-stone-800 animate-pulse" />
        )}

        {/* Dark gradient so text is readable over any photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

        {/* Conflict level badge top-right */}
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-bold border ${colors.bg} ${colors.text} ${colors.border}`}>
          {district.conflictLevel}
        </div>
      </div>

      {/* Card text */}
      <div className="p-4 bg-stone-950">
        <h3 className="text-white font-bold text-lg">{district.name}</h3>
        <p className="text-stone-500 text-xs mb-2">{district.province} Province</p>
        <p className="text-stone-400 text-xs italic mb-3 line-clamp-1">"{district.tagline}"</p>
        <div className="flex items-center justify-between">
          <span className="text-stone-600 text-xs">{district.nationalParks.length} protected areas</span>
          <span className="text-emerald-400 text-xs font-bold group-hover:underline">Explore →</span>
        </div>
      </div>
    </motion.div>
  )
}

// Main Districts section — renders the grid
export default function Districts() {
  return (
    <section id="districts" className="bg-stone-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">
            Explore Sri Lanka
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            All 25 Districts
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            From ancient kingdoms to coral reefs — discover the beauty and wildlife of every
            district, and the conservation challenges they face.
          </p>
        </motion.div>

        {/* Grid of cards — each card fetches its own photo lazily */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {districts.map((district, i) => (
            <DistrictCard key={district.slug} district={district} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
