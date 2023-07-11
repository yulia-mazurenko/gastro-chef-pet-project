import styled from "styled-components";

export const PhoneWrapper = styled.div`
  background-color: ${(p) => p.theme.colors.accentColor};
  box-shadow: ${(props) => props.theme.shadows.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 320px) {
    width: 280px;
    height: 46px;
    border-radius: 23px;
  }
  @media screen and (min-width: 768px) {
    /* padding: 5px 20px 6px 20px; */

    width: 150px;
    height: 30px;
    border-radius: 15px;
    background-color: ${(p) => p.theme.colors.whiteText};

    &:hover,
    &:focus {
      background-color: ${(p) => p.theme.colors.accentColor};
      border: ${(p) => p.theme.borders.bold};
      border-color: ${(p) => p.theme.colors.whiteText};
    }
  }
  @media screen and (min-width: 1280px) {
    width: 280px;
    height: 52px;
    border-radius: 26px;
  }
`;

export const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  font-family: MontserratBold;
  font-style: normal;
  line-height: 1.2;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.whiteText};

  @media screen and (min-width: 320px) {
    font-size: ${(p) => p.theme.fontSizes.l};
  }
  @media screen and (min-width: 768px) {
    color: ${(p) => p.theme.colors.accentColor};
    font-size: 10px;

    &:hover,
    &:focus {
      color: ${(p) => p.theme.colors.whiteText};
    }
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;
