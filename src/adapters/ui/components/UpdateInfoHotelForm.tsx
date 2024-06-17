import React, { useState } from "react";
import { FirebaseHotelRepository } from "@/adapters/infrastructure/firebase/hotel/firebaseHotelRepository";
import { HotelEntity } from "@/domain/hotel/hotelEntity";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import useAuthentication from "./customs/useAuthentication";
import Loader from "./customs/Loader";

const UpdateInfoHotelForm: React.FC = () => {
  const [hotel, setHotel] = useState({
    id: "",
    name: "",
    email: "",
    address: "",
    state: "",
    phone: "",
    zipCode: "",
    userId: "",
  });
  const hotelRepository = new FirebaseHotelRepository();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.hotel);
  const user = useAuthentication();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHotel({ ...hotel, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await hotelRepository.addHotel(
        {
          id: hotel.id,
          name: hotel.name,
          email: hotel.email,
          address: hotel.address,
          state: hotel.state,
          telephone: parseInt(hotel.phone),
          zip: parseInt(hotel.zipCode),
          userId: user?.uid,
        } as HotelEntity,
        dispatch
      );

      if (result) {
        alert("Hotel Updated");
        setHotel({
          id: "",
          name: "",
          email: "",
          address: "",
          state: "",
          phone: "",
          zipCode: "",
          userId: "",
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
