import '../App.css'
import logo_checker_qr from "../assets/Designer.jpeg.jpg";
import { Title } from './Title';

export const About = () => {
  return (
    <section className="section" id="about">
      <Title title='¿Qué es' subTitle='CheckQr?'/>

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={logo_checker_qr}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>definición</h3>
          <p>
            CheckQr es una startup, cuyo objetivo principal es brindar uns servicio
            de ChatBot, el cual ayude a un usuario a gestionar de forma segura y
            automatizada los distintos cobro de QR que se vayan a realizar.
          </p>
          <h3>misión</h3>
          <p>
            Nuestra misión en CheckQr es ofrecer un servicio innovador de ChatBot que
            permita a los usuarios gestionar de manera segura y automatizada los
            cobros mediante QR. Nos comprometemos a proporcionar una experiencia
            eficiente y confiable que simplifique las transacciones y aumente la
            seguridad en los procesos de cobro digital.
          </p>
          <h3>visión</h3>
          <p>
            Nuestra visión es convertirnos en líderes en la automatización y seguridad
            de cobros mediante QR, transformando la manera en que las personas y
            negocios gestionan sus transacciones digitales. Aspiramos a ser reconocidos
            por nuestra solución tecnológica, facilidad de uso y capacidad para generar
            confianza entre nuestros usuarios.
          </p>
          <a href="#" className="btn">ver más</a>
          <a href="https://mediafiles.botpress.cloud/17b9de8d-e993-490f-9674-61f5cbb6ac1d/webchat/bot.html"
            className="btn" style={{marginLeft: '20px'}}>Nuestro bot</a>
        </article>
      </div>
    </section>
  );
};
