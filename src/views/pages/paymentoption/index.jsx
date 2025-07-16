import React from "react";

const PaymentOptions = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Payment Options Title */}
      <h2 className="text-2xl font-semibold text-center mb-8">
        Payment Options
      </h2>

      {/* Payment Option List */}
      <div className="space-y-6">
        {/* 1. Payment Due Prior to Teleconsultations */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-xl mb-4">
            1. Payment Due Prior to Teleconsultations
          </h3>
          <p className="text-lg">
            Payment is due prior to any teleconsultations & a hold will be
            placed for the entire amount of the service being rendered for any
            mobile services.
          </p>
        </div>

        {/* 2. Accepting Credit and Debit Cards */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-xl mb-4">
            2. We Accept All Major Credit & Debit Cards
          </h3>
          <p className="text-lg">
            Please view your profile in the app to add payment cards.
          </p>
        </div>

        {/* 3. Pet Insurance Providers */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-xl mb-4">
            3. Pet Insurance Providers
          </h3>
          <p className="text-lg">
            If you haven't yet gotten pet insurance, to learn more please visit
            the following websites:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li>
              <a
                href="https://www.trupanion.com"
                className="text-blue-600 hover:underline"
              >
                www.trupanion.com
              </a>
            </li>
            <li>
              <a
                href="https://www.fetchpet.com"
                className="text-blue-600 hover:underline"
              >
                www.fetchpet.com
              </a>
            </li>
            <li>
              <a
                href="https://www.petsecure.com"
                className="text-blue-600 hover:underline"
              >
                www.petsecure.com
              </a>
            </li>
            <li>
              <a
                href="https://www.spotpetinsurance.ca"
                className="text-blue-600 hover:underline"
              >
                www.spotpetinsurance.ca
              </a>
            </li>
          </ul>
        </div>

        {/* 4. Affirm Payment & CareCredit */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-xl mb-4">
            4. Affirm Payment & CareCredit
          </h3>
          <p className="text-lg">
            We have partnered with Affirm Payment & CareCredit. It takes a few
            short minutes to complete an application and break down your
            payments into installments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
