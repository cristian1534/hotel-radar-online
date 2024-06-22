import { ConciergeEntity } from "@/domain/concierge/conciergeEntity";
import { AppDispatch } from "@/adapters/ui/redux/store/store";

export interface ConciergeRepository {
  addConcierge(
    concierge: ConciergeEntity,
    dispatch: AppDispatch
  ): Promise<ConciergeEntity | null>;
}
