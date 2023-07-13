import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
  background-color: ${(p) => {
    return p.type === "header"
      ? "inherit"
      : "${(props) => props.theme.colors.whiteText}";
  }};
`;

export const StyledNavList = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  background-color: ${(p) => p.theme.colors.whiteText};

  @media screen and (min-width: 320px) {
    flex-direction: column;
    width: 320px;
    gap: 21px;
    margin-bottom: ${(p) => {
      return p.type === "header" ? "42px" : "0px";
    }};

    padding: 20px 33px 0px 33px;
  }
  @media screen and (min-width: 768px) {
    flex-direction: ${(p) => {
      return p.type === "header" ? "row" : "column";
    }};
    align-items: center;
    width: ${(p) => {
      return p.type === "header" ? "410px" : "156px";
    }};

    gap: ${(p) => {
      return p.type === "header" ? "25px" : "12px";
    }};
    padding: ${(p) => {
      return p.type === "header" ? "10px 22px" : "0";
    }};

    border-radius: 15px;
    margin-bottom: 0;
    margin-right: ${(p) => {
      return p.type === "header" ? "10px" : "0";
    }};
    box-shadow: ${(p) => {
      return p.type === "header"
        ? "${(props) => props.theme.shadows.accent}"
        : "none";
    }};
  }
  @media screen and (min-width: 1280px) {
    width: ${(p) => {
      return p.type === "header" ? "700px" : "220px";
    }};

    gap: ${(p) => (p.type === "header" ? "40px" : "17px")};

    padding: ${(p) => {
      return p.type === "header" ? "17px 33px" : "0";
    }};

    border-radius: 26px;
    margin-right: ${(p) => {
      return p.type === "header" ? "20px" : "0";
    }};
  }
`;

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(NavLink)`
  font-family: ${(p) => {
    return p.type === "header" ? "MontserratRegular" : "ComfortaaRegular";
  }};

  line-height: ${(p) => {
    return p.type === "header" ? "1.33" : "1.14";
  }};

  font-weight: ${(p) => {
    if (p.type === "header") {
      return p.theme.fontWeights.regular;
    }
    return p.theme.fontWeights.medium;
  }};

  color: ${(p) => p.theme.colors.text};

  &.active {
    color: ${(p) => p.theme.colors.accentColor};
    font-weight: ${(p) => p.theme.fontWeights.bold};
  }
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
    font-weight: ${(p) => p.theme.fontWeights.bold};
  }

  @media screen and (max-width: 767px) {
    font-family: ComfortaaBold;
    font-style: normal;
    font-weight: ${(p) => p.theme.fontWeights.bold};
    font-size: ${(p) => p.theme.fontSizes.m};
    line-height: 1.33;

    text-align: center;
  }

  @media screen and (min-width: 768px) {
    font-size: ${(p) => {
      if (p.type === "header") {
        return "8px";
      }
      return p.theme.fontSizes.s;
    }};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${(p) => {
      if (p.type === "header") {
        return p.theme.fontSizes.s;
      }
      return "20px";
    }};
  }
`;
