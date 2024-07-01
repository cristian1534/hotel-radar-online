import { AppDispatch } from "@/adapters/ui/redux/store/store";
import { SpaRepository } from "@/ports/spa/SpaRepository";
import { SpaEntity } from "@/domain/spa/SpaEntity";
import { addSpaAsync } from "@/services/spa/spaService";

export class FirebaseSpaRepository implements SpaRepository {
  async add(spa: SpaEntity, dispatch: AppDispatch): Promise<SpaEntity | null> {
    try {
      const resultAction = await dispatch(addSpaAsync(spa));
      if (addSpaAsync.fulfilled.match(resultAction)) {
        return resultAction.payload as SpaEntity;
      } else {
        throw new Error("Failed to add spa");
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
