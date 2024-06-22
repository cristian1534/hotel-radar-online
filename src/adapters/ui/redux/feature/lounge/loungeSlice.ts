import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addLoungeAsync } from "@/services/lounge/loungeService";
import { LoungeEntity } from "@/domain/lounge/loungeEntity";

interface LoungeState {
  lounges: LoungeEntity[];
  error: string | null;
  loading: boolean;
}

const initialState: LoungeState = {
  lounges: [],
  error: null,
  loading: false,
};

export const LoungeEntitySlice = createSlice({
  name: "lounge",
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
      .addCase(addLoungeAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        addLoungeAsync.fulfilled,
        (state, action: PayloadAction<LoungeEntity>) => {
          state.loading = false;
          state.lounges.push(action.payload);
        }
      )
      .addCase(addLoungeAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setError, clearError } = LoungeEntitySlice.actions;
export default LoungeEntitySlice.reducer;
export interface RootState {
  lounge: LoungeState;
}
