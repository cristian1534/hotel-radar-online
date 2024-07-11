import React, { useState, ChangeEvent, FormEvent } from "react";
import useHandleSubmit from "./customs/useSubmit";
import { FirebaseSpaRepository } from "@/adapters/infrastructure/spa/firebaseSpaRepository";
import Loader from "./customs/Loader";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

export default function SpaForm() {
  const [spa, setSpa] = useState({
    id: "",
    image: null as File | null,
    name: "",
    description: "",
    price: "",
    reserve: "",
    schedule: "",
  });
  const spaRepository = new FirebaseSpaRepository();
  const handleSubmit = useHandleSubmit();
  const { loading } = useSelector((state: RootState) => state.spa);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSpa({ ...spa, image: file });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSpa({
      ...spa,
      [name]: name === "price" ? (value === "" ? 0 : parseInt(value)) : value,
    });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const result = await handleSubmit(spaRepository, spa, "spas");
      if (result) {
        alert("Spa Treatment Added");
        setSpa({
          id: "",
          image: null,
          name: "",
          description: "",
          price: "",
          reserve: "",
          schedule: "",
        });
      }
    } catch (err: any) {
      console.error(err);
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
              Set a New Spa Treatment
            </h2>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="name"
                value={spa.name}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-brand-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-200 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-brand-200 dark:text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-brand-600 peer-focus:dark:text-brand-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <textarea
                name="description"
                id="description"
                value={spa.description}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-brand-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-200 peer"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="description"
                className="peer-focus:font-medium absolute text-sm text-brand-200 dark:text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-brand-600 peer-focus:dark:text-brand-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Description
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                name="price"
                id="price"
                value={spa.price}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-brand-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-200 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="price"
                className="peer-focus:font-medium absolute text-sm text-brand-200 dark:text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-brand-600 peer-focus:dark:text-brand-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Price (USD)
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="reserve"
                id="reserve"
                value={spa.reserve}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-brand-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-200 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="reserve"
                className="peer-focus:font-medium absolute text-sm text-brand-200 dark:text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-brand-600 peer-focus:dark:text-brand-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Reserve
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="schedule"
                id="schedule"
                value={spa.schedule}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-brand-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-200 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="schedule"
                className="peer-focus:font-medium absolute text-sm text-brand-200 dark:text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-brand-600 peer-focus:dark:text-brand-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Schedule
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
                Treatment Image
              </label>
            </div>

            <button
              type="submit"
              className="block w-full px-4 py-2 font-semibold text-brand-50 bg-brand-200 rounded-lg hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-opacity-50"
            >
              Create Treatment
            </button>
          </form>
        </div>
      )}
    </>
  );
}
