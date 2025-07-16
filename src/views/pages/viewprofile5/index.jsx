import React, { useState } from "react";

const ViewProfile5 = () => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [name, setName] = useState(""); // State for Name
  const [phone, setPhone] = useState(""); // State for Phone

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Appointment booked for ${name} (Phone: ${phone}) on ${appointmentDate} at ${appointmentTime}`
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg w-full mt-10">
      {/* Profile Section */}
      <div className="text-center mb-6">
        <img
          src="./src/assets/MetavetImages/dr2.png"
          alt="Vet Profile"
          className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
        />
        <h2 className="text-3xl font-bold text-gray-900 mt-4">Dr. Jane Doe</h2>
        <p className="text-lg text-gray-600">
          Veterinarian, Pet Care Specialist
        </p>
        <p className="mt-2 text-gray-500">
          Specializing in Pet Surgery & Diagnostics.
        </p>
      </div>

      {/* Profile Details */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-900">
          Profile Details
        </h3>
        <ul className="mt-4 space-y-3 text-gray-700">
          <li>
            <strong className="font-medium">Experience:</strong> 10+ years of
            veterinary experience.
          </li>
          <li>
            <strong className="font-medium">Education:</strong> DVM from
            University of Veterinary Medicine.
          </li>
          <li>
            <strong className="font-medium">Certifications:</strong> Certified
            in animal surgery and emergency care.
          </li>
        </ul>
      </div>

      {/* Appointment Booking Form */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Book an Appointment
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Phone Number Input */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Your Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Date Picker */}
            <div>
              <label
                htmlFor="appointmentDate"
                className="block text-sm font-medium text-gray-700"
              >
                Select Date:
              </label>
              <input
                type="date"
                id="appointmentDate"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Time Picker */}
            <div>
              <label
                htmlFor="appointmentTime"
                className="block text-sm font-medium text-gray-700"
              >
                Select Time:
              </label>
              <input
                type="time"
                id="appointmentTime"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 py-2 px-4 bg-primary text-white font-medium text-sm uppercase rounded-md hover:bg-indigo-700 transition-all"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewProfile5;
