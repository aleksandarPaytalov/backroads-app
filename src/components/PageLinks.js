import { navLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ parentClassName, childClassName }) => {
  return (
    <ul className={parentClassName} id="nav-links">
      {navLinks.map((link) => {
        return (
          <PageLink key={link.id} link={link} childClassName={childClassName} />
        );
      })}
    </ul>
  );
};

export default PageLinks;
