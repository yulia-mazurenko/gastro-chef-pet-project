import { LogoText, StyledLogoLink, WrapperLogo } from "./Logo.styled.js";

export const Logo: React.FC = ({ text, type }) => {
  return (
    <WrapperLogo type={type}>
      <StyledLogoLink type={type} to="/">
        <LogoText>{text}</LogoText>
      </StyledLogoLink>
    </WrapperLogo>
  );
};
