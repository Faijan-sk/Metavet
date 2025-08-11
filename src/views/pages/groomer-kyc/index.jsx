import React from 'react'

const index = () => {
  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Pet Groomer → Client KYC Flow
      </h1>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-white rounded-full"></div>

        {/* Step 1 */}
        <div className="relative flex items-start mb-12">
          <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold z-10 shadow-lg border-4 border-white">
            1️⃣
          </div>
          <div className="ml-8 flex-1">
            <div className="bg-white rounded-xl shadow-lg border-l-4 border-primary p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                🔹 Step 1: Grooming Preferences
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                  How often does your pet get groomed?
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>Every 4 weeks</li>
                    <li>Every 6–8 weeks</li>
                    <li>Occasionally / As needed</li>
                    <li>First-time groom</li>
                  </ul>
                </li>
                <li>
                  When was their last grooming session?
                  <div className="ml-5 mt-1 text-gray-600 italic">
                    (Date picker or “Not sure”)
                  </div>
                </li>
                <li>
                  Preferred grooming style or outcome:
                  <div className="ml-5 mt-1 text-gray-600 italic">
                    (Free text + optional dropdown: short trim, breed cut,
                    deshedding, puppy cut, etc.)
                  </div>
                </li>
                <li>
                  Are there any areas you’d like us to avoid or focus on?
                  <div className="ml-5 mt-1 text-gray-600 italic">
                    (Free text)
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative flex items-start mb-12">
          <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold z-10 shadow-lg border-4 border-white">
            2️⃣
          </div>
          <div className="ml-8 flex-1">
            <div className="bg-white rounded-xl shadow-lg border-l-4 border-primary p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                🔹 Step 2: Health & Safety
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                  Does your pet have any health conditions we should know about?
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>Skin issues</li>
                    <li>Ear infections</li>
                    <li>Arthritis</li>
                    <li>Allergies</li>
                    <li>Other (please specify)</li>
                    <li>None</li>
                  </ul>
                </li>
                <li>
                  Is your pet currently on any medications or treatments?
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>Yes</li>
                    <li>No</li>
                  </ul>
                  <div className="ml-5 mt-1 text-gray-600 italic">
                    (If yes, open a text input to describe)
                  </div>
                </li>
                <li>
                  Has your pet had any injuries or surgeries in the past year?
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>Yes</li>
                    <li>No</li>
                  </ul>
                  <div className="ml-5 mt-1 text-gray-600 italic">
                    (If yes, open a text input box to describe)
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative flex items-start mb-12">
          <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold z-10 shadow-lg border-4 border-white">
            3️⃣
          </div>
          <div className="ml-8 flex-1">
            <div className="bg-white rounded-xl shadow-lg border-l-4 border-primary p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                🔹 Step 3: Behavior & Handling
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                  Has your pet shown any of the following during grooming?
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>Nervousness/anxiety</li>
                    <li>Difficulty standing still</li>
                    <li>Fear of loud tools (clippers, dryers)</li>
                    <li>Growling or snapping</li>
                    <li>None of the above</li>
                  </ul>
                </li>
                <li>
                  What helps calm or comfort your pet?
                  <div className="ml-5 mt-1 text-gray-600 italic">
                    (Free text input)
                  </div>
                </li>
                <li>
                  Does your pet have any triggers or dislikes we should know
                  about?
                  <div className="ml-5 mt-1 text-gray-600 italic">
                    (e.g., nail trims, paws touched)
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative flex items-start mb-12">
          <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold z-10 shadow-lg border-4 border-white">
            4️⃣
          </div>
          <div className="ml-8 flex-1">
            <div className="bg-white rounded-xl shadow-lg border-l-4 border-primary p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                🔹 Step 4: Services & Scheduling
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                  What services are you looking for?
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>Full groom (bath + cut)</li>
                    <li>Bath + brush only</li>
                    <li>Nail trim</li>
                    <li>Ear cleaning</li>
                    <li>Deshedding</li>
                    <li>Specialty/creative cut</li>
                    <li>Other (specify)</li>
                  </ul>
                </li>
                <li>
                  Do you prefer:
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>Mobile/in-home grooming</li>
                    <li>I’ll bring my pet to the groomer</li>
                    <li>Either is fine</li>
                  </ul>
                </li>
                <li>
                  Preferred appointment window:
                  <div className="ml-5 mt-1 text-gray-600 italic">
                    (Date & time picker with optional time-of-day preference)
                  </div>
                </li>
                <li>
                  Any other notes or requests?
                  <div className="ml-5 mt-1 text-gray-600 italic">
                    (Optional free text)
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Optional Add-ons */}
        <div className="relative flex items-start mb-12">
          <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold z-10 shadow-lg border-4 border-white">
            ✅
          </div>
          <div className="ml-8 flex-1">
            <div className="bg-white rounded-xl shadow-lg border-l-4 border-green-600 p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Optional Add-ons like:
              </h2>
              <ul className="list-disc list-inside ml-5 space-y-2 text-gray-700">
                <li>Scented finish</li>
                <li>De-matting</li>
                <li>Seasonal accessories</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
