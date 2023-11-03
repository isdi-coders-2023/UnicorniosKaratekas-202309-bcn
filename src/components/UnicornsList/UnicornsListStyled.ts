import styled from "styled-components";

const UnicornListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }
`;

export default UnicornListStyled;
