import styled from "styled-components";
import {
  StyledCloseButton,
  StyledCloseIcon,
} from "../../../universalComponents/CloseButton/CloseButton.styled";
import { PhoneWrapper } from "../../../universalComponents/PhoneNumberBlock/PhoneNumberBlock.styled";

export const HandsetMenuWrapper = styled(PhoneWrapper)`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 250%;
    left: -20%;
    padding: 15px 25px 15px 15px;

    transform: scale(0);
    transition: transform ${(props) => props.theme.effects.mainEffect};

    &.active {
      transform: scale(1);
      transition: transform ${(props) => props.theme.effects.mainEffect};
    }
  }
`;

export const HandsetCloseButton = styled(StyledCloseButton)`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 5px;
    right: 10px;
    width: 15px;
    height: 15px;
  }
`;

export const HandsetCloseIcon = styled(StyledCloseIcon)`
  width: 12px;
  height: 12px;
`;
