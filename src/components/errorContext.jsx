import { createContext } from "react";
const ErrorContext = createContext();

import { useState } from "react";

// eslint-disable-next-line react/prop-types
function ErrorProvider({ children }) {
  const [Error, setError] = useState();

  return (
    // Use the Provider to pass down the treasure
    <ErrorContext.Provider value={{ Error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
}

export { ErrorContext, ErrorProvider };
