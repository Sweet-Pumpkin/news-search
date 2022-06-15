import styled from "styled-components";

export const MainStyle = styled.div`
  .input-wrap {
    padding: 15px 0 15px 0;
    .input {
      display: block;
      width: 80%;
      padding: 10px;
      margin: 0 auto;
      font-size: 18px;
      border: 1px solid rgb(120, 120, 120);
      border-radius: 5px;  
      &:focus {
        outline: none;
      }
    }
  }

  .loading {
    margin: 0 auto;
    padding: 25px;
  }
`