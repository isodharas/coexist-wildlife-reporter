import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import ReportForm from "./components/ReportForm"
import MapSection from "./components/MapSection"
import SafetyTips from "./components/SafetyTips"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <ReportForm />
      <MapSection />
      <SafetyTips />
      <About />
      <Footer />
    </div>
  )
}

export default App