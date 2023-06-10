import { StyledLink, StyledNav } from "./Navigation.styled";

export const Navigation: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink to={"nutritionPrograms"}>Nutrition Programs</StyledLink>
      <StyledLink to={"businessLunches"}>Business-lunches</StyledLink>
      <StyledLink to={"gastroShop"}>Gastro Shop</StyledLink>
      <StyledLink to={"about"}>About us</StyledLink>
      <StyledLink to={"blog"}>Blog</StyledLink>
    </StyledNav>
  );
};
