'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Script from 'next/script';
import Header from './Header';
import ReservationSection from './ReservationSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import AdvantagesSection from './AdvantagesSection';
import AccommodationSection from './AccommodationSection';
import ContactsSection from './ContactsSection';
import Footer from './Footer';
import useLanguageContent from '../lib/useLanguageContent';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lagoona.example.com';
const canonicalHost = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;

export default function HomePageClient() {
  const { language, setLanguage, navLinks, services, advantages, hotels, copy } = useLanguageContent();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeHotelId, setActiveHotelId] = useState(hotels[0].id);
  const [selectedHotelId, setSelectedHotelId] = useState(hotels[0].id);
  const [reservationState, setReservationState] = useState({ state: 'idle', message: '' });
  const [contactState, setContactState] = useState({ state: 'idle', message: '' });
  const [catalogueOpenedManually, setCatalogueOpenedManually] = useState(false);

  const reservationSectionRef = useRef(null);
  const hotelsSectionRef = useRef(null);

  useEffect(() => {
    setActiveHotelId(hotels[0].id);
    setSelectedHotelId(hotels[0].id);
    setReservationState({ state: 'idle', message: '' });
    setContactState({ state: 'idle', message: '' });
    setSearchTerm('');
    setCatalogueOpenedManually(false);
  }, [hotels]);

  const numberFormatter = useMemo(
    () => new Intl.NumberFormat(language === 'ru' ? 'ru-RU' : 'en-US'),
    [language],
  );
  const formatNumber = (value) => numberFormatter.format(value);

  const filteredHotels = useMemo(() => {
    const value = searchTerm.trim().toLowerCase();
    if (!value) {
      return hotels;
    }
    return hotels.filter((hotel) =>
      [hotel.name, hotel.location, hotel.city]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(value)),
    );
  }, [searchTerm, hotels]);

  const activeHotel = useMemo(
    () => hotels.find((hotel) => hotel.id === activeHotelId) ?? hotels[0],
    [hotels, activeHotelId],
  );

  const selectedHotel = useMemo(
    () => hotels.find((hotel) => hotel.id === selectedHotelId) ?? hotels[0],
    [hotels, selectedHotelId],
  );

  useEffect(() => {
    if (!filteredHotels.length) {
      return;
    }
    const isActiveVisible = filteredHotels.some((hotel) => hotel.id === activeHotelId);
    if (!isActiveVisible) {
      setActiveHotelId(filteredHotels[0].id);
    }
  }, [filteredHotels, activeHotelId]);

  useEffect(() => {
    if (selectedHotel) {
      setActiveHotelId(selectedHotel.id);
    }
  }, [selectedHotel]);

  const totalOffers = useMemo(
    () => hotels.reduce((sum, hotel) => sum + hotel.availableOffers, 0),
    [hotels],
  );

  const filteredOffers = useMemo(
    () => filteredHotels.reduce((sum, hotel) => sum + hotel.availableOffers, 0),
    [filteredHotels],
  );

  const offersForForm = selectedHotel ? selectedHotel.availableOffers : filteredOffers || totalOffers;
  const trimmedSearch = searchTerm.trim();
  const isSearchFiltering = trimmedSearch.length > 0;
  const isCatalogueOpen = catalogueOpenedManually || isSearchFiltering;
  const visibleHotels = useMemo(
    () => (isCatalogueOpen ? filteredHotels : filteredHotels.slice(0, 3)),
    [filteredHotels, isCatalogueOpen],
  );
  const hasMoreHotels = filteredHotels.length > visibleHotels.length;

  const structuredData = useMemo(() => {
    if (!hotels.length) {
      return null;
    }

    const offers = hotels.map((hotel) => {
      const hotelCopy = hotel.copy?.[language] ?? hotel.copy?.ru ?? hotel.copy?.en ?? {};
      const locationParts = typeof hotelCopy.location === 'string'
        ? hotelCopy.location.split(',').map((part) => part.trim())
        : [];
      const addressLocality = hotelCopy.city ?? locationParts[0] ?? '';
      const addressCountry = locationParts.length > 1 ? locationParts[locationParts.length - 1] : '';

      return {
        '@type': 'Offer',
        name: hotel.name,
        priceCurrency: 'RUB',
        price: Number(hotel.nightlyRate),
        availability: hotel.availableOffers > 0 ? 'https://schema.org/InStock' : 'https://schema.org/SoldOut',
        url: `${canonicalHost}/#${hotel.id}`,
        itemOffered: {
          '@type': 'Hotel',
          name: hotel.name,
          description: hotelCopy.description,
          address:
            addressLocality || addressCountry
              ? {
                  '@type': 'PostalAddress',
                  addressLocality: addressLocality || undefined,
                  addressCountry: addressCountry || undefined,
                }
              : undefined,
        },
      };
    });

    const primaryHotel = hotels[0];
    const primaryImage = primaryHotel?.image
      ? `${canonicalHost}${primaryHotel.image}`
      : `${canonicalHost}/assets/img/31.jpg`;
    const aboutParagraph =
      copy?.about?.paragraphs && Array.isArray(copy.about.paragraphs) ? copy.about.paragraphs[0] : undefined;

    return {
      '@context': 'https://schema.org',
      '@type': 'LodgingBusiness',
      name: 'Lagoona Hotels',
      url: canonicalHost,
      description:
        aboutParagraph ??
        'Премиальная коллекция отелей Lagoona 2025 года с авторскими программами и цифровым сервисом.',
      image: primaryImage,
      telephone: '+7 495 322-54-48',
      address: {
        '@type': 'PostalAddress',
        streetAddress: language === 'ru' ? 'Пресненская набережная, 12' : '12 Presnenskaya Embankment',
        addressLocality: language === 'ru' ? 'Москва' : 'Moscow',
        postalCode: '123317',
        addressCountry: language === 'ru' ? 'Россия' : 'Russia',
      },
      makesOffer: offers,
      languagesSpoken: ['Russian', 'English'],
    };
  }, [hotels, copy?.about, language]);

  useEffect(() => {
    if (!visibleHotels.length) {
      return;
    }
    if (!isCatalogueOpen && !visibleHotels.some((hotel) => hotel.id === activeHotelId)) {
      setActiveHotelId(visibleHotels[0].id);
    }
  }, [visibleHotels, isCatalogueOpen, activeHotelId]);

  const scrollToHotels = () => {
    if (hotelsSectionRef.current) {
      hotelsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleOpenCatalogue = () => {
    setCatalogueOpenedManually(true);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setCatalogueOpenedManually(false);
  };

  const handleHotelSelect = (hotelId) => {
    const targetId = hotelId || hotels[0].id;
    setSelectedHotelId(targetId);
    setActiveHotelId(targetId);
  };

  const handleReservationSubmit = async (payload) => {
    setReservationState({ state: 'loading', message: copy.messages.bookingSending });
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, requestType: 'booking' }),
      });
      if (!response.ok) {
        throw new Error('booking-error');
      }
      const result = await response.json();
      setReservationState({
        state: 'success',
        message: copy.messages.bookingSuccess.replace('{ref}', result.reference),
      });
    } catch (error) {
      setReservationState({ state: 'error', message: copy.messages.bookingError });
    }
  };

  const handleContactSubmit = async (payload, reset) => {
    setContactState({ state: 'loading', message: copy.messages.contactSending });
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, requestType: 'contact' }),
      });
      if (!response.ok) {
        throw new Error('contact-error');
      }
      const result = await response.json();
      setContactState({
        state: 'success',
        message: copy.messages.contactSuccess.replace('{ref}', result.reference),
      });
      reset();
    } catch (error) {
      setContactState({ state: 'error', message: copy.messages.contactError });
    }
  };

  const handleHotelInfo = (hotelId) => {
    setActiveHotelId(hotelId);
  };

  const handleHotelBook = (hotelId) => {
    handleHotelSelect(hotelId);
    if (reservationSectionRef.current) {
      reservationSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const noHotelsFound = filteredHotels.length === 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand via-white to-white text-charcoal">
      {structuredData ? (
        <Script
          id="lagoona-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      ) : null}
      <Header
        navLinks={navLinks}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onSearchSubmit={scrollToHotels}
        copy={copy.header}
        onToggleLanguage={() => setLanguage((prev) => (prev === 'ru' ? 'en' : 'ru'))}
      />
      <main className="space-y-12 pb-20 sm:space-y-16">
        <div ref={reservationSectionRef}>
          <ReservationSection
            hotels={hotels}
            selectedHotel={selectedHotel}
            activeHotel={activeHotel}
            onHotelSelect={handleHotelSelect}
            onReservationSubmit={handleReservationSubmit}
            reservationState={reservationState}
            offersForForm={offersForForm}
            onBookActive={handleHotelBook}
            copy={copy.reservation}
            formatNumber={formatNumber}
          />
        </div>
        <AboutSection copy={copy.about} />
        <ServicesSection services={services} copy={copy.services} />
        <AdvantagesSection advantages={advantages} copy={copy.advantages} />
        <div ref={hotelsSectionRef}>
          <AccommodationSection
            hotels={visibleHotels}
            activeHotel={activeHotel}
            onShowHotel={handleHotelInfo}
            onBookHotel={handleHotelBook}
            onResetSearch={handleResetFilters}
            onOpenCatalogue={handleOpenCatalogue}
            noHotelsFound={noHotelsFound}
            isCatalogueOpen={isCatalogueOpen}
            hasMoreHotels={hasMoreHotels}
            copy={copy.accommodation}
            actions={copy.actions}
            ratingCopy={copy.rating}
            formatNumber={formatNumber}
          />
        </div>
        <ContactsSection contactState={contactState} onContactSubmit={handleContactSubmit} copy={copy.contacts} />
      </main>
      <Footer copy={copy.footer} />
    </div>
  );
}
