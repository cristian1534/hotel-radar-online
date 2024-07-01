import React, { useState, ChangeEvent, FormEvent  } from "react";
import { FirebaseRoomRepository } from "@/adapters/infrastructure/firebase/room/firebaseRoomRepository";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import Loader from "./customs/Loader";
import useHandleSubmit from "./customs/useSubmit";

const RoomsForm: React.FC = () => {
  const [room, setRoom] = useState({
    id: "",
    roomNumber: 0,
    type: "",
    price: 0,
    image: null as File | null,
    hotelId: "",
  });
  const roomRepository = new FirebaseRoomRepository();
  const handleSubmit = useHandleSubmit();
  const { loading } = useSelector((state: RootState) => state.room);

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setRoom({
      ...room,
      [name]:
        name === "price" || name === "roomNumber"
          ? value === ""
            ? 0
            : parseFloat(value)
          : value,
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setRoom({ ...room, image: e.target.files[0] });
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await handleSubmit(roomRepository, room, "rooms");

      if (result) {
        alert("Room Added");
        setRoom({
          id: "",
          roomNumber: 0,
          type: "",
          price: 0,
          image: null,
          hotelId: "",
        });
      }
      // }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="max-w-md m-2 bg-brand-50 p-5 shadow-md">
          <form onSubmit={onSubmit}>
            <h2 className="text-brand-50 dark:text-brand-200 text-2xl mb-6 text-center font-bold">
              Set a New Room
            </h2>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="roomNumber"
                id="roomNumber"
                value={room.roomNumber}
                onChange={handleOnChange}
                className="block py-2.5 px-0 w-full text-sm text-brand-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-200 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="roomNumber"
                className="peer-focus:font-medium absolute text-sm text-brand-200 dark:text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-brand-600 peer-focus:dark:text-brand-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Room Number
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <select
                name="type"
                id="type"
                value={room.type}
                onChange={handleOnChange}
                className="block py-2.5 px-0 w-full text-sm text-brand-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-200 peer"
                required
              >
                <option value="" disabled>
                  Select Type of Room
                </option>
                <option value="Deluxe">Deluxe</option>
                <option value="Suite">Suite</option>
                <option value="Standard">Standard</option>
              </select>
              <label
                htmlFor="type"
                className="peer-focus:font-medium absolute text-sm text-brand-200 dark:text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-brand-600 peer-focus:dark:text-brand-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Type of Room
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="price"
                id="price"
                value={room.price}
                onChange={handleOnChange}
                className="block py-2.5 px-0 w-full text-sm text-brand-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-200 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="price"
                className="peer-focus:font-medium absolute text-sm text-brand-200 dark:text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-brand-600 peer-focus:dark:text-brand-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Price per Night (USD)
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
              Create Room
            </button>
          </form>
        </div>
      )}{" "}
    </>
  );
};

export default RoomsForm;
