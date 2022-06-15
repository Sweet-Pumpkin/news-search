import styled from "styled-components";

export const HeaderStyle = styled.div`
  .header {
    width: 51%;
    margin: 0 auto;
    padding: 5px 0 15px 0;
    font-family: 'Sansita Swashed', cursive;
    font-size: 14px;

    .search {
      margin-right: 200px;
    }

    .search, .clips {
      color: rgb(120, 120, 120);
      &:hover {
        color: black;
      }
    }
  }
`