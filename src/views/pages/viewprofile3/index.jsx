import React, { useState } from "react";

const ViewProfile3 = () => {
  const [appointment, setAppointment] = useState({
    userName: "",
    userPhone: "",
    date: "",
    time: "",
    details: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointment({
      ...appointment,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the appointment data to an API or store it as needed
    console.log("Appointment booked:", appointment);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Doctor Profile Section */}
        <div className="flex items-center mb-8">
          <div className="w-24 h-24 mr-6 rounded-full overflow-hidden">
            {/* Profile Image */}
            <img
              src="./src/assets/MetavetImages/dr1 (1).png"
              alt="Profile"
              className="w-full h-full object-cover bg-slate-300"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Dr. Jasmine</h2>
            <p className="text-gray-600">Veterinary Specialist</p>
            <p className="text-gray-500">Phone: (555) 123-4567</p>
            <p className="text-gray-500">Email: jasmine@vetclinic.com</p>
          </div>
        </div>

        {/* Appointment Booking Form */}
        <h3 className="text-xl font-semibold mb-4">Book an Appointment</h3>
        <form onSubmit={handleSubmit}>
          {/* User's Name */}
          <div className="mb-4">
            <label htmlFor="userName" className="block text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={appointment.userName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              required
            />
          </div>

          {/* User's Phone Number */}
          <div className="mb-4">
            <label htmlFor="userPhone" className="block text-gray-700">
              Your Phone Number
            </label>
            <input
              type="tel"
              id="userPhone"
              name="userPhone"
              value={appointment.userPhone}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              required
            />
          </div>

          {/* Appointment Date */}
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700">
              Select Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={appointment.date}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              required
            />
          </div>

          {/* Appointment Time */}
          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700">
              Select Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={appointment.time}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              required
            />
          </div>

          {/* Additional Details */}
          <div className="mb-4">
            <label htmlFor="details" className="block text-gray-700">
              Additional Details
            </label>
            <textarea
              id="details"
              name="details"
              value={appointment.details}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Describe your pet's condition or any concerns"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewProfile3;
