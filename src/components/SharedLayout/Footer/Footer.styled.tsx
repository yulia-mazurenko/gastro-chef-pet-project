import styled from "styled-components";
import { Container } from "../../universalComponents/Container/Container.styled";
import { PhoneLink } from "../../universalComponents/PhoneNumberBlock/PhoneNumberBlock.styled";

export const StyledFooter = styled.footer`
  background-color: ${(p) => p.theme.colors.whiteText};
  box-shadow: ${(p) => p.theme.shadows.normal};
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const StyledFooterContainer = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 30px 10px 50px 10px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 29px;
    padding-bottom: 31px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 52px;
    padding-bottom: 44px;
  }
`;

export const StyledInfoWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledPhoneLink = styled(PhoneLink)`
  color: ${(p) => p.theme.colors.accentColor};
  /* 14 700 20 700 */
  @media screen and (min-width: 320px) {
    font-size: ${(p) => p.theme.fontSizes.s};
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;
