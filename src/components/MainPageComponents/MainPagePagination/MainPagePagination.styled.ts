import styled from "styled-components";

import pagination from "../../../assets/svg/other/pagination.svg";

export const MainPagination = styled.div`
  width: 156px;
  height: 14px;

  background-image: url(${pagination});

  @media screen and (min-width: 1920px) {
    align-self: center;
  }
`;
