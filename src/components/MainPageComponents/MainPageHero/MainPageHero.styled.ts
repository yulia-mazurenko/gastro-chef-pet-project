import styled from "styled-components";
import { Container } from "../../universalComponents/Container/Container.styled";

import mobileBGIHero from "../../../assets/images/mobile/main-page/bg-main.png";
import mobileBGIHero2x from "../../../assets/images/mobile/main-page/bg-main-2x.png";
import tabletBGIHero from "../../../assets/images/desktop/main-page/bg-main.png";
import tabletBGIHero2x from "../../../assets/images/desktop/main-page/bg-main-2x.png";
import desktopBGIHero from "../../../assets/images/desktop/main-page/bg-main.png";
import desktopBGIHero2x from "../../../assets/images/desktop/main-page/bg-main-2x.png";

import mobileBGIAvocado from "../../../assets/images/mobile/main-page/hero-avocado.png";
import mobileBGIAvocado2x from "../../../assets/images/mobile/main-page/hero-avocado-2x.png";
import tabletBGIAvocado from "../../../assets/images/tablet/main-page/hero-avocado.png";
import tabletBGIAvocado2x from "../../../assets/images/tablet/main-page/hero-avocado-2x.png";
import desktopBGIAvocado from "../../../assets/images/desktop/main-page/hero-avocado.png";
import desktopBGIAvocado2x from "../../../assets/images/desktop/main-page/hero-avocado-2x.png";

export const StyledHeroSection = styled.section`
  @media screen and (min-width: 768px) {
    padding-bottom: 57px;
  }
  @media screen and (min-width: 1920px) {
    padding-bottom: 39px;
  }
`;

export const MainPageHeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 321px) and (max-width: 1919px) {
    padding-left: 129px;
  }

  /* padding-right: 90px; */
`;

export const BgHeroSection = styled.div`
  background-image: url("${mobileBGIHero}");
  background-size: cover;
  background-repeat: no-repeat;
  /* box-shadow: 0px 0px 40px 0px rgba(86, 86, 86, 0.4); */

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${mobileBGIHero2x});
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: -55px;
    right: 0;
    width: 413px;
    height: 715px;
    background-image: url("${tabletBGIHero}");

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${tabletBGIHero2x});
    }
  }

  @media screen and (min-width: 1920px) {
    position: absolute;
    top: -55px;
    right: 0;

    width: 986px;
    height: 1235px;
    background-image: url(${desktopBGIHero});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${desktopBGIHero2x});
    }
  }
`;

export const WrapperAvocadoImg = styled.div`
  z-index: 0;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.whiteText};

  @media screen and (min-width: 768px) {
    top: 150px;
    right: 8px;

    width: 307px;
    height: 307px;
  }

  @media screen and (min-width: 1920px) {
    top: 250px;
    right: 8px;

    width: 700px;
    height: 700px;
  }
`;

export const HeroAvocadoImg = styled.div`
  background-image: url("${mobileBGIAvocado}");
  background-size: cover;
  border-radius: 50%;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${mobileBGIAvocado2x});
  }

  @media screen and (min-width: 768px) {
    width: 275px;
    height: 275px;

    background-image: url("${tabletBGIAvocado}");
    background-repeat: no-repeat;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${tabletBGIAvocado2x});
    }
  }

  @media screen and (min-width: 1920px) {
    width: 625px;
    height: 625px;
    background-image: url("${desktopBGIAvocado}");
    background-repeat: no-repeat;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${desktopBGIAvocado2x});
    }
  }
`;

export const Text = styled.p`
  width: 139px;
  font-family: MontserratMedium;
  font-size: 10px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 1.3;
  text-align: left;
  color: ${(p) => p.theme.colors.text};
  margin-top: 5px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 195px;
    margin-top: 10px;
    margin-bottom: 25px;
    font-size: ${(p) => p.theme.fontSizes.xs};
  }

  @media screen and (min-width: 1920px) {
    width: 450px;
    margin-top: 15px;
    margin-bottom: 42px;
    font-size: 20px;
  }
`;

export const StyledPartText = styled.span`
  color: ${(p) => p.theme.colors.accentColor};
`;

export const PriceAboutText = styled.p`
  font-family: MontserratRegular;
  font-size: 10px;
  font-weight: ${(p) => p.theme.fontWeights.regular};
  line-height: 1.3;
  text-align: left;
  color: ${(p) => p.theme.colors.text};
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    margin-top: 10px;
    font-size: ${(p) => p.theme.fontSizes.xs};
  }

  @media screen and (min-width: 1920px) {
    margin-top: 0;
    font-size: 20px;
  }
`;

export const PriceText = styled.p`
  font-family: MontserratBold;
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: 1;
  text-align: left;
  color: ${(p) => p.theme.colors.accentColor};
  margin-top: 3px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.l};
    margin-bottom: 45px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 35px;
  }
`;

export const ButtonPriceWrapper = styled.div`
  @media screen and (min-width: 1920px) {
    display: flex;
    gap: 30px;
    height: 60px;
    margin-bottom: 277px;
  }
`;
