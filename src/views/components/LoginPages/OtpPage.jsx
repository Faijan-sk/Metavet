import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { role, email } = location.state || {};

  useEffect(() => {
    if (!role || !email) {
      navigate("/signin");
    }
  }, [role, email, navigate]);

  const handleResend = () => {
    setIsResendDisabled(true);
    setTimer(30);
  };

  useEffect(() => {
    if (isResendDisabled && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isResendDisabled, timer]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (otp === "1") {
  //     if (role === "user") {
  //       navigate("/");
  //     } else if (role === "doctor") {
  //       navigate("/dashboard");
  //     }
  //   } else {
  //     alert("Invalid OTP. Please enter '1'.");
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp === "1") {
      if (role === "user") {
        navigate("/");
      } else if (role === "doctor") {
        navigate("/dashboard");
      } else {
        alert("Unknown role. Cannot redirect.");
      }
    } else {
      alert("Invalid OTP. Please enter '1'.");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-2/3 bg-cover bg-center bg-primary">
        <img
          className="h-screen w-full"
          src="./src/assets/MetavetImages/friendly-veterinarian-with-pet-animal-vector.png"
          alt="Happy man with dogs"
        />
      </div>

      <div className="w-1/3 bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Enter Code
          </h2>

          <p className="text-center text-gray-600 font-semibold mb-4">
            An authentication code has been sent to{" "}
            <span className="font-semibold text-blue-600">{email}</span>
          </p>

          <form onSubmit={handleSubmit}>
            <label
              htmlFor="otp"
              className="block text-gray-600 font-semibold mb-2"
            >
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              maxLength={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-between items-center mb-6">
              <button
                type="button"
                onClick={handleResend}
                disabled={isResendDisabled}
                className={`text-sm ${
                  isResendDisabled ? "text-gray-500" : "text-blue-500"
                }`}
              >
                {isResendDisabled
                  ? `Resend in ${timer}s`
                  : "If you don't receive the code, Resend"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md"
            >
              Verify and Proceed
            </button>
          </form>

          <div className="mt-6 text-center text-gray-600">
            <span>Back to </span>
            <Link to="/signin" className="text-blue-500 font-semibold">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;

// normal login
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const OtpPage = () => {
//   const [otp, setOtp] = useState("");
//   const [email, setEmail] = useState("testing@gmail.com");
//   const [timer, setTimer] = useState(30); // Timer for resend button
//   const [isResendDisabled, setIsResendDisabled] = useState(false);

//   // Simulate the resend OTP function
//   const handleResend = () => {
//     setIsResendDisabled(true);
//     setTimer(30);
//     // Logic for resending OTP can be added here
//   };

//   // Start a countdown when the resend is disabled
//   React.useEffect(() => {
//     if (isResendDisabled && timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [isResendDisabled, timer]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle OTP verification logic here
//     alert("OTP Verified Successfully!");
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Left Side: Image Section */}
//       <div className="w-2/3 bg-cover bg-center bg-primary">
//         <img
//           className="h-screen w-full  " // object-cover
//           // src="./src/assets/MetavetImages/happy-man-with-group-dogs-front-him-3d-render-removebg-preview.png"
//           // src="./src/assets/MetavetImages/flat-design-people-with-pets.png"
//           src="./src/assets/MetavetImages/friendly-veterinarian-with-pet-animal-vector.png"
//           alt="Happy man with dogs"
//         />
//       </div>

//       {/* Right Side: OTP Form Section */}
//       <div className="w-1/3 bg-gray-100 flex items-center justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//           <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
//             Enter Code
//           </h2>

//           <p className="text-center text-gray-600 font-semibold mb-4">
//             An authentication code has been sent to{" "}
//             <span className="font-semibold text-blue-600">{email}</span>
//           </p>

//           <form onSubmit={handleSubmit}>
//             {/* OTP Input */}
//             <label
//               htmlFor="otp"
//               className="block text-gray-600 font-semibold mb-2"
//             >
//               Enter OTP
//             </label>
//             <input
//               type="text"
//               id="otp"
//               name="otp"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               required
//               maxLength={6}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             {/* Resend OTP link */}
//             <div className="flex justify-between items-center mb-6">
//               <a
//                 href="#"
//                 className={`text-sm ${
//                   isResendDisabled ? "text-gray-500" : "text-blue-500"
//                 }`}
//                 onClick={handleResend}
//                 disabled={isResendDisabled}
//               >
//                 {isResendDisabled
//                   ? `Resend in ${timer}s`
//                   : "If you don't receive the code, Resend"}
//               </a>
//             </div>

//             {/* Verify Button */}
//             <Link to={"/"}>
//               <button
//                 type="submit"
//                 className="w-full bg-primary text-white py-2 rounded-md "
//               >
//                 Verify and Proceed
//               </button>
//             </Link>
//           </form>

//           {/* Back to Sign In */}
//           <div className="mt-6 text-center text-gray-600">
//             <span>Back to </span>
//             <Link to={"/signin"}>
//               <a href="/signin" className="text-blue-500 font-semibold">
//                 Sign In
//               </a>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OtpPage;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const OtpPage = () => {
//   const [otp, setOtp] = useState("");
//   const [email, setEmail] = useState("testing@gmail.com");
//   const [timer, setTimer] = useState(30); // Timer for resend button
//   const [isResendDisabled, setIsResendDisabled] = useState(false);

//   // Simulate the resend OTP function
//   const handleResend = () => {
//     setIsResendDisabled(true);
//     setTimer(30);
//     // Logic for resending OTP can be added here
//   };

//   // Start a countdown when the resend is disabled
//   React.useEffect(() => {
//     if (isResendDisabled && timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [isResendDisabled, timer]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle OTP verification logic here
//     alert("OTP Verified Successfully!");
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
//           Enter Code
//         </h2>

//         <p className="text-center text-gray-600 mb-4">
//           An authentication code has been sent to{" "}
//           <span className="font-semibold text-blue-600">{email}</span>
//         </p>

//         <form onSubmit={handleSubmit}>
//           {/* OTP Input */}
//           <label
//             htmlFor="otp"
//             className="block text-gray-600 font-semibold mb-2"
//           >
//             Enter OTP
//           </label>
//           <input
//             type="text"
//             id="otp"
//             name="otp"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             required
//             maxLength={6}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           {/* Resend OTP link */}
//           <div className="flex justify-between items-center mb-6">
//             <a
//               href="#"
//               className={`text-sm ${
//                 isResendDisabled ? "text-gray-500" : "text-blue-500"
//               }`}
//               onClick={handleResend}
//               disabled={isResendDisabled}
//             >
//               {isResendDisabled
//                 ? `Resend in ${timer}s`
//                 : "If you don't receive the code, Resend"}
//             </a>
//           </div>

//           {/* Verify Button */}
//           <Link to={"/"}>
//             {" "}
//             <button
//               type="submit"
//               className="w-full bg-primary text-white py-2 rounded-md "
//             >
//               Verify and Proceed
//             </button>
//           </Link>
//         </form>

//         {/* Back to Sign In */}
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

// export default OtpPage;
