import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  .header-background {
    width: 100%;
    height: 122px;
    display: flex;

    &__corner-left {
      width: 137px;
      background-image: url("/images/headerLeft.png");
      background-repeat: no-repeat;
      background-position-x: right;
    }

    &__middle {
      width: 100%;
      background-image: url(/images/headerMid.png);
      background-repeat: round;
      background-size: cover;
      position: relative;
    }

    &__corner-right {
      width: 137px;
      background-image: url("/images/headerRight.png");
      background-repeat: no-repeat;
      background-position-x: left;
    }
  }

  .logo-image {
    z-index: 2;
    width: 145px;
    height: auto;
    margin-top: 20px;
    position: absolute;
  }
`;

export default HeaderStyled;
