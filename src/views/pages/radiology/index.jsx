import React from "react";

const Radiology = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">
          Radiology
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          When it comes to accurately diagnosing and treating your pet after an
          injury or illness, you can count on our veterinary team to have the
          latest diagnostic equipment, including digital imaging devices and
          ultrasound machines.
        </p>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Injuries and Ailments Diagnosed via Radiology and Ultrasounds
            </h3>
            <p className="text-gray-600">
              Digital images, including ultrasounds, radiographs, MRIs, and CT
              scans are used to diagnose a variety of conditions and ailments in
              dogs and cats. Common conditions diagnosed include broken bones,
              joint problems, tumors, brain abnormalities, and problems with the
              internal organs, including the heart, lungs, liver, kidneys, and
              bladder.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Ultrasound Imaging
            </h3>
            <p className="text-gray-600">
              Ultrasound imaging involves using sound waves to create an image
              on a computer monitor. When our team passes the wand over an
              injured area of your pet, we are able to find otherwise hidden
              problems, like when your pet accidentally eats something that
              isn’t food, has a tumor, or has problems with an internal organ,
              like the stomach, spleen, liver, and pancreas. Ultrasound imaging
              is completely painless and does not have any side effects.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Radiographs (X-Rays)
            </h3>
            <p className="text-gray-600">
              The common term for a radiograph is an x-ray. These images can
              help diagnose problems and conditions with the bones and joints,
              such as broken bones, swelling in the joints, and other types of
              bone abnormalities. X-rays can also be used to diagnose problems
              with the internal organs, like the heart, lungs, spleen, liver,
              and kidneys.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">MRIs</h3>
            <p className="text-gray-600">
              MRI is an acronym for Magnetic Resonance Imaging. This type of
              diagnostic equipment has the ability to produce detailed images of
              the internal structures of the body. They are helpful in
              diagnosing tumors and abnormalities in the brain as well as spinal
              disorders, like herniated discs and spinal stenosis in cats and
              dogs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              CT Scans
            </h3>
            <p className="text-gray-600">
              The acronym CT stands for computed tomography. These are
              essentially highly detailed x-rays that can show cross sections of
              your dog or cat’s anatomy. While the CT machine is taking images,
              our veterinarian has the ability to enhance and focus on specific
              parts of your pet’s body in order to make a detailed and accurate
              diagnosis.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Diagnosing Your Pet’s Ailment or Injury
            </h3>
            <p className="text-gray-600">
              Our veterinary staff can rapidly diagnose your pet’s injury or
              condition via x-rays, CT scans, MRIs, and ultrasound imaging. Once
              we understand the depth of your pet’s illness or injury, a
              treatment plan will be developed in order to help your pet heal
              and restore your pet’s health. If you have any questions or
              concerns about your pet’s health and their diagnosis, we would be
              happy to answer them and provide you with guidance to help make
              your pet comfortable during the healing process.
            </p>
            <p className="text-gray-600 mt-4">
              For more information on our radiology and diagnostic imaging
              services, call us at{" "}
              <span className="text-indigo-600">800-462-8749</span> today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radiology;
