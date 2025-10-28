import { navIcons } from "../data";
import PageLinks from "./PageLinks";
import SotialLink from "./SotialLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClassName="footer-links" childClassName="footer-link" />

      <ul className="footer-icons">
        {navIcons.map((icon) => {
          return (
            <SotialLink key={icon.id} {...icon} itemClassName="footer-icon" />
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
