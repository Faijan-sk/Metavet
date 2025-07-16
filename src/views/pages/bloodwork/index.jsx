import React from "react";

const Bloodwork = () => {
  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Bloodwork</h1>

      <p className="mb-4">
        Blood tests are an essential part of diagnosing what is ailing your pet,
        just as they are in human medicine. Blood tests can tell the
        veterinarian a myriad of things, from dehydration to anemia.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Common Blood Tests Used by Veterinarians
      </h2>
      <p className="mb-4">
        Red blood cells are used to determine several factors. The packed red
        blood cell count can detect a condition called polycythemia. A high
        count indicates dehydration, while a low count can be an indicator of
        anemia. The hemoglobin concentration test measures the oxygen-carrying
        capacity of your pet’s blood, and the red blood cell count can tell your
        vet how well your pet's body is functioning. Testing white blood cells
        is equally as useful. A high white blood cell count is indicative of
        infection, whereas a low blood cell count can mean a weakened immune
        system.
      </p>
    </div>
  );
};

export default Bloodwork;
