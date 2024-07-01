import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addSpaAsync } from "@/services/spa/spaService";
import { SpaEntity } from "@/domain/spa/SpaEntity";

interface SpaState {
  spas: SpaEntity[];
  error: string | null;
  loading: boolean;
}

const initialState: SpaState = {
  spas: [],
  error: null,
  loading: false,
};

export const SpaEntitySlice = createSlice({
  name: "spa",
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
      .addCase(addSpaAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addSpaAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.spas.push(action.payload);
      })
      .addCase(addSpaAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setError, clearError } = SpaEntitySlice.actions;
export default SpaEntitySlice.reducer;
export interface RootState {
  spa: SpaState;
}
