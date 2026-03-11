import { useState } from "react";
import "./App.css";
import { PartsContext } from "./context/PartsContext";
import Alerts from "./pages/Alerts";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Parts from "./pages/Parts";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import AppShell from "./shell/AppShell";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppShell />,
      path: "/",
      children: [
        {
          element: <Parts />,
          path: "parts",
        },
        {
          element: <Settings />,
          path: "settings",
        },
        {
          element: <Alerts />,
          path: "alerts",
        },
        {
          element: <Register />,
          path: "register",
        },
        {
          element: <Login />,
          path: "login",
        },
        {
          element: <Logout />,
          path: "logout",
        },
      ],
    },
  ]);

  const [partsContext, setPartsContext] = useState([])

  return (
    <>
      <PartsContext.Provider value={{ partsContext, setPartsContext }}>
        <RouterProvider router={router} />
      </PartsContext.Provider>
    </>
  );
}

export default App;
