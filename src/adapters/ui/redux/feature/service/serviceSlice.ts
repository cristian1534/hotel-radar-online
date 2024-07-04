import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServiceEntity } from "@/domain/service/ServiceEntity";
import { addServiceAsync } from "@/services/service/serviceService";

interface ServiceState {
  services: ServiceEntity[];
  error: string | null;
  loading: boolean;
}

const initialState: ServiceState = {
  services: [],
  loading: false,
  error: null,
};

export const serviceSlice = createSlice({
  name: "service",
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
      .addCase(addServiceAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addServiceAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.services.push(action.payload);
      })
      .addCase(addServiceAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setError, clearError } = serviceSlice.actions;
export default serviceSlice.reducer;
export interface RootState {
  service: ServiceState;
};
