const PageLink = ({ link, childClassName }) => {
  return (
    <li>
      <a href={link.href} className={childClassName}>
        {link.text}
      </a>
    </li>
  );
};
export default PageLink;
