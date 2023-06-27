import { FormattedMessage } from "react-intl"

export const education = [
    {
        company: "Henry", 
        role: "Full Stack Web Developer", 
        date: 
            <FormattedMessage 
                id="experienceList.education.FullStackWebDeveloper.date" 
                defaultMessage="oct 2022 - feb 2023" 
            />,
        description:  
            <FormattedMessage 
                id="experienceList.education.FullStackWebDeveloper.description" 
                defaultMessage="Un bootcamp enfocado en desarrollar habilidades en herramientas de programación como JavaScript, CSS, Node.js y React, junto con otras tecnologías que complementan el desarrollo profesional de front-end y back-end. Tiene una duración de 4 u 8 meses, y las clases son en vivo y están impartidas por expertos de la industria." 
            />,
        certificate: "https://certificates.soyhenry.com/new-cert?id=9a77b7516b559a203972f141fe3e22bcb20bd4f4895e5a9a5b1ace0dde09255b",
    },
]

export const workExperience = [
    {
        company: "Henry",
        role: "React Native Developer",
        date: 
            <FormattedMessage 
                id="experienceList.workExperience.ReactNativeDeveloper.date" 
                defaultMessage="ene 2023 - feb 2023 "
            />,
        description:
            <FormattedMessage 
                id="experienceList.workExperience.ReactNativeDeveloper.description" 
                defaultMessage="Desarrollé una aplicación móvil junto con un grupo de 7 personas para una ONG llamada 'Find a Home' (Encontrar un Hogar). El propósito de la aplicación es facilitar la adopción de animales que necesitan un hogar y permitir a los usuarios publicar sobre animales perdidos." 
            />,
        certificate: null,
    }
]
