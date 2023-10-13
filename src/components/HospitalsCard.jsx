// // import hospitalsDeatails from "../data/hospitalData";
// import "./HospitalCard.css"


// import React from 'react';
// import hospitals from '../data/hospitalData'; 

// const HospitalsCard = () => {
//   return (
//     <div className="hospital-card">
//       {hospitals.map((hospital, index) => (
//         <div className="hospital" key={index}>
//           <h2 style={{fontSize:"50px" , color:"#fff"}}>{hospital.name}</h2>
//           <p style={{fontSize:"30px" , color:"#fff"}}>Bed Count: {hospital.bedCount}</p>
//           <div className="rating">
//             <p style={{fontSize:"25px" , color:"#fff"}}>Rating: {hospital.rating}</p>
//             <div className="stars">
//               {renderStars(hospital.rating)}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const renderStars = (rating) => {
//   const stars = [];
//   for (let i = 1; i <= 5; i++) {
//     stars.push(
//       <span key={i} className={i <= rating ? "star active" : "star"}>
//         &#9733;
//       </span>
//     );
//   }
//   return stars;
// };

// export default HospitalsCard;



import "./HospitalCard.css"
import React from 'react';
import hospitals from '../data/hospitalData';

const HospitalCard = () => {
  return (
    <div className="hospital-card">
      {hospitals.map((hospital, index) => (
        <div className="hospital" key={index}>
          <h2 style={{fontSize:"30px" , color:"#fff"}}>{hospital.name}</h2>
          <p style={{fontSize:"25px" , color:"#fff"}}>Bed Count: {hospital.bedCount}</p>
          <div className="rating">
            <p style={{fontSize:"20px" , color:"#fff"}}>Rating: {hospital.rating}</p>
            <div className="stars">
              {renderStars(hospital.rating)}
            </div>
          </div>
          <div className="details">
            <p style={{fontSize:"20px" , color:"#fff"}}>Doctor Availability: {hospital.doctorAvailability}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? "star active" : "star"}>
        &#9733;
      </span>
    );
  }
  return stars;
};

export default HospitalCard;

