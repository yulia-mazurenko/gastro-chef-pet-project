import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../../../assets/svg/other/cross.svg";

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border: none;
  padding: 0;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.whiteText};
  box-shadow: ${(p) => p.theme.shadows.accent};
`;

export const StyledCloseIcon = styled(CloseIcon)`
  width: 28px;
  height: 28px;
  stroke: ${(p) => p.theme.colors.text};

  &:hover,
  &:focus {
    stroke: ${(p) => p.theme.colors.accentColor};
    transition: fill ${(p) => p.theme.effects.mainEffect};
  }
`;
