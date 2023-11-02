import styled from "styled-components";

const NavMenuStyled = styled.nav`
  .nav-container {
    display: flex;
    width: 100%;
    height: 95px;
    background-image: url(/images/navBackground.png);
    background-size: cover;
    background-repeat: no-repeat;
    justify-content: space-evenly;
    background-position: center;
    align-items: center;
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
