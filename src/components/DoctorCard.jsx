import React, { useState } from 'react';
import doctors from "../data/doctors"
import './DoctorsList.css'; // Import the CSS file

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <h2>{doctor.name}</h2>
      <p style={{fontSize:"20px"}}>Degree: {doctor.degree}</p>
      <p style={{fontSize:"20px"}}>Experience: {doctor.experience} years</p>
      {/* Add more details as needed */}
    </div>
  );
};

const DoctorsList = () => {
  const [filter, setFilter] = useState("All");

  const uniqueSpecializations = Array.from(new Set(doctors.map(doctor => doctor.specialization)));

  const handleFilterChange = (specialization) => {
    setFilter(specialization);
  };

  return (
    <div style={{marginTop:"50px"}}>
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange("All")}>All</button>
        {uniqueSpecializations.map((specialization) => (
          <button key={specialization} onClick={() => handleFilterChange(specialization)}>
            {specialization}
          </button>
        ))}
      </div>

      <div className="doctor-list">
        {doctors
          .filter((doctor) => filter === "All" || doctor.specialization === filter)
          .map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
      </div>
    </div>
  );
};

export default DoctorsList;
