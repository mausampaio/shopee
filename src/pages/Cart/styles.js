import styled from "styled-components";
import { PriceTag } from "../../styles/GlobalStyles";

export const Header = styled.div`
  margin-bottom: 8px;
  padding: 0 32px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  > span {
    min-width: 196px;
    margin: 0 16px;
  }

  > span:nth-of-type(2) {
    min-width: 226px;
  }

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    > div {
      display: none;
    }
    > span {
      min-width: 0;
      width: 196px;
      margin: 0;
    }
    > span:nth-of-type(2) {
      min-width: 196px;
    }
  }

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const Content = styled.div`
  padding: 44px 32px;
  margin-bottom: 32px;
  width: 100%;
  min-height: 446px;
  display: flex;
  flex-direction: column;
  background: var(--primary);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 375px) {
    padding: 16px 32px;
  }
`;

export const Footer = styled.div`
  gap: 55px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 32px 0;

  @media screen and (max-width: 375px) {
    gap: 0;
    flex-direction: column;

    > div {
      margin: 16px;
    }
  }
`;

export const TotalPrice = styled(PriceTag)`
  font-size: 48px;
`;

export const Item = styled.div`
  padding: 12px 0;
  border-bottom: ${(props) => (props.lineBreak ? "1px solid #f1f1f1" : "none")};
  width: 100%;
  display: flex;
  align-items: center;
  > h2 {
    width: 100%;
    /* min-width: 300px; */
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 375px) {
    padding: 32px 0;
  }
`;

export const Controls = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    margin-top: 10px;
  }

  @media screen and (max-width: 375px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Property = styled.div`
  min-width: 196px;
  display: flex;
  justify-content: flex-start;
  margin: 0 16px;

  > span {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    width: 30%;
    margin: 0;
  }

  @media screen and (max-width: 375px) {
    margin-top: 16px;
  }
`;
