import tour1 from "../images/javascript.png"
import montserrat from "../assets/montserrat.jpg";
import mishi from "../assets/mishi.jpg";
import jose from "../assets/foto_perfil_rostro_2.jpg";

export const optionLinks = [
    {
        id:1,
        link:"inicio",
        original:"home"
    },
    {
        id:2,
        link:"nosotros",
        original:"about"
    },
    {
        id:3,
        link:"servicios",
        original:"services"
    },
    {
        id:4,
        link:"equipo",
        original:"tours"
    },
];
    

// const footerOptions = [...optionLinks];

// for(let i=0; i<4; i++){
//     footerOptions[i].id = footerOptions[i].id*10000;
// }

// export const footerLinks

export const services = [
    {
        id: 100,
        icon: "fa fa-wrench",
        title: "Gestión de Qr's",
        text: "Al ser esta la nueva forma de realizar compras de productos, decidimos enfocarnos en garantizar que las transferencias que se vayan a realizar sean gestionadas de forma segura, para evitar que el cobrador llegue a recibir comprobantes o transferencias falsas."
    },
    {
        id: 200,
        icon: "fa fa-graduation-cap",
        title: "BaaS",
        text: "Se diseñó un ChatBot, cuyo propósito radica en realizar la gestión automatizada de los códigos Qr's que vayan a generar nuestros usuarios al momento de cobrar un pago por este medio."
    },
    {
        id: 300,
        icon: "fa fa-language",
        title: "Personalización",
        text: "Dado a que este servicio será una integración a los servicios actuales que realizan pagos por Qr, se le dará a la entidad financiera la posibilidad de que los servicios de BaaS se encuentren alineados a sus requerimientos."
    },
];

export const tours = [
    {
      id: 1000,
      image: tour1,
      title: "Joaquín Fernandez",
      info: `CEO & Co-founder de CheckQr`,
      duration: "20 años",
    },
    {
      id: 2000,
      image: jose,
      title: "José Carrasco",
      info: `CTO & Co-founder de CheckQr`,
      duration: "21 años",
    },
    {
      id: 3000,
      image: mishi,
      title: "Michelle Salinas",
      info: `CMO & Co-founder de CheckQr`,
      duration: "22 años",
    },
    {
      id: 4000,
      image: montserrat,
      title: "Monserrat Sossa",
      info: `Directora de RRHH & Co-founder de CheckQr`,
      duration: "18 años",
    }
  ];