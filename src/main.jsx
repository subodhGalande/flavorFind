import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeDetails from "./pages/recipeDetails.jsx";
import Landing from "./components/landing.jsx";
import NotFound from "./pages/404";
import { ScrollRestoration } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollRestoration />{" "}
        {/* Ensures scroll behavior applies to all routes */}
        <App />
      </>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: (
          <>
            <ScrollRestoration />{" "}
            {/* Ensures scroll behavior applies to all routes */}
            <Landing />
          </>
        ),
      },
      {
        path: "recipe/:id",
        element: (
          <>
            <ScrollRestoration /> <RecipeDetails />
          </>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
