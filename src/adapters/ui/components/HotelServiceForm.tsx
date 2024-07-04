import React, { useState, ChangeEvent, FormEvent } from "react";
import useHandleSubmit from "./customs/useSubmit";
import { FirebaseServiceRepository } from "../../infrastructure/service/firebaseServiceRepository";

interface HotelServices {
  reception: string;
  wifi: string;
  roomService: string;
  parking: string;
  restaurant: string;
  bar: string;
  buffet: string;
}

const defaultServices: HotelServices = {
  reception: "We are available to assist you at any time of the day or night.",
  wifi: "Enjoy fast and free Wi-Fi throughout the hotel.",
  roomService: "Available from 6:00 AM to 11:00 PM, with a varied international menu.",
  parking: "We offer secure and free parking for all our guests.",
  restaurant: "Enjoy a unique dining experience with our fusion cuisine menu, open from 12:00 PM to 10:00 PM.",
  bar: "Relax with a refreshing drink and panoramic city views, open from 5:00 PM to 1:00 AM.",
  buffet: "We offer a delicious breakfast buffet from 6:30 AM to 10:30 AM, included in the room rate."
};

const HotelServiceForm: React.FC = () => {
  const [services, setServices] = useState<HotelServices>({
    reception: "",
    wifi: "",
    roomService: "",
    parking: "",
    restaurant: "",
    bar: "",
    buffet: "",
  });

  const [description, setDescription] = useState<string>("");
  const handleSubmit = useHandleSubmit();
  const serviceRepository = new FirebaseServiceRepository();

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setServices((prevServices) => ({
      ...prevServices,
      [name]: checked ? defaultServices[name as keyof HotelServices] : "",
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await handleSubmit(serviceRepository, services, "");
      if (result) {
        alert("Hotel Services Added");
        setServices({
          reception: "",
          wifi: "",
          roomService: "",
          parking: "",
          restaurant: "",
          bar: "",
          buffet: "",
        });
        setDescription("");
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-md m-2 bg-brand-50 p-5 shadow-md">
      <form onSubmit={onSubmit}>
        <h2 className="text-brand-50 dark:text-brand-200 text-2xl mb-6 text-center font-bold">
          Hotel Services
        </h2>

        {/* Checkbox inputs */}
        {Object.keys(services).map((key) => (
          <div key={key} className="relative z-0 w-full mb-5 group">
            <label className="block text-sm text-brand-200 dark:text-brand-300 text-start">
              <input
                type="checkbox"
                name={key}
                checked={services[key as keyof HotelServices] !== ""}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              {key === "reception" && "24-Hour Reception"}
              {key === "wifi" && "Free Wi-Fi"}
              {key === "roomService" && "Room Service"}
              {key === "parking" && "Parking"}
              {key === "restaurant" && "Gourmet Restaurant"}
              {key === "bar" && "Rooftop Bar"}
              {key === "buffet" && "Breakfast Buffet"}
            </label>
          </div>
        ))}

        {/* Description textarea */}
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="resize-none block py-2.5 px-4 w-full text-sm text-brand-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-200 peer"
            placeholder=" "
          ></textarea>
          <label
            htmlFor="description"
            className="peer-focus:font-medium absolute text-sm text-brand-200 dark:text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 left-4 origin-[0] peer-focus:left-0 peer-focus:text-brand-600 peer-focus:dark:text-brand-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Other information
          </label>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="block w-full px-4 py-2 font-semibold text-brand-50 bg-brand-200 rounded-lg hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HotelServiceForm;
