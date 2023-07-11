import { StyledCloseButton, StyledCloseIcon } from "./CloseButton.styled";

export interface IProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const CloseButton: React.FC<IProps> = ({ onClick }) => {
  return (
    <StyledCloseButton onClick={onClick}>
      <StyledCloseIcon />
    </StyledCloseButton>
  );
};
