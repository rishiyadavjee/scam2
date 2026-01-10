import React from "react";
import { useNavigate } from "react-router-dom";

const StudentInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER */}
      <header className="bg-sky-400 h-14 flex items-center px-4 text-white fixed top-0 left-0 right-0 z-50">
        <button
          onClick={() => navigate(-1)}
          className="text-2xl mr-4"
        >
          ←
        </button>
        <h1 className="text-lg font-semibold truncate">
          Student Information
        </h1>
      </header>

      {/* CONTENT */}
      <div className="pt-20 px-4 sm:px-6 md:px-8 py-6 max-w-3xl mx-auto">
        {/* Profile */}
        <div className="flex flex-col sm:flex-row items-center  relative sm:items-start gap-4">
          <img
            src="https://image2url.com/r2/bucket3/images/1768072200039-b428fa70-5d9e-4811-bd8e-232392ffcfee.jpg"
            alt="student"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full  object-cover "
          />

          <div className="text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-semibold break-words">
              Jajal Kavya BalvantBhai
            </h2>
            <span className="inline-block mt-1 bg-sky-400 text-white text-sm px-3 py-1 rounded-lg">
              2401261208
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="mt-6 space-y-3 text-sm sm:text-base">
          <div className="flex">
            <span className="w-26 shrink-0 text-gray-600">Class</span> :
            <b className="ml-2">First Year-D</b>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
            <div className="flex">
              <span className="w-26 shrink-0 text-gray-600">
                Academic Year
              </span> :
              <b className="ml-2">2024–2025</b>
            </div>

            <div className="flex">
              <span className="w-26 shrink-0 text-gray-600">
                Roll No.
              </span> :
              <b className="ml-2">242221</b>
            </div>
          </div>

          <div className="flex">
            <span className="w-33 shrink-0 text-gray-600">
              University PRN No
            </span> :
            
          </div>
        </div>

        {/* Course Button */}
        <div className="mt-6">
          <button className="w-full sm:max-w-3xl bg-sky-400 text-white py-3 rounded-lg font-semibold mx-auto block">
            iMSc (IT)
          </button>

        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-6">
          <div className="border rounded-lg p-5 sm:p-6 flex justify-center items-center text-xl sm:text-2xl">
            🔗
          </div>
          <div className="border rounded-lg p-5 sm:p-6 flex justify-center items-center text-xl sm:text-2xl">
            🌍
          </div>
          <div className="border rounded-lg p-5 sm:p-6 flex justify-center items-center text-xl sm:text-2xl">
            📊
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;

