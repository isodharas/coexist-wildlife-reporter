export default function Footer() {
    return (
        <footer className="bg-stone-950 border-t border-stone-800 pt-16 pb-8 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">

                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-xl">

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
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-emerald-400 text-xs font-medium">Platform Active — Reports Being Monitored</span>
                        </div>
                        <div className="flex gap-3 mt-5">
                            <a href="https://github.com/isodharas/coexist-wildlife-reporter" target="_blank" rel="noreferrer"
                                className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-stone-700 border border-stone-700 flex items-center justify-center text-sm transition-all">

                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-stone-700 border border-stone-700 flex items-center justify-center text-sm transition-all">

                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-stone-700 border border-stone-700 flex items-center justify-center text-sm transition-all">

                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Platform</h4>
                        <ul className="space-y-3">
                            <li><a href="#report" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors"> Report Incident</a></li>
                            <li><a href="#map" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors"> Live Conflict Map</a></li>
                            <li><a href="#mission" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors"> Statistics</a></li>
                            <li><a href="#safety" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors"> Safety Guide</a></li>
                            <li><a href="#about" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors"> Our Mission</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Resources</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors">Wildlife Conservation Dept.</a></li>
                            <li><a href="#" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors">IUCN Sri Lanka</a></li>
                            <li><a href="#" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors">WWF Sri Lanka</a></li>
                            <li><a href="#" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors">Elephant Research</a></li>
                            <li><a href="#" className="text-stone-500 hover:text-emerald-400 text-sm transition-colors">Community Guidelines</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Emergency Contacts</h4>
                        <div className="space-y-4">
                            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                                <p className="text-red-400 text-xs font-bold mb-1"> Wildlife Emergency</p>
                                <p className="text-white text-sm font-bold">+94 11 288 6592</p>
                                <p className="text-stone-600 text-xs">Wildlife Conservation Dept.</p>
                            </div>
                            <div className="bg-stone-900 border border-stone-800 rounded-xl p-3">
                                <p className="text-stone-400 text-xs font-bold mb-1">General Hotline</p>
                                <p className="text-white text-sm font-bold">1912</p>
                                <p className="text-stone-600 text-xs">National Emergency</p>
                            </div>
                            <div>
                                <p className="text-stone-600 text-xs mb-1">Email Us</p>
                                <p className="text-emerald-400 text-sm">contact@coexist.lk</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-stone-900/50 border border-stone-800 rounded-2xl px-6 py-4 mb-8 flex flex-wrap gap-4 items-center justify-between">
                    <p className="text-stone-600 text-xs font-medium tracking-wide uppercase">Built with</p>
                    <div className="flex flex-wrap gap-3">
                        <span className="text-stone-500 text-xs bg-stone-800 px-3 py-1 rounded-full border border-stone-700">⚛️ React + Vite</span>
                        <span className="text-stone-500 text-xs bg-stone-800 px-3 py-1 rounded-full border border-stone-700">🎨 Tailwind CSS</span>
                        <span className="text-stone-500 text-xs bg-stone-800 px-3 py-1 rounded-full border border-stone-700">✨ Framer Motion</span>
                        <span className="text-stone-500 text-xs bg-stone-800 px-3 py-1 rounded-full border border-stone-700">🗺️ Leaflet.js</span>
                        <span className="text-stone-500 text-xs bg-stone-800 px-3 py-1 rounded-full border border-stone-700">🐍 Flask</span>
                        <span className="text-stone-500 text-xs bg-stone-800 px-3 py-1 rounded-full border border-stone-700">🐳 Docker</span>
                        <span className="text-stone-500 text-xs bg-stone-800 px-3 py-1 rounded-full border border-stone-700">☁️ AWS ECS</span>
                        <span className="text-stone-500 text-xs bg-stone-800 px-3 py-1 rounded-full border border-stone-700">⚙️ GitHub Actions</span>
                    </div>
                </div>

                <div className="border-t border-stone-900 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-stone-700 text-xs">
                        © 2026 CoExist Wildlife Reporter. All rights reserved. Built with 💚 for Sri Lanka.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-stone-700 hover:text-stone-500 text-xs transition-colors">Privacy Policy</a>
                        <a href="#" className="text-stone-700 hover:text-stone-500 text-xs transition-colors">Terms of Use</a>
                        <a href="#" className="text-stone-700 hover:text-stone-500 text-xs transition-colors">Open Source</a>
                    </div>
                </div>

            </div>
        </footer>
    )
}