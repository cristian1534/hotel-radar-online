import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoungeEntity } from "@/domain/lounge/loungeEntity";
import { addDoc, getDoc } from "firebase/firestore";
import { loungeRef } from "@/adapters/infrastructure/firebase/config/firebaseConfig";

interface RegisterLoungePayload {
  id: string;
  eventInfo: string;
  schedule: string;
  reserve: string;
  contactInfo: string;
  hotelId: string;
}

export const addLoungeAsync = createAsyncThunk<
  LoungeEntity,
  RegisterLoungePayload
>(
  "lounge/addLounge",
  async (
    { eventInfo, schedule, reserve, contactInfo, hotelId },
    { rejectWithValue }
  ) => {
    try {
      const loungeCredential = await addDoc(loungeRef, {
        eventInfo: eventInfo,
        schedule: schedule,
        reserve: reserve,
        contactInfo: contactInfo,
        hotelId: hotelId,
      });

      const loungeSnapshot = await getDoc(loungeCredential);
      const loungeData = loungeSnapshot.data();

      return {
        id: loungeCredential.id,
        ...loungeData,
      } as LoungeEntity;
    } catch (error: any) {
      console.error("Register Lounge error: ", error);
      return rejectWithValue(error.message);
    }
  }
);
