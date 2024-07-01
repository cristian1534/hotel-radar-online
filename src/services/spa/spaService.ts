import { createAsyncThunk } from "@reduxjs/toolkit";
import { SpaEntity } from "@/domain/spa/SpaEntity";
import { spaRef } from "@/adapters/infrastructure/firebase/config/firebaseConfig";
import { addDoc, getDoc } from "firebase/firestore";


interface RegisterSpaPayload {
    id: string;
    name: string;
    description: string;
    price: number;
    reserve: string;
    schedule: string;
    image: string;
    hotelId: string;
}

export const addSpaAsync = createAsyncThunk<
    SpaEntity,
    RegisterSpaPayload
>("spa/addSpa", async ({ name, description, price, reserve, schedule, image, hotelId }, { rejectWithValue }) => {
    try {
      const spaCredential = await addDoc(spaRef, {
        name: name,
        description: description,
        price: price,
        reserve: reserve,
        schedule: schedule,
        image: image,
        hotelId: hotelId,
      });
      const spaSnapshot = await getDoc(spaCredential);
      const spaData = spaSnapshot.data();
      return {
        id: spaCredential.id,
       ...spaData,
      } as SpaEntity;
      
    } catch (err: any) {
      console.error("Register Spa error: ", err);
      return rejectWithValue(err.message);
    }
  });
