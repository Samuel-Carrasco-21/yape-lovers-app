import '../App.css'
import { PrincipalLogo } from './PrincipalLogo'

export const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <PrincipalLogo/>
        <h1>CheckQr</h1>
        <p>
          Tu gestor de Qr's de confianza
        </p>
        <a href="#tours" className="btn hero-btn">Nuestro equipo</a>
      </div>
    </section>
  );
};
