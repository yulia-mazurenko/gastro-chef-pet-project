import styled from "styled-components";
import { Container } from "../../universalComponents/Container/Container.styled";

export const StyledHeaderContainer = styled(Container)`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    padding-top: 30px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 52px;
  }
`;
