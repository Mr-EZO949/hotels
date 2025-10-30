'use client';

import { useEffect, useState } from 'react';

const defaultState = {
  city: '',
  roomType: '',
  checkIn: '',
  nights: '3',
  guests: '2',
  customerName: '',
  customerPhone: '',
};

export default function ReservationForm({
  hotels,
  selectedHotel,
  onHotelSelect,
  onSubmit,
  status,
  message,
  offers,
  copy,
}) {
  const [formData, setFormData] = useState(defaultState);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      city: selectedHotel?.city ?? '',
      roomType: selectedHotel?.defaultRoomType ?? '',
    }));
  }, [selectedHotel?.city, selectedHotel?.defaultRoomType]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      ...formData,
      hotelId: selectedHotel?.id ?? null,
      hotelName: selectedHotel?.name ?? '',
    });
  };

  const isLoading = status === 'loading';
  const selectedMessage =
    selectedHotel && copy.selectedTemplate
      ? copy.selectedTemplate
          .replace('{hotel}', selectedHotel.name)
          .replace('{roomType}', selectedHotel.defaultRoomType)
      : '';
  const offersText = copy.offersText.replace('{count}', String(offers));

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <select
        className="input-field"
        value={selectedHotel?.id ?? ''}
        onChange={(event) => onHotelSelect(event.target.value)}
        required
      >
        <option value="" disabled>
          {copy.placeholders.selectHotel}
        </option>
        {hotels.map((hotel) => (
          <option key={hotel.id} value={hotel.id}>
            {hotel.name} — {hotel.location}
          </option>
        ))}
      </select>
      <input
        name="city"
        placeholder={copy.placeholders.city}
        className="input-field"
        value={formData.city}
        onChange={handleChange}
        required
      />
      <input
        name="roomType"
        placeholder={copy.placeholders.roomType}
        className="input-field"
        value={formData.roomType}
        onChange={handleChange}
        required
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="date"
          name="checkIn"
          placeholder={copy.placeholders.checkIn}
          className="input-field"
          value={formData.checkIn}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="nights"
          min="1"
          className="input-field"
          placeholder={copy.placeholders.nights}
          value={formData.nights}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="guests"
          min="1"
          className="input-field"
          placeholder={copy.placeholders.guests}
          value={formData.guests}
          onChange={handleChange}
          required
        />
        <input
          name="customerName"
          placeholder={copy.placeholders.name}
          className="input-field"
          value={formData.customerName}
          onChange={handleChange}
          required
        />
      </div>
      <input
        name="customerPhone"
        placeholder={copy.placeholders.phone}
        className="input-field"
        value={formData.customerPhone}
        onChange={handleChange}
        required
      />
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="primary-btn px-6 py-3 text-sm" disabled={isLoading}>
          {isLoading ? copy.button.loading : copy.button.submit}
        </button>
        <span className="text-sm text-neutral-500">{offersText}</span>
      </div>
      {selectedHotel && selectedMessage && (
        <p className="rounded-2xl bg-brand-50 p-4 text-sm text-brand-700">{selectedMessage}</p>
      )}
      {status !== 'idle' && (
        <p
          className={`rounded-2xl p-4 text-sm font-medium ${
            status === 'success'
              ? 'bg-emerald-50 text-emerald-700'
              : status === 'error'
              ? 'bg-rose-50 text-rose-700'
              : 'bg-amber-50 text-amber-700'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
