import styled from "styled-components";

export const MobileMenuOverlay = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;

  @media screen and (max-width: 767px) {
    width: 100vw;
    height: 100vh;
    background-color: rgba(2, 2, 2, 0.85);

    transform: translateY(-100%);
    transition: transform ${(props) => props.theme.effects.mainEffect};

    &.active {
      transform: translateY(0);
      transition: transform ${(props) => props.theme.effects.mainEffect};
    }
  }
`;
