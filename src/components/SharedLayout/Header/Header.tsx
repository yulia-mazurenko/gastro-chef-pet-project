import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";

import { Contacts } from "./Contacts/Contacts";
import {
  NavigationAndContactsWrapper,
  StyledHeader,
  StyledHeaderContainer,
} from "./Header.styled";
import { Logo } from "../../universalComponents/Logo/Logo";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { Navigation } from "./Navigation/Navigation";

export const Header: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Logo text="healthy ration" type="header" />
        {!isMobile && (
          <NavigationAndContactsWrapper>
            <Navigation
              setIsMobileMenuOpen={setIsMobileMenuOpen}
              isMobileMenuOpen={isMobileMenuOpen}
              type="header"
            />
            <Contacts />
          </NavigationAndContactsWrapper>
        )}
        {isMobile && !isMobileMenuOpen && (
          <BurgerMenu
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        )}
        {isMobile && (
          <MobileMenu
            type="header"
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        )}
      </StyledHeaderContainer>
    </StyledHeader>
  );
};
