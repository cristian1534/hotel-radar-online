import { AppDispatch } from "@/adapters/ui/redux/store/store";
import { HotelEntity } from "@/domain/hotel/hotelEntity";
import { HotelRepository } from "@/ports/hotel/HotelRepository";
import { addHotelAsync } from "@/services/hotel/hotelService";


export class FirebaseHotelRepository implements HotelRepository {
    async addHotel(hotel: HotelEntity, dispatch: AppDispatch):Promise<HotelEntity|null>{
        try{
            const resultAction = await dispatch(addHotelAsync(hotel));
            if(addHotelAsync.fulfilled.match(resultAction)){
                return resultAction.payload as HotelEntity;
            }else{
                throw new Error("Failed to add hotel");
            }
        }catch(err){
            console.log(err);
            return null;
        }
    };
}