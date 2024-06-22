import { createAsyncThunk } from "@reduxjs/toolkit";
import { ConciergeEntity } from "@/domain/concierge/conciergeEntity";
import { addDoc, getDoc } from "firebase/firestore";
import { conciergeRef } from "@/adapters/infrastructure/firebase/config/firebaseConfig";

interface RegisterConciergePayload {
  schedule: string;
  events: string;
  contactInfo: string;
  hotelId: string;
}

export const addConciergeAsync = createAsyncThunk<
  ConciergeEntity,
  RegisterConciergePayload
>(
  "concierge/addConcierge",
  async ({ schedule, events, contactInfo, hotelId }, { rejectWithValue }) => {
    try {
      const conciergeCredential = await addDoc(conciergeRef, {
        schedule: schedule,
        events: events,
        contactInfo: contactInfo,
        hotelId: hotelId,
      });
      const conciergeSnapshot = await getDoc(conciergeCredential);
      const conciergeData = conciergeSnapshot.data();
      return conciergeData as ConciergeEntity;
      
    } catch (err: any) {
      console.error("Register Concierge error: ", err);
      return rejectWithValue(err.message);
    }
  }
);
