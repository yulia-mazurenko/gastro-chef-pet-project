import { PageTitleAccentPart, StyledPageTitle } from "./PageTitle.styled";

interface IProps {
  text: string;
  accentText: string;
  secondText: string;
}

export const PageTitle: React.FC<IProps> = ({
  text,
  accentText,
  secondText,
}) => {
  return (
    <>
      <StyledPageTitle>
        {text}
        <PageTitleAccentPart>{accentText}</PageTitleAccentPart>
        {secondText}
      </StyledPageTitle>
    </>
  );
};
