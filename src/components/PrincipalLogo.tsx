import logo from "../images/Designer.jpg"
import '../App.css'

export const PrincipalLogo = () => {
  return (
    <div className="nav-header">
        <img src={logo} className="nav-logo-header" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
        <i className="fas fa-bars"></i>
        </button>
    </div>  
  );
};
