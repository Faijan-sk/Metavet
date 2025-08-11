import { Check } from 'lucide-react'
import React from 'react'

const index = () => {
  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Behavioural Concern Overview
      </h1>

      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-white rounded-full"></div>

        {/* Step 1 */}
        <div className="relative flex items-start mb-12">
          <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold z-10 shadow-lg border-4 border-white">
            1️⃣
          </div>
          <div className="ml-8 flex-1">
            <div className="bg-white rounded-xl shadow-lg border-l-4 border-primary p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                🔹 Step 1: Behavioural Concern Overview
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                  What behavioural challenge(s) are you seeking help with?
                  (Multi-select)
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>Separation anxiety</li>
                    <li>
                      Aggression (conditional: follow up with “has your pet
                      bitten a person or other animals?” with a text box “Please
                      describe”)
                    </li>
                    <li>Excessive barking</li>
                    <li>Leash pulling/reactivity</li>
                    <li>Destructive behavior</li>
                    <li>Fearfulness</li>
                    <li>Inappropriate elimination</li>
                    <li>
                      Other (conditional: if selected, enter a text box with
                      “please describe”)
                    </li>
                  </ul>
                </li>
                <li>
                  When did the behavior first begin?
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>As a puppy</li>
                    <li>Within the last year</li>
                    <li>Recently (last 3 months)</li>
                  </ul>
                  <div className="ml-5 mt-1 text-gray-600 italic">
                    (Optional date input or note)
                  </div>
                </li>
                <li>
                  How frequently does the issue occur?
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>Daily</li>
                    <li>Weekly</li>
                    <li>Occasionally</li>
                    <li>
                      Only in specific situations (conditional: text box “please
                      describe”)
                    </li>
                  </ul>
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
                🔹 Step 2: Triggers & Context
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                  Are there known triggers for the behavior?
                  <div className="ml-5 mt-1 text-gray-600 italic">
                    (e.g., other dogs, visitors, car rides, being left alone)
                  </div>
                </li>
                <li>
                  Has the behavior worsened or improved over time?
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>Improved</li>
                    <li>Worsened</li>
                    <li>Stayed the same</li>
                  </ul>
                  <div className="ml-5 mt-1 text-gray-600 italic">
                    (Optional context text box)
                  </div>
                </li>
                <li>
                  Has your pet shown any aggressive behavior?
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>Growling</li>
                    <li>Snapping</li>
                    <li>Lunging</li>
                    <li>Biting (human or animal)</li>
                    <li>No aggression observed</li>
                  </ul>
                </li>
                <li>
                  Please describe any serious incidents or close calls, if any.
                  <div className="ml-5 mt-1 text-gray-600 italic">
                    (Free text)
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
                🔹 Step 3: Training & Tools History
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                  Have you worked with a trainer or behaviourist before?
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>Yes</li>
                    <li>No</li>
                  </ul>
                  <div className="ml-5 mt-1 text-gray-600 italic">
                    (If yes, optional text box: What approaches were used? What
                    did/didn’t work?)
                  </div>
                </li>
                <li>
                  Are you currently using any training tools or methods?
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>Clicker</li>
                    <li>Muzzle</li>
                    <li>Harness</li>
                    <li>Prong collar</li>
                    <li>E-collar</li>
                    <li>Crate training</li>
                    <li>Other: __________</li>
                  </ul>
                </li>
                <li>
                  Is your pet food or toy motivated?
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>Yes</li>
                    <li>No</li>
                    <li>Unsure</li>
                  </ul>
                  <div className="ml-5 mt-1 text-gray-600 italic">
                    (Conditional: What are their favorite rewards?)
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
                🔹 Step 4: Routine & Environment
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                  Describe your pet’s daily routine:
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>Walks per day</li>
                    <li>Off-leash time</li>
                    <li>Time spent alone</li>
                    <li>Exercise & stimulation</li>
                  </ul>
                </li>
                <li>
                  Other pets in the household?
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>Yes</li>
                    <li>No</li>
                  </ul>
                  <div className="ml-5 mt-1 text-gray-600 italic">
                    (conditional: If yes, text box: “list types, ages, and how
                    they get along”)
                  </div>
                </li>
                <li>
                  Are there children in the home?
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>Yes</li>
                    <li>No</li>
                  </ul>
                  <div className="ml-5 mt-1 text-gray-600 italic">
                    (conditional: If yes, what ages? How does your pet respond
                    with children)
                  </div>
                </li>
                <li>
                  What kind of home environment do you live in?
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>Apartment</li>
                    <li>House with yard</li>
                    <li>Shared/communal</li>
                    <li>
                      Other: (conditional: if selected insert a text box “Please
                      Describe”)
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="relative flex items-start mb-12">
          <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold z-10 shadow-lg border-4 border-white">
            5️⃣
          </div>
          <div className="ml-8 flex-1">
            <div className="bg-white rounded-xl shadow-lg border-l-4 border-primary p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                🔹 Step 5: Goals & Expectations
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                  What would a successful outcome look like to you?
                  <div className="ml-5 mt-1 text-gray-600 italic">
                    (Free text)
                  </div>
                </li>
                <li>
                  Are you open to adjusting your routine or environment?
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>Yes</li>
                    <li>No</li>
                    <li>Not sure</li>
                  </ul>
                </li>
                <li>
                  Preferred session type:
                  <ul className="list-disc list-inside ml-5 mt-2 text-gray-600">
                    <li>In-person</li>
                    <li>Virtual</li>
                    <li>Either is fine</li>
                  </ul>
                </li>
                <li>
                  Any other notes, concerns, or expectations you’d like to
                  share?
                  <div className="ml-5 mt-1 text-gray-600 italic">
                    (Free text)
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Consent */}
        <div className="relative flex items-start mb-12">
          <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold z-10 shadow-lg border-4 border-white">
            ✅
          </div>
          <div className="ml-8 flex-1">
            <div className="bg-white rounded-xl shadow-lg border-l-4 border-green-600 p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 d-flex">
              <p className="text-gray-700 text-lg font-semibold">
                <input
                  type="checkbox"
                  id="consentCheckbox"
                  className="mr-5 mt-1 h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                I confirm that the information provided is accurate and agree to
                share this with my assigned behaviour specialist through the
                Metavet platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
