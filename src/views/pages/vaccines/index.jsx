import React from "react";

const Vaccines = () => {
  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Vaccines</h1>

      <p className="mb-4">
        Vaccines administer a very low dose of a pathogen to a pet so that their
        immune system can learn to fight it. Introducing a low dose of a disease
        prompts the system to manufacture antibodies to help fight it.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Pros of Vaccination:</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Disease Prevention:</strong> Vaccines protect against serious
          sometimes fatal diseases like rabies, parvovirus, & distemper.
        </li>
        <li>
          <strong>Protects Other Animals:</strong> Vaccinating your pet helps
          protect other animals in your community by reducing the spread of
          contagious diseases.
        </li>
        <li>
          <strong>Prevents Expensive Treatment:</strong> Vaccines are much more
          affordable than treating diseases that could have been prevented.
        </li>
        <li>
          <strong>Health & Longevity:</strong> Vaccines ensure your pet stays
          healthy & lives a longer, more active life.
        </li>
        <li>
          <strong>Legal Requirements:</strong> Some vaccinations like rabies are
          required by law in many areas for the safety of both pets & humans.
        </li>
        <li>
          <strong>Peace of Mind:</strong> Knowing your pet is protected gives
          you peace of mind & helps focus on enjoying your life together.
        </li>
      </ul>

      <p className="mb-4">
        There are “core” vaccines & “non-core” vaccines. Depending on your
        individual pet, your vet may recommend other vaccines as well.
      </p>

      <p className="mb-4">
        Download the Metavet App to connect with professionals & discover what
        your pet might need.
      </p>
    </div>
  );
};

export default Vaccines;
