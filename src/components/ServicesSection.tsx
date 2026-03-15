import { services } from "../constants/services"


function ServicesSection() {
    return (
        <section id="xizmatlar" className="bg-slate-100">
            <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
                <div className="mb-10 max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">Xizmatlar</p>
                    <h2 className="mt-3 text-3xl font-black md:text-4xl">Biz faqat sotmaymiz, yordam ham beramiz</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {services.map((service) => (
                        <div key={service.title} className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold">{service.title}</h3>
                            <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>)
}

export default ServicesSection
