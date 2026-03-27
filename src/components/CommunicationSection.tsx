function CommunicationSection() {


    return (


        <section id="aloqa" className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="rounded-4xl bg-slate-50 p-8 ring-1 ring-slate-200 md:p-10">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">Bog‘lanish</p>
                        <h2 className="mt-3 text-3xl font-black md:text-4xl">Biz bilan aloqaga chiqing</h2>
                        <div className="mt-8 space-y-5 text-slate-700">
                            <div className="rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200">
                                <div className="text-sm text-slate-500">Telefon</div>
                                <div className="mt-1 text-lg font-bold">+998 97 397 81 88</div>
                                <div className="mt-1 text-lg font-bold">+998 97 397 77 93</div>
                            </div>
                            <div className="rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200">
                                <div className="text-sm text-slate-500">Email</div>
                                <div className="mt-1 text-lg font-bold">info@salfirsavdoservis.uz</div>
                            </div>
                            <div className="rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200">
                                <div className="text-sm text-slate-500">Manzil</div>
                                <div className="mt-1 text-lg font-bold">Chelak shahri, Obod ko'chasi, 98-uy</div>
                            </div>
                            <div className="rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200">
                                <div className="text-sm text-slate-500">Ish vaqti</div>
                                <div className="mt-1 text-lg font-bold">Dushanba – Shanba: 09:00 – 18:00</div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-4xl bg-sky-950 p-8 text-white md:p-10">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">So‘rov yuborish</p>
                        <h3 className="mt-3 text-3xl font-black">Mahsulot haqida ma’lumot oling</h3>
                        <form className="mt-8 space-y-4" >
                            <input
                                type="text"
                                placeholder="Ismingiz"
                                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-white/60 focus:border-orange-300"
                            />
                            <input
                                type="tel"
                                placeholder="Telefon raqamingiz"
                                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-white/60 focus:border-orange-300"
                            />
                            <textarea
                                rows={5}
                                placeholder="Qaysi mahsulotlar qiziqtiryapti?"
                                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-white/60 focus:border-orange-300"
                            />
                            <button
                                type="button"
                                className="w-full rounded-2xl bg-orange-500 px-6 py-4 font-semibold text-white shadow-xl shadow-orange-500/30 transition hover:bg-orange-400"
                            >
                                So‘rov yuborish
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default CommunicationSection
