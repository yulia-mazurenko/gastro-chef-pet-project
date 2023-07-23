import styled from "styled-components";
import { Container } from "../../universalComponents/Container/Container.styled";

export const StyledHeader = styled.header`
  z-index: 1;
  position: relative;
`;

export const StyledHeaderContainer = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 767px) {
    padding: 0px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 30px;
  }
  @media screen and (min-width: 1920px) {
    padding-top: 52px;
  }
`;

export const NavigationAndContactsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media screen and (max-width: 767px) {
    z-index: 2;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    border-radius: 0px 0px 50px 50px;
    background-color: ${(props) => props.theme.colors.whiteText};
  }
`;
