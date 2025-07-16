import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmits = (e) => {
    e.preventDefault();

    let role = null;

    if (email === "user" && password === "123") {
      role = "user";
    } else if (email === "doctor" && password === "123") {
      role = "doctor";
    } else {
      alert("Invalid credentials. Try 'user/123' or 'doctor/123'.");
      return;
    }

    navigate("/otp", { state: { role, email } }); // Pass role and email
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
          <h2 className="text-2xl font-bold text-gray-700 mb-1">
            Sign In To Your Account
          </h2>
          <h4 className="font-semibold text-gray-700 mb-6">
            Welcome Back! You've Been Missed!
          </h4>

          <form onSubmit={handleSubmits}>
            <label
              htmlFor="email"
              className="block text-gray-600 font-semibold mb-2"
            >
              Email Address*
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label
              htmlFor="password"
              className="block text-gray-600 font-semibold mb-2"
            >
              Password*
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-between items-center mb-3">
              <Link to="/forget" className="text-blue-500 text-sm">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md"
            >
              Sign In
            </button>
          </form>

          <div className="text-center my-4 text-gray-600">Or Sign In With</div>

          <div className="mt-6 text-center text-gray-600">
            <span>Not a Member? </span>
            <Link to="/createaccount" className="text-blue-500 font-semibold">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

//without password
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign-in logic here
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Left Side: Image Section */}
//       <div className="w-2/3 bg-cover bg-center bg-primary">
//         <img
//           className="h-screen w-full" // object-cover
//           // src="./src/assets/MetavetImages/flat-design-people-with-pets.png"
//           src="./src/assets/MetavetImages/friendly-veterinarian-with-pet-animal-vector.png"
//           alt="Happy man with dogs"
//         />
//       </div>

//       {/* Right Side: Form Section */}
//       <div className="w-1/3 bg-gray-100 flex items-center justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//           <h2 className="text-2xl font-bold  text-gray-700 mb-1">
//             {/* text-center */}
//             Sign In To Your Account
//           </h2>
//           <h4 className=" font-semibold  text-gray-700 mb-6">
//             Welcome Back! You've Been Missed!
//           </h4>

//           <form onSubmit={handleSubmit}>
//             {/* Email Address */}
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

//             {/* Password */}
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

//             {/* Forgot Password */}
//             <div className="flex justify-between items-center mb-3">
//               <Link to={"/forget"}>
//                 <a href="#" className="text-blue-500 text-sm">
//                   Forgot Password?
//                 </a>
//               </Link>
//             </div>

//             {/* Sign In Button */}
//             <Link to={"/otp"}>
//               <button
//                 type="submit"
//                 className="w-full bg-primary text-white py-2 rounded-md"
//               >
//                 Sign In
//               </button>
//             </Link>
//           </form>

//           {/* OR Sign In With */}
//           <div className="text-center my-4 text-gray-600">Or Sign In With</div>

//           {/* Sign In with Google and Apple */}
//           <div className="gap-4 ">
//             {/* Sign in with Google Button */}
//             <button className="w-52 flex items-center justify-center gap-2 border border-gray-300 ml-14 py-2 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-semibold">
//               {/* Google SVG Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 262 256"
//                 width="1em"
//                 height="1em"
//               >
//                 <path
//                   fill="#4285F4"
//                   d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
//                 ></path>
//                 <path
//                   fill="#34A853"
//                   d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
//                 ></path>
//                 <path
//                   fill="#FBBC05"
//                   d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
//                 ></path>
//                 <path
//                   fill="#EB4335"
//                   d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
//                 ></path>
//               </svg>
//               Sign in with Google
//             </button>

