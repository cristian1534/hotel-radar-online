import { AppDispatch } from "@/adapters/ui/redux/store/store";
import { HotelEntity } from "@/domain/hotel/hotelEntity";

export interface HotelRepository {
  add(
    hotel: HotelEntity,
    dispatch: AppDispatch
  ): Promise<HotelEntity | null>;
}
