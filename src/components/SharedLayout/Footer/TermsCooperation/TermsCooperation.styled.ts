import styled from "styled-components";

export const StyledText = styled.p`
  color: ${(p) => p.theme.colors.text};
  font-family: ComfortaaBold;
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 1.14;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  margin-bottom: 14px;

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    margin-bottom: 20px;
  }

  &.active {
    color: ${(p) => p.theme.colors.activeColor};
  }
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;
