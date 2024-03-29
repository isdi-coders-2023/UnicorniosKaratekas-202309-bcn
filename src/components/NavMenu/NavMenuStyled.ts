import styled from "styled-components";

const NavMenuStyled = styled.nav`
  bottom: 0;
  position: fixed;
  width: 100%;
  height: 95px;
  z-index: 1;

  .nav-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    background-image: url(/images/navBackground.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .nav {
    height: 45px;
  }

  .icon {
    color: #361e58;
    width: 45px;
  }

  .active {
    border-bottom: solid 4px #361e58;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-bottom: 3px;
  }
`;

export default NavMenuStyled;
