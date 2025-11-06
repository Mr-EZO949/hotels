import RatingStars from './RatingStars';

export default function AccommodationSection({
  hotels,
  activeHotel,
  onShowHotel,
  onBookHotel,
  onResetSearch,
  onOpenCatalogue,
  noHotelsFound,
  isCatalogueOpen,
  hasMoreHotels,
  copy,
  actions,
  ratingCopy,
  formatNumber,
}) {
  return (
    <section id="accommodation" className="py-16">
      <div className="container-page space-y-10">
        <div className="space-y-3 text-center md:text-left">
          <p className="section-subtitle">{copy.subtitle}</p>
          <h2 className="section-title">{copy.title}</h2>
          <p className="max-w-3xl text-base text-neutral-600">{copy.description}</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <ul className="grid gap-6 sm:grid-cols-2">
            {noHotelsFound ? (
              <li className="card-surface p-8">
                <h3 className="text-xl font-semibold text-charcoal">{copy.emptyTitle}</h3>
                <p className="mt-3 text-sm text-neutral-600">{copy.emptyDescription}</p>
                <button type="button" className="secondary-btn mt-6" onClick={onResetSearch}>
                  {copy.resetButton}
                </button>
              </li>
            ) : (
              <>
                {hotels.map((hotel) => (
                  <li key={hotel.id} className="card-surface flex h-full flex-col overflow-hidden">
                    <img src={hotel.image} alt={hotel.name} className="h-48 w-full object-cover" />
                    <div className="flex flex-1 flex-col gap-4 p-6">
                      <div className="flex items-center justify-between text-sm text-neutral-500">
                        <span>
                          {copy.pricePrefix}{' '}
                          <span className="text-lg font-semibold text-charcoal">
                            {formatNumber(hotel.nightlyRate)} ₽
                          </span>{' '}
                          {copy.priceSuffix}
                        </span>
                        <RatingStars rating={hotel.rating} label={hotel.name} copy={ratingCopy} />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-semibold text-charcoal">{hotel.name}</h3>
                        <p className="text-sm text-neutral-500">{hotel.location}</p>
                      </div>
                      <div className="mt-auto flex gap-2">
                        <button
                          type="button"
                          className="flex-1 rounded-xl border border-brand-500 px-3 py-1.5 text-xs font-semibold text-brand-500 transition hover:bg-brand-500/10"
                          onClick={() => onShowHotel(hotel.id)}
                        >
                          {actions.more}
                        </button>
                        <button
                          type="button"
                          className="flex-1 rounded-xl bg-brand-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-600"
                          onClick={() => onBookHotel(hotel.id)}
                        >
                          {actions.book}
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
                {hasMoreHotels && !isCatalogueOpen ? (
                  <li className="card-surface flex h-full flex-col justify-end bg-[url('/assets/img/41.jpg')] bg-cover bg-center p-8 text-white">
                    <h3 className="text-2xl font-semibold">{copy.viewAllTitle}</h3>
                    <button
                      type="button"
                      className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold tracking-wide backdrop-blur transition hover:bg-white/25"
                      onClick={onOpenCatalogue}
                    >
                      {copy.viewAllButton}
                    </button>
                  </li>
                ) : null}
              </>
            )}
          </ul>
          <aside className="card-surface flex flex-col gap-6 p-8" aria-live="polite">
            <div className="space-y-1">
              <p className="badge w-fit">{copy.panelBadge}</p>
              <h3 className="text-2xl font-semibold text-charcoal">{activeHotel.name}</h3>
              <p className="text-sm text-neutral-500">{activeHotel.location}</p>
            </div>
            <p className="text-sm text-neutral-600">{activeHotel.description}</p>
            <ul className="space-y-2 text-sm text-neutral-600">
              {activeHotel.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" aria-hidden />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
              <span>
                {copy.meta.available}:{' '}
                <strong className="text-charcoal">{formatNumber(activeHotel.availableOffers)}</strong>
              </span>
              <span>
                {copy.meta.rating}:{' '}
                <strong className="text-charcoal">{activeHotel.rating.toFixed(1)}</strong>
              </span>
            </div>
            <button type="button" className="primary-btn w-fit px-6 py-3 text-sm" onClick={() => onBookHotel(activeHotel.id)}>
              {copy.bookButton.replace('{hotel}', activeHotel.name)}
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
