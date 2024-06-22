import { LoungeEntity } from "@/domain/lounge/loungeEntity";
import { AppDispatch } from "@/adapters/ui/redux/store/store";

export interface LoungeRepository {
  add(
    lounge: LoungeEntity,
    dispatch: AppDispatch
  ): Promise<LoungeEntity | null>;
}
