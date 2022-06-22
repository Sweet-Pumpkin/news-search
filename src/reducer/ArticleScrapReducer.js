import { createSlice } from "@reduxjs/toolkit"

export const ArticleScrapReducer = createSlice({
  name: "scrap",
  initialState: [],
  reducers: {
    addScrap: (state, action) => {
      return [
        action.payload,
        ...state,
      ]
    },
    deleteScrap: (state, action) => {
      const filterState = state.filter(item => item.id !== action.payload);
      return filterState;
    }
  }
})

export const { addScrap, deleteScrap } = ArticleScrapReducer.actions;
export default ArticleScrapReducer.reducer;
