import { Button } from "../../universalComponents/Button/Button";
import { PageTitle } from "../../universalComponents/PageTitle/PageTitile";
import { MainPagePagination } from "../MainPagePagination/MainPagePagination";
import {
  BgHeroSection,
  ButtonPriceWrapper,
  HeroAvocadoImg,
  MainPageHeroContainer,
  PriceAboutText,
  PriceText,
  StyledHeroSection,
  StyledPartText,
  Text,
  WrapperAvocadoImg,
} from "./MainPageHero.styled";

export const MainPageHero: React.FC = () => {
  return (
    <StyledHeroSection>
      <BgHeroSection>
        <WrapperAvocadoImg>
          <HeroAvocadoImg />
        </WrapperAvocadoImg>
      </BgHeroSection>
      <MainPageHeroContainer>
        <PageTitle
          text="Detox program – "
          accentText="delicious cleansing "
          secondText="of the body"
        />
        <Text>
          8 bottles of <StyledPartText>natural</StyledPartText> smoothies and
          juices.
        </Text>
        <ButtonPriceWrapper>
          <Button
            onClick={() => {}}
            children="order"
            background=""
            bordercolor=""
            color=""
            hoverbackground=""
            hovercolor=""
          />
          <PriceAboutText>
            Trial day total: <PriceText>427 hrn</PriceText>
          </PriceAboutText>
        </ButtonPriceWrapper>
        <MainPagePagination />
      </MainPageHeroContainer>
    </StyledHeroSection>
  );
};
