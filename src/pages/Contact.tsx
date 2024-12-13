import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ContactImage from '../assets/Contact.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      formData,
      import.meta.env.VITE_EMAILJS_USER_ID 
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log('FAILED...', error);
      alert('Message failed to send. Please try again.');
    });

    // Limpiar el formulario después de enviar
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Contacte con nosotros</h1>
      <img src={ContactImage} alt="Contact" className="mx-auto mb-4 w-68 rounded" />
      <p className="text-gray-800 mb-4">No dude en ponerse en contacto con nosotros...</p>
      <form onSubmit={handleSubmit} className="max-w-68 mx-auto p-6 border-4 border-blue-900 rounded-lg shadow-lg">
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
        <div className="mb-4">
          <label htmlFor="message" className="block text-black-700">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-black-300 rounded focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900"
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          className="w-52 px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 flex items-center justify-center"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default Contact;