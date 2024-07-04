import { AppDispatch } from "@/adapters/ui/redux/store/store";
import { ServiceEntity } from "@/domain/service/ServiceEntity";

export interface ServiceRepository {
  add(
    service: ServiceEntity,
    dispatch: AppDispatch
  ): Promise<ServiceEntity | null>;
}
