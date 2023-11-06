const NavItem = ({ title, index, isActive, onItemClick, isDisabled }) => {
  const handleClick = () => {
    if (!isDisabled) {
      onItemClick(index);
    }
  };

  return (
    <li className={isActive ? "is-active" : ""} onClick={handleClick}>
      <span>{title}</span>
    </li>
  );
};
export default NavItem;
