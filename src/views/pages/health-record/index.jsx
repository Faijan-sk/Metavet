// import React, { useState } from "react";

// // Example doctor images
// const doctorImages = {
//   "Dr. Michael":
//     "./src/assets/MetavetImages/portrait-3d-male-doctor-removebg-preview.png",
//   "Dr. Jasmine": "./src/assets/MetavetImages/dr3.png",
//   "Dr. Diannel": "./src/assets/MetavetImages/dr4.png",
//   "Dr. Kimberly": "./src/assets/MetavetImages/dr1 (1).png",
// };

// const HealthRecord = () => {
//   const [petRecords, setPetRecords] = useState([
//     {
//       id: 1,
//       pet: "Dog",
//       doctor: "Dr. Michael",
//       petType: "Dog",
//       date: "2024-10-05",
//       reason: "Vaccination",
//       healthStatus: "Healthy",
//       notes: "Bring vaccination records",
//     },
//     {
//       id: 2,
//       pet: "Cat",
//       doctor: "Dr. Jasmine",
//       petType: "Cat",
//       date: "2024-10-06",
//       reason: "Annual Check-up",
//       healthStatus: "Overweight",
//       notes: "Need to discuss diet",
//     },
//     {
//       id: 3,
//       pet: "Dog",
//       doctor: "Dr. Diannel",
//       petType: "Dog",
//       date: "2024-10-10",
//       reason: "Dental Cleaning",
//       healthStatus: "Healthy",
//       notes: "Monitor allergies",
//     },
//     {
//       id: 4,
//       pet: "Rabbit",
//       doctor: "Dr. Kimberly",
//       petType: "Rabbit",
//       date: "2024-10-12",
//       reason: "Wellness Check",
//       healthStatus: "Healthy",
//       notes: "Confirm spay status",
//     },
//     {
//       id: 5,
//       pet: "Dog",
//       doctor: "Dr. Michael",
//       petType: "Dog",
//       date: "2024-10-15",
//       reason: "Behaviour Consultation",
//       healthStatus: "Anxious",
//       notes: "Check for anxiety issues",
//     },
//     {
//       id: 6,
//       pet: "Dog",
//       doctor: "Dr. Jasmine",
//       petType: "Dog",
//       date: "2024-10-05",
//       reason: "Vaccination",
//       healthStatus: "Healthy",
//       notes: "Bring vaccination records",
//     },
//     {
//       id: 7,
//       pet: "Cat",
//       doctor: "Dr. Diannel",
//       petType: "Cat",
//       date: "2024-10-06",
//       reason: "Annual Check-up",
//       healthStatus: "Overweight",
//       notes: "Need to discuss diet",
//     },
//     {
//       id: 8,
//       pet: "Dog",
//       doctor: "Dr. Kimberly",
//       petType: "Dog",
//       date: "2024-10-10",
//       reason: "Dental Cleaning",
//       healthStatus: "Healthy",
//       notes: "Monitor allergies",
//     },
//     {
//       id: 9,
//       pet: "Rabbit",
//       doctor: "Dr. Michael",
//       petType: "Rabbit",
//       date: "2024-10-12",
//       reason: "Wellness Check",
//       healthStatus: "Healthy",
//       notes: "Confirm spay status",
//     },
//     {
//       id: 10,
//       pet: "Dog",
//       doctor: "Dr. Jasmine",
//       petType: "Dog",
//       date: "2024-10-15",
//       reason: "Behaviour Consultation",
//       healthStatus: "Anxious",
//       notes: "Check for anxiety issues",
//     },
//   ]);

//   const [editingRecord, setEditingRecord] = useState(null);
//   const [updatedRecord, setUpdatedRecord] = useState({
//     pet: "",
//     doctor: "",
//     date: "",
//     reason: "",
//     healthStatus: "",
//     notes: "",
//   });

//   const handleEdit = (record) => {
//     setEditingRecord(record.id);
//     setUpdatedRecord({
//       pet: record.pet,
//       doctor: record.doctor,
//       date: record.date,
//       reason: record.reason,
//       healthStatus: record.healthStatus,
//       notes: record.notes,
//     });
//   };

