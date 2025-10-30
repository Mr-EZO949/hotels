export default function Footer({ copy }) {
  return (
    <footer className="bg-charcoal py-12 text-white">
      <div className="container-page grid gap-10 md:grid-cols-[1.2fr_1fr] lg:grid-cols-3">
        <div className="space-y-4">
          <p className="text-sm text-white/80">{copy.copyright}</p>
          <p className="text-sm text-white/60">{copy.disclaimer}</p>
          <a href="#privacy" className="text-sm text-brand-200 hover:text-brand-100">
            {copy.privacy}
          </a>
        </div>
        <div className="space-y-3 text-sm text-white/70">
          <p>{copy.address}</p>
          <div className="flex flex-col gap-1">
            {copy.phones.map((phone) => (
              <a key={phone.href} href={phone.href} className="hover:text-brand-200">
                {phone.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            {copy.emails.map((email) => (
              <a key={email.href} href={email.href} className="hover:text-brand-200">
                {email.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 md:items-end">
          <img src="/assets/img/footer_logo.png" alt="Lagoona" className="h-32 w-auto" />
          <ul className="flex items-center gap-4">
            {copy.socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <img src={social.icon} alt={social.label} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
