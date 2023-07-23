import styled from "styled-components";

import { IButtonProps } from "../../../types/button";

export const StyledButton = styled.button<IButtonProps>`
  background-color: ${(p) =>
    p.background ? p.background : p.theme.colors.accentColor};
  border: ${(p) => p.theme.borders.bold};

  border-color: ${(p) =>
    p.bordercolor ? p.bordercolor : p.theme.colors.accentColor};
  border-radius: 16px;
  cursor: pointer;
  padding: 7px 29px 7px 30px;

  font-family: ComfortaaBold;
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: 1.36;
  text-align: center;
  box-shadow: 0px 0px 40px 0px rgba(86, 86, 86, 0.3);
  color: ${(p) => (p.color ? p.color : p.theme.colors.whiteText)};

  &:hover,
  &:focus {
    background-color: ${(p) =>
      p.hoverbackground ? p.hoverbackground : p.theme.colors.whiteText};
    color: ${(p) => (p.hovercolor ? p.hovercolor : p.theme.colors.accentColor)};
  }

  @media screen and (min-width: 768px) {
    border-radius: 17px;
    padding: 8px 31px 6px 31px;

    font-size: ${(p) => p.theme.fontSizes.m};
  }

  @media screen and (min-width: 1920px) {
    border-radius: 30px;
    padding: 14px 69px 11px 68px;

    font-size: ${(p) => p.theme.fontSizes.xl};
  }
`;
