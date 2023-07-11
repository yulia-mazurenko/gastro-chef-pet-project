import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { Logo } from "../../universalComponents/Logo/Logo";
import { PhoneLink } from "../../universalComponents/PhoneNumberBlock/PhoneNumberBlock.styled";
import { Navigation } from "../Header/Navigation/Navigation";
import { Faq } from "./Faq/Faq";
import {
  StyledFooter,
  StyledFooterContainer,
  StyledInfoWrapper,
  StyledPhoneLink,
} from "./Footer.styled";
import { Socials } from "./Socials/Socials";

export const Footer: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  return (
    <StyledFooter>
      <StyledFooterContainer>
        {!isMobile && (
          <Navigation
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            isMobileMenuOpen={isMobileMenuOpen}
            type="footer"
          />
        )}
        <Logo text="healthy food service" type="footer" />
        <StyledInfoWrapper>
          {!isMobile && <Faq />}
          <Socials />
          <StyledPhoneLink href="tel:+380689494919">
            +38 (068) 949 - 49 -19
          </StyledPhoneLink>
        </StyledInfoWrapper>
      </StyledFooterContainer>
    </StyledFooter>
  );
};
