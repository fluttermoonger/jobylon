import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: { theme: themeReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
