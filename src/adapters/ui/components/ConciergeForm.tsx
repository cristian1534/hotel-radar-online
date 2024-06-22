import React, { useState, ChangeEvent, FormEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import Loader from "./customs/Loader";
import { FirebaseConciergeRepository } from "@/adapters/infrastructure/firebase/concierge/firebaseConciergeRepository";
import useHandleSubmit from "../components/customs/useSubmit";

export default function ConciergeForm() {
  const [concierge, setConcierge] = useState({
    id: "",
    schedule: "",
    events: "",
    contactInfo: "",
    hotelId: "",
  });
  const { loading } = useSelector((state: RootState) => state.concierge);
  const conciergeRepository = new FirebaseConciergeRepository();
  const handleSubmit = useHandleSubmit();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setConcierge({ ...concierge, [name]: value });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await handleSubmit(conciergeRepository, concierge, "");
      if (result) {
        alert("Concierge Added");
        setConcierge({
          id: "",
          schedule: "",
          events: "",
          contactInfo: "",
          hotelId: "",
        });
      }
    } catch (err: any) {
      return err;
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        <div className="max-w-md m-2 bg-brand-50 p-5 shadow-md">
          <form onSubmit={onSubmit}>
            <h2 className="text-brand-50 dark:text-brand-200 text-2xl mb-6 text-center font-bold">
              Concierge Service Information
            </h2>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="schedule"
                id="schedule"
                value={concierge.schedule}
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
              <textarea
                name="events"
                id="events"
                value={concierge.events}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-brand-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-200 peer"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="events"
                className="peer-focus:font-medium absolute text-sm text-brand-200 dark:text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-brand-600 peer-focus:dark:text-brand-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Events
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="contactInfo"
                id="contactInfo"
                value={concierge.contactInfo}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-brand-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-200 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="contactInfo"
                className="peer-focus:font-medium absolute text-sm text-brand-200 dark:text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-brand-600 peer-focus:dark:text-brand-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Contact Information
              </label>
            </div>

            <button
              type="submit"
              className="block w-full px-4 py-2 font-semibold text-brand-50 bg-brand-200 rounded-lg hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}
