import { useState } from "react";

function ErrorTest() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("There is an error in the component");
  }

  return (
    <div>
      <a className="error-test" onClick={() => setHasError(true)}>
        Click here to test Errror Boundary
      </a>
    </div>
  );
}

export default ErrorTest;
