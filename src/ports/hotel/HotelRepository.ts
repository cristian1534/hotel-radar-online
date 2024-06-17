import { AppDispatch } from "@/adapters/ui/redux/store/store";
import { HotelEntity } from "@/domain/hotel/hotelEntity";

export interface HotelRepository {
  addHotel(
    hotel: HotelEntity,
    dispatch: AppDispatch
  ): Promise<HotelEntity | null>;
}
