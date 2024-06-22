import { createAsyncThunk } from "@reduxjs/toolkit";
import { RoomEntity } from "@/domain/room/roomEntity";
import { roomsRef } from "@/adapters/infrastructure/firebase/config/firebaseConfig";
import { addDoc, getDoc } from "firebase/firestore";

interface RegisterRoomPayload {
  id: string;
  roomNumber: number;
  type: string;
  price: number;
  image: string;
  hotelId: string;
}

export const addRoomAsync = createAsyncThunk<RoomEntity, RegisterRoomPayload>(
  "room/addRoom",
  async ({ roomNumber, type, price, image, hotelId }, { rejectWithValue }) => {
    try {
      const roomCredential = await addDoc(roomsRef, {
        roomNumber: roomNumber,
        type: type,
        price: price,
        image: image,
        hotelId: hotelId,
      });

      const roomSnapshot = await getDoc(roomCredential);
      const roomData = roomSnapshot.data();

      return {
        id: roomCredential.id,
        ...roomData,
      } as RoomEntity;
    } catch (error: any) {
      console.error("Register Room error: ", error);
      return rejectWithValue(error.message);
    }
  }
);
