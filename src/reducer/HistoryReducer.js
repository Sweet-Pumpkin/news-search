import { createSlice } from "@reduxjs/toolkit"

const HistoryReducer = createSlice({
  name: "history",
  initialState: [],
  reducers: {
    UpdateHistory: (state, action) => {
      // history name
      const name = action.payload.value
      // if history name length is over 4 or history name is overlab
      if (state.length > 4) {
        return [
          { ...action.payload },
          ...state.filter(item => item.value !== name).slice(0, 4),
        ]
      } else {
        return [
          { ...action.payload },
          ...state.filter(item => item.value !== name),
        ]
      }
    },
    DeleteHistory: (state, action) => {
      const filterState = state.filter(item => item.id !== action.payload);
      return filterState;
    }
  }
})

export const { UpdateHistory, DeleteHistory } = HistoryReducer.actions;
export default HistoryReducer.reducer;