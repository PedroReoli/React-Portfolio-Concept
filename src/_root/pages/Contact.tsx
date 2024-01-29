// Contact.tsx

import React, { useState } from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Adicione aqui a lógica para enviar os dados do formulário
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <h2 className="h2-h">Contato</h2>
      <div className="contact-info">
        <p className='p-contact'>Entre em contato conosco através do formulário abaixo ou através das redes sociais:</p>

        {/* Formulário de Contato */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
              />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="message-input"
              required
              />
          </div>

          <button type="submit" className="submit-button">Enviar</button>
        </form>

      {/* Redes Sociais */}
      <div className="social-icons">
        <NavLink to="#" className="social-icon">
          <FaInstagram />
        </NavLink>
        <NavLink to="#" className="social-icon">
          <FaGithub />
        </NavLink>
        <NavLink to="#" className="social-icon">
          <FaLinkedin />
        </NavLink>
        <NavLink to="#" className="social-icon">
          <FaYoutube />
        </NavLink>
      </div>
    </div>
  </div>
  );
};

export default Contact;