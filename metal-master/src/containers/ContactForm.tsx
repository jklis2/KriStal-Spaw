"use client";

import { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';
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
                     focus:outline-none focus:border-weldingRed focus:ring-2 focus:ring-weldingRed/30
                     transition-all duration-300 ${
                       isDark 
                         ? "bg-gray-900/50 border border-gray-800 text-white placeholder-gray-400 hover:border-gray-700" 
                         : "bg-white/80 border border-gray-200 text-steelBlue-dark placeholder-gray-500 hover:border-gray-300"
                     }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
            rows={6}
            className={`${inputClasses} pl-10 resize-none`}
            placeholder="Opisz swój projekt..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-weldingRed hover:bg-ctaOrange text-white font-oswald
                 py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center
                 group relative overflow-hidden"
      >
        <span className="relative z-10 mr-2">Wyślij Wiadomość</span>
        <FaPaperPlane className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-ctaOrange to-weldingRed opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </form>
  );
}
