import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    // Handle password reset logic here
    alert("Password successfully reset!");
  };

  return (
    <div className="flex min-h-screen ">
      {/* Left Side: Image Section */}
      <div className="w-2/3 bg-cover bg-center bg-primary">
        <img
          className="h-screen w-full " // object-cover
          // src="./src/assets/MetavetImages/flat-design-people-with-pets.png"
          src="./src/assets/MetavetImages/friendly-veterinarian-with-pet-animal-vector.png"
          alt="Happy man with dogs"
        />
      </div>

      {/* Right Side: New Password Form Section */}
      <div className="w-1/3 bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Enter New Password
          </h2>
          <p className="text-center text-gray-600 font-semibold mb-6">
            Your new password must be different from previously used passwords.
          </p>

          {/* Password Reset Form */}
          <form onSubmit={handleSubmit}>
            {/* Password Input */}
            <label
              htmlFor="password"
              className="block text-gray-600 font-semibold mb-2"
            >
              Password*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Confirm Password Input */}
            <label
              htmlFor="confirmPassword"
              className="block text-gray-600 font-semibold mb-2"
            >
              Confirm Password*
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Continue Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md "
            >
              Continue
            </button>
          </form>

          {/* Back to Sign In Link */}
          <div className="mt-6 text-center text-gray-600">
            <span>Back to </span>
            <Link to={"/signin"}>
              <a href="/signin" className="text-blue-500 font-semibold">
                Sign In
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const NewPassword = () => {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }
//     // Handle password reset logic here
//     alert("Password successfully reset!");
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
//           Enter New Password
//         </h2>
//         <p className="text-center text-gray-600 mb-6">
//           Your new password must be different from previously used passwords.
//         </p>

//         {/* Password Reset Form */}
//         <form onSubmit={handleSubmit}>
//           {/* Password Input */}
//           <label
//             htmlFor="password"
//             className="block text-gray-600 font-semibold mb-2"
//           >
//             Password*
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           {/* Confirm Password Input */}
//           <label
//             htmlFor="confirmPassword"
//             className="block text-gray-600 font-semibold mb-2"
//           >
//             Confirm Password*
//           </label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           {/* Error Message */}
//           {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//           {/* Continue Button */}
//           <button
//             type="submit"
//             className="w-full bg-primary text-white py-2 rounded-md "
//           >
//             Continue
//           </button>
//         </form>

//         {/* Back to Sign In Link */}
//         <div className="mt-6 text-center text-gray-600">
//           <span>Back to </span>
//           <Link to={"/signin"}>
//             {" "}
//             <a href="/signin" className="text-blue-500 font-semibold">
//               Sign In
//             </a>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewPassword;
