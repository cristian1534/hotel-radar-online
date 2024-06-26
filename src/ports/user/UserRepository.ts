import { AppDispatch } from "@/adapters/ui/redux/store/store";
import { UserEntity } from "@/domain/user/UserEntity";

export interface UserRepository {
  addUser(user: UserEntity, dispatch: AppDispatch): Promise<UserEntity | null>;
  loginUser(
    user: UserEntity,
    dispatch: AppDispatch
  ): Promise<UserEntity | null>;
}
