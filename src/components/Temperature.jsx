import React from "react";
import { FaArrowDown } from "react-icons/fa";

function Temperature({ setCity, stats }) {
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4 lg:flex-col lg:space-y-4">
        <div className="flex items-center space-x-2 ">
          <h2 className="text-2xl text-white ">Search For Your City</h2>
          <FaArrowDown className="mt-4 text-xl text-white" />
        </div>
        <input
          type="text"
          className="block p-2 text-white border bg-zinc-600 border-zinc-500 placeholder-slate-400 text-md focus:border-slate-400 w-60 focus:outline-none"
          placeholder="Enter Your City Name"
          onChange={handleCityChange}
          defaultValue="New Delhi"
        />
      </div>

      <div className="flex justify-center mt-8">
        {stats.isDay !== 0 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-yellow-300 w-14 h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-slate-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        )}
      </div>

      <div className="flex items-center justify-center mt-8 text-slate-100">
        <p className="font-semibold text-[35px] sm:text-[45px] md:text-[55px]">
          {stats.temp}
        </p>
        <span className="text-[23px] sm:text-[28px] md:text-[33px]">°C</span>
      </div>

      <div className="flex items-center justify-center mt-4 text-[18px] sm:text-[22px] md:text-[25px] text-white">
        {stats.condition}
      </div>

      <div className="flex justify-center text-slate-200 mt-5 text-[13px] sm:text-[14px] md:text-[15px]">
        Today . {stats.time} | {stats.location}
      </div>
    </>
  );
}

export default Temperature;
