import ContactForm from './ContactForm';

export default function ContactsSection({ contactState, onContactSubmit, copy }) {
  return (
    <section id="contacts" className="bg-white py-16">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div className="card-surface space-y-6 rounded-3xl border border-white/60 bg-gradient-to-b from-white via-white to-brand-50/50 p-8 shadow-lg">
          <div className="space-y-2">
            <p className="section-subtitle">{copy.subtitle}</p>
            <h2 className="section-title mb-0">{copy.title}</h2>
            <p className="text-sm text-neutral-600">{copy.intro}</p>
          </div>
          <dl className="space-y-5 text-sm">
            {copy.items.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 border-b border-black/5 pb-4 last:border-none last:pb-0">
                <dt className="text-xs uppercase tracking-[0.3em] text-neutral-400">{item.label}</dt>
                <dd className="text-base text-charcoal">
                  {item.lines && item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  {item.links && (
                    <div className="flex flex-col gap-1">
                      {item.links.map((link) => (
                        <a key={link.href} href={link.href} className="text-brand-500 hover:text-brand-600">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                  {item.note && <span className="text-sm text-neutral-500">{item.note}</span>}
                </dd>
              </div>
            ))}
          </dl>
          <button type="button" className="secondary-btn w-fit">
            {copy.routeButton}
          </button>
        </div>
        <ContactForm onSubmit={onContactSubmit} status={contactState.state} message={contactState.message} copy={copy.form} />
      </div>
    </section>
  );
}
