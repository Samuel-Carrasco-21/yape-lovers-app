import '../App.css'
import { optionLinks } from '../data/data';
import { CopyrightText } from './CopyrightText';
import { SectionLinks } from './SectionLinks';

export const Footer = () => {
  return (
    <footer className="section footer">
      <SectionLinks
      listaLinks={optionLinks}
      Parentclass={"footer-links"}
      ItemClass={"footer-link"} />
      <div>
        <h3 style={{color: 'white'}}>Contactanos</h3>
        <div>
          <p style={{color: 'white'}}>jfernandezaliendre@gmail.com</p>
          <p style={{color: 'white'}}>jsce2021@gmail.com</p>
          <p style={{color: 'white'}}>michellesalinasl10@gmail.com</p>
          <p style={{color: 'white'}}>katynymeria05@gmail.com</p>
        </div>
      </div>
      <CopyrightText/>
    </footer>
  );
};
