// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const CreateAccountPage = () => {
//   const [role, setRole] = useState(""); // New: role selection
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [agree, setAgree] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Account Created Successfully as ${role}!`);
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Left Section - Image */}
//       <div className="w-2/3 bg-cover bg-center bg-primary">
//         <img
//           className="h-screen w-full"
//           src="./src/assets/MetavetImages/friendly-veterinarian-with-pet-animal-vector.png"
//           alt="Happy man with dogs"
//         />
//       </div>

//       {/* Right Section - Form */}
//       <div className="w-full lg:w-1/3 bg-gray-100 flex items-center justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//           <h2 className="text-2xl font-bold text-center text-gray-700 mb-3">
//             Create Your Account
//           </h2>
//           <p className="text-center text-gray-600 font-semibold mb-4">
//             Welcome! Choose your role
//           </p>

//           {/* Role Selection Buttons */}
//           <div className="flex justify-center gap-3 mb-6">
//             {["Admin", "Doctor", "Groomer"].map((r) => (
//               <button
//                 key={r}
//                 onClick={() => setRole(r)}
//                 className={`px-4 py-1 rounded-full font-semibold text-white ${
//                   role === r
//                     ? "bg-blue-700"
//                     : r === "Admin"
//                     ? "bg-green-600"
//                     : r === "Doctor"
//                     ? "bg-orange-500"
//                     : "bg-purple-600"
//                 }`}
//               >
//                 {r}
//               </button>
//             ))}
//           </div>

//           <form onSubmit={handleSubmit}>
//             {/* Name Input */}
//             <label className="block text-gray-600 font-semibold mb-2">
//               Name*
//             </label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             {/* Email Input */}
//             <label className="block text-gray-600 font-semibold mb-2">
//               Email Address*
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             {/* Password Input */}
//             <label className="block text-gray-600 font-semibold mb-2">
//               Password*
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             {/* Terms Agreement */}
//             <div className="flex items-center mb-6">
//               <input
//                 type="checkbox"
//                 checked={agree}
//                 onChange={() => setAgree(!agree)}
//                 required
//                 className="h-5 w-5 text-blue-600"
//               />
//               <label className="ml-2 text-gray-600 text-sm">
//                 I agree to all{" "}
//                 <span className="text-blue-500 cursor-pointer">Terms</span>,{" "}
//                 <span className="text-blue-500 cursor-pointer">Privacy</span>,
//                 and <span className="text-blue-500 cursor-pointer">Fees</span>
//               </label>
//             </div>

//             {/* Sign Up Button */}
//             <button
//               type="submit"
//               className="w-full bg-primary text-white py-2 rounded-md"
//             >
//               Sign Up
//             </button>
//           </form>

//           {/* Already have account */}
//           <div className="mt-6 text-center text-gray-600">
//             <span>Already have an account? </span>
//             <Link to="/signin" className="text-blue-500 font-semibold">
//               Sign In
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateAccountPage;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateAccountPage = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate checking credentials
    if (
      (role === "User" &&
        name === "user" &&
        email === "user@gmail.com" &&
        password === "123") ||
      (role === "Doctor" &&
        name === "doctor" &&
        email === "doctor@gmail.com" &&
        password === "123")
    ) {
      // Navigate to OTP page with role and email
      navigate("/otp", {
        state: {
          role: role.toLowerCase(), // 'admin' or 'doctor'
          email,
        },
      });
    } else {
      alert("Account Created Successfully as " + role + "!");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-2/3 bg-cover bg-center bg-primary">
        <img
          className="h-screen w-full"
          src="./src/assets/MetavetImages/friendly-veterinarian-with-pet-animal-vector.png"
          alt="Happy man with dogs"
        />
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-3">
            Create Your Account
          </h2>
          <p className="text-center text-gray-600 font-semibold mb-4">
            Welcome! Choose your role
          </p>

          {/* Role Selection */}
          <div className="flex justify-center gap-3 mb-6">
            {["User", "Doctor", "Groomer"].map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`px-4 py-1 rounded-full font-semibold text-white ${
                  role === r
                    ? "bg-blue-700"
                    : r === "User"
                    ? "bg-green-600"
                    : r === "Doctor"
                    ? "bg-orange-500"
                    : "bg-purple-600"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <label className="block text-gray-600 font-semibold mb-2">
              Name*
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="block text-gray-600 font-semibold mb-2">
              Email Address*
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="block text-gray-600 font-semibold mb-2">
              Password*
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
                required
                className="h-5 w-5 text-blue-600"
              />
              <label className="ml-2 text-gray-600 text-sm">
                I agree to all{" "}
                <span className="text-blue-500 cursor-pointer">Terms</span>,{" "}
                <span className="text-blue-500 cursor-pointer">Privacy</span>,
                and <span className="text-blue-500 cursor-pointer">Fees</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center text-gray-600">
            <span>Already have an account? </span>
            <Link to="/signin" className="text-blue-500 font-semibold">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const CreateAccountPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [agree, setAgree] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign-up logic here
//     alert("Account Created Successfully!");
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
//           Create Your Account
//         </h2>
//         <p className="text-center text-gray-600 mb-6">
//           Welcome Back! Please enter your details
//         </p>

//         <form onSubmit={handleSubmit}>
//           {/* Name Input */}
//           <label
//             htmlFor="name"
//             className="block text-gray-600 font-semibold mb-2"
//           >
//             Name*
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

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

//           {/* Agree to Terms, Privacy, and Fees */}
//           <div className="flex items-center mb-6">
//             <input
//               type="checkbox"
//               id="agree"
//               name="agree"
//               checked={agree}
//               onChange={() => setAgree(!agree)}
//               required
//               className="h-5 w-5 text-blue-600"
//             />
//             <label htmlFor="agree" className="ml-2 text-gray-600 text-sm">
//               I agree to all{" "}
//               <span className="text-blue-500 cursor-pointer">Terms</span>,{" "}
//               <span className="text-blue-500 cursor-pointer">Privacy</span>, and{" "}
//               <span className="text-blue-500 cursor-pointer">Fees</span>
//             </label>
//           </div>

//           {/* Sign Up Button */}
//           <button
//             type="submit"
//             className="w-full bg-primary text-white py-2 rounded-md  "
//           >
//             Sign Up
//           </button>
//         </form>

//         {/* Already have an account? Sign In link */}
//         <div className="mt-6 text-center text-gray-600">
//           <span>Already have an account? </span>{" "}
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

// export default CreateAccountPage;
// with out admin doctor groomer
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const CreateAccountPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [agree, setAgree] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign-up logic here
//     alert("Account Created Successfully!");
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Left Side: Image Section */}
//       <div className="w-2/3 bg-cover bg-center bg-primary">
//         <img
//           className="h-screen w-full " // object-cover
//           // src="./src/assets/MetavetImages/flat-design-people-with-pets.png"
//           src="./src/assets/MetavetImages/friendly-veterinarian-with-pet-animal-vector.png"
//           alt="Happy man with dogs"
//         />
//       </div>

//       {/* Right Side: Form Section */}
//       <div className="w-full lg:w-1/3 bg-gray-100 flex items-center justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//           <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
//             Create Your Account
//           </h2>
//           <p className="text-center text-gray-600 font-semibold mb-6">
//             Welcome Back! Please enter your details
//           </p>

//           <form onSubmit={handleSubmit}>
//             {/* Name Input */}
//             <label
//               htmlFor="name"
//               className="block text-gray-600 font-semibold mb-2"
//             >
//               Name*
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             {/* Email Address Input */}
//             <label
//               htmlFor="email"
//               className="block text-gray-600 font-semibold mb-2"
//             >
//               Email Address*
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             {/* Password Input */}
//             <label
//               htmlFor="password"
//               className="block text-gray-600 font-semibold mb-2"
//             >
//               Password*
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             {/* Agree to Terms, Privacy, and Fees */}
//             <div className="flex items-center mb-6">
//               <input
//                 type="checkbox"
//                 id="agree"
//                 name="agree"
//                 checked={agree}
//                 onChange={() => setAgree(!agree)}
//                 required
//                 className="h-5 w-5 text-blue-600"
//               />
//               <label htmlFor="agree" className="ml-2 text-gray-600 text-sm">
//                 I agree to all{" "}
//                 <span className="text-blue-500 cursor-pointer">Terms</span>,{" "}
//                 <span className="text-blue-500 cursor-pointer">Privacy</span>,
//                 and <span className="text-blue-500 cursor-pointer">Fees</span>
//               </label>
//             </div>

//             {/* Sign Up Button */}
//             <button
//               type="submit"
//               className="w-full bg-primary text-white py-2 rounded-md"
//             >
//               Sign Up
//             </button>
//           </form>

//           {/* Already have an account? Sign In link */}
//           <div className="mt-6 text-center text-gray-600">
//             <span>Already have an account? </span>{" "}
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

// export default CreateAccountPage;
