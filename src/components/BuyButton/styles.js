import styled from "styled-components";
import { MdDelete } from "react-icons/md";

export const BuyButtonContainer = styled.div`
  width: 226px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductUnitButtonContainer = styled.div`
  width: 44px;
`;

export const ProductSpan = styled.span`
  font-size: 24px;
  line-height: 24px;
  font-weight: 500;
`;

export const ProductDelete = styled(MdDelete)`
  fill: var(--primary);
  font-size: 20px;
`;