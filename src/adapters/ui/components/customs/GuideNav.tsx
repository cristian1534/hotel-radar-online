import React, { useState } from "react";
import Link from "next/link";

const GuideNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const guideList: string[] = ["Rooms", "Restaurants", "Spa", "Concierge", "Lounge"];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-brand-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/hotel-guide"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl text-brand-300 font-semibold whitespace-nowrap">
              Hotel Guide Section
            </span>
          </Link>
          <button
            onClick={handleToggle}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-brand-300 rounded-lg md:hidden hover:bg-brand-400 focus:outline-none focus:ring-2"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${isOpen ? "" : "hidden"}`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-brand-50 rounded-lg bg-brand-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              {guideList.map((guide, index) => (
                <li key={index}>
                  <Link
                    href={`/${guide.toLowerCase()}`}
                    className="block py-2 px-3 rounded md:bg-transparent text-brand-300 hover:bg-brand-100 hover:text-white"
                    aria-current="page"
                  >
                    {guide}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default GuideNav;
