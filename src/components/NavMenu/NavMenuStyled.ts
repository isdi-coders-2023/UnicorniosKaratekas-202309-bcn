import styled from "styled-components";

const NavMenuStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .nav-background {
    width: 100%;
    position: absolute;
  }

  .nav-container {
    display: flex;
    justify-content: center;
    gap: 90px;
    z-index: 1;
    margin: 26px 0 0 10px;
  }

  .button {
    color: #361e58;
    width: 45px;
    height: 45px;
  }
`;

export default NavMenuStyled;
