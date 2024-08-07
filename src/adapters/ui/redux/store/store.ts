import { configureStore } from "@reduxjs/toolkit";
import UserEntitySlice from "../feature/user/userSlice";
import HotelEntitySlice  from "../feature/hotel/hotelSlice";
import RoomEntitySlice  from "../feature/room/roomSlice";
import conciergeSlice from "../feature/concierge/conciergeSlice";
import loungeSlice from "../feature/lounge/loungeSlice";
import spaSlice from "../feature/spa/spaSlice";
import serviceSlice from "../feature/service/serviceSlice";

const store = configureStore({
  reducer: {
    user: UserEntitySlice,
    hotel: HotelEntitySlice,
    room: RoomEntitySlice,
    concierge: conciergeSlice,
    lounge: loungeSlice,
    spa: spaSlice,
    service: serviceSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
