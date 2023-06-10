import { LogoText, StyledLogoLink, WrapperLogo } from "./Logo.styled.js";
// import { ReactComponent as LogoIcon } from "../../../../assets/svg/logo/logo_mobile.svg";

export const Logo: React.FC = () => {
  return (
    <WrapperLogo>
      <StyledLogoLink to="/">
        <LogoText>healthy ration</LogoText>
      </StyledLogoLink>
    </WrapperLogo>
  );
};
