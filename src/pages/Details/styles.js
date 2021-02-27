import styled from "styled-components";

export const DetailsContent = styled.div``;

export const ButtonWrapper = styled.div`
  padding-top: 32px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 32px;
  @media screen and (max-width: 375px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const ButtonContainer = styled.div`
  width: 226px;
`;
