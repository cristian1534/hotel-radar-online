import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addConciergeAsync } from "@/services/concierge/conciergeService";
import { ConciergeEntity } from "@/domain/concierge/conciergeEntity";

interface ConciergeState {
  concierges: ConciergeEntity[];
  error: string | null;
  loading: boolean;
}

const initialState: ConciergeState = {
  concierges: [],
  error: null,
  loading: false,
};

export const ConciergeEntitySlice = createSlice({
  name: "concierge",
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
      .addCase(addConciergeAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addConciergeAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.concierges.push(action.payload);
      })
      .addCase(addConciergeAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setError, clearError } = ConciergeEntitySlice.actions;
export default ConciergeEntitySlice.reducer;
export interface RootState {
  concierge: ConciergeState;
}
