import "../App.css";
import { optionLinks } from "../data/data";
import { PrincipalLogo } from "./PrincipalLogo";
import { SectionLinks } from "./SectionLinks";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <PrincipalLogo />
        <SectionLinks
          listaLinks={optionLinks}
          Parentclass="nav-links"
          ItemClass="nav-link"
        />
      </div>
    </nav>
  );
};
