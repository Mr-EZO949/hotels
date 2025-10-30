export default function ServicesSection({ services, copy }) {
  return (
    <section id="services" className="py-16">
      <div className="container-page space-y-10">
        <div className="space-y-3 text-center md:text-left">
          <p className="section-subtitle">{copy.subtitle}</p>
          <h2 className="section-title">{copy.title}</h2>
          <p className="mx-auto max-w-3xl text-base text-neutral-600">{copy.description}</p>
        </div>
        <ul className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <li key={service.id} className="card-surface overflow-hidden">
              <img src={service.image} alt={service.title} className="h-56 w-full object-cover" />
              <div className="space-y-3 p-8">
                <h3 className="text-xl font-semibold text-brand-500">{service.title}</h3>
                <p className="text-base text-neutral-600">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
