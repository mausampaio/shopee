import styled, { keyframes } from "styled-components";

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
  animation: ${rotate} 2s linear infinite;
`;
