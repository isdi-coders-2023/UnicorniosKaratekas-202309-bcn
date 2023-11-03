import styled from "styled-components";

const UnicornCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: ${({ theme }) => theme.colors.OpacityYellow};
  z-index: 0;
  border-radius: 30px;
  width: 326px;
  box-shadow: 0px 0px 25px -10px rgba(218, 218, 218, 0.5);
  margin-top: 35px;

  .unicorn-image {
    width: 281px;
    height: auto;
    flex-shrink: 0;
    border-radius: 30px;
    margin-top: 24px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .unicorn-name {
    width: 276px;
    height: 42px;

    &__text {
      color: ${({ theme }) => theme.typography.dark};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
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

    &__kind {
      margin-bottom: 2px;
    }

    &__sex {
      margin-bottom: 17.5px;
    }
  }

  .buttons {
    width: 281px;
  }

  @media (max-width: 365px) {
    width: 220px;

    .unicorn-image {
      width: 200px;
    }

    .buttons {
      width: 200px;
    }
  }
`;

export default UnicornCardStyled;
