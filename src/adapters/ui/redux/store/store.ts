import { configureStore } from "@reduxjs/toolkit";
import UserEntitySlice  from "../feature/userSlice";

const store = configureStore({
  reducer: {
    user: UserEntitySlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
