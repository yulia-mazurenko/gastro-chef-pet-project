import { Contacts } from "../Contacts/Contacts";
import { NavigationAndContactsWrapper } from "../Header.styled";
import { Navigation } from "../Navigation/Navigation";

import { MobileMenuOverlay } from "./MobileMenu.styled";
import { CloseButton } from "../../../universalComponents/CloseButton/CloseButton";
import { IProps } from "../../../../types/mobileMenu";

export const MobileMenu: React.FC<IProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <MobileMenuOverlay className={isMobileMenuOpen ? "active" : ""}>
      <NavigationAndContactsWrapper>
        <Navigation
          type="header"
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <Contacts />

        <CloseButton onClick={toggleMobileMenu} />
      </NavigationAndContactsWrapper>
    </MobileMenuOverlay>
  );
};
