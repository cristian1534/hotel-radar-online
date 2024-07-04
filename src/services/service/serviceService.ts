import { createAsyncThunk } from "@reduxjs/toolkit";
import { ServiceEntity } from "@/domain/service/ServiceEntity";
import { addDoc, getDoc } from "firebase/firestore";
import { serviceRef } from "@/adapters/infrastructure/firebase/config/firebaseConfig";

interface RegisterServicePayload {
    id: string;
    reception: boolean;
    wifi: boolean;
    roomService: boolean;
    parking: boolean;
    restaurant: boolean;
    bar: boolean;
    buffet: boolean;
    hotelId: string;
}

export const addServiceAsync = createAsyncThunk<
    ServiceEntity,
    RegisterServicePayload
>("service/addService", async ({ reception, wifi, roomService, parking, restaurant, bar, buffet, hotelId }, { rejectWithValue }) => {
    try {
      const serviceCredential = await addDoc(serviceRef, {
        reception: reception,
        wifi: wifi,
        roomService: roomService,
        parking: parking,
        restaurant: restaurant,
        bar: bar,
        buffet: buffet,
        hotelId: hotelId,
      });
      const serviceSnapshot = await getDoc(serviceCredential);
      const serviceData = serviceSnapshot.data();
      return {
        id: serviceCredential.id,
       ...serviceData,
      } as ServiceEntity;
      
    } catch (err: any) {
      console.error("Register Service error: ", err);
      return rejectWithValue(err.message);
    }
  });
