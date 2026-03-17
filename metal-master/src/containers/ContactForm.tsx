"use client";

import { useState, useCallback, useMemo, useRef } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaComment, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useTheme } from '@/components/providers/ThemeProvider';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const INITIAL_FORM_DATA = { name: '', email: '', phone: '', message: '' };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateClientSide(data: typeof INITIAL_FORM_DATA): string | null {
  if (!data.name.trim()) return 'Imię i nazwisko jest wymagane.';
  if (!data.email.trim()) return 'Email jest wymagany.';
  if (!EMAIL_REGEX.test(data.email.trim())) return 'Podaj poprawny adres email.';
  if (!data.message.trim()) return 'Wiadomość jest wymagana.';
  return null;
}

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const honeypotRef = useRef<HTMLInputElement>(null);
  const timestampRef = useRef(Date.now());
  const { theme, mounted } = useTheme();
  const isDark = mounted ? theme === "dark" : true;

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    const clientError = validateClientSide(formData);
    if (clientError) {
      setStatus('error');
      setStatusMessage(clientError);
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _honey: honeypotRef.current?.value || '',
          _timestamp: timestampRef.current,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setStatusMessage('Wiadomość została wysłana. Dziękujemy za kontakt!');
        setFormData(INITIAL_FORM_DATA);
        timestampRef.current = Date.now();
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Nie udało się wysłać wiadomości. Spróbuj ponownie.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Błąd połączenia. Sprawdź internet i spróbuj ponownie.');
    }
  }, [formData]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status === 'error' || status === 'success') {
      setStatus('idle');
      setStatusMessage('');
    }
  }, [status]);

  const inputClasses = useMemo(() => `w-full px-4 py-3 rounded-lg font-roboto
                     focus:outline-none focus:border-weldingRed focus:ring-2 focus:ring-weldingRed/30
                     transition-all duration-300 ${
                       isDark 
                         ? "bg-gray-900/50 border border-gray-800 text-white placeholder-gray-400 hover:border-gray-700" 
                         : "bg-white/80 border border-gray-200 text-steelBlue-dark placeholder-gray-500 hover:border-gray-300"
                     }`, [isDark]);

  const isLoading = status === 'loading';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot — hidden from users, visible to bots */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" ref={honeypotRef} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label htmlFor="name" className={`block font-oswald mb-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Imię i Nazwisko
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaUser className="text-weldingRed/70 group-hover:text-weldingRed transition-colors duration-300" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading}
              className={`${inputClasses} pl-10`}
              placeholder="Jan Kowalski"
            />
          </div>
        </div>

        <div className="group">
          <label htmlFor="email" className={`block font-oswald mb-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaEnvelope className="text-weldingRed/70 group-hover:text-weldingRed transition-colors duration-300" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
              className={`${inputClasses} pl-10`}
              placeholder="jan@example.com"
            />
          </div>
        </div>
      </div>

      <div className="group">
        <label htmlFor="phone" className={`block font-oswald mb-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          Telefon
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaPhone className="text-weldingRed/70 group-hover:text-weldingRed transition-colors duration-300" />
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={isLoading}
            className={`${inputClasses} pl-10`}
            placeholder="+48 123 456 789"
          />
        </div>
      </div>

      <div className="group">
        <label htmlFor="message" className={`block font-oswald mb-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          Wiadomość
        </label>
        <div className="relative">
          <div className="absolute top-3 left-0 flex items-start pl-3 pointer-events-none">
            <FaComment className="text-weldingRed/70 group-hover:text-weldingRed transition-colors duration-300" />
          </div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isLoading}
            rows={6}
            className={`${inputClasses} pl-10 resize-none`}
            placeholder="Opisz swój projekt..."
          />
        </div>
      </div>

      {statusMessage && (
        <div className={`flex items-center gap-2 p-3 rounded-lg text-sm font-roboto ${
          status === 'success'
            ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20'
            : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'
        }`}>
          {status === 'success' ? <FaCheckCircle className="flex-shrink-0" /> : <FaExclamationCircle className="flex-shrink-0" />}
          <span>{statusMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full bg-weldingRed text-white font-oswald
                 py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center
                 group relative overflow-hidden ${
                   isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-ctaOrange'
                 }`}
      >
        <span className="relative z-10 mr-2">
          {isLoading ? 'Wysyłanie...' : 'Wyślij Wiadomość'}
        </span>
        {isLoading ? (
          <svg className="relative z-10 w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : (
          <FaPaperPlane className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
        )}
        {!isLoading && (
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-ctaOrange to-weldingRed opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        )}
      </button>
    </form>
  );
}
