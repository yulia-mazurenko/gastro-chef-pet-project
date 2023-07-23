import { StyledButton } from "./Button.styled";
import { IButtonProps } from "../../../types/button";

export const Button: React.FC<IButtonProps> = ({
  onClick,
  background,
  bordercolor,
  color,
  hoverbackground,
  hovercolor,
  children,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      background={background}
      bordercolor={bordercolor}
      color={color}
      hoverbackground={hoverbackground}
      hovercolor={hovercolor}
    >
      {children}
    </StyledButton>
  );
};
