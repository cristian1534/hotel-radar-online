import React, { useState, ChangeEvent, FormEvent } from 'react';

interface LoungeFormProps {}

const LoungeForm: React.FC<LoungeFormProps> = () => {
  const [events, setEvents] = useState<string>('');
  const [schedule, setSchedule] = useState<string>('');
  const [reserve, setReserve] = useState<string>('');
  const [contact, setContact] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ events, schedule, reserve, contact });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'events':
        setEvents(value);
        break;
      case 'schedule':
        setSchedule(value);
        break;
      case 'reserve':
        setReserve(value);
        break;
      case 'contact':
        setContact(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="max-w-md m-2 bg-brand-50 p-5 shadow-md">
      <form onSubmit={handleSubmit}>
        <h2 className="text-brand-50 dark:text-brand-200 text-2xl mb-6 text-center font-bold">Lounge Service Information</h2>

        <div className="relative z-0 w-full mb-5 group">
          <textarea
            name="events"
            id="events"
            value={events}
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
            name="schedule"
            id="schedule"
            value={schedule}
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
            value={reserve}
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
            name="contact"
            id="contact"
            value={contact}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-brand-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-brand-200 dark:border-brand-200 dark:focus:border-brand-300 focus:outline-none focus:ring-0 focus:border-brand-200 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="contact"
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
  );
};

export default LoungeForm;
