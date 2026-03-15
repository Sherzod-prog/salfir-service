import { plumbingItems, tileItems } from '../constants/services'

function Header() {
    return (
        <header className="relative overflow-hidden bg-linear-to-br from-sky-950 via-sky-800 to-cyan-600 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_28%)]" />
            <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12 lg:py-24">
                <nav className="mb-12 flex flex-wrap items-center justify-between gap-4">
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src="./salfir.png" alt="Logo" className="h-12 w-12" />
                        </div>
                        <div>
                            <div className="text-2xl font-black tracking-wide">SALFIR SAVDO SERVIS</div>
                            <p className="text-sm text-white/80">Santexnika va keramika mahsulotlari do‘koni</p>

                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm font-medium">
                        <a href="#mahsulotlar" className="rounded-full border border-white/25 px-4 py-2 text-white/90 transition hover:bg-white/10">Mahsulotlar</a>
                        <a href="#xizmatlar" className="rounded-full border border-white/25 px-4 py-2 text-white/90 transition hover:bg-white/10">Xizmatlar</a>
                        <a href="#aloqa" className="rounded-full bg-orange-500 px-4 py-2 text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-400">Bog‘lanish</a>
                    </div>
                </nav>

                <div className="grid items-center gap-10 lg:grid-cols-2">
                    <div>
                        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                            Sifatli mahsulotlar • Qulay narxlar • Tezkor xizmat
                        </span>
                        <h1 className="mt-6 text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
                            Santexnika va keramika mahsulotlari
                            <span className="block text-orange-300">zamonaviy maxsulotlar va dunyo brendlari </span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
                            Har bir mijozga o'ziga xos takliflar hamda chegirmalar, individual yondashuv. Sifatli mahsulotlar, qulay narxlar va tezkor xizmat bilan sizning ishonchingizni qozonishga harakat qilamiz.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#mahsulotlar"
                                className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-orange-500/30 transition hover:-translate-y-0.5 hover:bg-orange-400"
                            >
                                Mahsulotlarni ko‘rish
                            </a>
                            <a
                                href="#aloqa"
                                className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                            >
                                Bog‘lanish
                            </a>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            {[
                                ["1 000+", "Mahsulot turlari"],
                                ["200+", "Mamnun mijozlar"],
                                ["7/6", "Ish vaqti"],
                            ].map(([value, label]) => (
                                <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                                    <div className="text-2xl font-black">{value}</div>
                                    <div className="mt-1 text-sm text-white/75">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <div className="rounded-[28px] bg-white p-6 text-slate-900 shadow-2xl">
                            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Santexnika</div>
                            <div className="mb-4 rounded-2xl bg-slate-100 p-4 text-6xl">🚽</div>
                            <h3 className="text-2xl font-bold">Kundalik va professional ehtiyojlar uchun</h3>
                            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                                {plumbingItems.slice(0, 4).map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="text-orange-500">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-[28px] bg-slate-900 p-6 text-white shadow-2xl sm:translate-y-10">
                            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Keramika</div>
                            <div className="mb-4 rounded-2xl bg-white/10 p-4 text-6xl">🧱</div>
                            <h3 className="text-2xl font-bold">Interyer uchun nafis va mustahkam yechimlar</h3>
                            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/75">
                                {tileItems.slice(0, 4).map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="text-orange-300">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
