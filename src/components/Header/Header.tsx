import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="header-background">
        <div className="corner-left"></div>
        <div className="middle"></div>
        <div className="corner-right"></div>
      </div>
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
