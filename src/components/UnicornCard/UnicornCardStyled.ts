import styled from "styled-components";

const UnicornCardStyled = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.OpacityYellow};
  z-index: -1;
  border-radius: 30px;
  width: 326px;
  height: 609px;
  flex-shrink: 0;
  box-shadow: 0px 0px 25px -10px rgba(218, 218, 218, 0.5);
  margin-top: 35px;

  .unicorn-image {
    width: 281px;
    height: 253px;
    flex-shrink: 0;
    border-radius: 30px;
    margin-left: 23px;
    margin-top: 24px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .unicorn-name {
    width: 276px;
    height: 42px;

    &--text {
      color: ${({ theme }) => theme.typography.dark};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-left: 50px;
      margin-top: 14px;
    }
  }

  .unicorn-list {
    color: ${({ theme }) => theme.typography.light};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 3px;

    &--kind {
      margin-bottom: 2px;
    }

    &--sex {
      margin-bottom: 17.5px;
    }
  }

  .buttons-container {
    width: 281px;
    height: 47px;
    flex-shrink: 0;
    margin-left: 23px;

    &__button {
      margin-bottom: 19px;
      border-radius: 15px;
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
    }

    &__text {
      color: ${({ theme }) => theme.typography.darkButtons};
      font-weight: 700;
      font-size: 19px;
    }
  }
`;

export default UnicornCardStyled;
