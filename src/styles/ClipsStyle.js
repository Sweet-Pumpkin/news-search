import styled from "styled-components";

export const ClipsStyle = styled.div`
  .clip {
    padding: 10px 50px;
    position: relative;

    a {

      .mainIMG {
        width: 500px;
        padding: 10px 0 10px 0;
      }

      .title-wrap {
        display: flex;
        position: relative;

        h3 {
          width: 475px;
        }

        button {
          background-color: transparent;
          border: none;
          position: absolute;
          top: 0;
          right: 0;
        }
        
        img {
          width: 25px;
          cursor: pointer;
          transition: 0.2s;
          &:hover {
            width: 23px;
          }
        }

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
  }
`