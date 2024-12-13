// src/pages/Subscription.tsx
import React, { useState } from 'react';
import SubscriptionImage from '../assets/Subscribe.jpg';

const Subscription: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nombre:', formData.name);
    console.log('Correo:', formData.email);
    alert('¡Gracias por suscribirte!');

    // Limpiar el formulario después de enviar
    setFormData({
      name: '',
      email: '',
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Suscríbase</h1>
      <img src={SubscriptionImage} alt="Suscripción" className="mx-auto mb-4 w-68 rounded" />
      <p className="text-gray-800 mb-4">
      Suscríbase para recibir notificaciones sobre noticias y nuevos artículos.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border-4 border-blue-900 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-black-300 rounded focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-black-700">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-black-300 rounded focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900"
        >
          Suscríbase
        </button>
      </form>
    </div>
  );
};

export default Subscription;