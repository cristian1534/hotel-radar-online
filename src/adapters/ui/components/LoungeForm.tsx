import React, { useState, ChangeEvent, FormEvent } from "react";
import useHandleSubmit from "./customs/useSubmit";
import { FirebaseLoungeRepository } from "@/adapters/infrastructure/firebase/lounge/firebaseLoungeRepository";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import Loader from "./customs/Loader";

interface LoungeFormProps {}

const LoungeForm: React.FC<LoungeFormProps> = () => {
  const [lounge, setLounge] = useState({
    id: "",
    eventInfo: "",
    schedule: "",
    reserve: "",
    contactInfo: "",
    hotelId: "",
  });
  const { loading } = useSelector((state: RootState) => state.lounge);
  const handleSubmit = useHandleSubmit();
  const loungeRepository = new FirebaseLoungeRepository();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLounge({ ...lounge, [name]: value });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await handleSubmit(loungeRepository, lounge, "");
      if (result) {
        alert("Lounge Added");
        setLounge({
          id: "",
          eventInfo: "",
          schedule: "",
          reserve: "",
          contactInfo: "",
          hotelId: "",
        });
      }
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
              Lounge Service Information
            </h2>

            <div className="relative z-0 w-full mb-5 group">
              <textarea
                name="eventInfo"
                id="eventInfo"
                value={lounge.eventInfo}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-brand-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-200 peer"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="eventInfo"
                className="peer-focus:font-medium absolute text-sm text-brand-200 dark:text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-brand-600 peer-focus:dark:text-brand-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Events
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="schedule"
                id="schedule"
                value={lounge.schedule}
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
                type="text"
                name="reserve"
                id="reserve"
                value={lounge.reserve}
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
                name="contactInfo"
                id="contactInfo"
                value={lounge.contactInfo}
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
};

export default LoungeForm;
