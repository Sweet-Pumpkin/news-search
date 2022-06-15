import styled from "styled-components";

export const ClipsStyle = styled.div`
  .clip {
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
    }
  }
`