import React, { ChangeEvent, useState } from "react";
import { FirebaseHotelRepository } from "@/adapters/infrastructure/firebase/hotel/firebaseHotelRepository";
import { HotelEntity } from "@/domain/hotel/hotelEntity";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import useAuthentication from "./customs/useAuthentication";
import Loader from "./customs/Loader";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const UpdateInfoHotelForm: React.FC = () => {
  const [hotel, setHotel] = useState({
    name: "",
    email: "",
    address: "",
    state: "",
    phone: "",
    zipCode: "",
    userId: "",
    image: null as File | null,
  });
  const hotelRepository = new FirebaseHotelRepository();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.hotel);
  const user = useAuthentication();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHotel({ ...hotel, [name]: value });
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setHotel({ ...hotel, image: e.target.files[0] });
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const storage = getStorage();
    const storageRef = ref(storage, `hotels/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let imageUrl = "";
      if (hotel.image) {
        imageUrl = await uploadImage(hotel.image);
      }
      const result = await hotelRepository.add(
        {
          name: hotel.name,
          email: hotel.email,
          address: hotel.address,
          state: hotel.state,
          telephone: parseInt(hotel.phone),
          zip: parseInt(hotel.zipCode),
          userId: user?.uid,
          image: imageUrl,
        } as HotelEntity,
        dispatch
      );

      if (result) {
        alert("Hotel Updated");
        setHotel({
          name: "",
          email: "",
          address: "",
          state: "",
          phone: "",
          zipCode: "",
          userId: "",
          image: null,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <form
          className="max-w-md mx-auto bg-brand-50 p-5"
          onSubmit={handleSubmit}
        >
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="floating_first_name"
              value={hotel.name}
              onChange={handleOnChange}
              className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className={`absolute  text-brand-200 dark:text-brand-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:font-medium duration-300 origin-[0] ${
                hotel.name ? "-translate-y-6" : ""
              }`}
            >
              Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="floating_email"
              value={hotel.email}
              onChange={handleOnChange}
              className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className={`absolute  text-brand-200 dark:text-brand-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:font-medium duration-300 origin-[0] ${
                hotel.email ? "-translate-y-6" : ""
              }`}
            >
              Email
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="address"
              id="floating_address"
              value={hotel.address}
              onChange={handleOnChange}
              className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_address"
              className={`absolute  text-brand-200 dark:text-brand-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:font-medium duration-300 origin-[0] ${
                hotel.address ? "-translate-y-6" : ""
              }`}
            >
              Address
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="state"
              id="floating_state"
              value={hotel.state}
              onChange={handleOnChange}
              className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_state"
              className={`absolute  text-brand-200 dark:text-brand-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:font-medium duration-300 origin-[0] ${
                hotel.state ? "-translate-y-6" : ""
              }`}
            >
              State
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="phone"
              id="floating_phone"
              value={hotel.phone}
              onChange={handleOnChange}
              className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className={`absolute  text-brand-200 dark:text-brand-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:font-medium duration-300 origin-[0] ${
                hotel.phone ? "-translate-y-6" : ""
              }`}
            >
              Telephone Number
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="zipCode"
              id="floating_zipCode"
              value={hotel.zipCode}
              onChange={handleOnChange}
              className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_zipCode"
              className={`absolute  text-brand-200 dark:text-brand-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:font-medium duration-300 origin-[0] ${
                hotel.zipCode ? "-translate-y-6" : ""
              }`}
            >
              Zip Code
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="block py-2.5 px-0 w-full text-sm text-brand-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-200 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="image"
              className="peer-focus:font-medium absolute text-sm text-brand-200 dark:text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-brand-600 peer-focus:dark:text-brand-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Room Image
            </label>
          </div>

          <button
            type="submit"
            className="block w-full px-4 py-2 font-semibold text-brand-50 bg-brand-200 rounded-lg hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-opacity-50"
          >
            Update Information
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateInfoHotelForm;
