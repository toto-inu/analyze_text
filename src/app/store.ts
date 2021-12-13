import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { textReducers } from "@/components/graphql/text";

export const store = configureStore({
  reducer: {
    text: textReducers,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
