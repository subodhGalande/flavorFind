import Navbar from "./components/navbar";
import { ErrorProvider } from "./components/errorContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <ErrorProvider>
        <Outlet />
      </ErrorProvider>
    </>
  );
}

export default App;
