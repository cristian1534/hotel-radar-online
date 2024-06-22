import { RoomEntity } from "@/domain/room/roomEntity";
import { AppDispatch } from "@/adapters/ui/redux/store/store";

export interface RoomRepository {
    add(room: RoomEntity, dispatch: AppDispatch): Promise<RoomEntity|null>;
}