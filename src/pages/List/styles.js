import styled, { css } from "styled-components";

export const ListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  > * {
    margin-bottom: 32px;
  }
`;
