import react from "react";
import "../Styles/Homepage.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import useCounter from "./useCounter";
import Counter from "./Counter";

const Homepage = function () {
  return (
    <div className="app-home">
      <div className="app-info">
        <h1 className="app-header">A counter Application</h1>
        <p className="about-app">
          This App allow users to update count number by clicking the count
          buttons to add to count or deduct count
        </p>

        <Link className="app-link" to="/counter">
          Enter App
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
