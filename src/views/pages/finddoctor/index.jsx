import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const doctorsData = [
  {
    name: 'Dr. Jasmine Kimberly',
    specialty: 'Cardiologist',
    img: './src/assets/MetavetImages/dr3.png',
    description: 'Expert in heart-related treatments.',
    path: '/viewprofile',
  },
  {
    name: 'Dr. Diannel Russell',
    specialty: 'Neurosurgeon',
    img: './src/assets/MetavetImages/dr4.png',
    description: 'Specializes in skin health and cosmetic dermatology.',
    path: '/viewprofile2',
  },
  {
    name: 'Dr. John Doe',
    specialty: 'Pediatrician',
    img: './src/assets/MetavetImages/portrait-3d-male-doctor-removebg-preview.png',
    description: 'Children’s health expert.',
    path: '/viewprofile4',
  },
  {
    name: 'Dr. Jane Doe',
    specialty: 'Cardiology ',
    img: './src/assets/MetavetImages/dr2.png',
    description: 'Specializing in Pet Surgery & Diagnostics',
    path: '/viewprofile5',
  },
  {
    name: 'Dr. Emily Jane',
    specialty: 'Neurologist',
    img: './src/assets/MetavetImages/portrait-3d-female-doctor (1).png',
    description: 'Expert in heart-related treatments.',
    path: '/viewprofile6',
  },
  {
    name: 'Dr. Jasmine',
    specialty: 'Cardiology Specialist',
    img: './src/assets/MetavetImages/dr1 (1).png',
    description: 'Specializes in skin health and cosmetic dermatology.',
    path: '/viewprofile3',
  },
]

const FindDoctor = () => {
  const [search, setSearch] = useState('')
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData)

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearch(query)

    const filtered = doctorsData.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(query) ||
        doctor.specialty.toLowerCase().includes(query)
    )
    setFilteredDoctors(filtered)
  }

  return (
    <div className="p-5 mt-5">
      {/* Search Bar */}
      <div className="flex justify-center mb-4">
        <label className="input input-bordered flex items-center gap-2 w-96">
          <input
            type="text"
            className="grow"
            placeholder="Search for a doctor or specialty..."
            value={search}
            onChange={handleSearch}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      {/* Doctors List */}
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor, index) => (
            <div key={index} className="card bg-base-100 w-80 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="rounded-xl w-32 h-32 object-cover bg-slate-200"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{doctor.name}</h2>
                <p className="text-sm text-gray-500">{doctor.specialty}</p>
                <p>{doctor.description}</p>
                <div className="card-actions">
                  <Link to={doctor.path}>
                    <button className="btn bg-primary text-white">
                      Book Appointment
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No doctors found</p>
        )}
      </div>
    </div>
  )
}

export default FindDoctor
