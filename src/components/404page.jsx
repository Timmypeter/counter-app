import { Link } from "react-router-dom";
import "../Styles/404styles.css";

export default function Error() {
  return (
    <div className="err-page">
      <h1 className="errorr-header">404 Error!!!</h1>
      <p className="error-message">
        You didn't break the internet, but we can't find what you are looking
        for
      </p>
      <p className="homepage">
        <Link className="homepage-link" to="/">
          Back to homepage
        </Link>
      </p>
    </div>
  );
}
