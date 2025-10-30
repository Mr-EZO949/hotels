export default function AdvantagesSection({ advantages, copy }) {
  return (
    <section id="advantages" className="bg-white/60 py-16">
      <div className="container-page space-y-10">
        <div className="space-y-3 text-center md:text-left">
          <p className="section-subtitle">{copy.subtitle}</p>
          <h2 className="section-title">{copy.title}</h2>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {advantages.map((advantage) => (
            <li key={advantage.id} className="card-surface flex h-full flex-col justify-end gap-4 p-8">
              <img src={advantage.icon} alt="" className="h-12 w-12" />
              <p className="text-base text-neutral-600">{advantage.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
