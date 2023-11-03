import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="header-background">
        <div className="header-background__corner-left"></div>
        <div className="header-background__middle"></div>
        <div className="header-background__corner-right"></div>
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
