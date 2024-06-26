import "../App.css";
import { optionLinks } from "../data/data";
import { SectionLinks } from "./SectionLinks";

export const Navbar = () => {


  return (
    <nav className="navbar">
      <div className="nav-center">
        <div style={{display: 'flex', alignItems: 'center', color: 'white', justifySelf: 'start', width: '250px'}}>
          <h3 style={{marginTop: '10px', marginLeft: '20px'}}>
            CheckQr
          </h3>
        </div>
        <SectionLinks
          listaLinks={optionLinks}
          Parentclass="nav-links"
          ItemClass="nav-link"
        />
      </div>
    </nav>
  );
};
