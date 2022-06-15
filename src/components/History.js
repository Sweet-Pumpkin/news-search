// react
import React from "react";
// react-redux
import { useSelector, useDispatch } from "react-redux";
import { DeleteHistory } from "../reducer/HistoryReducer";
// style 
import { HistoryStyle } from "../styles/HistoryStyle";
// image
import search from "../assets/search.svg"
import deleteBtn from "../assets/delete.svg"

export default function History() {
  // react-redux useSelector & useDispatch
  const historys = useSelector(state => state.history);
  const dispatch = useDispatch();
  
  // delete history
  const onClick = (e) => {
    dispatch(DeleteHistory(e.target.id));
  }

  return (
    <>
      { 
        historys.length !== 0 &&
        <HistoryStyle>
          <div className="historys">
          { 
            historys.map(history => (
              <div className="history" key={history.id}>
                <img className="search" src={search} alt="img" />
                <div className="value">
                  {history.value}
                </div>
                <button onClick={onClick}>
                  <img className="trash" id={history.id} src={deleteBtn} alt="img" />
                </button>
              </div>
            )) 
          }
        </div>
      </HistoryStyle>
    }
    </>
  )
}
