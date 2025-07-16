import React, { useState } from "react";

const PetHealth = () => {
  const [showContent, setShowContent] = useState(null);

  const toggleContent = (index) => {
    setShowContent(showContent === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Pet Health</h1>
      <div className="mt-12">
        <img
          src="./src/assets/MetavetImages/pet-health-banner-627231.501f6b3b3d276f8526ae.webp" // Replace this URL with your desired image URL
          alt="Pet Health"
          className="w-full rounded-lg shadow-lg mb-4"
        />
        <p className="text-lg text-gray-700">
          Veterinary care is crucial and effective for a wide variety of
          conditions. The following is a partial list of some of the most
          common. If you do not see your pet's specific condition listed, we
          encourage you to give us a call so we can personally address your
          particular concerns.
        </p>

        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>Pet Health</li>
          <li>Chronic Conditions</li>
          <li>Digestive and Oral Health</li>
          <li>Diseases and Viruses</li>
          <li>Pests and Parasites</li>
        </ul>
      </div>

      {/* Chronic Conditions */}
      <div className="mb-8 mt-10">
        <h2 className="text-xl font-semibold">Chronic Conditions</h2>

        <div className="border-l-4 pl-4 py-2 mb-4">
          <h3 className="font-medium">Arthritis</h3>
          <p className="text-gray-600">
            The most common type of arthritis is osteoarthritis, a degenerative
            condition that affects joints.
          </p>
          <button
            onClick={() => toggleContent(1)}
            className="text-blue-500 text-sm mt-2"
          >
            {showContent === 1 ? "Hide" : "Read More"}
          </button>
          {showContent === 1 && (
            <div className="mt-4">
              <p>
                Arthritis can be managed with medication, physical therapy, and
                weight management. In some cases, surgery may be required.
              </p>
            </div>
          )}
        </div>

        {/* More Chronic Conditions (Leptospirosis, Seizures, etc.) */}
        <div className="border-l-4 pl-4 py-2 mb-4">
          <h3 className="font-medium">Leptospirosis</h3>
          <p className="text-gray-600">
            Leptospirosis is a life-threatening disease caused by bacteria,
            transmitted through exposure to urine or contaminated water.
          </p>
          <button
            onClick={() => toggleContent(2)}
            className="text-blue-500 text-sm mt-2"
          >
            {showContent === 2 ? "Hide" : "Read More"}
          </button>
          {showContent === 2 && (
            <div className="mt-4">
              <p>
                Leptospirosis can be treated with antibiotics if caught early.
                Prevention includes vaccination and avoiding exposure to
                contaminated areas.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Digestive and Oral Health */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Digestive and Oral Health</h2>

        <div className="border-l-4 pl-4 py-2 mb-4">
          <h3 className="font-medium">Dentistry</h3>
          <p className="text-gray-600">
            Over 85% of pets suffer from periodontal disease. Regular dental
            checkups are important to prevent this condition.
          </p>
          <button
            onClick={() => toggleContent(3)}
            className="text-blue-500 text-sm mt-2"
          >
            {showContent === 3 ? "Hide" : "Read More"}
          </button>
          {showContent === 3 && (
            <div className="mt-4">
              <p>
                Brushing your pet’s teeth, providing dental chews, and having
                regular dental cleanings can prevent periodontal disease.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Diseases and Viruses */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Diseases and Viruses</h2>

        <div className="border-l-4 pl-4 py-2 mb-4">
          <h3 className="font-medium">Feline Leukemia Virus</h3>
          <p className="text-gray-600">
            Feline Leukemia (FeLV) weakens a cat’s immune system, making them
            more susceptible to other diseases.
          </p>
          <button
            onClick={() => toggleContent(4)}
            className="text-blue-500 text-sm mt-2"
          >
            {showContent === 4 ? "Hide" : "Read More"}
          </button>
          {showContent === 4 && (
            <div className="mt-4">
              <p>
                FeLV is transmitted through saliva, nasal secretions, and other
                body fluids. There is no cure, but supportive care and
                vaccination can help.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Pests and Parasites */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Pests and Parasites</h2>

        <div className="border-l-4 pl-4 py-2 mb-4">
          <h3 className="font-medium">Fleas</h3>
          <p className="text-gray-600">
            Fleas are a common parasite found on pets and can cause irritation,
            allergies, and spread diseases.
          </p>
          <button
            onClick={() => toggleContent(5)}
            className="text-blue-500 text-sm mt-2"
          >
            {showContent === 5 ? "Hide" : "Read More"}
          </button>
          {showContent === 5 && (
            <div className="mt-4">
              <p>
                Flea prevention includes using flea treatments, regularly
                cleaning your home, and preventing your pet from frequenting
                flea-infested areas.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Image and Text Section */}
    </div>
  );
};

export default PetHealth;
