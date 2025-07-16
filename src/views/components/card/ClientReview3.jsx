import React from "react";

const ClientReview3 = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "Amazing service! The product exceeded my expectations. I'll definitely be returning for more.",
      rating: 4,
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "Great experience! Very professional and quick. Highly recommend them.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sam Brown",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      review:
        "Good service, but the response time could be improved. Overall, satisfied.",
      rating: 3,
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen space-x-6">
      {reviews.map((review) => (
        <div key={review.id} className="perspective-1000">
          {/* Flip Card */}
          <div className="w-80 h-96 relative transform-style-preserve-3d transition-transform duration-1000 hover:rotate-y-180">
            {/* Front Side */}

            <div className="absolute w-full h-full bg-slate-100 shadow-lg rounded-lg p-6 flex flex-col items-center backface-hidden">
              <div className="text-2xl font-semibold ">Client Review</div>
              <img
                src={review.image}
                alt="Client Profile"
                className="w-24 h-24 rounded-full mb-4 mt-5"
              />
              <h3 className="text-xl font-semibold">{review.name}</h3>

              {/* Rating Stars */}
              <div className="flex mb-4 ">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 ${
                      index < review.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15l-3.5 2 1-4.5L3 8.5l4.5-.5L10 3l2.5 4l4.5.5-2.5 4.5L10 15z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm text-center mt-5">
                {review.review}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientReview3;
