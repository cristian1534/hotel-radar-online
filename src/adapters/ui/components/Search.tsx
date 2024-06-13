import React, { ChangeEvent } from "react";

interface SearchProps {
  searchValue: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ searchValue, handleSearch }) => {
  return (
    <div>
      <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-brand-300 sr-only dark:text-brand-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-brand-300 dark:text-brand-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-center text-sm text-brand-300 border border-gray-300 rounded-lg bg-gray-50 focus:ring-brand-300 focus:border-brand-300 dark:bg-brand-50 dark:border-brand-200 dark:placeholder-brand-200 dark:text-brand-200 dark:focus:ring-brand-300 dark:focus:border-brand-300"
            placeholder="Reservation ID"
            value={searchValue}
            onChange={handleSearch}
            required
          />
          <button
            type="button"
            className="text-white absolute end-2.5 bottom-2.5 bg-brand-300 hover:bg-brand-200 focus:ring-4 focus:outline-none focus:ring-brand-200 font-medium rounded-lg text-sm px-4 py-2 dark:bg-brand-300 dark:hover:bg-brand-200 dark:focus:ring-brand-200"
            onClick={() => console.log("Search button clicked")}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
