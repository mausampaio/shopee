import styled, { css } from "styled-components";

export const ListContainer = styled.div`
  width: 80%;
  max-width: 1100px;
  margin: 0 auto;
`;

export const ListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  width: 100%;

  >*{
    margin-bottom: 32px;
  }
`;