import { createAsyncThunk } from "@reduxjs/toolkit";
import { HotelEntity } from "@/domain/hotel/hotelEntity";
import { hotelsRef } from "@/adapters/infrastructure/firebase/config/firebaseConfig";
import { addDoc, getDoc } from "firebase/firestore";

interface RegisterHotelPayload {
  id: string;
  name: string;
  address: string;
  state: string;
  telephone: number;
  zip: number;
  userId: string;
}

export const addHotelAsync = createAsyncThunk<
  HotelEntity,
  RegisterHotelPayload
>(
  "hotel/addHotel",
  async ({ name, address, state, telephone, zip, userId }, { rejectWithValue }) => {
    try {
      const hotelCredential = await addDoc(hotelsRef, {
        name: name,
        address: address,
        state: state,
        telephone: telephone,
        zip: zip,
        userId: userId,
      });

      const hotelSnapshot = await getDoc(hotelCredential);
      const hotelData = hotelSnapshot.data();

      return {
        id: hotelCredential.id,
        ...hotelData,
      } as HotelEntity;
    } catch (error: any) {
      console.error("Register Hotel error: ", error);
      return rejectWithValue(error.message);
    }
  }
);
