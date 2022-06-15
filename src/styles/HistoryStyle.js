import styled from "styled-components";

export const HistoryStyle = styled.div`
  .historys {
    width: 500px;
    position: absolute;
    top: 195px;
    left: 49px;
    border: 1px solid rgb(120, 120, 120);
    border-radius: 0 0 5px 5px;
    background-color: white;
    z-index: 1;
    .history {
      padding: 10px;
      display: flex;
      
      .search {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        filter: invert(99%) sepia(0%) saturate(154%) hue-rotate(266deg) brightness(91%) contrast(75%);
      }

      .value {
        line-height: 1.3;
      }

      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        
        .trash {
          width: 20px;
          transition: .2;
          &:hover {
            filter: invert(99%) sepia(0%) saturate(154%) hue-rotate(266deg) brightness(91%) contrast(75%);
          }
        }
      }
    }
  }
`