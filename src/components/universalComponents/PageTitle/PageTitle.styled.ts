import styled from "styled-components";

export const StyledPageTitle = styled.h1`
  font-family: ComfortaaBold;
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: 1.125;

  text-align: left;
  color: ${(p) => p.theme.colors.text};

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 200px;
    font-size: ${(p) => p.theme.fontSizes.l};
  }

  @media screen and (min-width: 1920px) {
    font-size: 40px;
    width: 450px;
  }
`;

export const PageTitleAccentPart = styled.span`
  font-family: ComfortaaBold;
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: 1.125;

  text-align: left;
  color: ${(p) => p.theme.colors.accentColor};

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.l};
  }

  @media screen and (min-width: 1920px) {
    font-size: 40px;
  }
`;
