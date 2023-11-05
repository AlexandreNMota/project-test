import OuterNavItem from "./OuterNavItem";
const OuterNav = () => {
  return (
    <ul className="outer-nav">
      <OuterNavItem title="Home" isInitiallyActive={true} />
      <OuterNavItem title="Works" />
      <OuterNavItem title="About" />
      <OuterNavItem title="Contact" />
      <OuterNavItem title="Hire us" />
    </ul>
  );
};
export default OuterNav;
