import styled, { keyframes } from "styled-components";

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
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Loading = styled.div`
  border: 8px solid #e7e7e7;
  border-radius: 50%;
  border-top: 8px solid var(--secondary);
  width: 80px;
  height: 80px;
  margin: 64px auto;
  animation: ${rotate} 2s linear infinite
`;
