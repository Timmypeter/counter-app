import "../Styles/Homepage.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorTest from "./ErrorTest";
import CustomErrorFallback from "./CustomErrorFallBack";
import "../Styles/errorStyles.css";

const Homepage = function () {
  return (
    <div className="app-home">
      <ErrorBoundary fallback={<CustomErrorFallback />}>
        <NavBar />
        <div className="app-info">
          <h1 className="app-header">A counter Application</h1>
          <p className="about-app">
            This App allow users to update count number by clicking the count
            buttons to add to count or deduct count
          </p>
          <ErrorTest />

          <Link className="app-link" to="/counter">
            Enter App
          </Link>
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default Homepage;
