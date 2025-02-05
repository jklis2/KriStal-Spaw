"use client";

import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-300 font-oswald mb-2">
            Imię i Nazwisko
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg
                     text-white placeholder-gray-400 font-roboto
                     focus:outline-none focus:border-weldingRed focus:ring-1 focus:ring-weldingRed
                     transition-all duration-300"
            placeholder="Jan Kowalski"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-300 font-oswald mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg
                     text-white placeholder-gray-400 font-roboto
                     focus:outline-none focus:border-weldingRed focus:ring-1 focus:ring-weldingRed
                     transition-all duration-300"
            placeholder="jan@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-gray-300 font-oswald mb-2">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg
                   text-white placeholder-gray-400 font-roboto
                   focus:outline-none focus:border-weldingRed focus:ring-1 focus:ring-weldingRed
                   transition-all duration-300"
          placeholder="+48 123 456 789"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-300 font-oswald mb-2">
          Wiadomość
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg
                   text-white placeholder-gray-400 font-roboto
                   focus:outline-none focus:border-weldingRed focus:ring-1 focus:ring-weldingRed
                   transition-all duration-300 resize-none"
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
