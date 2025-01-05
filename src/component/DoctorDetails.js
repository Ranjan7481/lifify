import React from "react";
import doctorlogo from "../Asset/doctor.png"

import "./DoctorDetails.css";

const DoctorDetails = () => {
  return (
    <div>
      
    <div className="doctor-details-container">
      {/* Doctor Details Section */}
      
     <div className="title">
      <h1>DoctorDetails</h1>
     </div>
      <div className="doctor-details">
        <p>
          <strong>Name: </strong> Dr. Mohan
        </p>
        <p>
          <strong>Age: </strong> 30
        </p>
        <p>
          <strong>Qualification: </strong> MBBS
        </p>
        <p>
          <strong>Checkup Hours: </strong> 10 am - 4 pm
        </p>
      </div>

     

      {/* Doctor Card Section */}
      <div className="doctor-card">
        <div className="img-container">
          <img src={doctorlogo}alt="Dr. Mohan" />
          <p><strong>Dr. Mohan</strong></p>
          <p>Cardiologist - AIIMS</p>
        </div>
        <div className="stats">
          <p>
            <strong>Experience:</strong> 5 yrs
          </p>
          <p>
            <strong>Patients:</strong> 3450
          </p>
          <p>
            <strong>Reviews:</strong> 1234
          </p>
        </div>
      </div>
       {/* Description Section */}
       <div className="Description">
        <h1>Description</h1>
        <p>
          A doctor is a skilled healthcare professional dedicated to diagnosing,
          treating, and preventing illnesses, ensuring patient well-being and
          recovery.
        </p>
      </div>
    </div>
    </div>
  );
};

export default DoctorDetails;
