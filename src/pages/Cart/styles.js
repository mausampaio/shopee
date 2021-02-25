import styled from "styled-components";
import { PriceTag } from "../../styles/GlobalStyles";

export const Header = styled.div`
  margin-bottom: 8px;
  padding: 0 32px;
  width: 100%;
  display: flex;
  > div {
    width: 100%;
    min-width: 300px;
  }
  > span {
    text-align: center;
    width: 100%;
    min-width: 226px;
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
`;

export const Footer = styled.div`
  gap: 55px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
    min-width: 300px;
    margin: 0;
  }
`;

export const Property = styled.div`
  width: 100%;
  min-width: 226px;
  display: flex;
  justify-content: left;

  > span {
    padding: 0 30px;
    margin: 0;
  }
`;
