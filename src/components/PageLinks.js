import { navLinks } from "../data";

const PageLink = ({ parentClassName, childClassName }) => {
  return (
    <ul className={parentClassName} id="nav-links">
      {navLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a href={href} className={childClassName}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLink;
