import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addUserAsync,
  loginUserAsync,
  logoutUserAsync,
} from "@/services/user/userService";
import { UserEntity } from "@/domain/user/UserEntity";

interface UserState {
  users: UserEntity[];
  isLoggedIn: boolean;
  user: UserEntity | null;
  error: string | null;
  loading: boolean;
}

const initialState: UserState = {
  users: [],
  isLoggedIn: false,
  user: null,
  error: null,
  loading: false,
};

export const UserEntitySlice = createSlice({
  name: "user",
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
      .addCase(addUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        addUserAsync.fulfilled,
        (state, action: PayloadAction<UserEntity>) => {
          state.loading = false;
          state.user = action.payload;
          state.users.push(action.payload);
          state.isLoggedIn = true;
        }
      )
      .addCase(addUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        loginUserAsync.fulfilled,
        (state, action: PayloadAction<UserEntity>) => {
          state.loading = false;
          state.user = action.payload;
          state.isLoggedIn = true;
        }
      )
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(logoutUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUserAsync.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isLoggedIn = false;
      })
      .addCase(logoutUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setError, clearError } = UserEntitySlice.actions;
export default UserEntitySlice.reducer;

export interface RootState {
  user: UserState;
}
