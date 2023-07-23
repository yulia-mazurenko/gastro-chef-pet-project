import { LogoText, StyledLogoLink, WrapperLogo } from "./Logo.styled.js";
import { IProps } from "../../../types/logo";

export const Logo: React.FC<IProps> = ({ text, type }) => {
  return (
    <WrapperLogo type={type}>
      <StyledLogoLink type={type} to="/">
        <LogoText type={type}>{text}</LogoText>
      </StyledLogoLink>
    </WrapperLogo>
  );
};