//             {/* Sign in with Apple Button */}
//             <button className="w-52 ml-14  mt-1 font-semibold flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
//               {/* Apple SVG Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 width="1em"
//                 height="1em"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M11.862 3.94a3.5 3.5 0 0 1 3.5-3.5h1.05v1.05a3.5 3.5 0 0 1-3.5 3.5h-1.05zm4.452 1.074c.601.04 2.183.187 3.609 1.283c.418.322.82.723 1.176 1.22l.666.93l-1.01.536c-.014.008-.197.11-.443.307c-.603.484-1.43 1.403-1.417 2.805c.014 1.257.578 2.073 1.155 2.598c.508.462 1.01.68 1.106.722q.028.012.007.005l.937.298l-.282.942c-.01.032-.039.127-.09.273a12.5 12.5 0 0 1-1.585 3.024c-.451.631-.982 1.365-1.62 1.934c-.66.588-1.495 1.056-2.558 1.073h-.004h.008h-.004c-.936.021-1.583-.246-2.095-.457l-.024-.01c-.502-.207-.895-.366-1.547-.366c-.708 0-1.132.17-1.662.386l-.026.01c-.475.194-1.071.437-1.894.47l-.01.001c-1.09.034-1.97-.494-2.64-1.093c-.664-.594-1.23-1.357-1.69-1.987l-.002-.003c-1.037-1.431-1.933-3.418-2.316-5.49c-.382-2.065-.274-4.34.87-6.237c1.142-1.894 3.175-3.101 5.407-3.13H8.33h.011h-.005c1.004-.023 1.944.333 2.596.58l.058.023c.27.102.482.182.67.239c.193.057.295.07.34.07c.019 0 .099-.007.28-.062c.176-.053.379-.129.643-.228l.05-.019c.795-.298 1.989-.746 3.341-.647m-.143 1.995c-.884-.066-1.707.23-2.546.544l-.018.007c-.242.09-.503.188-.748.262A3 3 0 0 1 12 7.97c-.331 0-.65-.075-.916-.155c-.262-.08-.537-.183-.785-.277l-.018-.007c-.72-.273-1.323-.488-1.903-.474h-.012c-1.52.019-2.928.842-3.723 2.163v.001c-.805 1.333-.947 3.058-.618 4.84c.329 1.777 1.105 3.486 1.97 4.68c.472.647.922 1.241 1.405 1.674c.477.426.874.594 1.24.584c.454-.019.771-.142 1.243-.334l.012-.005c.574-.234 1.296-.529 2.404-.529c1.057 0 1.752.287 2.297.512l.013.005c.494.204.812.328 1.314.317h.008c.442-.007.836-.189 1.261-.567c.446-.398.855-.948 1.324-1.605l.001-.002a10.5 10.5 0 0 0 1.092-1.936a6 6 0 0 1-.904-.682a5.43 5.43 0 0 1-1.81-4.057v-.002c-.018-2.05 1.078-3.421 1.9-4.158l-.091-.073c-.943-.725-2.028-.841-2.524-.873z"
//                 ></path>
//               </svg>
//               Sign in with Apple
//             </button>
//           </div>

//           {/* Not a Member */}
//           <div className="mt-6 text-center text-gray-600">
//             <span>Not a Member? </span>
//             <Link to={"/createaccount"}>
//               <a href="#" className="text-blue-500 font-semibold">
//                 Create an account
//               </a>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

// without svg icons of google and apple

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign-in logic here
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Left Side: Image Section */}
//       <div className="w-2/3 bg-cover bg-center bg-primary">
//         <img
//           className="h-screen w-full object-cover "
//           src="./src/assets/MetavetImages/flat-design-people-with-pets.png"
//           alt="Happy man with dogs"
//         />

//         {/* You can set your image here or use a placeholder */}
//       </div>

//       {/* Right Side: Form Section */}
//       <div className="w-1/3 bg-gray-100 flex items-center justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//           <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
//             Welcome Back! You've Been Missed!
//           </h2>

//           <form onSubmit={handleSubmit}>
//             {/* Email Address */}
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

//             {/* Password */}
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

//             {/* Forgot Password */}
//             <div className="flex justify-between items-center mb-6">
//               <Link to={"/forget"}>
//                 <a href="#" className="text-blue-500 text-sm">
//                   Forgot Password?
//                 </a>
//               </Link>
//             </div>

//             {/* Sign In Button */}
//             <Link to={"/otp"}>
//               <button
//                 type="submit"
//                 className="w-full bg-primary text-white py-2 rounded-md "
//               >
//                 Sign In
//               </button>
//             </Link>
//           </form>

//           {/* OR Sign In With */}
//           <div className="text-center my-4 text-gray-600">Or Sign In With</div>

//           {/* Sign In with Google and Apple */}
//           <div className="flex gap-4">
//             <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
//               Sign in with Google
//             </button>
//             <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50">
//               Sign in with Apple
//             </button>
//           </div>

//           {/* Not a Member */}
//           <div className="mt-6 text-center text-gray-600">
//             <span>Not a Member? </span>
//             <Link to={"/createaccount"}>
//               <a href="#" className="text-blue-500 font-semibold">
//                 Create an account
//               </a>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

// without image

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign-in logic here
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//       <div>
//         <img />
//       </div>
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
//           Welcome Back! You've Been Missed!
//         </h2>

//         <form onSubmit={handleSubmit}>
//           {/* Email Address */}
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

//           {/* Password */}
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

//           {/* Forgot Password */}
//           <div className="flex justify-between items-center mb-6">
//             <Link to={"/forget"}>
//               {" "}
//               <a href="#" className="text-blue-500 text-sm">
//                 Forgot Password?
//               </a>
//             </Link>
//           </div>

//           {/* Sign In Button */}
//           <Link to={"/otp"}>
//             <button
//               type="submit"
//               className="w-full bg-primary text-white py-2 rounded-md "
//             >
//               Sign In
//             </button>
//           </Link>
//         </form>

//         {/* OR Sign In With */}
//         <div className="text-center my-4 text-gray-600">Or Sign In With</div>

//         {/* Sign In with Google and Apple */}
//         <div className="flex gap-4">
//           <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
//             Sign in with Google
//           </button>
//           <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50">
//             Sign in with Apple
//           </button>
//         </div>

//         {/* Not a Member */}
//         <div className="mt-6 text-center text-gray-600">
//           <span>Not a Member? </span>
//           <Link to={"/createaccount"}>
//             {" "}
//             <a href="#" className="text-blue-500 font-semibold">
//               Create an account
//             </a>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
