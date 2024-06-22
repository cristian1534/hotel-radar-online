import { AppDispatch } from "@/adapters/ui/redux/store/store";
import { RoomEntity } from "@/domain/room/roomEntity";
import { RoomRepository } from "@/ports/room/RoomRepository";
import { addRoomAsync } from "@/services/room/roomService";


export class FirebaseRoomRepository implements RoomRepository {
    async add(room: RoomEntity, dispatch: AppDispatch):Promise<RoomEntity|null>{
        try{
            const resultAction = await dispatch(addRoomAsync(room));
            if(addRoomAsync.fulfilled.match(resultAction)){
                return resultAction.payload as RoomEntity;
            }else{
                throw new Error("Failed to add room");
            }
        }catch(err){
            console.log(err);
            return null;
        }
    }
}