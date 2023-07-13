import { LogoText, StyledLogoLink, WrapperLogo } from "./Logo.styled.js";
import { IProps } from "../../../types/lg";

export const Logo: React.FC<IProps> = ({ text, type }) => {
  return (
    <WrapperLogo type={type}>
      <StyledLogoLink type={type} to="/">
        <LogoText type={type}>{text}</LogoText>
      </StyledLogoLink>
    </WrapperLogo>
  );
};
