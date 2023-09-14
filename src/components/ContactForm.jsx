import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ReactComponent as Send } from '../assets/images/Send.svg';

const ContactForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  return (
    <form action="https://formsubmit.co/bfdc8398c85a9753d009bc77d90cffe0" method="POST" className="bg-element-light dark:bg-element-dark rounded-[10px] w-5/6 flex flex-col p-[20px] mt-[25px]">
        <div className="grid grid-cols-2 text-xl p-[20px] gap-[20px] smartphone:grid-cols-1 smartphone-r:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2">
            <div>
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="nombre" className="flex text-start pl-[15px]">
                        <FormattedMessage id="contactForm.name" defaultMessage="Nombre" />
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        className="w-full px-4 py-2 mb-4 border-azul border-b-[1px] rounded bg-transparent outline-none focus:outline-azul-hover focus:border-transparent"
                    />
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="email" className="flex text-start pl-[15px]">
                        <FormattedMessage id="contactForm.email" defaultMessage="Email" />
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 mb-4 border-azul border-b-[1px] rounded bg-transparent outline-none focus:outline-azul-hover focus:border-transparent"
                    />
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="asunto" className="flex text-start pl-[15px]">
                        <FormattedMessage id="contactForm.subject" defaultMessage="Asunto" />
                    </label>
                    <input
                        type="text"
                        id="asunto"
                        name="asunto"
                        value={asunto}
                        onChange={(e) => setAsunto(e.target.value)}
                        required
                        className="w-full px-4 py-2 mb-4 border-azul border-b-[1px] rounded bg-transparent outline-none focus:outline-azul-hover focus:border-transparent"
                    />
                </div>
            </div>
            <div  className="flex flex-col gap-[10px]">
                <label htmlFor="mensaje" className="flex text-start pl-[15px]">
                    <FormattedMessage id="contactForm.message" defaultMessage="Mensaje" />
                </label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    required
                    maxLength="500"
                    className="w-full px-4 py-2 mb-4 border-azul border-b-[1px] border-r-[1px] rounded bg-transparent resize-none h-full outline-none focus:outline-azul-hover focus:border-transparent smartphone:h-[150px] smartphone-r:h-[150px] tablet:h-full laptop:h-full desktop:h-full"
                ></textarea>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <button
                type="submit"
                className="flex flex-row justify-center text-center items-center font-handjet text-xl gap-[5px] mt-[10px] bg-azul text-blanco w-[130px] p-[5px] rounded-[10px] hover:bg-azul-hover transition duration-500"
            >
                <FormattedMessage id="contactForm.button" defaultMessage="Enviar" />
                <Send width="20" height="20" fill="white"/>
            </button>
        </div>
        <input type="hidden" name="_next" value="http://legalbrian.vercel.app" />
        <input type="hidden" name="_captcha" value="false" />
    </form>
  );
};

export default ContactForm;