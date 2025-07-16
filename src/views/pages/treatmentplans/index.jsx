import React from "react";

const TreatmentPlans = () => {
  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Treatment Plans / Rx</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        What is a Treatment Plan?
      </h2>
      <p className="mb-4">
        A Treatment Plan is a personalized approach to managing your pet's
        health, addressing specific concerns like illness, injury, or
        conditions. Our veterinarians will work with you to create a plan that
        may include medications, dietary changes, follow-up visits, surgery,
        specialized treatments (e.g., physical therapy), and preventive care
        (e.g., vaccinations, parasite control).
      </p>

      <p className="mb-4">
        If medication is required, we’ll provide an Rx and explain its purpose,
        dosage, and side effects. You can fill prescriptions at your clinic's
        in-house pharmacy, your preferred location, or in some provinces,
        Metavet can arrange shipping directly to you.
      </p>

      <p className="mb-4">
        Treatment plans are based on a thorough diagnosis and can be adjusted
        based on your pet’s response. Your active involvement is crucial for
        success. Please follow prescribed schedules, attend follow-up visits,
        and contact us if you notice any side effects or changes in your pet’s
        condition.
      </p>
    </div>
  );
};

export default TreatmentPlans;
