import { UserEntity } from "@/domain/UserEntity";
import { UserRepository } from "@/ports/UserRepository";
import { addUserAsync, loginUserAsync, logoutUserAsync } from "@/services/userService";
import { AppDispatch } from "@/adapters/ui/redux/store/store";

export class FirebaseUserRepository implements UserRepository {
  async addUser(
    user: UserEntity,
    dispatch: AppDispatch
  ): Promise<UserEntity | null> {
    try {
      const resultAction = await dispatch(addUserAsync(user));
      if (addUserAsync.fulfilled.match(resultAction)) {
        return resultAction.payload as UserEntity;
      } else {
        throw new Error("Failed to add user");
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async loginUser(
    User: UserEntity,
    dispatch: AppDispatch
  ): Promise<UserEntity | null> {
    try {
      const resultAction = await dispatch(loginUserAsync(User));
      if (loginUserAsync.fulfilled.match(resultAction)) {
        return resultAction.payload as UserEntity;
      } else {
        throw new Error("Failed to Log In");
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async logoutUser(dispatch: AppDispatch): Promise<void> {
    try {
      await dispatch(logoutUserAsync());
    } catch (err) {
      console.log(err);
    }
  }
}
