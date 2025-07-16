import React, { useState } from "react";

const ViewProfile8 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to the server or show confirmation)
    console.log("Booking Information:", formData);
    setIsModalOpen(false); // Close the modal after submitting
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Profile Header */}
        <div className="flex items-center space-x-6 mb-8">
          <img
            src="./src/assets/MetavetImages/dr4.png" // Update with actual image path
            // src="./src/assets/MetavetImages/dr4.png"
            alt="Doctor"
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-200"
          />
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">
              Dr. Emily Davis
            </h1>
            <p className="text-lg text-gray-600">Veterinary Doctor</p>
            <p className="text-gray-500">
              Specializing in Pet Surgery and Care
            </p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-gray-700">
            I have been a veterinary doctor for over 10 years, providing
            high-quality care to animals. I specialize in surgical procedures
            and overall health care for pets. I am passionate about providing
            compassionate care for every animal I treat, ensuring they have the
            best chance for a happy and healthy life.
          </p>
        </div>

        {/* Available Appointments Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Available Appointments
          </h2>
          <div className="space-y-4">
            {/* Example of Appointment slots */}
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm">
              <p className="text-lg text-gray-800">
                February 26, 2025 - 10:00 AM
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2 bg-primary text-white rounded-md"
              >
                Book Appointment
              </button>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm">
              <p className="text-lg text-gray-800">
                February 26, 2025 - 2:00 PM
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2 bg-primary text-white rounded-md"
              >
                Book Appointment
              </button>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm">
              <p className="text-lg text-gray-800">
                February 27, 2025 - 11:00 AM
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2 bg-primary text-white rounded-md"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-gray-700">
            Phone: <span className="font-semibold">+1 (123) 456-7890</span>
          </p>
          <p className="text-lg text-gray-700">
            Email:{" "}
            <span className="font-semibold">dr.johndoe@vetclinic.com</span>
          </p>
          <p className="text-lg text-gray-700">
            Clinic Address:{" "}
            <span className="font-semibold">123 Pet Care Lane, Petville</span>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Follow Me
          </h2>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <i className="fab fa-twitter"></i> Linkedin
            </a>
            <a href="#" className="text-red-500 hover:text-red-600">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>

        {/* Booking Form Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center pt-16">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Book Appointment
              </h3>
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-4">
                  <label className="block text-gray-700">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Phone Number */}
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Your Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Email */}
                <div className="mb-4">
                  <label className="block text-gray-700">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Appointment Date */}
                <div className="mb-4">
                  <label className="block text-gray-700">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 rounded-md"
                >
                  Book Now
                </button>
              </form>
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 w-full text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewProfile8;
