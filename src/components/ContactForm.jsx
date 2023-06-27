import React, { useState } from 'react';

const ContactForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos vacíos
    if (!nombre || !email || !asunto || !mensaje) {
      setError('Por favor, completa todos los campos');
      return;
    }

    // Aquí puedes agregar el código para enviar los datos del formulario al backend
    // Puedes utilizar fetch u otras librerías para hacer la solicitud HTTP
    // Por ejemplo:
    const data = {
      nombre,
      email,
      asunto,
      mensaje
    };
    // Enviar los datos al backend...
    console.log(data);
    // Reiniciar los campos del formulario y el mensaje de error
    setNombre('');
    setEmail('');
    setAsunto('');
    setMensaje('');
    setError('');
  };

  return (
    <form action="https://formsubmit.co/legalbriandev@gmail.com" method="POST" className="max-w-md mx-auto">
      <label htmlFor="nombre" className="block mb-2">Nombre:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        className="w-full px-4 py-2 mb-4 border rounded text-black"
      />

      <label htmlFor="email" className="block mb-2">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-2 mb-4 border rounded text-black"
      />

      <label htmlFor="asunto" className="block mb-2">Asunto:</label>
      <input
        type="text"
        id="asunto"
        name="asunto"
        value={asunto}
        onChange={(e) => setAsunto(e.target.value)}
        required
        className="w-full px-4 py-2 mb-4 border rounded text-black"
      />

      <label htmlFor="mensaje" className="block mb-2">Mensaje:</label>
      <textarea
        id="mensaje"
        name="mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        required
        className="w-full px-4 py-2 mb-4 border rounded text-black"
      ></textarea>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <input
        type="submit"
        value="Enviar"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      />
      <input type="hidden" name="_next" value="http://legalbrian.vercel.app" />
      <input type="hidden" name="_captcha" value="false" />
    </form>
  );
};

export default ContactForm;