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
          CheckQr es una startup, cuyo obetivo principal es brindar uns servicio
          de ChatBot, el cual ayude a un usuario a gestionar de forma segura y
          automatizada los distintos cobro de QR que se vayan a realizar.
          </p>
          <a href="#" className="btn">ver más</a>
          <a href="https://mediafiles.botpress.cloud/17b9de8d-e993-490f-9674-61f5cbb6ac1d/webchat/bot.html"
            className="btn" style={{marginLeft: '20px'}}>Nuestro bot</a>
        </article>
      </div>
    </section>
  );
};
