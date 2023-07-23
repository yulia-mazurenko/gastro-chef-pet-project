import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 39px;
    padding-right: 39px;
    width: 768px;
  }

  @media screen and (min-width: 1920px) {
    padding-left: 370px;
    padding-right: 370px;
    width: 1920px;
  }
`;
