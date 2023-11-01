import styled from "styled-components";

const NavMenuStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 120px;
    height: 100%;
    z-index: 2;
  }

  .background-image {
    width: 500px;
    height: 100px;
    position: absolute;
    top: 0;
    margin-top: -30px;
    object-fit: cover;
  }

  .button {
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
