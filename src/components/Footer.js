import { navIcons } from "../data";
import PageLink from "./PageLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLink parentClassName="footer-links" childClassName="footer-link" />

      <ul className="footer-icons">
        {navIcons.map((icon) => {
          const { id, href, iconFab } = icon;
          return (
            <li key={id}>
              <a href={href} target="_blank" className="footer-icon">
                <i className={iconFab}></i>
              </a>
            </li>
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
