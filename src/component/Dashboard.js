import React from "react";
import Dashlog from "../Asset/Dashboard.png";
import patientslogo from "../Asset/patients.png";
import messagelogo from "../Asset/message.png";
import medicationlogo from "../Asset/medication.png";
import Documents from "../Asset/Documents.png";
import settinglogo from "../Asset/setting.png";
import logoutlogo from "../Asset/logout.png";
import "./Dashboard.css"; 


const Dashboard = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Lyfify Wellbeing</h2>
      <p className="sidebar-subtitle">Doctor Dashboard</p>

      <div className="dashboard-container">
        <li className="menu-item active">
          <img className="dashimg" alt="dashimage" src={Dashlog} />
          <span className="dash">Dashboard</span>
        </li>
      </div>
      <ul className="sidebar-menu">
        <li className="menu-item">
          <img
            className=" patient-logo"
            alt="patient-logo"
            src={patientslogo}
          />
          <span style={{color: "#fff"}}>Patients</span>
        </li>
        <li className="menu-item">
          <img className="message-logo" alt="messavge-logo" src={messagelogo} />
          <span>Message</span>
        </li>
        <li className="menu-item">
          <img
            className="medication-logo"
            alt="medication-logo"
            src={medicationlogo}
          />
          <span>Medications</span>
        </li>
        <li className="menu-item">
          <img
            className="Documents-details"
            alt="Documents-details"
            src={Documents}
          />
          <span className="document">Documents & Details</span>
        </li>
        <li className="menu-item">
          <img className="setting-logo" alt="setting-logo" src={settinglogo} />
          <span>Settings</span>
        </li>
        <li className="menu-item logout">
          <img className="logout-logo" alt="logout-logo" src={logoutlogo} />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};



export default Dashboard;
