import { configureStore } from "@reduxjs/toolkit";
import UserEntitySlice from "../feature/user/userSlice";
import HotelEntitySlice  from "../feature/hotel/hotelSlice";

const store = configureStore({
  reducer: {
    user: UserEntitySlice,
    hotel: HotelEntitySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
