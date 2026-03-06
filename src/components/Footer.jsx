export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">

          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-black text-emerald-400 text-lg">
                C
              </div>
              <div>
                <span className="text-white font-black text-xl">Co</span>
                <span className="text-emerald-400 font-black text-xl">Exist</span>
                <span className="ml-2 text-xs text-stone-600 font-medium tracking-wider uppercase">Sri Lanka</span>
              </div>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-6 max-w-xs">
              A community-powered platform for reporting and tracking human-wildlife conflict
              across Sri Lanka. Protecting both people and nature since 2024.
            </p>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-medium">Platform Active — Reports Being Monitored</span>
            </div>
            <div className="flex gap-3 mt-2">
              <a href="https://github.com/isodharas/coexist-wildlife-reporter" target="_blank" rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-emerald-500/20 border border-stone-700 hover:border-emerald-500/40 text-stone-400 hover:text-emerald-400 text-xs font-bold transition-all">
                GitHub
              </a>
              <a href="#" className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-400 text-xs font-bold transition-all">
                Twitter
              </a>
              <a href="#" className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-400 text-xs font-bold transition-all">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#report" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors">Report Incident</a></li>
              <li><a href="#map" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors">Live Conflict Map</a></li>
              <li><a href="#mission" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors">Statistics</a></li>
              <li><a href="#safety" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors">Safety Guide</a></li>
              <li><a href="#about" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors">Our Mission</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Official Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.dwc.gov.lk" target="_blank" rel="noreferrer" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors">
                  Dept. of Wildlife Conservation
                </a>
              </li>
              <li>
                <a href="https://www.iucn.org/regions/asia/countries/sri-lanka" target="_blank" rel="noreferrer" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors">
                  IUCN Sri Lanka
                </a>
              </li>
              <li>
                <a href="https://www.wwf.lk" target="_blank" rel="noreferrer" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors">
                  WWF Sri Lanka
                </a>
              </li>
              <li>
                <a href="https://www.forestdept.gov.lk" target="_blank" rel="noreferrer" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors">
                  Dept. of Forest Conservation
                </a>
              </li>
              <li>
                <a href="https://www.cea.lk" target="_blank" rel="noreferrer" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors">
                  Central Environmental Authority
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Emergency Contacts</h4>
            <div className="space-y-3">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                <p className="text-red-400 text-xs font-bold mb-1">Wildlife Emergency Hotline</p>
                <p className="text-white text-sm font-bold">+94 11 288 8585</p>
                <p className="text-stone-600 text-xs">Dept. of Wildlife Conservation</p>
                <p className="text-stone-600 text-xs">24 Hour Anti-Poaching Squad</p>
              </div>
              <div className="bg-stone-900 border border-stone-800 rounded-xl p-3">
                <p className="text-stone-400 text-xs font-bold mb-1">Forest Conservation Hotline</p>
                <p className="text-white text-sm font-bold">1991</p>
                <p className="text-stone-600 text-xs">Dept. of Forest Conservation</p>
              </div>
              <div className="bg-stone-900 border border-stone-800 rounded-xl p-3">
                <p className="text-stone-400 text-xs font-bold mb-1">DWC Head Office</p>
                <p className="text-white text-sm font-bold">+94 11 288 3355</p>
                <p className="text-stone-600 text-xs">Battaramulla, Sri Lanka</p>
              </div>
              <div className="pt-1">
                <p className="text-stone-600 text-xs mb-1">DWC Official Email</p>
                <p className="text-emerald-400 text-sm">dg@dwc.gov.lk</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-stone-900/50 border border-stone-800 rounded-2xl px-6 py-4 mb-8 flex flex-wrap gap-4 items-center justify-between">
          <p className="text-stone-600 text-xs font-medium tracking-wide uppercase">Built with</p>
          <div className="flex flex-wrap gap-3">
            <span className="text-stone-500 text-xs bg-stone-800 px-3 py-1 rounded-full border border-stone-700">React + Vite</span>
            <span className="text-stone-500 text-xs bg-stone-800 px-3 py-1 rounded-full border border-stone-700">Tailwind CSS</span>
            <span className="text-stone-500 text-xs bg-stone-800 px-3 py-1 rounded-full border border-stone-700">Framer Motion</span>
            <span className="text-stone-500 text-xs bg-stone-800 px-3 py-1 rounded-full border border-stone-700">Leaflet.js</span>
            <span className="text-stone-500 text-xs bg-stone-800 px-3 py-1 rounded-full border border-stone-700">Flask</span>
            <span className="text-stone-500 text-xs bg-stone-800 px-3 py-1 rounded-full border border-stone-700">Docker</span>
            <span className="text-stone-500 text-xs bg-stone-800 px-3 py-1 rounded-full border border-stone-700">AWS ECS</span>
            <span className="text-stone-500 text-xs bg-stone-800 px-3 py-1 rounded-full border border-stone-700">DynamoDB</span>
            <span className="text-stone-500 text-xs bg-stone-800 px-3 py-1 rounded-full border border-stone-700">CloudFront</span>
            <span className="text-stone-500 text-xs bg-stone-800 px-3 py-1 rounded-full border border-stone-700">GitHub Actions</span>
          </div>
        </div>

        <div className="border-t border-stone-900 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-stone-700 text-xs">
            © 2026 CoExist Wildlife Reporter. All rights reserved. Built with love for Sri Lanka.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-stone-700 hover:text-stone-500 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-stone-700 hover:text-stone-500 text-xs transition-colors">Terms of Use</a>
            <a href="https://github.com/isodharas/coexist-wildlife-reporter" target="_blank" rel="noreferrer" className="text-stone-700 hover:text-stone-500 text-xs transition-colors">Open Source</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
