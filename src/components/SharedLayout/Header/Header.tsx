import { Contacts } from "./Contacts/Contacts";
import { StyledHeaderContainer } from "./Header.styled";
import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";

export const Header: React.FC = () => {
  return (
    <StyledHeaderContainer>
      <Logo />
      <Navigation />
      <Contacts />
    </StyledHeaderContainer>
  );
};
