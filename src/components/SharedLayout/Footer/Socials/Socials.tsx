import {
  SocialsWrapper,
  StyledFacebookIcon,
  StyledInstagramIcon,
  StyledLink,
  StyledSocialItem,
  StyledTelegramIcon,
  StyledViberIcon,
} from "./Socials.styles";

export const Socials: React.FC = () => {
  return (
    <SocialsWrapper>
      <li>
        <StyledLink to="https://www.instagram.com/">
          <StyledSocialItem>
            <StyledInstagramIcon />
          </StyledSocialItem>
        </StyledLink>
      </li>
      <li>
        <StyledLink to="https://www.facebook.com/">
          <StyledSocialItem>
            <StyledFacebookIcon />
          </StyledSocialItem>
        </StyledLink>
      </li>
      <li>
        <StyledLink to="https://www.viber.com/">
          <StyledSocialItem>
            <StyledViberIcon />
          </StyledSocialItem>
        </StyledLink>
      </li>
      <li>
        <StyledLink to="https://www.telegram.com/">
          <StyledSocialItem>
            <StyledTelegramIcon />
          </StyledSocialItem>
        </StyledLink>
      </li>
    </SocialsWrapper>
  );
};
