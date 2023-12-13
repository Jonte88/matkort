import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Header from "./assets/components/header.jsx";
import Result from "./assets/components/result.jsx";
import RestaurantPage from "./assets/components/restaurantPage.jsx";

const Wrapper = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/result",
        element: <Result />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
