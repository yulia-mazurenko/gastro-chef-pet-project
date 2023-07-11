import React, { useState } from "react";
import { ReactComponent as BurgerMenuIcon } from "../../../../assets/svg/other/burger_menu_button.svg";
import { ReactComponent as HandsetIcon } from "../../../../assets/svg/other/handset_button.svg";
import {
  BurgerMenuButton,
  BurgerMenuWrapper,
  HandSetButton,
} from "./BurgerMenu.styled";

import { IProps } from "../../../../types/burgerMenu";
import { HandsetMenu } from "../HandsetMenu/HandsetMenu";

export const BurgerMenu: React.FC<IProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const [isHandsetMenuOpen, setIsHandsetMenuOpen] = useState<boolean>(false);

  return (
    <BurgerMenuWrapper>
      <BurgerMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <BurgerMenuIcon />
      </BurgerMenuButton>

      <HandSetButton onClick={() => setIsHandsetMenuOpen(!isHandsetMenuOpen)}>
        <HandsetIcon />
      </HandSetButton>

      <HandsetMenu
        isHandsetMenuOpen={isHandsetMenuOpen}
        setIsHandsetMenuOpen={setIsHandsetMenuOpen}
      />
    </BurgerMenuWrapper>
  );
};
