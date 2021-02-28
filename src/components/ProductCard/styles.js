import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
  background-color: var(--primary);
  width: 258px;
  padding: 16px;
  border-radius: 7px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  ${({ row }) =>
    row &&
    css`
      display: flex;
      width: 100%;
      padding: 32px;
    `};

  @media screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  width: 226px;
  height: 226px;
  overflow: hidden;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  ${({ row }) =>
    row
      ? css`
          margin-right: 32px;
        `
      : css`
          margin-bottom: 16px;
        `}

  @media screen and (max-width: 575px) {
    margin: 0;
  }
`;

export const TitleWithLink = styled(Link)`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  display: block;
  margin-bottom: 16px;
  text-decoration: none;
`;

export const PriceTag = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 8px;
  display: block;

  span {
    font-size: 14px;
  }
`;

export const Installments = styled.span`
  font-size: 12px;
  line-height: 24px;
  font-weight: 400;
  margin-bottom: 16px;
  display: block;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin-top: 8px;
  }

  @media screen and (max-width: 575px) {
    align-items: center;
    p {
      margin: 16px 0;
    }
  }
`;
