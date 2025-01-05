import React from "react";
import "./Home.css";
import patients1logo from "../Asset/patients1.png";
import patients2logo from "../Asset/patients2.png";
import patients3logo from "../Asset/patients3.png";

const Home = () => {
  return (
    <>
      <div className="Container">
        <div className="heading">
          <h1>Efficient Patient Care</h1>
          <h1> Management for </h1>
          <h1>Doctors</h1>
        </div>

        <div className="para-container">
          <p>
            Streamline your practice with AI-driven insights and seamless
            communication
          </p>
        </div>

        <div className="button-container">
          <button>Get started</button>
        </div>

        <div className="image-container">
          <div className="card">
            <img src={patients1logo} alt="Patient Details" />
            <p>Manage patient details with ease and efficiency.</p>
          </div>
          <div className="card">
            <img src={patients2logo} alt="Patient Details" />
            <p>Access AI-driven health insights for better care..</p>
          </div>
          <div className="card">
            <img src={patients3logo} alt="Patient Details" />
            <p>Quick actions like video calls and messaging available</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
