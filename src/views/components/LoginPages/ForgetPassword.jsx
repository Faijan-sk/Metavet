import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    alert("Password reset email has been sent!");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side: Image Section */}
      <div className="w-2/3 bg-cover bg-center bg-primary">
        <img
          className="h-screen w-full " // object-cover
          // src="./src/assets/MetavetImages/flat-design-people-with-pets.png"
          src="./src/assets/MetavetImages/friendly-veterinarian-with-pet-animal-vector.png"
          alt="Happy man with dogs"
        />
      </div>

      {/* Right Side: Forgot Password Form Section */}
      <div className="w-1/3 bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Forget Password
          </h2>
          <p className="text-center text-gray-600 mb-6 font-semibold">
            Enter the email associated with your account and we’ll send an email
            to reset your password
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email Address Input */}
            <label
              htmlFor="email"
              className="block text-gray-600 font-semibold mb-2"
            >
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Send Mail Button */}
            <Link to={"/newpassword"}>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md"
              >
                Send Mail
              </button>
            </Link>
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

export default ForgotPassword;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle password reset logic here
//     alert("Password reset email has been sent!");
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
//           Forget Password
//         </h2>
//         <p className="text-center text-gray-600 mb-6">
//           Enter the email associated with your account and we’ll send an email
//           to reset your password
//         </p>

//         <form onSubmit={handleSubmit}>
//           {/* Email Address Input */}
//           <label
//             htmlFor="email"
//             className="block text-gray-600 font-semibold mb-2"
//           >
//             Email Address*
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {/* Send Mail Button */}
//           <Link to={"/newpassword"}>
//             {" "}
//             <button
//               type="submit"
//               className="w-full bg-primary text-white py-2 rounded-md "
//             >
//               Send Mail
//             </button>
//           </Link>
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

// export default ForgotPassword;
