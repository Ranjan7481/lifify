import React from "react";
import "./PatientDetails.css";
import doctorlogo from "../Asset/doctor.png"

const PatientDetails = () => {
  return (
    <div>
      
    <div className="Patient-details-container">
      {/* Doctor Details Section */}
      
     <div className="title">
      <h1>PatientsDetails</h1>
     </div>
      <div className="patient-details">
        <p>
          <strong>Name: </strong> Ms. Swati
        </p>
        <p>
          <strong>Age: </strong> 30
        </p>
        <p>
          <strong>Disease: </strong> Asthma
        </p>
        <p>
          <strong>Checkup Hours: </strong> 10 am - 4 pm
        </p>
      </div>

     

      {/* Doctor Card Section */}
      <div className="patient-card">
        <div className="img-container">
          <img src={doctorlogo} alt="Dr. Mohan" />
          <p><strong>Ms. Swati</strong></p>
          <p>Disease : Asthma</p>
        </div>
        
      </div>
      
    </div>
    </div>
  );
};

export default PatientDetails;
