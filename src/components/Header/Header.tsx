import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <img
        className="header"
        alt="Header coloured waves"
        src="images/header.webp"
        width="390"
        height="148"
      />
      <img
        className="logo-image"
        src="/images/myLittlePadding.webp"
        alt="My Little Padding Logo"
        width="144"
        height="132"
      />
    </HeaderStyled>
  );
};

export default Header;
