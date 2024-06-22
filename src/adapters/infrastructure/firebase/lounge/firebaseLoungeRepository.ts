import { AppDispatch } from "@/adapters/ui/redux/store/store";
import { LoungeEntity } from "@/domain/lounge/loungeEntity";
import { LoungeRepository } from "@/ports/lounge/LoungeRepository";
import { addLoungeAsync } from "@/services/lounge/loungeService";

export class FirebaseLoungeRepository implements LoungeRepository {
  async add(
    lounge: LoungeEntity,
    dispatch: AppDispatch
  ): Promise<LoungeEntity | null> {
    try {
      const resultAction = await dispatch(addLoungeAsync(lounge));
      if (addLoungeAsync.fulfilled.match(resultAction)) {
        return resultAction.payload as LoungeEntity;
      } else {
        throw new Error("Failed to add lounge");
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
