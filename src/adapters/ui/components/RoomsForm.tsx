import React, { useState, ChangeEvent, FormEvent } from 'react';

const RoomsForm: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [roomNumber, setRoomNumber] = useState('');
  const [roomType, setRoomType] = useState('');
  const [price, setPrice] = useState('');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setImage(file);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ image, roomNumber, roomType, price });
  };

  return (
    <div className="max-w-md m-2 bg-brand-50 p-5 shadow-md">
      <form onSubmit={handleSubmit}>
        <h2 className="text-brand-50 dark:text-brand-200 text-2xl mb-6 text-center font-bold">Set a New Room</h2>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="roomNumber"
            id="roomNumber"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
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
            name="roomType"
            id="roomType"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-brand-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-200 peer"
            required
          >
            <option value="" disabled>Select Type of Room</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
            <option value="Standard">Standard</option>
          </select>
          <label
            htmlFor="roomType"
            className="peer-focus:font-medium absolute text-sm text-brand-200 dark:text-brand-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-brand-600 peer-focus:dark:text-brand-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Type of Room
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
  );
};

export default RoomsForm;
