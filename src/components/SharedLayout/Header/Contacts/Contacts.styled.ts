import styled from "styled-components";

export const PhoneWrapper = styled.div`
  background-color: ${(p) => p.theme.colors.whiteText};
  box-shadow: ${(props) => props.theme.shadows.accent};

  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    padding: 5px 20px 6px 20px;
    border-radius: 15px;
  }
  @media screen and (min-width: 1280px) {
    padding: 15px 30px 13px 30px;
    border-radius: 26px;
  }
`;

export const PhoneLink = styled.a`
  font-family: MontserratBold;
  font-style: normal;
  line-height: 1.2;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.accentColor};

  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;
