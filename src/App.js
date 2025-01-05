import "./App.css";
import DoctorDetails from "./component/DoctorDetails";
import Home from "./component/Home";
import NavBar from "./component/Navbar";
import PatientDetails from "./component/PatientDetails";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
    </div>
  );
}

export default App;
