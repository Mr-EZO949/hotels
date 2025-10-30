export default function AboutSection({ copy }) {
  return (
    <section id="about" className="py-16">
      <div className="container-page grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div className="space-y-4">
          <p className="section-subtitle">{copy.subtitle}</p>
          <h2 className="section-title">{copy.title}</h2>
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base text-neutral-600">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="card-surface overflow-hidden">
          <img src="/assets/img/30.jpg" alt={copy.imageAlt} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
