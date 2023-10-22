import React from "react";

function CustomErrorFallback() {
  return (
    <div className="error-fallback">
      <h2 className="error-header">Whoops, something went wrong.</h2>
      <p className="error-message">
        Please either refresh the page or return home to try again
      </p>
      <a href="./" className="test-error-btn-container">
        <button className="error-button">Go back to homepage</button>
      </a>
    </div>
  );
}

export default CustomErrorFallback;
