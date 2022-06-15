import styled from "styled-components";

export const ArticleStyle = styled.div`
  .article {
    padding: 10px 50px;
    position: relative;

    a {
      h3 {
        width: 475px;
      }
      span {
        display: block;
        color: rgb(120, 120, 120);
        margin-bottom: 10px;
        font-size: 12px;
      }
      p {
        display: inline-block;
        color: rgb(120, 120, 120);
        margin-bottom: 10px;
      }
    }

    button {
      background-color: transparent;
      border: none;
      position: absolute;
      top: 5px;
      right: 50px;
      img {
        width: 25px;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
          width: 23px;
        }
      }
      .off {
        filter: invert(87%) sepia(83%) saturate(1%) hue-rotate(292deg) brightness(87%) contrast(101%);
      }
      .on {
        filter: invert(41%) sepia(97%) saturate(3460%) hue-rotate(199deg) brightness(92%) contrast(111%);
      }
    }
  }
`