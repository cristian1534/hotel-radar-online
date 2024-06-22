import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addRoomAsync } from "@/services/room/roomService";
import { RoomEntity } from "@/domain/room/roomEntity";

interface RoomState {
  rooms: RoomEntity[];
  error: string | null;
  loading: boolean;
}

const initialState: RoomState = {
  rooms: [],
  error: null,
  loading: false,
};

export const RoomEntitySlice = createSlice({
  name: "room",
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
      .addCase(addRoomAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        addRoomAsync.fulfilled,
        (state, action: PayloadAction<RoomEntity>) => {
          state.loading = false;
          state.rooms.push(action.payload);
        }
      )
      .addCase(addRoomAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setError, clearError } = RoomEntitySlice.actions;
export default RoomEntitySlice.reducer;
export interface RootState {
  room: RoomState;
}
