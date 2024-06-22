import { createAsyncThunk } from "@reduxjs/toolkit";
import { HotelEntity } from "@/domain/hotel/hotelEntity";
import { hotelsRef } from "@/adapters/infrastructure/firebase/config/firebaseConfig";
import { addDoc, getDoc, updateDoc } from "firebase/firestore";

interface RegisterHotelPayload {
  name: string;
  email: string;
  address: string;
  state: string;
  telephone: number;
  zip: number;
  userId: string;
  image: string;
}

export const addHotelAsync = createAsyncThunk<
  HotelEntity,
  RegisterHotelPayload
>(
  "hotel/addHotel",
  async ({ name, email, address, state, telephone, zip, userId, image }, { rejectWithValue }) => {
    try {
      const hotelCredential = await addDoc(hotelsRef, {
        name: name,
        email: email,
        address: address,
        state: state,
        telephone: telephone,
        zip: zip,
        userId: userId,
        image: image,
      });
      await updateDoc(hotelCredential, {hotelId: hotelCredential.id});


      const hotelSnapshot = await getDoc(hotelCredential);
      const hotelData = hotelSnapshot.data();
      
     return { ...hotelData, hotelId: hotelsRef.id} as HotelEntity;
    } catch (error: any) {
      console.error("Register Hotel error: ", error);
      return rejectWithValue(error.message);
    }
  }
);
