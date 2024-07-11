import { RestaurantEntity } from "@/domain/restaurant/RestaurantEntity";
import { AppDispatch } from "@/adapters/ui/redux/store/store";

export interface RestauranteRepository {
  add(
    restaurant: RestaurantEntity,
    dispatch: AppDispatch
  ): Promise<RestaurantEntity | null>;
}
