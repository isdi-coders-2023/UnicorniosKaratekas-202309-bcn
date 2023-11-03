import styled from "styled-components";

const LoadingStyled = styled.div`
  width: 390px;
  height: 908px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;

  .loading__text {
    color: #fff;
    font-feature-settings:
      "clig" off,
      "liga" off;
    font-family: ${({ theme }) => theme.typography.secondaryFontFamily};
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.3px;
    text-transform: uppercase;
    margin-left: 40px;
  }

  .loading__image {
    width: 196px;
    height: 196px;
    flex-shrink: 0;
    margin-top: 155px;
    margin-right: 10px;
  }
`;

export default LoadingStyled;
