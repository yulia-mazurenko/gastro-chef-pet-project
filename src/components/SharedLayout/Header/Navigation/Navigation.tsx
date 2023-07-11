import {
  StyledLink,
  StyledListItem,
  StyledNavigation,
  StyledNavList,
} from "./Navigation.styled";
import { IProps } from "../../../../types/mobileMenu";

export const Navigation: React.FC<IProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  type,
}) => {
  return (
    <StyledNavigation type={type}>
      <StyledNavList type={type}>
        <StyledListItem>
          <StyledLink
            type={type}
            to={"nutritionPrograms"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            Nutrition Programs
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            type={type}
            to={"businessLunches"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            Business-lunches
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            type={type}
            to={"gastroShop"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            Gastro Shop
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            type={type}
            to={"about"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            About us
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            type={type}
            to={"blog"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            Blog
          </StyledLink>
        </StyledListItem>
      </StyledNavList>
    </StyledNavigation>
  );
};
