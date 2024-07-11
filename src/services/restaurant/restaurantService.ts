import { RestaurantEntity } from "@/domain/restaurant/RestaurantEntity";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { restaurantRef } from "@/adapters/infrastructure/firebase/config/firebaseConfig";
import { addDoc, getDoc } from "firebase/firestore";

interface RegisterRestaurantPayload {
    id: string;
    name: string;
    description: string;
    openWeek: string;
    openWeekend: string;
    menuLink: string;
    contactNumber: number;
    contactEmail: string;
    place: string;
    promotion: string;
    eventInformation: string;
    image: string;
    hotelId: string;
}


export const addRestaurantAsync = createAsyncThunk<RestaurantEntity, RegisterRestaurantPayload>("restaurant/addRestaurant", async ({ name, description, openWeek, openWeekend, menuLink, contactNumber, contactEmail, place, promotion, eventInformation, image, hotelId }, { rejectWithValue })  => {
        try {
            const restaurantCredential = await addDoc(restaurantRef, {
                name: name,
                description: description,
                openWeek: openWeek,
                openWeekend: openWeekend,
                menuLink: menuLink,
                contactNumber: contactNumber,
                contactEmail: contactEmail,
                place: place,
                promotion: promotion,
                eventInformation: eventInformation,
                image: image,
                hotelId: hotelId
            });

            const restaurantSnapshot = await getDoc(restaurantCredential);
            const restaurantData = restaurantSnapshot.data();

            return {
                id: restaurantCredential.id,
                ...restaurantData,
            } as RestaurantEntity

        } catch (err: any) {
            console.log(err);
            return rejectWithValue(err.message)
        }
    })