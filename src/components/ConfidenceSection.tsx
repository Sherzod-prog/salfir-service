import { advantages } from "../constants/services"


function ConfidenceSection() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
            <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
                <div className="rounded-4xl bg-slate-900 p-8 text-white md:p-10">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">Nega aynan biz?</p>
                    <h2 className="mt-3 text-3xl font-black md:text-4xl">Ishonchli do‘kon va qulay xizmat</h2>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {advantages.map((item) => (
                            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white/85">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-4xl `bg-gradient-to-br` from-orange-500 to-amber-400 p-8 text-slate-950 md:p-10">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900/70">Aksiya</p>
                    <h3 className="mt-3 text-3xl font-black">Chegirmali takliflar</h3>
                    <p className="mt-4 leading-7 text-slate-900/80">
                        Belgilangan mahsulotlar uchun maxsus chegirmalar va katta buyurtmalarda alohida narxlar mavjud.
                    </p>
                    <div className="mt-8 rounded-2xl bg-white/40 p-5 backdrop-blur">
                        <div className="text-sm font-semibold">Bugungi maxsus taklif</div>
                        <div className="mt-2 text-4xl font-black">-20%</div>
                        <div className="mt-2 text-sm text-slate-900/75">Keramika plitalari va ayrim santexnika mahsulotlarida</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConfidenceSection
