import styled from "styled-components";

export const ListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  > * {
    margin-bottom: 32px;
  }

  > h2 {
    grid-column: 1 / 5;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;

    > h2 {
      grid-column: 1 / 3;
    }
  }

  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
