import React, { useState } from 'react';

const ContactForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  return (
    <form action="https://formsubmit.co/bfdc8398c85a9753d009bc77d90cffe0" method="POST" className="bg-[rgb(24,24,24,0.6)] rounded-[10px] w-5/6 flex flex-col p-[20px]">
        <div className='grid grid-cols-2 p-[20px] gap-[20px] smartphone:grid-cols-1 smartphone-r:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2'>
            <div>
                <div className='flex flex-col gap-[10px]'>
                    <label htmlFor="nombre" className="flex text-start pl-[15px]">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        className="w-full px-4 py-2 mb-4 border-[rgba(75,75,255,1)] border-b-[1px] rounded bg-transparent outline-none focus:outline-[rgba(75,75,255,1)] focus:border-transparent"
                    />
                </div>

                <div className='flex flex-col gap-[10px]'>
                    <label htmlFor="email" className="flex text-start pl-[15px]">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 mb-4 border-[rgba(75,75,255,1)] border-b-[1px] rounded bg-transparent outline-none focus:outline-[rgba(75,75,255,1)] focus:border-transparent"
                    />
                </div>

                <div className='flex flex-col gap-[10px]'>
                    <label htmlFor="asunto" className="flex text-start pl-[15px]">Asunto</label>
                    <input
                        type="text"
                        id="asunto"
                        name="asunto"
                        value={asunto}
                        onChange={(e) => setAsunto(e.target.value)}
                        required
                        className="w-full px-4 py-2 mb-4 border-[rgba(75,75,255,1)] border-b-[1px] rounded bg-transparent outline-none focus:outline-[rgba(75,75,255,1)] focus:border-transparent"
                    />
                </div>
            </div>
            <div  className='flex flex-col gap-[10px]'>
                <label htmlFor="mensaje" className="flex text-start pl-[15px]">Mensaje</label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    required
                    maxlength="500"
                    className="w-full px-4 py-2 mb-4 border-[rgba(75,75,255,1)] border-b-[1px] border-r-[1px] rounded bg-transparent resize-none h-full outline-none focus:outline-[rgba(75,75,255,1)] focus:border-transparent smartphone:h-[150px] smartphone-r:h-[150px] tablet:h-full laptop:h-full desktop:h-full"
                ></textarea>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <input
                type="submit"
                value="Enviar"
                className="items-center text-[20px] w-[100px] h-[40px] bg-[rgba(0,0,0,0.7)] cursor-pointer rounded-full border-[#ffffff] border-[2px] hover:bg-[rgba(75,75,255,1)] transition duration-500"
            />
        </div>
        <input type="hidden" name="_next" value="http://legalbrian.vercel.app" />
        <input type="hidden" name="_captcha" value="false" />
    </form>
  );
};

export default ContactForm;