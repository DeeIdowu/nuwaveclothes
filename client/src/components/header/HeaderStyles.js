import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

//for header container:
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

//for logo container, since its a link do as so:
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

//block of css to place in components for code you want more than once:
export const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

//for the option link not option div:
export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

//for option div:
export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
