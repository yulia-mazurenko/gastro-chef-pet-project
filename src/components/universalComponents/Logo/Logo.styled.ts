import { NavLink } from "react-router-dom";
import styled from "styled-components";

import logoMobile from "../../../assets/svg/logo/logo_mobile.svg";
import logoDesktop from "../../../assets/svg/logo/logo_desktop.svg";
import logoDesktopFooter from "../../../assets/svg/logo/logo_desktop_footer.svg";
import { ITypeProps } from "../../../types/type";

export const WrapperLogo = styled.div<ITypeProps>`
  z-index: 1;
  position: ${(p) => {
    return p.type === "header" ? "absolute" : "static";
  }};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 320px) {
    top: -25px;
    left: 15px;

    width: ${(p) => {
      return p.type === "header" ? "138px" : "299px";
    }};

    height: ${(p) => {
      return p.type === "header" ? "138px" : "124px";
    }};
    border-radius: ${(p) => {
      return p.type === "header" ? "50%" : 0;
    }};
    background-color: ${(props) => props.theme.colors.whiteText};
  }
  @media screen and (min-width: 768px) {
    left: 39px;
  }
  @media screen and (min-width: 1920px) {
    top: -60px;
    left: 315px;
    width: ${(p) => {
      return p.type === "header" ? "264px" : "422px";
    }};
    height: ${(p) => {
      return p.type === "header" ? "264px" : "175px";
    }};
  }
`;

export const StyledLogoLink = styled(NavLink)<ITypeProps>`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 320px) {
    background-image: url(${logoMobile});
    width: 165px;
    height: 69px;
  }

  @media screen and (min-width: 768px) {
    background-image: ${(p) => {
      if (p.type !== "header") {
        return `url(${logoDesktop})`;
      }
    }};

    width: ${(p) => {
      if (p.type !== "header") {
        return "290px";
      }
    }};

    height: ${(p) => {
      if (p.type !== "header") {
        return "120px";
      }
    }};
  }

  @media screen and (min-width: 1920px) {
    background-image: ${(p) =>
      p.type === "header"
        ? `url(${logoDesktop})`
        : `url(${logoDesktopFooter})`};
    width: ${(p) => (p.type === "header" ? "290px" : "422px")};
    height: ${(p) => (p.type === "header" ? "120px" : "174px")};
  }
`;

export const LogoText = styled.p<ITypeProps>`
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
  @media screen and (min-width: 1920px) {
    font-size: ${(p) => (p.type === "header" ? p.theme.fontSizes.s : "20px")};
  }
`;
