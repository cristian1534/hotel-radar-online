import { collection, getDocs, getFirestore } from "firebase/firestore";


interface Hotel {
    id: string;
    address: string;
    email: string;
    hotelId: string;
    image: string;
    name: string;
    state: string;
    telephone: number;
    userId: string;
    zip: string;
  }
export const fetchHotel = async (user: any) => {
    try{
        const db = getFirestore();
        const hotelsRef = collection(db, "hotels");
        const querySnapshot = await getDocs(hotelsRef);
        const hotels: Hotel[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
           ...doc.data(),
        })) as Hotel[];

        const result = hotels.filter((hotel) => hotel.userId === user?.uid);
        
        return result[0].hotelId || "";
 
    }catch(e: any){
        console.log(e);
    }
}