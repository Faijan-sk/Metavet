import React, { useState } from "react";

const ViewProfile7 = () => {
  const [name, setName] = useState("Mike Johnson");
  const [title, setTitle] = useState("Cardiology Specialist");
  const [specialty, setSpecialty] = useState(
    "Specializing in Pet Care & Wellness"
  );
  const [description, setDescription] = useState(
    "I have a passion for improving the health of pets and ensuring a safe, comfortable experience...."
  );
  const [imgSrc, setImgSrc] = useState(
    "./src/assets/MetavetImages/portrait-3d-male-doctor-removebg-preview.png"
  );

  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle appointment submission
    alert("Appointment booked!");
  };

  return (
    <div className="container mx-auto p-6 ">
      {/* Doctor Profile + Book Appointment in one card */}
      <div className="max-w-2xl mx-auto rounded-lg border p-6 shadow-lg bg-white">
        <div className="sm:flex sm:justify-between sm:gap-4">
          {/* Doctor Info */}
          <div className="sm:w-2/3">
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="mt-1 text-xs font-medium text-gray-600">{title}</p>
            <p className="mt-2 text-sm font-medium text-gray-600">
              {specialty}
            </p>
            <p className="text-sm text-gray-500 mt-4">{description}</p>
          </div>

          {/* Doctor Image */}
          <div className="sm:w-1/3 sm:flex sm:justify-center sm:items-center sm:h-full">
            <img
              alt="Doctor"
              src={imgSrc}
              className="w-24 h-24 rounded-lg object-cover shadow-xs bg-slate-200"
            />
          </div>
        </div>

        {/* Book Appointment Form */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Book an Appointment
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="patient-name"
                className="block text-sm font-medium text-gray-600"
              >
                Your Name
              </label>
              <input
                type="text"
                id="patient-name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="patient-email"
                className="block text-sm font-medium text-gray-600"
              >
                Your Email
              </label>
              <input
                type="email"
                id="patient-email"
                value={patientEmail}
                onChange={(e) => setPatientEmail(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="appointment-date"
                className="block text-sm font-medium text-gray-600"
              >
                Appointment Date
              </label>
              <input
                type="date"
                id="appointment-date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="appointment-time"
                className="block text-sm font-medium text-gray-600"
              >
                Appointment Time
              </label>
              <input
                type="time"
                id="appointment-time"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg mt-4  focus:outline-none"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile7;
