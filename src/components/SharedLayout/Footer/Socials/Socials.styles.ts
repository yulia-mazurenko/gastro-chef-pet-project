import styled from "styled-components";
import { ReactComponent as TelegramIcon } from "../../../../assets/svg/socials/telegram.svg";
import { ReactComponent as InstagramIcon } from "../../../../assets/svg/socials/instagram.svg";
import { ReactComponent as ViberIcon } from "../../../../assets/svg/socials/viber.svg";
import { ReactComponent as FacebookIcon } from "../../../../assets/svg/socials/facebook.svg";
import { NavLink } from "react-router-dom";

export const SocialsWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 11px;

  @media screen and (min-width: 1280px) {
    gap: 15px;
    margin-bottom: 15px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSocialItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.text};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.accentColor};
  }

  @media screen and (min-width: 1280px) {
    width: 30px;
    height: 30px;
  }
`;

export const StyledTelegramIcon = styled(TelegramIcon)`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 1280px) {
    width: 18px;
    height: 18px;
  }
`;

export const StyledInstagramIcon = styled(InstagramIcon)`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 1280px) {
    width: 18px;
    height: 18px;
  }
`;

export const StyledViberIcon = styled(ViberIcon)`
  width: 14px;
  height: 14px;

  @media screen and (min-width: 1280px) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledFacebookIcon = styled(FacebookIcon)`
  width: 15px;
  height: 15px;

  @media screen and (min-width: 1280px) {
    width: 20px;
    height: 20px;
  }
`;
