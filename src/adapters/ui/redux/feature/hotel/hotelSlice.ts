import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addHotelAsync } from "@/services/hotel/hotelService";
import { HotelEntity } from "@/domain/hotel/hotelEntity";


interface HotelState {
  hotels: HotelEntity[];
  error: string | null;
  loading: boolean;
}

const initialState: HotelState = {
  hotels: [],
  error: null,
  loading: false,
};

export const HotelEntitySlice = createSlice({
    name: "hotel",
    initialState,
    reducers: {
      setError: (state, action: PayloadAction<string>) => {
        state.error = action.payload;
      },
      clearError: (state) => {
        state.error = null;
      },
    },
    extraReducers: (builder) => {
      builder
       .addCase(addHotelAsync.pending, (state) => {
          state.loading = true;
        })
       .addCase(
          addHotelAsync.fulfilled,
          (state, action: PayloadAction<HotelEntity>) => {
            state.loading = false;
            state.hotels.push(action.payload);
          }
        )
       .addCase(addHotelAsync.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
    },
  });

  export const { setError, clearError } = HotelEntitySlice.actions;
  export default HotelEntitySlice.reducer;
  export interface RootState {
    hotel: HotelState;
  }