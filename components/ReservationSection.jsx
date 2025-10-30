import ReservationForm from './ReservationForm';

export default function ReservationSection({
  hotels,
  selectedHotel,
  activeHotel,
  onHotelSelect,
  onReservationSubmit,
  reservationState,
  offersForForm,
  onBookActive,
  copy,
  formatNumber,
}) {
  return (
    <section id="booking" className="py-16">
      <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="section-subtitle">{copy.subtitle}</p>
            <h2 className="section-title">{copy.title}</h2>
            <p className="max-w-2xl text-base text-neutral-600">{copy.description}</p>
          </div>
          <ReservationForm
            hotels={hotels}
            selectedHotel={selectedHotel}
            onHotelSelect={onHotelSelect}
            onSubmit={onReservationSubmit}
            status={reservationState.state}
            message={reservationState.message}
            offers={offersForForm}
            copy={copy.form}
          />
        </div>
        <aside className="relative isolate overflow-hidden rounded-3xl bg-charcoal text-white shadow-card">
          <img
            src={activeHotel.specialOfferImage}
            alt={activeHotel.name}
            className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
          />
          <div className="relative flex h-full flex-col justify-between gap-6 p-10">
            <div className="space-y-4">
              <span className="badge bg-white/15 text-sm uppercase tracking-wide text-white">{copy.specialBadge}</span>
              <h3 className="text-3xl font-semibold leading-tight">{activeHotel.name}</h3>
              <p className="text-lg font-medium text-brand-100">
                {copy.priceTemplate.replace('{price}', formatNumber(activeHotel.nightlyRate))}
              </p>
              <p className="text-sm text-white/80">{activeHotel.description}</p>
            </div>
            <button
              type="button"
              className="primary-btn self-start bg-white px-6 py-3 text-sm text-charcoal hover:bg-brand-50"
              onClick={() => onBookActive(activeHotel.id)}
            >
              {copy.specialButton}
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
