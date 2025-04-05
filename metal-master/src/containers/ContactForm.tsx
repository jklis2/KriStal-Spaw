"use client";

import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useTheme } from '@/components/providers/ThemeProvider';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const inputClasses = `w-full px-4 py-3 rounded-lg font-roboto
                     focus:outline-none focus:border-weldingRed focus:ring-1 focus:ring-weldingRed
                     transition-all duration-300 ${
                       isDark 
                         ? "bg-gray-900/50 border border-gray-800 text-white placeholder-gray-400" 
                         : "bg-white/80 border border-gray-200 text-steelBlue-dark placeholder-gray-500"
                     }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={`block font-oswald mb-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Imię i Nazwisko
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Jan Kowalski"
          />
        </div>

        <div>
          <label htmlFor="email" className={`block font-oswald mb-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="jan@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={`block font-oswald mb-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses}
          placeholder="+48 123 456 789"
        />
      </div>

      <div>
        <label htmlFor="message" className={`block font-oswald mb-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          Wiadomość
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className={`${inputClasses} resize-none`}
          placeholder="Opisz swój projekt..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-weldingRed hover:bg-weldingRed/90 text-white font-oswald
                 py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center
                 transform hover:-translate-y-1 group"
      >
        <span className="mr-2">Wyślij Wiadomość</span>
        <FaPaperPlane className="transform group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </form>
  );
}