//   const handleCancelEdit = () => {
//     setEditingRecord(null);
//   };

//   const handleChange = (e) => {
//     setUpdatedRecord({
//       ...updatedRecord,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSaveEdit = (id) => {
//     setPetRecords(
//       petRecords.map((record) =>
//         record.id === id ? { ...record, ...updatedRecord } : record
//       )
//     );
//     setEditingRecord(null);
//   };

//   const handleDelete = (id) => {
//     setPetRecords(petRecords.filter((record) => record.id !== id));
//   };

//   return (
//     <div className=" py-6 px-4">
//       <p className="text-center text-3xl font-semibold">Pet Health Records</p>
//       <table className="min-w-full table-auto bg-white border-collapse mt-10">
//         <thead>
//           <tr className="border-b bg-primary">
//             <th className="px-4 py-2 text-left font-semibold text-white">#</th>
//             <th className="px-4 py-2 text-left font-semibold text-white">
//               Doctor
//             </th>
//             <th className="px-4 py-2 text-left font-semibold text-white">
//               Vet/Provider Name
//             </th>
//             <th className="px-4 py-2 text-left font-semibold text-white">
//               Pet
//             </th>
//             <th className="px-4 py-2 text-left font-semibold text-white">
//               Appointment Date
//             </th>
//             <th className="px-4 py-2 text-left font-semibold text-white">
//               Reason
//             </th>
//             <th className="px-4 py-2 text-left font-semibold text-white">
//               Health Status
//             </th>
//             <th className="px-4 py-2 text-left font-semibold text-white">
//               Notes
//             </th>
//             <th className="px-4 py-2 text-left font-semibold text-white">
//               Actions
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {petRecords.map((record) => (
//             <tr key={record.id} className="border-b hover:bg-gray-50">
//               <td className="px-4 py-2 text-sm text-gray-700">{record.id}</td>
//               <td className="px-4 py-2 text-sm text-gray-700 flex items-center">
//                 <img
//                   src={doctorImages[record.doctor]}
//                   alt={record.doctor}
//                   className="w-24 h-24 rounded-full "
//                 />
//               </td>
//               <td className="px-4 py-2 text-sm text-gray-700">
//                 {editingRecord === record.id ? (
//                   <input
//                     type="text"
//                     name="doctor"
//                     value={updatedRecord.doctor}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 p-2"
//                   />
//                 ) : (
//                   record.doctor
//                 )}
//               </td>
//               <td className="px-4 py-2 text-sm text-gray-700">
//                 {editingRecord === record.id ? (
//                   <input
//                     type="text"
//                     name="pet"
//                     value={updatedRecord.pet}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 p-2"
//                   />
//                 ) : (
//                   record.pet
//                 )}
//               </td>
//               <td className="px-4 py-2 text-sm text-gray-700">
//                 {editingRecord === record.id ? (
//                   <input
//                     type="date"
//                     name="date"
//                     value={updatedRecord.date}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 p-2"
//                   />
//                 ) : (
//                   record.date
//                 )}
//               </td>
//               <td className="px-4 py-2 text-sm text-gray-700">
//                 {editingRecord === record.id ? (
//                   <input
//                     type="text"
//                     name="reason"
//                     value={updatedRecord.reason}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 p-2"
//                   />
//                 ) : (
//                   record.reason
//                 )}
//               </td>
//               <td className="px-4 py-2 text-sm text-gray-700">
//                 {editingRecord === record.id ? (
//                   <input
//                     type="text"
//                     name="healthStatus"
//                     value={updatedRecord.healthStatus}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 p-2"
//                   />
//                 ) : (
//                   record.healthStatus
//                 )}
//               </td>
//               <td className="px-4 py-2 text-sm text-gray-700">
//                 {editingRecord === record.id ? (
//                   <textarea
//                     name="notes"
//                     value={updatedRecord.notes}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 p-2"
//                     rows="2"
//                   />
//                 ) : (
//                   record.notes
//                 )}
//               </td>
//               <td className="px-4 py-2 text-sm text-gray-700">
//                 {editingRecord === record.id ? (
//                   <>
//                     <button
//                       className="bg-primary text-white mr-2 btn w-full"
//                       onClick={() => handleSaveEdit(record.id)}
//                     >
//                       Save
//                     </button>
//                     <button
//                       className="bg-primary text-white btn w-full"
//                       onClick={handleCancelEdit}
//                     >
//                       Cancel
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <button
//                       className="bg-green-600 text-white mr-2 btn w-full"
//                       onClick={() => handleEdit(record)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className=" bg-red-600 text-white btn w-full"
//                       onClick={() => handleDelete(record.id)}
//                     >
//                       Delete
//                     </button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HealthRecord;

//hide #

import React, { useState } from "react";

// Example doctor images
const doctorImages = {
  "Dr. Michael":
    "./src/assets/MetavetImages/portrait-3d-male-doctor-removebg-preview.png",
  "Dr. Jasmine": "./src/assets/MetavetImages/dr3.png",
  "Dr. Diannel": "./src/assets/MetavetImages/dr4.png",
  "Dr. Kimberly": "./src/assets/MetavetImages/dr1 (1).png",
};

const HealthRecord = () => {
  const [petRecords, setPetRecords] = useState([
    {
      id: 1,
      pet: "Dog",
      doctor: "Dr. Michael",
      petType: "Dog",
      date: "2024-10-05",
      reason: "Vaccination",
      healthStatus: "Healthy",
      notes: "Bring vaccination records",
    },
    {
      id: 2,
      pet: "Cat",
      doctor: "Dr. Jasmine",
      petType: "Cat",
      date: "2024-10-06",
      reason: "Annual Check-up",
      healthStatus: "Overweight",
      notes: "Need to discuss diet",
    },
    {
      id: 3,
      pet: "Dog",
      doctor: "Dr. Diannel",
      petType: "Dog",
      date: "2024-10-10",
      reason: "Dental Cleaning",
      healthStatus: "Healthy",
      notes: "Monitor allergies",
    },
    {
      id: 4,
      pet: "Rabbit",
      doctor: "Dr. Kimberly",
      petType: "Rabbit",
      date: "2024-10-12",
      reason: "Wellness Check",
      healthStatus: "Healthy",
      notes: "Confirm spay status",
    },
    {
      id: 5,
      pet: "Dog",
      doctor: "Dr. Michael",
      petType: "Dog",
      date: "2024-10-15",
      reason: "Behaviour Consultation",
      healthStatus: "Anxious",
      notes: "Check for anxiety issues",
    },
    {
      id: 6,
      pet: "Dog",
      doctor: "Dr. Jasmine",
      petType: "Dog",
      date: "2024-10-05",
      reason: "Vaccination",
      healthStatus: "Healthy",
      notes: "Bring vaccination records",
    },
    {
      id: 7,
      pet: "Cat",
      doctor: "Dr. Diannel",
      petType: "Cat",
      date: "2024-10-06",
      reason: "Annual Check-up",
      healthStatus: "Overweight",
      notes: "Need to discuss diet",
    },
    {
      id: 8,
      pet: "Dog",
      doctor: "Dr. Kimberly",
      petType: "Dog",
      date: "2024-10-10",
      reason: "Dental Cleaning",
      healthStatus: "Healthy",
      notes: "Monitor allergies",
    },
    {
      id: 9,
      pet: "Rabbit",
      doctor: "Dr. Michael",
      petType: "Rabbit",
      date: "2024-10-12",
      reason: "Wellness Check",
      healthStatus: "Healthy",
      notes: "Confirm spay status",
    },
    {
      id: 10,
      pet: "Dog",
      doctor: "Dr. Jasmine",
      petType: "Dog",
      date: "2024-10-15",
      reason: "Behaviour Consultation",
      healthStatus: "Anxious",
      notes: "Check for anxiety issues",
    },
  ]);

  const [editingRecord, setEditingRecord] = useState(null);
  const [updatedRecord, setUpdatedRecord] = useState({
    pet: "",
    doctor: "",
    date: "",
    reason: "",
    healthStatus: "",
    notes: "",
  });

  const handleEdit = (record) => {
    setEditingRecord(record.id);
    setUpdatedRecord({
      pet: record.pet,
      doctor: record.doctor,
      date: record.date,
      reason: record.reason,
      healthStatus: record.healthStatus,
      notes: record.notes,
    });
  };

  const handleCancelEdit = () => {
    setEditingRecord(null);
  };

  const handleChange = (e) => {
    setUpdatedRecord({
      ...updatedRecord,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveEdit = (id) => {
    setPetRecords(
      petRecords.map((record) =>
        record.id === id ? { ...record, ...updatedRecord } : record
      )
    );
    setEditingRecord(null);
  };

  const handleDelete = (id) => {
    setPetRecords(petRecords.filter((record) => record.id !== id));
  };

  return (
    <div className=" py-6 px-4">
      <p className="text-center text-3xl font-semibold">Pet Health Records</p>
      <table className="min-w-full table-auto bg-white border-collapse mt-10">
        <thead>
          <tr className="border-b bg-primary">
            {/* Conditionally render the # header if there are pet records */}
            {petRecords.length > 0 && (
              <th className="px-4 py-2 text-left font-semibold text-white">
                #
              </th>
            )}
            <th className="px-4 py-2 text-left font-semibold text-white">
              Doctor
            </th>
            <th className="px-4 py-2 text-left font-semibold text-white">
              Vet/Provider Name
            </th>
            <th className="px-4 py-2 text-left font-semibold text-white">
              Pet
            </th>
            <th className="px-4 py-2 text-left font-semibold text-white">
              Appointment Date
            </th>
            <th className="px-4 py-2 text-left font-semibold text-white">
              Reason
            </th>
            <th className="px-4 py-2 text-left font-semibold text-white">
              Health Status
            </th>
            <th className="px-4 py-2 text-left font-semibold text-white">
              Notes
            </th>
            <th className="px-4 py-2 text-left font-semibold text-white">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {petRecords.map((record) => (
            <tr key={record.id} className="border-b hover:bg-gray-50">
              {petRecords.length > 0 && (
                <td className="px-4 py-2 text-sm text-gray-700">{record.id}</td>
              )}
              <td className="px-4 py-2 text-sm text-gray-700 flex items-center">
                <img
                  src={doctorImages[record.doctor]}
                  alt={record.doctor}
                  className="w-24 h-20 mt-4 rounded-full "
                />
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {editingRecord === record.id ? (
                  <input
                    type="text"
                    name="doctor"
                    value={updatedRecord.doctor}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2"
                  />
                ) : (
                  record.doctor
                )}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {editingRecord === record.id ? (
                  <input
                    type="text"
                    name="pet"
                    value={updatedRecord.pet}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2"
                  />
                ) : (
                  record.pet
                )}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {editingRecord === record.id ? (
                  <input
                    type="date"
                    name="date"
                    value={updatedRecord.date}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2"
                  />
                ) : (
                  record.date
                )}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {editingRecord === record.id ? (
                  <input
                    type="text"
                    name="reason"
                    value={updatedRecord.reason}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2"
                  />
                ) : (
                  record.reason
                )}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {editingRecord === record.id ? (
                  <input
                    type="text"
                    name="healthStatus"
                    value={updatedRecord.healthStatus}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2"
                  />
                ) : (
                  record.healthStatus
                )}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {editingRecord === record.id ? (
                  <textarea
                    name="notes"
                    value={updatedRecord.notes}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2"
                    rows="2"
                  />
                ) : (
                  record.notes
                )}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {editingRecord === record.id ? (
                  <>
                    <button
                      className="bg-primary text-white mr-2 btn w-full"
                      onClick={() => handleSaveEdit(record.id)}
                    >
                      Save
                    </button>
                    <button
                      className="bg-primary text-white btn w-full"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="bg-green-600 text-white mr-2 btn w-full"
                      onClick={() => handleEdit(record)}
                    >
                      Edit
                    </button>
                    <button
                      className=" bg-red-600 text-white btn w-full"
                      onClick={() => handleDelete(record.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HealthRecord;
