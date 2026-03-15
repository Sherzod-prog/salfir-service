import { plumbingItems, tileItems } from "../constants/services"


function ProductsSection() {
    return (
        <section id="mahsulotlar" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
            <div className="mb-10 max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">Mahsulotlar</p>
                <h2 className="mt-3 text-3xl font-black md:text-4xl">Keng assortiment va zamonaviy tanlov</h2>
                <p className="mt-4 text-slate-600">
                    Bizning do‘konimizda uy-joy, ofis va qurilish loyihalari uchun kerakli santexnika hamda
                    keramika mahsulotlarini topishingiz mumkin.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                    <div className="mb-5 inline-flex rounded-2xl bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">
                        Santexnika mahsulotlari
                    </div>
                    <ul className="space-y-4">
                        {plumbingItems.map((item) => (
                            <li key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4">
                                <span className="mt-1 text-orange-500">✔</span>
                                <span className="text-slate-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                    <div className="mb-5 inline-flex rounded-2xl bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                        Keramika plitalari
                    </div>
                    <ul className="space-y-4">
                        {tileItems.map((item) => (
                            <li key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4">
                                <span className="mt-1 text-sky-700">✔</span>
                                <span className="text-slate-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

    )
}

export default ProductsSection
