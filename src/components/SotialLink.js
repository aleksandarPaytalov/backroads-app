const SotialLink = ({ href, iconFab, itemClassName }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={itemClassName}>
        <i className={iconFab}></i>
      </a>
    </li>
  );
};
export default SotialLink;
