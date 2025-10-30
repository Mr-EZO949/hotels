'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Header from '../components/Header';
import ReservationSection from '../components/ReservationSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import AdvantagesSection from '../components/AdvantagesSection';
import AccommodationSection from '../components/AccommodationSection';
import ContactsSection from '../components/ContactsSection';
import Footer from '../components/Footer';
import useLanguageContent from '../lib/useLanguageContent';

export default function HomePage() {
  const { language, setLanguage, navLinks, services, advantages, hotels, copy } = useLanguageContent();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeHotelId, setActiveHotelId] = useState(hotels[0].id);
  const [selectedHotelId, setSelectedHotelId] = useState(hotels[0].id);
  const [reservationState, setReservationState] = useState({ state: 'idle', message: '' });
  const [contactState, setContactState] = useState({ state: 'idle', message: '' });

  const reservationSectionRef = useRef(null);
  const hotelsSectionRef = useRef(null);

  useEffect(() => {
    setActiveHotelId(hotels[0].id);
    setSelectedHotelId(hotels[0].id);
    setReservationState({ state: 'idle', message: '' });
    setContactState({ state: 'idle', message: '' });
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

  const scrollToHotels = () => {
    if (hotelsSectionRef.current) {
      hotelsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
      <Header
        navLinks={navLinks}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSearchSubmit={scrollToHotels}
        copy={copy.header}
        onToggleLanguage={() => setLanguage((prev) => (prev === 'ru' ? 'en' : 'ru'))}
      />
      <main className="space-y-16 pb-20">
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
            filteredHotels={filteredHotels}
            activeHotel={activeHotel}
            onShowHotel={handleHotelInfo}
            onBookHotel={handleHotelBook}
            onResetSearch={() => setSearchTerm('')}
            noHotelsFound={noHotelsFound}
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
