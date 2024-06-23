import '../App.css'
import { Tour } from './Tour'
import { Title } from './Title';
import { tours } from '../data/data';

export const Tours = () => {
  return (
    <section className="section" id="tours">

    <Title title="Nuestro" subTitle="Equipo"/>

    <div className="section-center featured-center">
      { tours.map(elemento => (
        <Tour
        image={elemento.image}
        title={elemento.title}
        info={elemento.info}
        duration={elemento.duration}
        key={elemento.id}
        />
      )) }
    </div>
  </section>
  );
};
