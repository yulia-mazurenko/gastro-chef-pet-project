import { NavLink } from "react-router-dom";
import styled from "styled-components";

import logoMobile from "../../../../assets/svg/logo/logo_mobile.svg";
import logoDesktop from "../../../../assets/svg/logo/logo_desktop.svg";

export const WrapperLogo = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 320px) {
    top: -25px;
    left: 39px;
    width: 138px;
    height: 138px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.whiteText};
  }
  @media screen and (min-width: 1280px) {
    top: -60px;
    left: 10px;
    width: 264px;
    height: 264px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.whiteText};
  }
`;

export const StyledLogoLink = styled(NavLink)`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 320px) {
    background-image: url(${logoMobile});
    width: 165px;
    height: 69px;
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${logoDesktop});
    width: 290px;
    height: 120px;
  }
`;

export const LogoText = styled.p`
  margin-bottom: -3px;
  font-family: ComfortaaRegular;
  line-height: 1.16;
  font-weight: ${(p) => p.theme.fontWeights.regular};
  color: ${(p) => p.theme.colors.text};

  @media screen and (min-width: 320px) {
    font-size: 10px;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    font-size: ${(p) => p.theme.fontSizes.s};
  }
`;
