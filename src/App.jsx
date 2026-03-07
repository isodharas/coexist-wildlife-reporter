import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import ReportForm from "./components/ReportForm"
import MapSection from "./components/MapSection"
import SafetyTips from "./components/SafetyTips"
import About from "./components/About"
import Footer from "./components/Footer"
import Districts from "./components/Districts"
import DistrictPage from "./components/DistrictPage"

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ReportForm />
      <MapSection />
      <Districts />
      <SafetyTips />
      <About />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-stone-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/district/:slug" element={<DistrictPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
