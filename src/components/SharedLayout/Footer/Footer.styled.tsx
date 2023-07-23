import styled from "styled-components";
import { Container } from "../../universalComponents/Container/Container.styled";
import { PhoneLink } from "../../universalComponents/PhoneNumberBlock/PhoneNumberBlock.styled";
import { ITypeProps } from "../../../types/type";

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
  @media screen and (min-width: 1920px) {
    padding-top: 41px;
    padding-bottom: 44px;
  }
`;

export const StyledInfoWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const StyledPhoneLink = styled(PhoneLink)<ITypeProps>`
  color: ${(p) => p.theme.colors.accentColor};

  @media screen and (min-width: 320px) {
    font-size: ${(p) => p.theme.fontSizes.s};
  }
  @media screen and (min-width: 1920px) {
    font-size: 20px;
  }
`;
