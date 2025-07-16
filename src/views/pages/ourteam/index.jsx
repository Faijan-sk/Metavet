import React, { useState } from "react";

const teamMembers = [
  {
    name: "Dr. Tyson Bull",
    title: "RETIRED, DVM",
    img: "./src/assets/MetavetImages/Dr.59be69373e742412d610.webp",
    role: "Veterinarian",
    bio: "Dr. Tyson Bull has over 20 years of experience in veterinary care...",
  },
  {
    name: "Dr. John Cruickshank",
    title: "DVM",
    img: "./src/assets/MetavetImages/Dr.-John-Cruickshank.4a43ea39d642e5fe2713.png",
    role: "Veterinarian",
    bio: "Dr. John Cruickshank specializes in emergency and critical care...",
  },
  {
    name: "Dr. Carlie Petrisor",
    title: "DVM",
    img: "./src/assets/MetavetImages/4 (1).ca1e3b71e2be7d09ca63.png",
    role: "Veterinarian",
    bio: "Dr. Carlie Petrisor is known for her expertise in dental care for pets...",
  },
  {
    name: "Dr. Cassandra Van",
    title: "DVM",
    img: "./src/assets/MetavetImages/4 (1).ca1e3b71e2be7d09ca63.png",
    role: "Veterinarian",
    bio: "Dr. Cassandra Van is an expert in behavioral therapy for pets...",
  },
  {
    name: "Dr. Kayla Stinn",
    title: "DVM",
    img: "./src/assets/MetavetImages/4 (1).ca1e3b71e2be7d09ca63.png",
    role: "Veterinarian",
    bio: "Dr. Kayla Stinn focuses on holistic approaches to animal health...",
  },
  {
    name: "Dr. Jocelyn Waldern",
    title: "DVM",
    img: "./src/assets/MetavetImages/4 (1).ca1e3b71e2be7d09ca63.png",
    role: "Veterinarian",
    bio: "Dr. Jocelyn Waldern has a special interest in dermatology...",
  },
  {
    name: "Jena",
    title: "Team Member",
    img: "./src/assets/MetavetImages/4 (1).ca1e3b71e2be7d09ca63.png",
    role: "Team Member",
    bio: "Jena is a dedicated member of the administrative team...",
  },
  {
    name: "Kat",
    title: "Team Member",
    img: "./src/assets/MetavetImages/4 (1).ca1e3b71e2be7d09ca63.png",
    role: "Team Member",
    bio: "Kat is the go-to person for all scheduling and customer service...",
  },
  {
    name: "Brittany",
    title: "Team Member",
    img: "./src/assets/MetavetImages/4 (1).ca1e3b71e2be7d09ca63.png",
    role: "Team Member",
    bio: "Brittany handles inventory and supplies management...",
  },
  {
    name: "Olivia",
    title: "Team Member",
    img: "./src/assets/MetavetImages/4 (1).ca1e3b71e2be7d09ca63.png",
    role: "Team Member",
    bio: "Olivia is in charge of client communications and follow-ups...",
  },
  {
    name: "Lily",
    title: "Team Member",
    img: "./src/assets/MetavetImages/4 (1).ca1e3b71e2be7d09ca63.png",
    role: "Team Member",
    bio: "Lily manages social media and public relations for the clinic...",
  },
  {
    name: "Susie",
    title: "Team Member",
    img: "./src/assets/MetavetImages/4 (1).ca1e3b71e2be7d09ca63.png",
    role: "Team Member",
    bio: "Susie ensures a smooth workflow behind the scenes...",
  },
];

const OurTeam = () => {
  const [veterinarianPage, setVeterinarianPage] = useState(1);
  const [teamMemberPage, setTeamMemberPage] = useState(1);
  const [selectedMember, setSelectedMember] = useState(null);

  const membersPerPage = 3;

  const paginate = (members, page) => {
    const start = (page - 1) * membersPerPage;
    return members.slice(start, start + membersPerPage);
  };

  const handleBioClick = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold mb-4">Meet Our Team</h2>
        <h2 className="text-3xl font-semibold mb-4">Get To Know Our Team</h2>
        <p className="text-lg text-gray-600">
          We are solely dedicated to your pet’s care! We look forward to getting
          to know you, and we hope you’ll take the time to scroll down and get
          to know us.
        </p>
      </div>

      {/* Veterinarians Section */}
      <h2 className="text-3xl font-semibold mb-4 text-center">Veterinarians</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {paginate(
          teamMembers.filter((member) => member.role === "Veterinarian"),
          veterinarianPage
        ).map((member, index) => (
          <div key={index} className="card glass w-80 bg-slate-400">
            <figure className="h-48 overflow-hidden">
              <img
                src={member.img}
                alt={`Team member ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{member.name}</h2>
              <p>{member.title}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn text-white bg-primary"
                  onClick={() => handleBioClick(member)}
                >
                  Read Bio
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination for Veterinarians */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() =>
            setVeterinarianPage(veterinarianPage > 1 ? veterinarianPage - 1 : 1)
          }
          className="btn"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setVeterinarianPage(
              veterinarianPage <
                Math.ceil(
                  teamMembers.filter((member) => member.role === "Veterinarian")
                    .length / membersPerPage
                )
                ? veterinarianPage + 1
                : veterinarianPage
            )
          }
          className="btn"
        >
          Next
        </button>
      </div>

      {/* Team Members Section */}
      <h2 className="text-3xl font-semibold mb-4 text-center mt-10">
        Team Members
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {paginate(
          teamMembers.filter((member) => member.role === "Team Member"),
          teamMemberPage
        ).map((member, index) => (
          <div key={index} className="card glass w-80 bg-slate-400">
            <figure className="h-48 overflow-hidden">
              <img
                src={member.img}
                alt={`Team member ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{member.name}</h2>
              <p>{member.title}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn text-white bg-primary"
                  onClick={() => handleBioClick(member)}
                >
                  Read Bio
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination for Team Members */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() =>
            setTeamMemberPage(teamMemberPage > 1 ? teamMemberPage - 1 : 1)
          }
          className="btn"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setTeamMemberPage(
              teamMemberPage <
                Math.ceil(
                  teamMembers.filter((member) => member.role === "Team Member")
                    .length / membersPerPage
                )
                ? teamMemberPage + 1
                : teamMemberPage
            )
          }
          className="btn"
        >
          Next
        </button>
      </div>

      {/* Modal for Reading Bio */}
      {selectedMember && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-1/3">
            <h2 className="text-2xl font-bold">{selectedMember.name}</h2>
            <p>{selectedMember.bio}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white p-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurTeam;
