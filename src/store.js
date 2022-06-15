// redux
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// reducers
import ArticleScrapReducer from "./reducer/ArticleScrapReducer";
import HistoryReducer from "./reducer/HistoryReducer";

const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = combineReducers({
  scrap: ArticleScrapReducer,
  history: HistoryReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})