import "./App.css";
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

  return <RouterProvider router={router} />;
}

export default App;
