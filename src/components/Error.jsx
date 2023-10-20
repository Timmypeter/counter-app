import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="err-page">
      <h1>404 Error</h1>
      <h1>Page not found</h1>
      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}
