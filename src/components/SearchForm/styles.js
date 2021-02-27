import styled, { css } from "styled-components";
import { MdSearch } from "react-icons/md";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 44px;
  width: 40%;
  min-width: 300px;
  max-width: 425px;
  background: var(--search);
  border-radius: 54px;

  input {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #3a3a3a;
    padding-left: 7.55%;
    height: 100%;
    width: 100%;
    outline: 0;
  }

  @media screen and (max-width: 375px) {
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 2em;
  }
`;

export const iconCss = css`
  width: 27px;
  height: 27px;
  fill: var(--secondary);
  flex-shrink: 0;
`;

export const SearchButton = styled.button`
  align-items: center;
  text-align: center;
  height: 52px;
  width: 52px;
  cursor: pointer;
  outline: 0;
  padding-right: 7.55%;
`;

export const SearchIcon = styled(MdSearch)`
  ${iconCss}
`;
