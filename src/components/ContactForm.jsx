import React, { useState } from 'react';
import { contactFormButton, contactFormButtonContainer, contactFormContainer, contactFormInput, contactFormInputLabel, contactFormInputTitle, contactFormInputsContainer, contactFormTextarea } from '../assets/styles/styleComponents';
import { FormattedMessage } from 'react-intl';
const ContactForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  return (
    <form action="https://formsubmit.co/bfdc8398c85a9753d009bc77d90cffe0" method="POST" className={contactFormContainer}>
        <div className={contactFormInputsContainer}>
            <div>
                <div className={contactFormInputLabel}>
                    <label htmlFor="nombre" className={contactFormInputTitle}>
                        <FormattedMessage id="contactForm.name" defaultMessage="Nombre" />
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        className={contactFormInput}
                    />
                </div>
                <div className={contactFormInputLabel}>
                    <label htmlFor="email" className={contactFormInputTitle}>
                        <FormattedMessage id="contactForm.email" defaultMessage="Email" />
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={contactFormInput}
                    />
                </div>
                <div className={contactFormInputLabel}>
                    <label htmlFor="asunto" className={contactFormInputTitle}>
                        <FormattedMessage id="contactForm.subject" defaultMessage="Asunto" />
                    </label>
                    <input
                        type="text"
                        id="asunto"
                        name="asunto"
                        value={asunto}
                        onChange={(e) => setAsunto(e.target.value)}
                        required
                        className={contactFormInput}
                    />
                </div>
            </div>
            <div  className={contactFormInputLabel}>
                <label htmlFor="mensaje" className={contactFormInputTitle}>
                    <FormattedMessage id="contactForm.message" defaultMessage="Mensaje" />
                </label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    required
                    maxlength="500"
                    className={contactFormTextarea}
                ></textarea>
            </div>
        </div>
        <div className={contactFormButtonContainer}>
            <button
                type="submit"
                className={contactFormButton}
            >
                <FormattedMessage id="contactForm.button" defaultMessage="Enviar" />
            </button>
        </div>
        <input type="hidden" name="_next" value="http://legalbrian.vercel.app" />
        <input type="hidden" name="_captcha" value="false" />
    </form>
  );
};

export default ContactForm;