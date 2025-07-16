import React from "react";
import { Link } from "react-router-dom";

const DoctorCarousel5 = () => {
  return (
    <div className="flex justify-center gap-6 p-6 mt-10">
      {/* Card 1 */}
      <div className="relative block rounded-3xl border border-gray-100 bg-white shadow-2xl transform hover:scale-105 transition-all w-auto">
        <img
          src="./src/assets/MetavetImages/dr2.png"
          alt=""
          className="h-64 w-full rounded-tr-3xl object-cover bg-slate-300"
        />

        <div className="p-4 text-center">
          <strong className="text-xl font-medium text-gray-900">
            Dr. Jane Doe
          </strong>
          <p className="mt-2 text-pretty text-gray-700">
            Cardiology Specialist
          </p>
          <p className="mt-2 text-pretty text-gray-700">
            Specializing in Pet Surgery & Diagnostics{" "}
          </p>

          <Link to="/viewprofile5">
            {" "}
            <span className="mt-4 block rounded-md border  bg-primary px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">
              View Profile
            </span>
          </Link>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative block rounded-3xl border border-gray-100 bg-white shadow-xl transform hover:scale-105 transition-all">
        <img
          src="./src/assets/MetavetImages/dr2.png"
          alt=""
          className="h-64 w-full rounded-tr-3xl object-cover bg-slate-300"
        />

        <div className="p-4 text-center">
          <strong className="text-xl font-medium text-gray-900">
            Dr. Jane Doe
          </strong>

          <p className="mt-2 text-pretty text-gray-700">
            Cardiology Specialist
          </p>
          <p className="mt-2 text-pretty text-gray-700">
            Specializing in Pet Surgery & Diagnostics{" "}
          </p>

          <Link to="/viewprofile5">
            {" "}
            <span className="mt-4 block rounded-md border bg-primary px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">
              View Profile
            </span>
          </Link>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative block rounded-3xl border border-gray-100 bg-white shadow-xl transform hover:scale-105 transition-all">
        <img
          src="./src/assets/MetavetImages/dr2.png"
          alt=""
          className="h-64 w-full rounded-tr-3xl object-cover bg-slate-300"
        />

        <div className="p-4 text-center">
          <strong className="text-xl font-medium text-gray-900">
            Dr.Jane Doe
          </strong>

          <p className="mt-2 text-pretty text-gray-700">
            Cardiology Specialist
          </p>
          <p className="mt-2 text-pretty text-gray-700">
            Specializing in Pet Surgery & Diagnostics{" "}
          </p>

          <Link to="/viewprofile5">
            {" "}
            <span className="mt-4 block rounded-md border  bg-primary px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">
              View Profile
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCarousel5;
