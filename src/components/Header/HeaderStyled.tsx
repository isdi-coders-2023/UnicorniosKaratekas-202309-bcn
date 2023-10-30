import styled from "styled-components";

const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .header {
    width: 100%;
    height: auto;
    position: absolute;

    &--primary {
      z-index: 3;
    }

    &--secondary {
      z-index: 2;
      margin-top: -130px;
    }

    &--terciary {
      margin-top: -130px;
    }
  }

  .logo-image {
    z-index: 4;
    position: relative;
    margin-top: 20px;
  }
`;

export default HeaderStyled;
