import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addUserAsync, loginUserAsync } from "@/services/userService";
import { UserEntity } from "@/domain/UserEntity";

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
  reducers: {},
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
      });
  },
});

export default UserEntitySlice.reducer;

export interface RootState {
  user: UserState;
}
