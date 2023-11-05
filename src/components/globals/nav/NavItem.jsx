const NavItem = ({ title, index, isActive, onItemClick }) => {
  const handleClick = () => {
    onItemClick(index);
  };

  return (
    <li className={isActive ? "is-active" : ""} onClick={handleClick}>
      <span>{title}</span>
    </li>
  );
};
export default NavItem;
