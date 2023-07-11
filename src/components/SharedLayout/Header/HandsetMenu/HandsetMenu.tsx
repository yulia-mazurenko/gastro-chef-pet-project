import React, { ReactEventHandler } from "react";
import { IProps } from "../../../../types/handsetMenu";
// import { CloseButton } from "../../../universalComponents/CloseButton/CloseButton";
import { PhoneLink } from "../../../universalComponents/PhoneNumberBlock/PhoneNumberBlock.styled";
import {
  HandsetCloseButton,
  HandsetCloseIcon,
  HandsetMenuWrapper,
} from "./HandsetMenu.styled";

export const HandsetMenu: React.FC<IProps> = ({
  isHandsetMenuOpen,
  setIsHandsetMenuOpen,
}) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    console.log(e.currentTarget);
    console.log(e.target);
    if (e.currentTarget !== e.target) {
      console.log("works");
    } else {
      console.log("no");
      setIsHandsetMenuOpen(!isHandsetMenuOpen);
    }
  };

  return (
    <HandsetMenuWrapper
      onClick={handleOverlayClick}
      className={isHandsetMenuOpen ? "active" : ""}
    >
      <PhoneLink href="tel:+380689494919">+38 (068) 949 - 49 -19</PhoneLink>
      <HandsetCloseButton
        onClick={() => setIsHandsetMenuOpen(!isHandsetMenuOpen)}
      >
        <HandsetCloseIcon />
      </HandsetCloseButton>
    </HandsetMenuWrapper>
  );
};
