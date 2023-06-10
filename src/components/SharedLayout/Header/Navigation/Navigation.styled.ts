import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  background-color: ${(props) => props.theme.colors.whiteText};
  box-shadow: ${(props) => props.theme.shadows.accent};

  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    width: 410px;
    gap: 25px;
    padding: 10px 22px;
    border-radius: 15px;
    margin-right: 10px;
  }
  @media screen and (min-width: 1280px) {
    width: 700px;
    gap: 40px;
    padding: 17px 33px;
    border-radius: 26px;
    margin-right: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: MontserratRegular;
  line-height: 1.33;
  font-weight: ${(p) => p.theme.fontWeights.regular};
  color: ${(p) => p.theme.colors.text};

  &.active {
    color: ${(p) => p.theme.colors.accentColor};
    font-weight: ${(p) => p.theme.fontWeights.medium};
  }

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 8px;
  }

  @media screen and (min-width: 1280px) {
    font-size: ${(props) => props.theme.fontSizes.s};
  }
`;
