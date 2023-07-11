import styled from "styled-components";

export const BurgerMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 233px;
  height: 34px;
  margin-top: 34px;
  background-color: ${(p) => p.theme.colors.whiteText};
  box-shadow: ${(p) => p.theme.shadows.accent};
  border-radius: 17px;
`;

export const BurgerMenuButton = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  transform: translateY(-25%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.whiteText};
  box-shadow: ${(p) => p.theme.shadows.accent};
`;

export const HandSetButton = styled.div`
  position: absolute;
  top: 0px;
  right: 73px;
  transform: translateY(-25%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.whiteText};
  box-shadow: ${(p) => p.theme.shadows.accent};
`;
