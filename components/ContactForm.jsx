'use client';

import { useState } from 'react';

const initialState = {
  username: '',
  phone: '',
  text: '',
};

export default function ContactForm({ onSubmit, status, message, copy }) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData, () => setFormData(initialState));
  };

  const isLoading = status === 'loading';

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-1 flex-col gap-6 overflow-hidden rounded-3xl border border-brand-100/50 bg-white/90 p-10 shadow-[0_30px_60px_-30px_rgba(204,153,51,0.35)]"
    >
      <div className="pointer-events-none absolute -left-20 top-0 h-48 w-48 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-brand-400/30 blur-3xl" />

      <div className="relative space-y-2">
        <p className="section-subtitle">{copy.subtitle}</p>
        <h3 className="text-2xl font-semibold text-charcoal">{copy.title}</h3>
        <p className="text-sm text-neutral-500">{copy.helperText ?? 'Ответим в течение часа вручную без автоответов.'}</p>
      </div>
      <div className="relative space-y-4">
        <input
          name="username"
          placeholder={copy.placeholders.name}
          value={formData.username}
          onChange={handleChange}
          className="input-field bg-white/90 shadow-sm focus:shadow-lg"
          required
        />
        <input
          name="phone"
          placeholder={copy.placeholders.phone}
          value={formData.phone}
          onChange={handleChange}
          className="input-field bg-white/90 shadow-sm focus:shadow-lg"
          required
        />
        <textarea
          name="text"
          rows={5}
          placeholder={copy.placeholders.message}
          value={formData.text}
          onChange={handleChange}
          className="input-field resize-none bg-white/90 py-4 shadow-sm focus:shadow-lg"
          required
        />
      </div>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="primary-btn sm:w-auto px-6 py-3 text-sm" disabled={isLoading}>
          {isLoading ? copy.button.loading : copy.button.submit}
        </button>
        {status !== 'idle' && (
          <p
            className={`rounded-2xl px-4 py-2 text-sm font-medium ${
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
      </div>
    </form>
  );
}
