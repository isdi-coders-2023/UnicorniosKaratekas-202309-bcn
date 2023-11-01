import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;

  .header {
    width: 500px;
    height: 190px;
    position: absolute;
  }

  .logo-image {
    z-index: 2;
    width: 190px;
    height: auto;
    margin-top: 20px;
  }
`;

export default HeaderStyled;
