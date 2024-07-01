import { AppDispatch } from "@/adapters/ui/redux/store/store";
import { SpaEntity } from "@/domain/spa/SpaEntity";

export interface SpaRepository {
  add(spa: SpaEntity, dispatch: AppDispatch): Promise<SpaEntity | null>;
}
