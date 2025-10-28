import logo from "../images/logo.svg";
import { navIcons } from "../data";
import PageLinks from "./PageLinks";
import SotialLink from "./SotialLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <PageLinks parentClassName="nav-links" childClassName="nav-link" />

        <ul className="nav-icons">
          {navIcons.map((icon) => {
            return (
              <SotialLink key={icon.id} {...icon} itemClassName="nav-icon" />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
