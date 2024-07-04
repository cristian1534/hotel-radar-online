import { AppDispatch } from "@/adapters/ui/redux/store/store";
import { ServiceEntity } from "@/domain/service/ServiceEntity";
import { ServiceRepository } from "@/ports/service/ServiceRepository";
import { addServiceAsync } from "@/services/service/serviceService";

export class FirebaseServiceRepository implements ServiceRepository {
  async add(
    service: ServiceEntity,
    dispatch: AppDispatch
  ): Promise<ServiceEntity | null> {
    try {
      const resultAction = await dispatch(addServiceAsync(service));
      if (addServiceAsync.fulfilled.match(resultAction)) {
        return resultAction.payload as ServiceEntity;
      } else {
        throw new Error("Failed to add service");
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
