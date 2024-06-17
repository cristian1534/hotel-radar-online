import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  restaurantName: string;
  description: string;
  openingHoursWeekdays: string;
  openingHoursWeekend: string;
  menuLink: string;
  contactNumber: string;
  contactEmail: string;
  location: string;
  promotions: string;
  eventInfo: string;
  image: File | null;
}

export default function UpdateRestaurantInfoForm() {
  const [formData, setFormData] = useState<FormData>({
    restaurantName: "",
    description: "",
    openingHoursWeekdays: "",
    openingHoursWeekend: "",
    menuLink: "",
    contactNumber: "",
    contactEmail: "",
    location: "",
    promotions: "",
    eventInfo: "",
    image: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="bg-brand-300 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-brand-50 p-5 shadow-md">
        <h2 className="text-brand-200 text-2xl mb-6 text-center font-bold">
          Update Restaurant Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="restaurantName"
              id="restaurantName"
              value={formData.restaurantName}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-brand-200 bg-transparent border-0 border-b-2 border-brand-200 appearance-none focus:outline-none focus:ring-0 focus:border-brand-200 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="restaurantName"
              className="peer-focus:font-medium absolute text-sm text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-brand-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Restaurant Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-brand-200 bg-transparent border-0 border-b-2 border-brand-200 appearance-none focus:outline-none focus:ring-0 focus:border-brand-200 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="description"
              className="peer-focus:font-medium absolute text-sm text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-brand-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="openingHoursWeekdays"
                id="openingHoursWeekdays"
                value={formData.openingHoursWeekdays}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-brand-200 bg-transparent border-0 border-b-2 border-brand-200 appearance-none focus:outline-none focus:ring-0 focus:border-brand-200 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="openingHoursWeekdays"
                className="peer-focus:font-medium absolute text-sm text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-brand-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Opening Hours (Mon-Fri)
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="openingHoursWeekend"
                id="openingHoursWeekend"
                value={formData.openingHoursWeekend}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-brand-200 bg-transparent border-0 border-b-2 border-brand-200 appearance-none focus:outline-none focus:ring-0 focus:border-brand-200 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="openingHoursWeekend"
                className="peer-focus:font-medium absolute text-sm text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-brand-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Opening Hours (Sat-Sun)
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="url"
              name="menuLink"
              id="menuLink"
              value={formData.menuLink}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-brand-200 bg-transparent border-0 border-b-2 border-brand-200 appearance-none focus:outline-none focus:ring-0 focus:border-brand-200 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="menuLink"
              className="peer-focus:font-medium absolute text-sm text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-brand-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Menu Link
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-brand-200 bg-transparent border-0 border-b-2 border-brand-200 appearance-none focus:outline-none focus:ring-0 focus:border-brand-200 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="contactNumber"
                className="peer-focus:font-medium absolute text-sm text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-brand-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Contact Number
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="contactEmail"
                id="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-brand-200 bg-transparent border-0 border-b-2 border-brand-200 appearance-none focus:outline-none focus:ring-0 focus:border-brand-200 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="contactEmail"
                className="peer-focus:font-medium absolute text-sm text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-brand-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Contact Email
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-brand-200 bg-transparent border-0 border-b-2 border-brand-200 appearance-none focus:outline-none focus:ring-0 focus:border-brand-200 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="location"
              className="peer-focus:font-medium absolute text-sm text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-brand-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Location
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <textarea
              name="promotions"
              id="promotions"
              value={formData.promotions}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-brand-200 bg-transparent border-0 border-b-2 border-brand-200 appearance-none focus:outline-none focus:ring-0 focus:border-brand-200 peer"
              placeholder=" "
            />
            <label
              htmlFor="promotions"
              className="peer-focus:font-medium absolute text-sm text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-brand-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Promotions
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <textarea
              name="eventInfo"
              id="eventInfo"
              value={formData.eventInfo}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-brand-200 bg-transparent border-0 border-b-2 border-brand-200 appearance-none focus:outline-none focus:ring-0 focus:border-brand-200 peer"
              placeholder=" "
            />
            <label
              htmlFor="eventInfo"
              className="peer-focus:font-medium absolute text-sm text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-brand-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Event Information
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleImageChange}
              className="block w-full text-sm text-brand-200 bg-transparent border-0 border-b-2 border-brand-200 appearance-none focus:outline-none focus:ring-0 focus:border-brand-200 peer"
            />
            <label
              htmlFor="image"
              className="peer-focus:font-medium absolute text-sm text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-brand-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Image
            </label>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-brand-200 hover:bg-brand-700 focus:ring-4 focus:outline-none focus:ring-brand-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
